<script>
    import PlayerDisplay from "./PlayerDisplay.svelte";
    import TrackSelect from "./TrackSelect.svelte";
    import Transport from "./Transport.svelte";



</script>
<div class=flex_container>

    <div class="player">
        <TrackSelect />
        <Transport />
        <PlayerDisplay />

    </div>

</div>

<style>
    .player{
        border: solid 3px #32FF40;
        height: 600px;
        width: 70%;
        min-width: 850px;
        border-radius: 15px;
        background-color: #2B2B2B;
        position: relative;
    }

    @media (max-width: 874px) {
        .player{
            min-width: 100%;
            border: none;
            height: calc(100vh - 77px);
        }

    }

    .flex_container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 165px);

    }

</style>