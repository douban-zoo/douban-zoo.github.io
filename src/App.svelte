<script lang="ts">
  import Book from './components/Book.svelte';
  import {asset} from './components/config';
</script>

<main class="w-screen bg-[#43AF5F] overflow-hidden h-screen">
  <div class="flex justify-center items-center mt-8 sm:w-1/3 sm:max-w-4xl w-[70%] max-w-80 mx-auto gap-12">
    <img
      src={asset('/imgs/flower.png')}
      class="w-1/2 h-auto"
      alt="flower"
    />
    <img
      src={asset('/imgs/zoo.png')}
      class="w-1/2 h-auto"
      alt="zoo"
    />
  </div>

  <div class="flex justify-center items-center">
    <Book />
  </div>
</main>
