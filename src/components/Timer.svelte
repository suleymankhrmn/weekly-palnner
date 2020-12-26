<script>
    import { onMount } from "svelte";
    import { Button, Card, CardBody } from "sveltestrap";

    let time = new Date();
    let initialSeconds = 25 * 60;
    let totalSeconds = 0;

    $: minutes = Math.floor((initialSeconds - totalSeconds) / 60);
    $: seconds =
        (totalSeconds % 60).toString().length === 1
            ? "0" + (totalSeconds % 60).toString()
            : totalSeconds % 60;

    function convert(second) {}
    onMount(() => {
        const interval = setInterval(() => {
            totalSeconds += 1;
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap");
    @font-face {
        font-family: "digital";
        src: url("https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap");
    }
    .font {
        font-family: "Stalinist One", cursive;
        font-size: 4em;
        font-weight: bold;
        max-width: 300px;
        border-width: medium !important;
    }
</style>

<div class="font border border-warning rounded-pill mr-auto ml-auto">
    <span>{minutes}</span>
    <span>:</span>
    <span>{seconds}</span>
</div>
