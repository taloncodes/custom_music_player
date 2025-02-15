<script>
    import { currentIndex } from './shared.svelte';
    import { tracks } from './shared.svelte';
    import { audio } from './shared.svelte';
    import { onMount } from 'svelte';
    import { playing } from './shared.svelte';
    import { analyser } from './shared.svelte';
    import { audioContext, dataArray, bufferLength } from './shared.svelte';


    // Audio context and analyser setup
    
    let canvas;
    let canvasContext;

    onMount(() => {

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
        if (!playing.value) {
            audio.src = tracks[currentIndex.current].src; 
            audio.play();
            audioContext.resume().then(() => {
                playing.value = true;
                drawVisualizer(); // Start visualizer when audio plays
            });
        } else if (playing.value) {
            audio.pause();
            playing.value = false;
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
        if (playing.value) {
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
        <div class={playing.value ? 'stopBtn' : 'playBtn'} on:click={playCurrentTrack}></div>
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
        transition: transform 0.3s ease;
    }

    .stopBtn {
        border: 25px solid red;
        width: 0;
        height: 0;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .playBtn:hover, .stopBtn:hover {
        transform: scale(1.2);
    }
</style>
