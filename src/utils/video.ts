export class VideoOverlayManager {
  private overlayElement: HTMLDivElement;
  private videoElement: HTMLVideoElement;
  private closeButton: HTMLButtonElement;

  private onShow: () => void;
  private onClose: () => void;

  constructor (onShow: () => void, onClose: () => void) {
    this.onShow = onShow;
    this.onClose = onClose;

    this.overlayElement = document.getElementById('video-overlay') as HTMLDivElement;
    this.videoElement = this.overlayElement.querySelector('video') as HTMLVideoElement;
    this.closeButton = this.overlayElement.querySelector('.close-button') as HTMLButtonElement;

    this.close = this.close.bind(this);
    this.closeButton.addEventListener('click', this.close);
    this.overlayElement.addEventListener('click', (event) => {
      if (event.target === this.overlayElement) {
        this.close();
      }
    });
  }

  public show(videoSrc: string) {
    this.videoElement.src = videoSrc;

    this.overlayElement.classList.remove('opacity-0', 'pointer-events-none');
    this.overlayElement.classList.add('opacity-100', 'pointer-events-auto');

    this.videoElement.play();
    this.onShow();
  }

  public close() {

    this.videoElement.pause();
    // this.videoElement.src = '';

    this.overlayElement.classList.remove('opacity-100', 'pointer-events-auto');
    this.overlayElement.classList.add('opacity-0', 'pointer-events-none');

    this.onClose();
  }
}