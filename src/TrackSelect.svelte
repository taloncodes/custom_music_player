<script>

import { currentIndex, playing } from './shared.svelte';
import { tracks } from './shared.svelte';
import { audio } from './shared.svelte';

/* let tracks = [
    { 'id' : "track_id: 01", 'name' : 'LVM_Bae.wav', 'src' : './public/assets/audio/LVM_Bae.wav' },
    { 'id' : "track_id: 02", 'name' : 'LVM_Monster.wav', 'src' : './public/assets/audio/LVM_Bae.wav' },
    { 'id' : "track_id: 03", 'name' : 'LVM_xxxx.wav', 'src' : './public/assets/audio/LVM_Bae.wav' },
    { 'id' : "track_id: 04", 'name' : 'LVM_xxxx.wav', 'src' : './public/assets/audio/LVM_Bae.wav' },
    { 'id' : "track_id: 05", 'name' : 'LVM_xxxx.wav', 'src' : './public/assets/audio/LVM_Bae.wav' },

];
*/

//let currentIndex = $state(0);
let currentTrack = $derived(tracks[currentIndex.current]);
let prevTrack = $derived(tracks[(currentIndex.current - 1 + tracks.length) % tracks.length]);
let nextTrack = $derived(tracks[(currentIndex.current + 1) % tracks.length]);
//let audio = $derived(new Audio(currentTrack.src));


function next(){
    currentIndex.current += 1;

    if (currentIndex.current >= tracks.length) {
        currentIndex.current = 0;
    }

    if (playing.value){
        audio.src = tracks[currentIndex.current].src;
        audio.play();
    }
    //audio.src = tracks[currentIndex].src;

}

function prev(){

    currentIndex.current -= 1;
    if (currentIndex.current < 0){
        currentIndex.current = tracks.length - 1;
    }

    if (playing.value){
        audio.src = tracks[currentIndex.current].src;
        audio.play();
    }
    //audio.src = tracks[currentIndex].src;

}

</script>

<div class="trackSelect">
    <div class="previousBtn" on:click={prev}>

    </div>
    <div class="tracks">
        <div class="prevTrack inactive">
            {prevTrack.id} <br> {prevTrack.name}

        </div>
        <div class="currentTrack active">
            <!--track_id: 02 <br>
            LVM_Monster.wav-->
            {currentTrack.id} <br> {currentTrack.name}
        </div>
        <div class="nextTrack inactive">
            {nextTrack.id} <br> {nextTrack.name}

        </div>

    </div>
    <div class="nextBtn" on:click={next}>

    </div>
    

</div>
    

<style>
    .trackSelect{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 20%;
        border-right: solid 2px #32FF40;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    }

    @media (max-width: 874px) {
        .trackSelect{
            flex-direction: row;
            width: 100%;
            height: 15%;
            border: none;
        }
        .prevTrack{
            display: none;
            width: fit-content;
        }

        .currentTrack{
            width: fit-content;
        }
        
        .tracks{
            flex-direction: row !important;
            justify-content: space-around;
            width: fit-content;
            width: 50% !important;
            text-align: center;
            gap: 0;
            margin-left: 0 !important;
            
        }

        .nextTrack{
            display: none;
            
        }

        .previousBtn {
        
        border-top: 25px solid transparent !important;
        border-bottom: 25px solid transparent !important;
        border-right: 50px solid #32FF40 !important;
        
        }

        .nextBtn{
        border-top: 25px solid transparent !important;
        border-bottom: 25px solid transparent !important;
        border-left: 50px solid #32FF40 !important;
        }

    }

    .tracks{
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: #32FF40;
        width: 75%;
        text-align: left;
        margin-left: 10px;
    }

    .inactive{
        opacity: 50%;
        font-size: 14px;
    }

    .active{
        font-size: 16px;
    }

    .previousBtn {
        width: 0;
        height: 0;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 50px solid #32FF40;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .nextBtn{
        width: 0;
        height: 0;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-top:50px solid #32FF40;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .previousBtn:hover, .nextBtn:hover {
    transform: scale(1.2);
}


</style>