<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="w-full flex flex-col items-center">
	<div class="px-[10dvw] min-h-screen flex flex-col w-full max-w-[1500px] items-center">
		<Header />
		<main class="w-full">
			<slot />
		</main>
	</div>
</div>

<style>
</style>
