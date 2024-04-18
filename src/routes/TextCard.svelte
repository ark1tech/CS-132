<script>
	export let title;
	export let desc;
</script>

<div
	class="border border-white backdrop-blur-lg rounded-lg shadow-[0px_10px_20px_-20px_#84848475] bg-[#ffffff75]"
>
	<div class = "textcard w-full h-full gap-4 p-[2rem] flex flex-col">
		<p class="textcardtitle w-full h-full font-[500] text-[#a5a4ae] font-['JetBrains_Mono'] tracking-tight">
			{title}
		</p>
		<div class="flex flex-col gap-2">
			{@html desc}
		</div>
	</div>
</div>
