import * as THREE from 'three';
import gsap from 'gsap';
import { get } from 'svelte/store';
import { config, assets, getPageId } from '../config';
import { playAudio } from '../utils/audios';
import { VideoOverlayManager } from './VideoOverlayManager';
import { currentPage } from '../store';


export class IconManager {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private container: HTMLDivElement;
  private renderer: THREE.WebGLRenderer;
  private videoOverlayManager: VideoOverlayManager;
  private group: THREE.Group;
  private videoIcon?: THREE.Mesh;
  private audioIcon?: THREE.Mesh;
  private photoIcon?: THREE.Mesh;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private isMobile: boolean;
  private isLayoutVertical: boolean = false;
  private pageId: string = '';

  private photoContainer: HTMLDivElement;
  private photos: HTMLDivElement[] = [];


  private boundHandleClick: (event: MouseEvent) => void;
  private maxZIndex: number = 11;

  constructor (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    container: HTMLDivElement,
    renderer: THREE.WebGLRenderer,
    videoOverlayManager: VideoOverlayManager
  ) {
    this.scene = scene;
    this.camera = camera;
    this.container = container;
    this.renderer = renderer;
    this.videoOverlayManager = videoOverlayManager;
    this.isMobile = this.container.clientWidth < 448;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    currentPage.subscribe((page) => {
      this.update(page);
    });

    this.photoContainer = document.getElementById('photo-overlay-container') as HTMLDivElement;
    if (!this.photoContainer) {
      console.error('The #photo-overlay-container element was not found in the DOM.');
    }

    this.boundHandleClick = this.handleClick.bind(this);
    renderer.domElement.addEventListener('click', this.boundHandleClick, false);

  }

  public init(textureLoader: THREE.TextureLoader) {
    const iconSize = 0.3;
    const iconGeometry = new THREE.PlaneGeometry(iconSize, iconSize);
    this.isLayoutVertical = !(this.container.clientWidth > this.container.clientHeight * 1.2);

    const videoTexture = textureLoader.load(assets.icons.video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    this.videoIcon = new THREE.Mesh(iconGeometry, new THREE.MeshBasicMaterial({
      map: videoTexture,
      transparent: true,
      opacity: 0,
    }));
    this.group.add(this.videoIcon);

    const audioTexture = textureLoader.load(assets.icons.audio);
    audioTexture.colorSpace = THREE.SRGBColorSpace;
    this.audioIcon = new THREE.Mesh(iconGeometry.clone(), new THREE.MeshBasicMaterial({
      map: audioTexture,
      transparent: true,
      opacity: 0,
    }));
    this.group.add(this.audioIcon);

    const photoTexture = textureLoader.load(assets.icons.photo);
    photoTexture.colorSpace = THREE.SRGBColorSpace;
    this.photoIcon = new THREE.Mesh(iconGeometry.clone(), new THREE.MeshBasicMaterial({
      map: photoTexture,
      transparent: true,
      opacity: 0,
    }));
    this.group.add(this.photoIcon);

    this.updatePosition();
  }

  private prevMediaState: { video: boolean; audio: boolean; photo: boolean } = {
    video: false,
    audio: false,
    photo: false,
  };

  public update(currentPage: number) {
    if (!this.videoIcon || !this.audioIcon || !this.photoIcon) return;

    this.clearAllPhotos();

    this.pageId = getPageId(currentPage);

    const currMedia = {
      video: !!assets.media[currentPage]?.video,
      audio: !!assets.media[currentPage]?.audio,
      photo: !!assets.media[currentPage]?.photo,
    };

    const setAnim = (icon: THREE.Mesh, prev: boolean, curr: boolean, delay: number) => {
      if (!prev && curr) {
        gsap.fromTo(
          icon.position,
          { x: icon.position.x + 0.3 },
          {
            x: icon.position.x,
            duration: 0.6,
            delay,
            ease: "power2.out",
          }
        );
        gsap.to(icon.material, {
          opacity: 1,
          duration: 0.3,
          delay,
          ease: "power2.out",
        });
      } else if (prev && !curr) {
        gsap.to(icon.position, {
          x: icon.position.x + 0.3,
          duration: 0.3,
          delay,
          ease: "power2.in",
          onComplete: () => {
            icon.position.x -= 0.3;
          },
        });
        gsap.to(icon.material, {
          opacity: 0,
          duration: 0.3,
          delay,
          ease: "power2.in",
        });
      }
    };

    setAnim(this.videoIcon, this.prevMediaState.video, currMedia.video, 0.1);
    setAnim(this.audioIcon, this.prevMediaState.audio, currMedia.audio, 0.2);
    setAnim(this.photoIcon, this.prevMediaState.photo, currMedia.photo, 0.3);

    this.prevMediaState = currMedia;
  }



  public onResize() {
    this.isMobile = this.container.clientWidth < 448;
    this.updatePosition();
  }

  public dispose() {
    this.renderer.domElement.removeEventListener('click', this.boundHandleClick, false);

    this.clearAllPhotos();

    this.videoIcon?.geometry.dispose();
    if (this.videoIcon?.material instanceof THREE.Material) this.videoIcon.material.dispose();
    this.audioIcon?.geometry.dispose();
    if (this.audioIcon?.material instanceof THREE.Material) this.audioIcon.material.dispose();
    this.photoIcon?.geometry.dispose();
    if (this.photoIcon?.material instanceof THREE.Material) this.photoIcon.material.dispose();
    this.scene.remove(this.group);
  }

  public clearAllPhotos() {
    this.photos.forEach(photoEl => photoEl.remove());
    this.photos = [];
  }

  private showPhoto(imagePath: string) {
    const img = new Image();
    img.onload = () => {
      const aspect = img.width / img.height;
      const photoEl = document.createElement('div');
      photoEl.className = 'draggable-photo';

      const containerWidth = this.container.clientWidth;
      const scaleFactor = containerWidth < 448 ? 0.3 : containerWidth < 1024 ? 0.2 : 0.1;
      const photoWidth = containerWidth * scaleFactor;
      photoEl.style.width = `${ photoWidth }px`;
      photoEl.style.height = `${ photoWidth / aspect }px`;
      photoEl.style.backgroundImage = `url(${ imagePath })`;

      photoEl.style.rotate = `${ (Math.random() - 0.5) * 60 }deg`;

      const maxX = this.container.clientWidth - photoWidth;
      const maxY = this.container.clientHeight - (photoWidth / aspect);
      photoEl.style.left = `${ Math.random() * maxX }px`;
      photoEl.style.top = `${ Math.random() * maxY }px`;
      photoEl.style.zIndex = (this.maxZIndex++).toString();

      this.photoContainer.appendChild(photoEl);

      this.photos.push(photoEl);

      this.makeElementDraggable(photoEl);
    };
    img.src = imagePath;
  }

  private makeElementDraggable(el: HTMLDivElement) {
    let offsetX: number, offsetY: number;
    let isDragging = false;

    el.style.transition = "transform 0.3s ease";

    const dragStart = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      el.style.zIndex = (this.maxZIndex++).toString();

      el.style.transform = "scale(1.25)";

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      offsetX = clientX - el.offsetLeft;
      offsetY = clientY - el.offsetTop;

      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd, { once: true });

      document.addEventListener('touchmove', dragMove, { passive: false });
      document.addEventListener('touchend', dragEnd, { once: true });
    };

