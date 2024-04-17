<script>
    export let title;
    export let desc;
</script>

<div class = "gap-4 p-[2rem] flex flex-col border border-white backdrop-blur-lg rounded-lg shadow-[0px_10px_20px_-20px_#84848475] bg-[#ffffff75]">
    <p class ="w-full h-full font-[500] font-['JetBrains_Mono'] text-[#ff5e01] tracking-tight">{title}</p>
    <div class = "flex flex-col gap-2">
        {@html desc}
    </div>
</div>