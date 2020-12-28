<script>
    import { onMount, afterUpdate  } from "svelte";
    import { enablePlay, intervalId,totalSeconds, status, breakCount } from "../store/store";
    import { Button, Card, CardBody } from "sveltestrap";
    import {Status, InitialSeconds} from "../utils/enums";

    let initialSeconds=0
    

    

    $: minutes = minutesConvert(InitialSeconds.WORKINITSEC - $totalSeconds);
    $: seconds = convert($totalSeconds % 60);
     
    afterUpdate(()=>{
        if($totalSeconds === InitialSeconds.WORKINITSEC && $status === Status.WORKING){
            clearInterval($intervalId);
            enablePlay.set(false);
            totalSeconds.set(0);
            
            if($breakCount < 3){
                breakCount.update(value=>value+1);
                initialSeconds=InitialSeconds.SMALLRESTINITSEC;
                status.set(Status.BREAK);
            }
            else{
                breakCount.set(0);
                initialSeconds=InitialSeconds.BIGRESTINITSEC;
                status.set(Status.BIGBREAK);
            }
            console.log("1");     
        }
        else if($totalSeconds === InitialSeconds.SMALLRESTINITSEC && $status === Status.BREAK){
            clearInterval($intervalId);
            enablePlay.set(false);
            totalSeconds.set(0);
            status.set(Status.WORKING);
            console.log("2");
        }
        else if($totalSeconds === InitialSeconds.BIGRESTINITSEC && $status === Status.BIGBREAK){
            clearInterval($intervalId);
            enablePlay.set(false);
            totalSeconds.set(0);
            status.set(Status.WORKING);
            console.log("3");
        }
    })
        
    
    
    function convert(value){
        if(value===0)
            return "00";
        else if((60 - (value)).toString().length ===1)
            return "0" + (60 - value);
        else
            return 60 - value;
    } 

    function minutesConvert(value){
        if(value < 60)
            return 0;
        else
            return Math.floor(value/60);
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
