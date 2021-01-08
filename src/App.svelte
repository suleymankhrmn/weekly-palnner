<script>
	import Status from "./components/Status.svelte";

	import Timer from "./components/Timer.svelte";
	import { Col, Container, Row } from "sveltestrap";
</script>

<style>
	.main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: orange;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: bold;
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	
	@media screen and (min-width: 0px) and (max-width:900px) {
		  .side{ display: none !important;}  /* show it on smaller screen */
		  #phone-footer-area{
			display: block;
		}
	}
	@media screen and (min-width: 901px) {
		  .side{ display: block !important;}  /* show it on smaller screen */
		  #phone-footer-area{
			display: none;
		}
	}
	
</style>

<Container fluid class="h-100">
	<Row class="justify-content-center h-100">
		<div class="side col bg-success">sssssss</div>

		<Col xl="6">
			<h1>Weekly Planner</h1>
			<Status />
			<Timer />
		</Col>

		<div class="side col bg-success">ssssssss</div>
	</Row>
	<div id="phone-footer-area" class="row">ffffff</div>
</Container>
