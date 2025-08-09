<script lang="ts">
  import Book from './components/Book.svelte';
</script>

<main class="w-screen bg-[#43AF5F] overflow-hidden h-screen">
  <div class="flex justify-center items-center mt-8 w-48 mx-auto gap-12">
    <img
      src="/imgs/flower.png"
      alt="flower"
    />
    <img
      src="/imgs/zoo.png"
      alt="zoo"
    />
  </div>

  <div class="flex justify-center items-center">
    <Book />
  </div>
</main>
