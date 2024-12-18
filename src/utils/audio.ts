export class TimerAudio {
  private static instance: TimerAudio;
  private audioContext: AudioContext | null = null;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying = false;

  private constructor() {}

  static getInstance(): TimerAudio {
    if (!TimerAudio.instance) {
      TimerAudio.instance = new TimerAudio();
    }
    return TimerAudio.instance;
  }

  private async initializeAudioContext(): Promise<void> {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  async play(): Promise<void> {
    if (this.isPlaying) return; // Prevent multiple instances from playing

    this.isPlaying = true;
    await this.initializeAudioContext();

    if (!this.audioContext) {
      throw new Error('AudioContext not initialized');
    }

    // Create oscillator and gain node
    this.oscillator = this.audioContext.createOscillator();
    this.gainNode = this.audioContext.createGain();

    this.oscillator.type = 'sine';
    this.oscillator.frequency.setValueAtTime(880, this.audioContext.currentTime); // A5 note

    // Set gain to loop continuously
    this.gainNode.gain.setValueAtTime(0.5, this.audioContext.currentTime);

    // Connect nodes
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);

    this.oscillator.start(this.audioContext.currentTime);
  }

  stop(): void {
    this.isPlaying = false;

    if (this.oscillator) {
      try {
        this.oscillator.stop();
        this.oscillator.disconnect();
      } catch (error) {
        console.error('Failed to stop audio:', error);
      }
      this.oscillator = null;
    }

    if (this.gainNode) {
      this.gainNode.disconnect();
      this.gainNode = null;
    }
  }
}
