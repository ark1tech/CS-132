<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="w-full flex flex-col items-center">
	<div class="px-[7vw] min-h-screen flex flex-col max-w-[1500px] items-center">
		<div
			class="z-50 px-[7vw] py-[2vh] backdrop-blur-[10px] fixed left-0 w-full border-b-[0.5px] border-[#5664803d]"
		>
			<Header />
		</div>
		<main class="mt-[5rem] max-w-[80vw]">
			<slot />
		</main>
		<footer></footer>
	</div>
</div>

<style>
</style>
