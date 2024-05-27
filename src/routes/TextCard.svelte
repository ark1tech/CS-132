<script>
	export let title;
	export let desc;
	import Katex from "./Katex.svelte";
</script>

<div
	class="w-full border border-white backdrop-blur-lg rounded-lg shadow-[0px_10px_20px_-20px_#84848475] bg-[#ffffff75]"
>
	<div class = "textcard w-full h-full gap-4 p-[2rem] flex flex-col">
		<p class="textcardtitle w-full h-full font-[500] font-['JetBrains_Mono'] tracking-tight">
			{title}
		</p>
		<div class="flex flex-col gap-[1rem]">
			{@html desc}
		</div>
	</div>
</div>
