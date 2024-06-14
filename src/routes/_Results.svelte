<script>
	import TextCard from './TextCard.svelte';
	import Nutshell from '$lib/images/nutshell.png';
</script>

<div class="flex flex-col w-full justify-between gap-[1.5rem] items-center">
	<TextCard
		title="Topic Clustering"
		desc={`
            <p>
                As discussed in the last section,
            </p>
        `}
	/>
    <TextCard
		title="pyLDAvis"
		desc={`
            <p>
                As discussed in the last section,
            </p>
        `}
	/>
    <h3 class="text-center mt-[2rem]">In a nutshell...</h3>
	<div class="flex flex-col gap-[1rem]">
		<img class="rounded-lg shadow-lg w-full h-auto" src={Nutshell} alt="" />
		<p data-footnote class="text-xs w-full text-center">
			<span class="font-[500]">Figure 9.</span> t-SNE Clustering of LDA topics in the subreddit r/AntiworkPH.
		</p>
		<p></p>
	</div>
	<p>
		With the analysis and discussions done, we present the output plot of the LDA seen in Figure 9.
		Each color represents a topic cluster, which are made up of points that each correspond to a
		post; the larger the radius of the point, the greater the engagement a post has accumulated. The
		focus of our hypothesis, which is about posts on unfair job offers and contracts, is reflected
		in Topic 3 identified as Job Application, which lagged behind as third in both the number of
		posts and engagements among other topics.
	</p>
</div>