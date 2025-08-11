
export function playAudio(url: string, volume: number = 1): void {
  const audio = new Audio(url);
  audio.volume = volume;
  audio.play().catch(error => {
    console.error('Error playing audio:', error);
  });
}
