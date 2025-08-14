<div
  id="video-overlay"
  class="
  fixed inset-0 w-full h-full bg-black/20
  filter backdrop-blur-sm
  flex justify-center items-center
  z-50 opacity-0 pointer-events-none
  transition-opacity duration-300 ease-in-out
"
>
  <div class="relative w-11/12 max-w-3xl overflow-hidden">
    <button
      class="
      close-button
      absolute top-2 right-2 w-6 h-6 rounded-full bg-white text-[var(--textColor)]
      flex items-center justify-center
      text-xl font-bold cursor-pointer shadow-lg
      transition-transform duration-200 ease-in-out hover:scale-110
    "
    >
      &times;
    </button>

    <video
      class="w-[80%] lg:w-[60%] mt-2 h-auto block mx-auto rounded-xl"
      playsinline
      loop
      autoplay
    ></video>
  </div>

  <!-- for test -->
  <!-- <video
    class="w-[60%] mt-2 h-[120px] block mx-auto rounded-xl z-50"
    playsinline
    muted
    loop
    autoplay
    src={asset('/videos/jojo-play.webm')}
  ></video> -->
</div>
