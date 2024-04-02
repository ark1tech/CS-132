<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="min-h-screen flex flex-col">
	<div
		class="z-50 px-[7vw] py-[2vh] backdrop-blur-[50px] fixed left-0 w-full border-b-[0.5px] border-[#5664803d]"
	>
		<Header />
	</div>
	<main class="px-[7vw] py-[10vh] mt-[1.5rem]">
		<slot />
	</main>

	<footer></footer>
</div>

<style>
</style>
