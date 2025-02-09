<script>

</script>

<div class="trackSelect">
    <div class="previousBtn">

    </div>
    <div class="tracks">
        <div class="prevTrack inactive">
            track_id: 01 <br>
            LVM_Bae.wav

        </div>
        <div class="currentTrack active">
            track_id: 02 <br>
            LVM_Monster.wav

        </div>
        <div class="nextTrack inactive">
            track_id: 03 <br>
            LVM_xxxxx.wav

        </div>

    </div>
    <div class="nextBtn">

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

    .tracks{
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: #32FF40;
    }

    .inactive{
        opacity: 50%;
        font-size: 15px;
    }

    .active{
        font-size: 18px;
    }

    .previousBtn {
        width: 0;
        height: 0;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 50px solid #32FF40;
    }

    .nextBtn{
        width: 0;
        height: 0;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-top:50px solid #32FF40;
    }


</style>