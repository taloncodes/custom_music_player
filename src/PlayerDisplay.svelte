<script>

    import { playing } from './shared.svelte';

</script>
<div class="mainDisplay">
    <div class="filters">
        <div class="hi filter">
            <div class="filterInner">
                <p>HI</p>
            </div>
        </div>
        <div class="md filter">
            <div class="filterInner">
                <p>MD</p>
            </div>
        </div>
        <div class="lo filter">
            <div class="filterInner">
                <p>LO</p>
            </div>
        </div>
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
        background-image: url('./public/assets/vinyl_stickers/loviz_sticker.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .sticker.bae{
        background-image: url('./public/assets/vinyl_stickers/bae_sticker.jpg');
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
        display: flex;
        justify-content: center;
        align-items: center;
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


    
</style>