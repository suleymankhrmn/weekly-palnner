<script>
    import { onMount, afterUpdate  } from "svelte";
    import { enablePlay, intervalId,totalSeconds } from "../store/store";
    import { Button, Card, CardBody } from "sveltestrap";

    let initialSeconds = 25 * 60;
    

    $: minutes = Math.floor((initialSeconds - $totalSeconds) / 60);
    $: seconds = convert($totalSeconds % 60);
        
    
    function convert(value){
        if(value===0)
            return "00";
        else if((60 - (value)).toString().length ===1)
            return "0" + (60 - value);
        else
            return 60 - value;
    } 
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
