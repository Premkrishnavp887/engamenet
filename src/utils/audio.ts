// Indian Traditional Auspicious Ambient Music Generator (Web Audio API)
// Provides a warm Tanpura drone and gentle temple chimes/flute resonance

class IndianAmbientAudio {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private intervals: NodeJS.Timeout[] = [];
  private audioEl: HTMLAudioElement | null = null;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  // Play warm Tanpura Drone (Sa - Pa - Sa' fundamental Indian harmonics: 136.1Hz Om frequency)
  private startTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;

    // Auspicious fundamental tonic (C# / ~136.1 Hz Om frequency)
    const fundamental = 136.1;
    const notes = [
      fundamental,          // Sa (Root)
      fundamental * 1.5,    // Pa (Fifth)
      fundamental * 2,      // Sa' (Upper Octave)
      fundamental * 1.25,   // Ga (Major Third)
    ];

    notes.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Low-pass warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      // Gentle pulsating amplitude modulation (Tanpura string strum rhythm)
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.25 + idx * 0.08, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      lfo.connect(lfoGain);

      gain.gain.setValueAtTime(0.04 / (idx + 1), this.ctx.currentTime);
      lfoGain.connect(gain.gain);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      lfo.start();
    });
  }

  // Soft Indian Temple chime / bell resonance
  public playTempleChime() {
    if (!this.ctx || !this.masterGain) return;
    try {
      const bellFreqs = [544, 1088, 1632, 2176];
      bellFreqs.forEach((freq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq + (Math.random() * 2 - 1), this.ctx.currentTime);

        const now = this.ctx.currentTime;
        const decay = 2.5 / (i * 0.5 + 1);
        gain.gain.setValueAtTime(0.06 / (i + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + decay);
      });
    } catch {
      // Ignore audio failures if suspended
    }
  }

  public async play(): Promise<boolean> {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return false;

      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      this.startTanpuraDrone();

      // Fade in master gain smoothly
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 3);

      // Random gentle temple chimes in the background every 8-15 seconds
      const chimeTimer = setInterval(() => {
        if (this.isPlaying) {
          this.playTempleChime();
        }
      }, 10000);
      this.intervals.push(chimeTimer);

      this.isPlaying = true;
      return true;
    } catch (e) {
      console.warn('Audio play error:', e);
      return false;
    }
  }

  public stop(): void {
    if (this.ctx && this.masterGain) {
      try {
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
        this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
        setTimeout(() => {
          this.ctx?.close();
          this.ctx = null;
          this.masterGain = null;
        }, 1300);
      } catch {
        // no-op
      }
    }
    this.intervals.forEach((timer) => clearInterval(timer));
    this.intervals = [];
    this.isPlaying = false;
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientAudio = new IndianAmbientAudio();
