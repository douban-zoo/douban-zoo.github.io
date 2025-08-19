<script>
  import {currentPage} from '../store';
  import {fade} from 'svelte/transition';

  $: visible = $currentPage >= 0;
</script>

{#if visible}
  <div
    class="fixed bottom-1 px-2 md:px-5 w-full flex font-serif items-center justify-between text-white/50"
    transition:fade={{duration: 200}}
  >
    <div class="flex items-center text-sm gap-1 md:gap-2">
      <span class="text-black/30"> Douban Zoo </span>
      <a
        href="https://piggy.lol"
        target="_blank"
        rel="noopener noreferrer">by Yanxin</a
      >
    </div>

    <div class="text-xs text-center whitespace-pre-line hidden md:block max-w-md mb-[2px]">
      If you are a ( former ) Douban employee and would like your pet
      to be featured on the site, please reach out to <a
        href="mailto:anigiscur@gmail.com">Yanxin</a
      >.
    </div>
    <div  class="text-[0.65rem] text-center font-serif block md:hidden">
      豆发（2005）第 008 号
    </div>

    <div class="flex items-center text-sm gap-1 md:gap-2">
      <span class="text-black/30">Share to</span>
      <a
        href={`https://www.douban.com/share/service?href=${encodeURIComponent(window.location.href)}&name=${encodeURIComponent('Douban Zoo - A 3D interactive experience of Douban pets yearbook')}&image=${encodeURIComponent('https://douban-zoo.github.io/imgs/bg/cover.png')}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Douban
      </a>
    </div>
  </div>
{/if}
