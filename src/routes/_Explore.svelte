<script>
	import Button from './Button.svelte';
	import Button2 from './Button2.svelte';
	import TextCard from './TextCard.svelte';
	import Katex from './Katex.svelte';
	import '@carbon/charts-svelte/styles.css';

	const up_right_arrow = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>`;
</script>

<div class="flex flex-col w-full justify-between gap-[1.5rem] items-center">
	<p>
		Now that our data has been processed, the next step would be to solve the research questions
		posed at the start of the study. To do this, we would need to focus on how to define and
		identify posts on unfair contracts and job offerings as hypothesized.
	</p>
	<TextCard
		title="MANUAL TOPIC TAGGING"
		desc={`
            <p>
                Through manual tagging, we categorized the submissions into two topics: unfair contract and job offering and its complement. For ease, we refer to the former as <span class ="font-[500]">Unfair</span> and to the latter as <span class ="font-[500]">Non-unfair</span>. 
            </p>
            <p>
                Each of the posts were searched for keywords that indicated discussions on job offerings and contracts, and if they were unfair or not. For example, in labelling posts about job offers, we performed a simple search for the keywords “job” and “offer/offers/offering/offerings” and checked if both exist in the submission. 
            </p>
            <p>
                Meanwhile, the method for processing unfair contracts is slightly more stringent; submissions containing the keyword “contract/s” were filtered, and the process was repeated for the words “unfair” and “unjust”. The remaining posts, thus, are submissions that talk about unfair contracts. However, manual re-checking was done for posts that solely contained the keyword “contract/s” to confirm if context was negative. 
            </p>
            <p>
                The submissions are tagged under Unfair if they are either about unfair contracts or unfair job offerings.
            </p>
        `}
	/>
	<TextCard
		title="LDA TOPIC MODELING"
		desc={`
            <p>
                To further the investigation, we used Latent Dirichlet Allocation (LDA) topic modelling that categorizes the submissions into n topics through Bayesian probability. To do that, we first tokenized the submissions to 1-gram tokens with at least length of 3 characters. Then, we used term frequency-inverse document frequency (TF-IDF) to vectorize (ie. turn them into meaningful numbers) the tokens. Using TF-IDF reveals the relevance of tokens via frequency which will be quite helpful in topic modeling. 
            </p>
            <p>
                After numerous attempts in using LDA, we settled for 5 topics as it returned very sensible, if not the most, tokens that can be categorized into topics with little to no intersection. It is then to note that LDA only gives a list of words, and it's up to us how we would interpret and name the topic.
            </p>
            <p>
                Here are the <span class="font-[500]"> 5 topics LDA has extracted </span> with their corresponding word cloud for visualization:
            </p>
             <div class="flex flex-col w-full items-center justify-center gap-[2.5rem] my-[2.5rem]">
                <img class="rounded-lg shadow-md w-3/4 h-auto" src="/src/lib/images/1.png" alt="" />   
                <img class="rounded-lg shadow-md w-3/4 h-auto" src="/src/lib/images/2.png" alt="" />
                <img class="rounded-lg shadow-md w-3/4 h-auto" src="/src/lib/images/3.png" alt="" />
                <img class="rounded-lg shadow-md w-3/4 h-auto" src="/src/lib/images/4.png" alt="" />
                <img class="rounded-lg shadow-md w-3/4 h-auto" src="/src/lib/images/5.png" alt="" />
            </div>    
            `}
	/>
    <div class="flex flex-col items-center my-[2rem]">
        <p class="text-center">Research Question #1</p>
        <h3 class="text-center my-[1rem]">What are the prevalent topics about labor struggles submitted on r/AntiworkPH?</h3>
    </div>
</div>

<!-- <iframe title=" " class="rounded-lg" width="900" height="500" frameborder="0" scrolling="no" src="//plotly.com/~klienmaago/1.embed?autosize=true&link=false"></iframe> -->
