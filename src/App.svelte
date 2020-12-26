<script>
import Status from "./components/Status.svelte";

import Timer from "./components/Timer.svelte";



</script>

<main>
	<h1>Weekly Planner</h1>
	<Status/>
	<Timer/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: orange;
		text-transform: uppercase;
		font-size: 4em;
		font-weight:bold;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>