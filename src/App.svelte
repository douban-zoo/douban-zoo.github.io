<script lang="ts">
  import Book from './components/Book.svelte';
    import Footer from './components/Footer.svelte';
  import VideoOverlay from './components/VideoOverlay.svelte';
  import WikiHeader from './components/WikiHeader.svelte';
</script>

<main class="w-screen overflow-hidden h-screen text-[var(--textColor)]">
  <WikiHeader />
  <VideoOverlay />
  <div id="photo-overlay-container" />
  <Book />
  <Footer />
</main>
