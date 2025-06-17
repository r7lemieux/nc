<script>
	import Header from '$components/layout/Header.svelte'
	import Footer from '$components/layout/Footer.svelte'
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
  <Footer/>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		box-sizing: border-box;
    margin: 0.1rem 1rem;
	}

</style>
