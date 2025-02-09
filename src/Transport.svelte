<script>
    import { currentIndex } from './shared.svelte';
    import { tracks } from './shared.svelte';
    import { audio } from './shared.svelte';
    import { onMount } from 'svelte';

    let playing = false;

    // Audio context and analyser setup
    let audioContext;
    let analyser;
    let canvas;
    let canvasContext;
    let dataArray;
    let bufferLength;

    onMount(() => {
        // Initialize AudioContext
        audioContext = new AudioContext();

        // Create AnalyserNode
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 1024; // Size of the FFT (Fast Fourier Transform)
        bufferLength = analyser.frequencyBinCount;

        // Set minimum and maximum decibels for less sensitivity
        analyser.minDecibels = -100;  // Make it less reactive to quieter frequencies
        analyser.maxDecibels = -20;  // Maximum decibel level

        // Array to store frequency data
        dataArray = new Uint8Array(bufferLength);

        // Set up the audio source
        let source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);

        // Set up the canvas context for visualizer
        canvasContext = canvas.getContext('2d');

        // Set canvas resolution to match device pixel ratio (for crispness)
        let ratio = window.devicePixelRatio || 1;
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.style.width = `${canvas.offsetWidth}px`;
        canvas.style.height = `${canvas.offsetHeight}px`;
    });

    function playCurrentTrack() {
        if (!playing) {
            audio.src = tracks[currentIndex.current].src; 
            audio.play();
            audioContext.resume().then(() => {
                playing = true;
                drawVisualizer(); // Start visualizer when audio plays
            });
        } else if (playing) {
            audio.pause();
            playing = false;
        }
    }

    function drawVisualizer() {
        // Get the frequency data
        analyser.getByteFrequencyData(dataArray);

        // Clear the canvas
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the visualizer bars
        let barWidth = (canvas.width / bufferLength) * 2.5;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            let barHeight = dataArray[i];

            // Set the color for the bars (green)
            canvasContext.fillStyle = '#32FF40';

            // Draw each bar at its correct position with the calculated height
            canvasContext.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);

            x += barWidth + 1;  // Add space between bars
        }

        // Continue updating the visualizer if the audio is playing
        if (playing) {
            requestAnimationFrame(drawVisualizer);
        }

        analyser.smoothingTimeConstant = 0.8;
    }
</script>

<div class="transport">
    <div class="visualiser_container">
        <canvas bind:this={canvas} class="visualiser"></canvas>
    </div>
    <div class="controls">
        <div class={playing ? 'stopBtn' : 'playBtn'} on:click={playCurrentTrack}></div>
    </div>
</div>

<style>
    .transport {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 25%;
        width: 80%;
        border-top: solid 2px #32FF40;
    }

    .visualiser_container {
        position: absolute;
        left: 0;
        width: 85%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .visualiser {
        width: 80%;
        height: 60%;
    }

    .controls {
        position: absolute;
        right: 0;
        height: 100%;
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .playBtn {
        border-bottom: 25px solid transparent;
        border-top: 25px solid transparent;
        border-left: 50px solid #32FF40;
        width: 0;
        height: 0;
        cursor: pointer;
    }

    .stopBtn {
        border: 25px solid red;
        width: 0;
        height: 0;
        cursor: pointer;
    }
</style>
