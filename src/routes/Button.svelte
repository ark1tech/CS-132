<script>
	export let label;
	export let icon;
</script>

<div
	class="w-fit border border-[#24478c] shadow-[0_0_5px_0_#19346a] rounded-lg overflow-clip 
"
>
	<button
		class=" text-white flex flex-row items-center py-2 px-[0.9rem] gap-[0.6rem]
			bg-[#091742] shadow-[inset_0_-8px_20px_#19346a]
			"
	>
		{@html icon}
		{label}
	</button>
</div>
<div class="border-[#19346a]"></div>
