<script lang="ts">
  import {onMount, onDestroy} from 'svelte';
  import {currentPage} from '../store';
  import {wikis} from '../config';
  import {fade, fly} from 'svelte/transition';
  import Scroll from '../assets/scroll.svg?raw';
  import Close from '../assets/close.svg?raw';
  import gsap from 'gsap';

  let visible = true;
  let showModal = false;
  let lines: string[] = [];
  let ticker: gsap.core.Tween;
  let textEl: HTMLDivElement;

  $: wikiText = wikis[$currentPage]?.trim() || '';
  $: lines = wikiText ? wikiText.split('\n').map((l) => l.trim()) : [];

  $: if (wikiText && textEl) {
    gsap.killTweensOf(textEl);
    scroll();
  }

  async function scroll() {
    if (!textEl) return;
    gsap.killTweensOf(textEl);

    await gsap.delayedCall(0.02, () => {});

    const totalWidth = textEl.scrollWidth;
    const singleCopyWidth = totalWidth / 2;
    const viewportWidth = textEl.parentElement?.clientWidth || 0;

    if (singleCopyWidth <= viewportWidth) {
      gsap.set(textEl, {x: 0});
      return;
    }

    gsap.set(textEl, {x: 0});

    ticker = gsap.to(textEl, {
      x: -singleCopyWidth,
      duration: singleCopyWidth / 60,
      ease: 'linear',
      repeat: -1,
      force3D: true,
      roundProps: 'x',
    });
  }

  onMount(() => {
    document.addEventListener('click', handleClick);
    setTimeout(scroll, 50);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
  onDestroy(() => {
    if (ticker) ticker.kill();
  });

  function handleClick(event: MouseEvent) {
    const isTextInteraction = window.getSelection()?.toString();
    if (showModal && (event.target as HTMLElement).closest('#wiki-modal') && !isTextInteraction) {
      showModal = false;
    }
  }
</script>

{#if visible && wikiText}
  <div
    class="fixed top-0 left-0 w-full text-[var(--textColor)] bg-white/70 backdrop-blur-sm shadow-xs z-10 h-8 flex items-center"
  >
    <button
      class="pl-1 w-9 cursor-pointer"
      on:click={() => (showModal = true)}
    >
      {@html Scroll}
    </button>
    <div class="relative overflow-hidden flex-1 h-full">
      <div
        bind:this={textEl}
        class="absolute whitespace-nowrap text-sm lg:text-base will-change-transform top-0 left-12 h-full flex items-center"
      >
        {#each Array(2) as _}
          {#each lines as line}
            <span class="pl-3">•&nbsp;</span>
            {line}
          {/each}
        {/each}
      </div>
    </div>
    <button
      class="pr-1 w-8 cursor-pointer"
      on:click={() => (visible = false)}
    >
      {@html Close}
    </button>
  </div>
{/if}
{#if showModal}
  <div
    class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-lg"
    id="wiki-modal"
    transition:fade={{duration: 150}}
  >
    <div
      class="rounded-lg px-4 md:px-20 text-[var(--textColor)] text-center overflow-y-auto py-6 max-h-[90vh]"
      transition:fly={{y: 20, duration: 300}}
    >
      <div class="space-y-4 text-2xl lg:text-4xl leading-9 md:leading-14 font-sans italic">
        {#each lines as line}
          <p>{line}</p>
        {/each}
      </div>
    </div>
  </div>
{/if}