    const dragMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      if ('touches' in e) {
        e.preventDefault();
      }

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      let newX = clientX - offsetX;
      let newY = clientY - offsetY;

      const containerRect = this.photoContainer.getBoundingClientRect();

      newX = Math.max(-el.clientWidth, Math.min(newX, containerRect.width));
      newY = Math.max(-el.clientHeight, Math.min(newY, containerRect.height));

      el.style.left = `${ newX }px`;
      el.style.top = `${ newY }px`;
    };

    const dragEnd = () => {
      isDragging = false;
      el.style.transform = "scale(1)";

      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('touchmove', dragMove);
    };

    el.addEventListener('mousedown', dragStart);
    el.addEventListener('touchstart', dragStart);
  }

  private updatePosition() {
    if (!this.videoIcon || !this.audioIcon || !this.photoIcon) return;
    const margin = 0.25;
    const isLandscape = this.container.clientWidth > this.container.clientHeight * 1.2;
    if (isLandscape && !this.isLayoutVertical) {
      this.isLayoutVertical = true;
      this.group.position.set(-config.pageWidth - margin, 0.35, 0);
      this.group.scale.set(1, 1, 1);
      this.videoIcon.position.set(0, 0.8, 0);
      this.audioIcon.position.set(0, 0.4, 0);
      this.photoIcon.position.set(0, 0, 0);
    } else if (!isLandscape && this.isLayoutVertical) {
      this.isLayoutVertical = false;
      const yOffset = -config.pageHeight / 2 - margin;
      this.group.position.set(0, yOffset, 0);
      this.group.scale.set(this.isMobile ? 1.2 : 1, this.isMobile ? 1.2 : 1, 1);
      this.videoIcon.position.set(-0.4, 0, 0);
      this.audioIcon.position.set(0, 0, 0);
      this.photoIcon.position.set(0.4, 0, 0);
    }
  }

  private handleClick(event: MouseEvent) {
    if (!this.videoIcon || !this.audioIcon || !this.photoIcon) return;
    this.mouse.x = (event.clientX / this.container.clientWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / this.container.clientHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);

    const visibleIcons: THREE.Mesh[] = [];
    if ((this.videoIcon.material as THREE.MeshBasicMaterial).opacity > 0) visibleIcons.push(this.videoIcon);
    if ((this.audioIcon.material as THREE.MeshBasicMaterial).opacity > 0) visibleIcons.push(this.audioIcon);
    if ((this.photoIcon.material as THREE.MeshBasicMaterial).opacity > 0) visibleIcons.push(this.photoIcon);

    if (visibleIcons.length === 0) return;

    const intersects = this.raycaster.intersectObjects(visibleIcons);

    if (intersects.length > 0) {
      const clicked = intersects[0].object;
      if (clicked === this.videoIcon) {
        this.videoOverlayManager.show(assets.media[get(currentPage)]?.video || '');
      } else if (clicked === this.audioIcon) {
        playAudio(assets.media[get(currentPage)]?.audio || '');
      } else if (clicked === this.photoIcon) {
        const photoCount = assets.media[get(currentPage)]?.photo || 0;
        if (photoCount > 0) {
          const randomIndex = Math.floor(Math.random() * photoCount) + 1;
          const imagePath = `/imgs/${ this.pageId }/${ randomIndex }.png`;
          this.showPhoto(imagePath);
        }
      }
    }
  }
}