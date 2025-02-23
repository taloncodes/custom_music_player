<script>
    import { lowPass, highPass, playing, audioContext } from './shared.svelte'; // Import filterNode from shared.svelte
    import { onMount } from 'svelte';
    

    let lowKnobValue = 5000; // Default knob value
    let highKnobValue = 0;
    let minFrequency = 100;
    let maxFrequency = 10000;

    // Map the knob value to the frequency range
    $: lowPass.frequency.value = minFrequency + (maxFrequency - minFrequency) * (lowKnobValue / 100);
    $: highPass.frequency.value = minFrequency + (maxFrequency - minFrequency) * (highKnobValue / 100);


</script>

<div class="mainDisplay">
    <div class="filters">
        <div class="filter">
            <div class="filter_notch_left"></div>
            <div class="filter_notch_right"></div>
            <div class="knobOuter">
                <input 
                    type="range" 
                    class="input-knob" 
                    min="0" 
                    max="100" 
                    step="1" 
                    bind:value={lowKnobValue}/>
            </div>
        </div>
        <div class="filter">
            <div class="filter_notch_left"></div>
            <div class="filter_notch_right"></div>
            <div class="knobOuter">
                <input 
                    type="range" 
                    class="input-knob" 
                    min="0" 
                    max="100" 
                    step="1" 
                    bind:value={highKnobValue}/>
            </div>
        </div>
    </div>
    <div class="icons">
        <div class="sc icon"></div>
        <div class="sptfy icon"></div>
        <div class="dl icon"></div>
    </div>
    <div class="turntableFlex">
        <div class="turntable">
            <div class="record {playing.value ? 'spinning' : ''}">
                <div class="sticker">
                    <div class="recordInner"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<style>

    .mainDisplay{
        position: absolute;
        top: 0;
        right: 0;
        height: 75%;
        width: 80%;
    }

    .turntableFlex{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .turntable{
        height: 80%;
        aspect-ratio: 1;
        border: solid;
        border: solid #32FF40 ;
        border-radius: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .filterValue{
        position: absolute;
        top: -7px;
        height: 15px;
        width: 3px;
        background-color: #32FF40;

    }

    .record{
        height: 90%;
        aspect-ratio: 1;
        border: solid;
        border: solid #32FF40;
        background-color: #242424;
        border-radius: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.5s ease-in-out;

    }

    .record.spinning {
    animation: spin 3s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

    .sticker{
        height: 30%;
        aspect-ratio: 1;
        border: solid;
        border: solid #32FF40 ;
        border-radius: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('/assets/vinyl_stickers/loviz_sticker.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .sticker.bae{
        background-image: url('/assets/vinyl_stickers/bae_sticker.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

    }

    .recordInner{
        height: 15%;
        aspect-ratio: 1;
        border: solid;
        border-radius: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #2B2B2B;

    }

    .filters{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 25%;
        gap: 69px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .filter{
    
        color: #32FF40;
        border: solid #32FF40 2px;
        height: 75px;
        aspect-ratio: 1;
        border-radius: 100px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .icons{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 25%;
        gap: 69px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .filter_notch_left{
        height: 2px;
        width: 7px;
        background: #32FF40;
        left: 0;
        position: absolute;
    }

    .filter_notch_right{
        height: 2px;
        width: 7px;
        background: #32FF40;
        right: 0;
        position: absolute;
    }

    .icon{
        color: #32FF40;
        border: solid #32FF40 2px;
        height: 75px;
        aspect-ratio: 1;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.3s ease;

    }

    .filter:hover, .filter:active {
        transform: scale(1.2);
    }

    .sc{
        background-image: url('/assets/icons/sc.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        

    }

    .dl{

        background-image: url('/assets/icons/dl.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

    }

    .sptfy{
        background-image: url('/assets/icons/sptfy.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

    }

    .filterInner{
        color: #32FF40;
        border: solid #32FF40 2px;
        height: 80%;
        aspect-ratio: 1;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

    }


    .filters > .hi,
    .filters > .lo {
    margin-left: 100px;
    }

    .icons > .sc,
    .icons > .dl {
    margin-right: 100px;
    }

    .icon:hover {
        transform: scale(1.2);
    }

    .knobOuter{
        width: fit-content;
        height: fit-content;
        border: solid #32FF40 2px;
        border-radius: 100px;
        text-align: center;
    }

    .input-knob:focus {
    outline: none;

}

    .input-knob{
        cursor: pointer;
    }

    .knobOuter:active {
    border: 2px solid red;
}

@media (max-width: 874px) {
    .mainDisplay{
        width: 100%;
        height: 50%;
        top: 15%;
    }

    .icons{display: none;}

    .filters{

        flex-direction: row;
        top: 80%;
        width: 100%;
        height: 20%;
        gap: 35%;

    }


    .turntableFlex{
        height: 80%;
    }

    .turntable{
        height: 95%;
    }

    .filter{

        transform: scale(0.8);
    }

    .filter:hover, .filter:active{

        transform: scale(1);
    }
}






    
</style>