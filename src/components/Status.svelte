<script>
    import {enablePlay} from "../store/store"
    import {Row} from "sveltestrap";
    // let enablePlay = true;
    function buttonClick(){
        enablePlay.update(value => !value);

    }
</script>

<style>
    h3{
        font-size: 3em;
        font-weight: bold;
        color: lightcoral;
    }
    button{
        background-color: unset;
        border: unset;
        font-size: 4em;
    }
</style>

<Row class="d-flex justify-content-center ">
    <h3>Status:</h3>
    <h3>Working</h3>
</Row>

<Row class="d-flex justify-content-center">
    {#if $enablePlay}
    <button on:click={buttonClick}>
        <i class="fas fa-play-circle"></i>
    </button>
    {:else}
    <button on:click={buttonClick}>
        <i class="fas fa-pause-circle"></i>
    </button>
    {/if}
    <button>
        <i class="fas fa-stop-circle"></i>
    </button>
</Row>
