<script lang="ts">
  import {onMount, onDestroy} from 'svelte';
  import {currentPage} from '../store';
  import {wikis} from '../config';
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
    setTimeout(scroll, 50);
  });

  onDestroy(() => {
    if (ticker) ticker.kill();
  });
</script>

{#if visible && wikiText}
  <div class="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-sm shadow-xs z-10 h-8 flex items-center">
    <div class="relative overflow-hidden flex-1 h-full">
      <div
        bind:this={textEl}
        class="absolute whitespace-nowrap text-sm lg:text-base will-change-transform text-[var(--textColor)] top-0 left-24 h-full flex items-center"
      >
        {#each Array(2) as _}
          {#each lines as line}
            <span class="pl-3">•&nbsp;</span>
            {line}
          {/each}
        {/each}
      </div>
    </div>
  </div>
{/if}

{#if showModal}
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
      <div class="text-lg font-semibold mb-4">Wiki</div>
      <pre class="whitespace-pre-wrap text-sm text-gray-700">{wikiText}</pre>
      <div class="mt-4 text-right">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          on:click={() => (showModal = false)}
        >
          close
        </button>
      </div>
    </div>
  </div>
{/if}
