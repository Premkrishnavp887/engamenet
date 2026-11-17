// Background Audio Manager for Jyothi & Mridul Engagement Invitation
// Plays the uploaded traditional celebration song (/audio/background-music.mp3)

type AudioStateListener = (isPlaying: boolean) => void;

class EngagementAudio {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private listeners: Set<AudioStateListener> = new Set();
  private audioSrc = '/audio/background-music.mp3';
  private hasInitializedLoad = false;

  private initAudio(): HTMLAudioElement | null {
    if (typeof window === 'undefined') return null;

    if (!this.audio) {
      this.audio = new Audio(this.audioSrc);
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = 0.75;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notifyListeners();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });
    }

    return this.audio;
  }

  public subscribe(listener: AudioStateListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => {
      try {
        listener(this.isPlaying);
      } catch {
        // Safe handler
      }
    });
  }

  public async play(): Promise<boolean> {
    const audio = this.initAudio();
    if (!audio) return false;

    try {
      if (audio.paused) {
        await audio.play();
      }
      this.isPlaying = true;
      this.notifyListeners();
      return true;
    } catch (err) {
      console.warn('Audio playback waiting for user gesture or permission:', err);
      return false;
    }
  }

  public pause(): void {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      this.notifyListeners();
    }
  }

  public stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
      this.notifyListeners();
    }
  }

  public toggle(): Promise<boolean> | void {
    if (this.isPlaying) {
      this.pause();
    } else {
      return this.play();
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  /**
   * Attempts to play immediately upon page load.
   * If blocked by the browser's strict autoplay policy (e.g. mobile Safari/Chrome),
   * listens for the first user interaction anywhere on the document (tap, click, scroll)
   * to immediately start playback without requiring a specific button click.
   */
  public startOnLoad(): void {
    if (typeof window === 'undefined') return;
    if (this.hasInitializedLoad) return;
    this.hasInitializedLoad = true;

    // 1. Direct attempt on page load
    this.play().then((success) => {
      if (success) return;

      // 2. Fallback: On first user touch/click/scroll anywhere
      const onUserInteraction = () => {
        if (!this.isPlaying) {
          this.play();
        }
        cleanup();
      };

      const cleanup = () => {
        window.removeEventListener('click', onUserInteraction);
        window.removeEventListener('touchstart', onUserInteraction);
        window.removeEventListener('pointerdown', onUserInteraction);
        window.removeEventListener('keydown', onUserInteraction);
      };

      window.addEventListener('click', onUserInteraction, { once: true, passive: true });
      window.addEventListener('touchstart', onUserInteraction, { once: true, passive: true });
      window.addEventListener('pointerdown', onUserInteraction, { once: true, passive: true });
      window.addEventListener('keydown', onUserInteraction, { once: true, passive: true });
    });
  }

  // Backwards compatibility for opening chime call
  public playTempleChime(): void {
    // Handled gracefully
  }
}

export const ambientAudio = new EngagementAudio();
