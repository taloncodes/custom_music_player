<script>

</script>
<div class="transport">
    <div class="visualiser">

    </div>
    <div class="controls">
        <div class="playBtn"></div>


    </div>

</div>
<style>

    .transport{
        position: absolute;
        bottom: 0;
        right: 0;
        height: 25%;
        width: 80%;
        border-top: solid 2px #32FF40;
    }

    .visualiser{
        position: absolute;
        left: 0;
        width: 85%;
        height: 100%;


    }

    .controls{
        position: absolute;
        right: 0;
        height: 100%;
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .playBtn{
        width: 0;
        height: 0;
        border-bottom: 25px solid transparent;
        border-top: 25px solid transparent;
        border-left:50px solid #32FF40;

    }
    
</style>