

export const currentIndex = $state({'current' : 0});

export const tracks = [
    { 'id' : "track_id: 01", 'name' : 'LVM_Bae.wav', 'src' : '/assets/audio/LVM_bae.wav?v=1.0' },
    { 'id' : "track_id: 02", 'name' : 'LVM_Monster.wav', 'src' : '/assets/audio/LVM_monster_remix.wav?v=1.0' },
    { 'id' : "track_id: 03", 'name' : 'LVM_Great_Time.wav', 'src' : '/assets/audio/LVM_great_time.wav?v=1.0' },
    { 'id' : "track_id: 04", 'name' : 'LVM_Pause.wav', 'src' : '/assets/audio/LVM_pause.wav?v=1.0' },
    { 'id' : "track_id: 05", 'name' : 'LVM_Close.wav', 'src' : '/assets/audio/LVM_close.wav?v=1.0' },
];

export let audio = $state(new Audio());
export const playing = $state({ value: false });

export let audioContext = new AudioContext();
export let analyser = audioContext.createAnalyser();

export let dataArray;
export let bufferLength;

// Create AnalyserNode
        
analyser.fftSize = 256; // Size of the FFT (Fast Fourier Transform)
bufferLength = analyser.frequencyBinCount;

// Set minimum and maximum decibels for less sensitivity
analyser.minDecibels = -100;  // Make it less reactive to quieter frequencies
analyser.maxDecibels = -20;  // Maximum decibel level

// Array to store frequency data
dataArray = new Uint8Array(bufferLength);

// Set up the audio source
let source = audioContext.createMediaElementSource(audio);

// Create the low-pass filter
export let lowPass = $state(audioContext.createBiquadFilter());
lowPass.type = 'lowpass';  // Set filter type to low-pass
lowPass.frequency.setValueAtTime(10000, audioContext.currentTime); // Set cutoff frequency (1000 Hz)
lowPass.Q.setValueAtTime(1, audioContext.currentTime); // Set quality factor

// Create the high-pass filter
export let highPass = $state(audioContext.createBiquadFilter());
highPass.type = 'highpass';  // Set filter type to low-pass
highPass.frequency.setValueAtTime(100, audioContext.currentTime); // Set cutoff frequency (1000 Hz)
highPass.Q.setValueAtTime(1, audioContext.currentTime); // Set quality factor

// Connect the filter to the audio context
source.connect(lowPass);
lowPass.connect(highPass);
highPass.connect(analyser);
analyser.connect(audioContext.destination);


