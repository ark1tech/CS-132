<script>
	import TextCard from './TextCard.svelte';
	import Nutshell from '$lib/images/nutshell.png';
</script>

<div class="flex flex-col w-full justify-between gap-[1.5rem] items-center">
	<TextCard
		title="Latent Dirichlet Allocation"
		desc={`
            <p>
                Continuing its introduction early on, LDA was chosen for topic extraction due to its effectiveness in uncovering hidden topics within large textual datasets. It is well-suited for this problem as it probabilistically assigns words to topics, allowing for the discovery of distinct and coherent themes within the subreddit discussions. For an in-depth explanation, we recommend reading <a class = "inline_a" href="https://www.ibm.com/topics/latent-dirichlet-allocation" target="_blank">this</a>.
            </p>
			<p>
				So far, we've already seen the topics extracted by LDA. But how can we visualize how far or different each topics are among each other? Enter t-SNE.
			</p>
        `}
	/>
	<TextCard
		title="t-distributed Stochastic Neighbor Embedding (t-SNE)"
		desc={`
            <p>
                t-SNE is a nonlinear dimensionality reduction (or manifold learning) ML algorithm that is good at reducing high-dimensional data to a lower-dimensional space (as the algorithm suggests). This makes it easier to visualize and cluster complex relationships among topics! For an in-depth explanation, we recommend reading <a class = "inline_a" href="https://towardsdatascience.com/t-sne-clearly-explained-d84c537f53a" target="_blank">this</a>.
			</p>
			<p>
				Hence, the combination of LDA for topic extraction and t-SNE for visualization by clustering these topics provides a comprehensive understanding of the key issues discussed by Filipino workers on r/AntiworkPH.
            </p>
        `}
	/>

	<TextCard
		title="LDA and t-SNE Plot"
		desc={`
            <p>
                Using <a class = "inline_a" href="https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE" target="_blank">scikit-learn's t-SNE</a>, we then generate the plot shown in Figure 9. Each color represents a topic cluster, which are made up of points that each correspond to a post; the larger the radius of the point, the greater the engagement a post has accumulated. 
			</p>
			<div class="flex flex-col gap-[1rem]">
				<img class="rounded-lg shadow-lg w-full h-auto" src="nutshell.png" alt="" />
				<p data-footnote class="text-xs w-full text-center">
				<span class="font-[500]">Figure 9.</span> t-SNE Clustering of LDA topics in the subreddit r/AntiworkPH.
				</p>
			</div>	
			<p>
				The 3rd topic, identified as Job Application and the focus of our hypothesis, lagged as third in both the number of posts and engagements. The 2nd topic, identified as BPO Work & Culture, placed first for the total number of engagements, while the 5th topic, identified as Employee Well-being, placed first for the total number of posts. The 1st topic, identified as Employee Exit Process, placed last for both categories.
			</p>
        `}
	/>
</div>
