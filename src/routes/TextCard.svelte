<script>
    export let title;
    export let desc;
</script>

<div class = "gap-4 border p-[2rem] flex flex-col lg:w-[80%] w-full backdrop-blur-lg rounded-lg shadow-[0px_10px_20px_-20px_#84848475] bg-[#ffffff75]">
    <p class ="w-full h-full font-[500] font-['JetBrains_Mono'] text-[#ff5e01]">{title}</p>
    <div class = "flex flex-col gap-2">
        {@html desc}
    </div>
</div>