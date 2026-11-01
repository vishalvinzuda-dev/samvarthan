// Web Audio API Vedic Ambient Soundscape Generator
// Generates authentic meditative Indian tanpura drone & gentle harmonic resonance
class VedicSoundscape {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.gainNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  play() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) return;

    // Master gain with smooth fade in
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 3);
    this.gainNode.connect(this.ctx.destination);

    // Indian Classical Sa-Pa drone frequencies (Root D: ~146.83 Hz)
    // Frequencies: Fundamental Sa (146.83), Pa (220.0), Higher Sa (293.66), and sympathetic overtone (440.0)
    const freqs = [146.83, 220.0, 293.66, 440.0, 73.42];

    this.oscillators = freqs.map((freq, index) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      // Warm sound with soft modulation
      osc.type = index % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle slow frequency vibrato for human feel
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.15 + index * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
      lfo.connect(osc.frequency);
      lfo.start();

      // Relative volume for overtones
      const vol = index === 0 ? 0.35 : index === 4 ? 0.2 : 0.15;
      oscGain.gain.setValueAtTime(vol, this.ctx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc.start();

      return { osc, lfo };
    });

    this.isPlaying = true;
  }

  stop() {
    if (!this.isPlaying || !this.gainNode) return;

    // Smooth fade out
    this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);

    setTimeout(() => {
      this.oscillators.forEach(({ osc, lfo }) => {
        try {
          osc.stop();
          lfo.stop();
        } catch {
          // ignore
        }
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1500);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

export const soundscape = new VedicSoundscape();
