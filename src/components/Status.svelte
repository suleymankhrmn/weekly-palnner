<script>
    import { enablePlay, intervalId, totalSeconds, status } from "../store/store";
    import {Status, InitialSeconds} from "../utils/enums";
    import { Row } from "sveltestrap";
    // let enablePlay = true;
    function playPauseClick() {
        enablePlay.update((value) => !value);
        if (!$enablePlay) clearInterval($intervalId);
        else {
            const interval = setInterval(() => {
                totalSeconds.update((value) => value + 1);
            }, 1000);
            intervalId.set(interval);
        }
    }
    function stopClick() {
        enablePlay.update((value) => !value);
        if (!$enablePlay) clearInterval($intervalId);
        totalSeconds.set(0);
    }
</script>

<style>
    h3 {
        font-size: 3em;
        font-weight: bold;
        color: lightcoral;
    }
    button {
        background-color: unset;
        border: unset;
        font-size: 4em;
    }
</style>

<Row class="d-flex justify-content-center ">
    <h3>Status:</h3>
    <h3>{$status}</h3>
</Row>

<Row class="d-flex justify-content-center">
    {#if $enablePlay}
        <button on:click={playPauseClick}>
            <i class="fas fa-pause-circle" />
        </button>
    {:else}
        <button on:click={playPauseClick}>
            <i class="fas fa-play-circle" />
        </button>
    {/if}
    <button on:click={stopClick}> <i class="fas fa-stop-circle" /> </button>
</Row>
