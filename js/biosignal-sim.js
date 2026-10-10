/* Real-time Physiological Bio-Signal Simulator (ECG, PPG, EEG, EMG) */
class BioSignalSimulator {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.signalType = options.signalType || 'ECG'; // ECG, PPG, EEG, EMG
        this.bpm = options.bpm || 72;
        this.noiseLevel = options.noiseLevel || 0.05;
        this.speed = options.speed || 2;
        this.color = options.color || '#10b981';
        
        this.buffer = [];
        this.maxBufferLength = 500;
        this.phase = 0;
        this.isPaused = false;
        
        this.initCanvas();
        this.start();
        
        window.addEventListener('resize', () => this.initCanvas());
    }

    initCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width * (window.devicePixelRatio || 1);
        this.canvas.height = (rect.height || 200) * (window.devicePixelRatio || 1);
        this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
        this.displayWidth = rect.width;
        this.displayHeight = rect.height || 200;
        this.maxBufferLength = Math.floor(this.displayWidth / this.speed);
    }

    setSignalType(type) {
        this.signalType = type;
        if (type === 'ECG') this.color = '#10b981'; // Emerald
        else if (type === 'PPG') this.color = '#06b6d4'; // Cyan
        else if (type === 'EEG') this.color = '#a855f7'; // Violet
        else if (type === 'EMG') this.color = '#f59e0b'; // Amber
        this.buffer = [];
    }

    setBpm(bpm) {
        this.bpm = parseInt(bpm, 10);
    }

    setNoise(noise) {
        this.noiseLevel = parseFloat(noise);
    }

    // Generate mathematical model points for physiological signals
    generatePoint() {
        const t = this.phase;
        const period = (60 / this.bpm) * 50; // samples per beat at ~50Hz frame rate
        const cyclePos = (t % period) / period; // 0.0 to 1.0

        let val = 0;

        switch (this.signalType) {
            case 'ECG':
                // Classic P-Q-R-S-T wave model
                if (cyclePos > 0.1 && cyclePos < 0.18) {
                    // P wave
                    val = 0.15 * Math.sin(((cyclePos - 0.1) / 0.08) * Math.PI);
                } else if (cyclePos > 0.22 && cyclePos < 0.25) {
                    // Q wave (dip)
                    val = -0.15 * Math.sin(((cyclePos - 0.22) / 0.03) * Math.PI);
                } else if (cyclePos >= 0.25 && cyclePos < 0.31) {
                    // R peak (tall spike)
                    val = 1.2 * Math.sin(((cyclePos - 0.25) / 0.06) * Math.PI);
                } else if (cyclePos >= 0.31 && cyclePos < 0.35) {
                    // S wave (dip)
                    val = -0.35 * Math.sin(((cyclePos - 0.31) / 0.04) * Math.PI);
                } else if (cyclePos > 0.45 && cyclePos < 0.65) {
                    // T wave
                    val = 0.3 * Math.sin(((cyclePos - 0.45) / 0.2) * Math.PI);
                }
                break;

            case 'PPG':
                // Photoplethysmogram wave with systolic peak & dicrotic notch
                const ppgPos = cyclePos;
                if (ppgPos < 0.35) {
                    // Systolic peak
                    val = Math.sin((ppgPos / 0.35) * Math.PI);
                } else if (ppgPos >= 0.35 && ppgPos < 0.5) {
                    // Dicrotic notch
                    val = 0.4 + 0.15 * Math.sin(((ppgPos - 0.35) / 0.15) * Math.PI);
                } else {
                    // Diastolic decay
                    val = 0.4 * Math.exp(-(ppgPos - 0.5) * 4);
                }
                break;

            case 'EEG':
                // Brain Wave (Alpha ~10Hz + Beta ~20Hz + Delta rhythm blend)
                const alpha = Math.sin(t * 0.2) * 0.4;
                const beta = Math.sin(t * 0.6) * 0.2;
                const theta = Math.sin(t * 0.05) * 0.3;
                val = alpha + beta + theta;
                break;

            case 'EMG':
                // Electromyogram (High frequency muscle burst simulation)
                const burst = Math.sin(t * 0.02) > 0.3 ? 1.0 : 0.1;
                val = (Math.random() - 0.5) * 1.5 * burst;
                break;
        }

        // Add Gaussian-like noise
        const noise = (Math.random() - 0.5) * 2 * this.noiseLevel;
        val += noise;

        this.phase += 1;
        return val;
    }

    update() {
        if (this.isPaused) return;

        const val = this.generatePoint();
        this.buffer.push(val);

        if (this.buffer.length > this.maxBufferLength) {
            this.buffer.shift();
        }
    }

    draw() {
        const h = this.displayHeight;
        const w = this.displayWidth;
        const centerY = h / 2;

        this.ctx.clearRect(0, 0, w, h);

        // Draw grid
        this.ctx.strokeStyle = 'rgba(6, 182, 212, 0.06)';
        this.ctx.lineWidth = 1;
        const gridSize = 20;
        for (let x = 0; x < w; x += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, h);
            this.ctx.stroke();
        }
        for (let y = 0; y < h; y += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(w, y);
            this.ctx.stroke();
        }

        // Draw waveform
        if (this.buffer.length < 2) return;

        this.ctx.beginPath();
        this.ctx.lineWidth = 2.5;
        this.ctx.strokeStyle = this.color;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = this.color;

        const step = this.speed;
        const scaleY = h * 0.35;

        for (let i = 0; i < this.buffer.length; i++) {
            const x = i * step;
            const y = centerY - this.buffer[i] * scaleY;
            if (i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;

        // Draw leading scanner pulse head
        const lastX = (this.buffer.length - 1) * step;
        const lastY = centerY - this.buffer[this.buffer.length - 1] * scaleY;
        
        this.ctx.beginPath();
        this.ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.shadowBlur = 12;
        this.ctx.shadowColor = this.color;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
    }

    start() {
        const loop = () => {
            this.update();
            this.draw();
            requestAnimationFrame(loop);
        };
        loop();
    }
}

// Global reference for hero simulator
window.heroSim = null;
window.labSim = null;

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('biosignal-canvas')) {
        window.heroSim = new BioSignalSimulator('biosignal-canvas', {
            signalType: 'ECG',
            bpm: 75,
            speed: 2.2
        });
    }

    if (document.getElementById('lab-canvas')) {
        window.labSim = new BioSignalSimulator('lab-canvas', {
            signalType: 'ECG',
            bpm: 72,
            speed: 2.5
        });
    }
});
