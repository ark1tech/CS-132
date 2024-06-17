<script>
	import TextCard from './TextCard.svelte';
	import Nutshell from '$lib/images/nutshell.png';
	import Grid from '$lib/images/grid_eme.svg';
</script>

<div class="w-full flex flex-col items-start gap-[2rem]">
	<div class="w-full flex xl:flex-row flex-col gap-3">
		<div
			class="w-full hover:bg-[#ffdcdc] duration-300 transition-all ease-in-out bg-gradient-to-tr from-[#ffb29df6] shadow-[-5px_5px_10px_0px_#dbd1d15d] flex flex-col items-center p-[0.1rem] rounded-lg"
		>
			<div
				class="text-left w-full flex flex-col gap-3 font-[400] h-full bg-[#ffffff97] duration-300 transition-all bg-gradient-to-tr from-[#ffede7] p-[2rem] rounded-md"
			>
				<p class="mb-[1rem] font-['Public_Sans'] font-[600] text-pretty">
					What are the prevalent topics about labor struggles submitted on r/AntiworkPH?
				</p>
				<div class="flex flex-col gap-[0.5rem]">
					<p class="font-[600] text-sm text-[#d77136]">MANUAL TOPIC LABELING</p>
					<div class="flex flex-row gap-[0.2rem]">
						<p class="font-[500] w-fit">•</p>
						<p class="w-full pl-[0.5rem]">
							The prevalent topic in the subreddit is not centered around unfair contracts and job
							offers. 
						</p>
					</div>
				</div>
				<div class="flex flex-row gap-[0.2rem]">
					<p class="font-[500] w-fit">•</p>
					<p class="w-full pl-[0.5rem]">
						Non-Unfair had the most posts consistently.
					</p>
				</div>
				<div class="flex flex-col gap-[0.5rem]">
					<p class="font-[600] text-sm text-[#d77136] mt-[0.5rem]">ML TOPIC MODELING</p>
					<div class="flex flex-row gap-[0.2rem]">
						<p class="font-[500] w-fit">•</p>
						<p class="w-full pl-[0.5rem]">BPO Work & Culture had the most posts until Nov 2023.</p>
					</div>
				</div>
				<div class="flex flex-row gap-[0.2rem]">
					<p class="font-[500] w-fit">•</p>
					<p class="w-full pl-[0.5rem]">
						Employee Exit Process took first place but has declined since we scraped our data.
					</p>
				</div>
			</div>
		</div>
		<div
			class="w-full hover:bg-[#ffdcdc] duration-300 transition-all ease-in-out bg-gradient-to-tr from-[#ffb29df6] shadow-[-5px_5px_10px_0px_#dbd1d15d] flex flex-col items-center p-[0.1rem] rounded-lg"
		>
			<div
				class="text-left w-full flex flex-col gap-3 font-[400] h-full bg-[#ffffff97] duration-300 transition-all bg-gradient-to-tr from-[#ffede7] p-[2rem] rounded-md"
			>
				<p class="mb-[1rem] font-['Public_Sans'] font-[600] text-pretty">
					Which of these topics receive the most Reddit engagements?
				</p>
				<div class="flex flex-col gap-[0.5rem]">
					<p class="font-[600] text-sm text-[#d77136]">MANUAL TOPIC LABELING</p>
					<div class="flex flex-row gap-[0.2rem]">
						<p class="font-[500] w-fit">•</p>
						<p class="w-full pl-[0.5rem]">
							The prevalent topic in the subreddit (i.e. Non-Unfair) did not receive the most engagements.
						</p>
					</div>
				</div>
				<div class="flex flex-row gap-[0.2rem]">
					<p class="font-[500] w-fit">•</p>
					<p class="w-full pl-[0.5rem]">
						Non-Unfair had the most engagement consistently.
					</p>
				</div>
				<div class="flex flex-col gap-[0.5rem]">
					<p class="font-[600] text-sm text-[#d77136] mt-[0.5rem]">ML TOPIC MODELING</p>
					<div class="flex flex-row gap-[0.2rem]">
						<p class="font-[500] w-fit">•</p>
						<p class="w-full pl-[0.5rem]">
							BPO Work & Culture also had the most engagement until Nov 2023.
						</p>
					</div>
				</div>
				<div class="flex flex-row gap-[0.2rem]">
					<p class="font-[500] w-fit">•</p>
					<p class="w-full pl-[0.5rem]">
						Employee Well-being took first place after, different from the topic with the most
						posts.
					</p>
				</div>
				<div class="flex flex-row gap-[0.2rem]">
					<p class="font-[500] w-fit">•</p>
					<p class="w-full pl-[0.5rem]">
						Topic with the most posts almost always has the most engagement, too.
					</p>
				</div>
			</div>
		</div>
	</div>
	<TextCard
		title={"Limitations/Recommendations"}
		desc={`
		 	<p>
				One limitation of the study was that a significant amount of collected posts contained other media like photos and videos with no text caption. While processing these submissions to translate the text inside these media was possible, we faced time constraints which led to only a small percentage being transcribed. In further, similar studies, we recommend that media-only submissions be transcribed so a more encompassing analysis would be achieved. Moreover, translating the data from Filipino to English to suit the ML models causes loss of meaning and context, so developing a model that is trained on Filipino language in investigating Philippine data would be highly beneficial. 
			</p>
			<p>
				Another limitation noted was that the subreddit of interest r/AntiworkPH, is fairly new, having started in 2022. During these times, the number of posts and the rate of posting were limited, leading to an implication that the current analysis is unrepresentative of users’ past grievances from before the start of the subreddit. Additionally, it is completely limited to the sentiments of the subreddit users despite many other Philippine subreddits existing on the platform dedicated to job-related topics. Broadening the scope of interest by including these related subreddits would be beneficial in providing a more well-rounded analysis, and would help solve the limitation of the study about the volume of posts in r/AntiworkPH in its early establishment.
			</p>
		`}
	
	/>
</div>
