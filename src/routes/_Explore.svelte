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
                Through manual tagging, we categorized the submissions into two topics: unfair contracts and job offerings and its complement. For ease, we refer to the former as <span class ="font-[500]">Unfair</span> and to the latter as <span class ="font-[500]">Non-unfair</span>. 
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
                To further the investigation, we used Latent Dirichlet Allocation (LDA) topic modelling that categorizes the submissions into n topics through Bayesian probability. To do that, we first tokenized the submissions to 1-gram tokens with at least length of 3 characters. Then, we used term frequency-inverse document frequency (TF-IDF) to vectorize (ie. turn them into meaningful numbers) the tokens. Using TF-IDF reveals the relevance of tokens via frequency which will be quite helpful in topic modeling. The code for this process is also included in the given Github repository above.
            </p>
            <p>
                After numerous attempts in using LDA, we settled for 5 topics as it returned very sensible, if not the most, tokens that can be categorized into topics with little to no intersection. It is then to note that LDA only gives a list of words, and it's up to us how we would interpret and name the topic.
            </p>
            <p>
                Here are the <span class="font-[500]"> 5 topics LDA has extracted </span> with their corresponding word cloud to visualize their most common words:
            </p>
                <div class="w-full flex flex-col gap-[1.5rem] items-center">
                    <img class="rounded-lg shadow-md w-3/4 h-auto" src="1.png" alt="" />   
                    <p>The first topic's word cloud contain words relating to termination of employment, such as resignation, clearance, and contract. We can also see that the term 'coe' is here which most likely stands for Certificate of Employment that is usually given to leaving employees. As such, the topic can be labeled as relating to the employee exit process.</p>
                </div>
                <div class="w-full flex flex-col gap-[1.5rem] items-center">
                    <img class="rounded-lg shadow-md w-3/4 h-auto" src="2.png" alt="" />   
                    <p>
                        Notice that we can assemble the words into more meaningful ones such as business process outsourcing (BPO) and minimum wage. Other keywords include culture, Christmas, party and people. This topic can be labeled to be about BPO Work and Culture.
                    </p>
                </div>
                <div class="w-full flex flex-col gap-[1.5rem] items-center">
                    <img class="rounded-lg shadow-md w-3/4 h-auto" src="3.png" alt="" />   
                    <p>
                        In this topic, the keywords seem to reflect important terms used in job applications like interview, offer, applied, experience. As such, the topic represents can be concluded as job application.
                    </p>
                </div>
                <div class="w-full flex flex-col gap-[1.5rem] items-center">
                    <img class="rounded-lg shadow-md w-3/4 h-auto" src="4.png" alt="" />   
                    <p>
                        For this one, the words boss and coworker, task, report, and performance are explored. Moreover, adjectives such as angry, good, wrong, bad were mentioned. It can be gleaned that this topic represents posts regarding workplace management.
                    </p>
                </div>
                <div class="w-full flex flex-col gap-[1.5rem] items-center">
                    <img class="rounded-lg shadow-md w-3/4 h-auto" src="5.png" alt="" />   
                    <p>
                        Main keywords for this topic are related to time-off from work and employee benefits. Coupled with positive indicators like happy, good, health, this appears to represent posts related to employee well-being. 
                    </p>
                </div>

            `}
	/>
	<div class="flex flex-col items-center my-[2rem] relative">
		<p class="text-center">Research Question #1</p>
		<h3 class="text-center my-[1rem]">
			What are the prevalent topics about labor struggles submitted on r/AntiworkPH?
		</h3>
	</div>
	<TextCard
		title="EXPLORATORY DATA ANALYSIS"
		desc={`
                <p>
                    With such a large dataset, a picture may be hidden and left unseen without proper visualization. To delve deeper into the problem, we performed further analysis by constructing graphs to visualize the data better.
                </p>
                <p id="r1">
                    For the first research question, two sets of plots* were prepared to identify the prevalence of topics in the subreddit of interest by examining the monthly and cumulative frequency of posts through time. 
                </p>
                
                <p><span class='font-[500]'>Manually-tagged Topics</span></p>
                <div class = 'flex flex-col gap-[1rem]'>
                    <iframe title=" " class="rounded-lg w-full" width="700" height="500" frameborder="0" scrolling="no" src="//plotly.com/~klienmaago/12.embed?autosize=true&link=false"></iframe>
                    <p data-footnote class='text-xs w-full text-center'><span class='font-[500]'>Figure 1.</span> Monthly frequency of Unfair and Non-Unfair.<p>
                </div>
                <div class = 'flex flex-col gap-[1rem]'>
                    <iframe title=" " class="rounded-lg w-full" width="700" height="500" frameborder="0" scrolling="no" src="//plotly.com/~klienmaago/10.embed?autosize=true&link=false"></iframe>
                    <p data-footnote class='text-xs w-full text-center'><span class='font-[500]'>Figure 2.</span> Cumulative frequency of Unfair and Non-Unfair.<p>
                </div>

                
                <p>
                    Posts labeled as Non-Unfair were consistently prevalent over posts labeled as seen in Figures 1 and 2. Both plots showed that the rate at which Unfair were posted was fairly consistent. On the other hand, the inverse topic spiked on Jun 2023 and Feb 2024, after a sharp increase starting from Dec 2023. 
                </p>
                <p>
                    Upon further research, there was a significant decrease in the Philippine employment rate <span class ='font-[500]'>from 96.9% in Dec 2023 to 95.5% in Jan 2024</span>, as reported by <a href="https://psa.gov.ph/statistics/labor-force-survey" target="_blank" class ="inline_a">PSA</a> this May 2024. Notably, the spike in June 2023 is incidental to the timing of recent college graduates entering the Philippine Job Market, which may be a possible cause for the spike. Consequently, there are dips occurring in the Monthly Frequency plot every March. This may be due to said college graduates focusing on their final requirements due to graduation being near.
                </p>
                <p class='mt-[2rem]'><span class='font-[500]'>LDA Topics</span></p>
                <div class = 'flex flex-col gap-[1rem]'>
                    <iframe title=" " class="rounded-lg w-full" width="700" height="500" frameborder="0" scrolling="no" src="//plotly.com/~klienmaago/22.embed?autosize=true&link=false"></iframe>
                    <p data-footnote class='text-xs w-full text-center'><span class='font-[500]'>Figure 3.</span> Monthly frequency of LDA Topics.<p>
                </div>
                <div class = 'flex flex-col gap-[1rem]'>
                    <iframe title=" " class="rounded-lg w-full" width="700" height="500" frameborder="0" scrolling="no" src="//plotly.com/~klienmaago/24.embed?autosize=true&link=false"></iframe>
                    <p data-footnote class='text-xs w-full text-center'><span class='font-[500]'>Figure 4.</span> Cumulative frequency of LDA Topics.<p>
                </div>
                <p>
                    Meanwhile, as seen in Figures 3 and 4, the LDA plots showed that the BPO Work & Culture topic was mostly consistent in terms of having the most number of posts, with the Monthly Frequency plot indicating a spike in posts in June 2023. 
                </p>
                <p>
                    This may suggest an event happening in the BPO industry during this time, as supplemented by the same <a href="https://psa.gov.ph/statistics/labor-force-survey" target="_blank" class ="inline_a">PSA report</a> that employment rate from May 2023 to July 2023 was noted with the aforementioned decrease. This could imply that several people were frustrated with the BPO work culture and/or faulty work management, as evidenced by the slight spike in the Workplace Management topic.
                </p>
                <p>
                    By December 2023, all topics had a sharp spike in their number of posts, with the Employee Exit Process topic taking the top spot. This peak may give insight as to why there was a spike in the Manual plot earlier, as supplemented by the decreased employment rate in the period mentioned in the previously referenced report.
                </p>
            `}
	/>
    <div class="flex flex-col items-center my-[2rem] relative">
		<h3 class="text-center my-[1rem]">
			Recalling our hypothesis...
		</h3>
		<div class="w-full flex lg:flex-row flex-col justify-between gap-6">
			<div class="w-full p-[2rem] pb-[0rem] flex flex-col gap-3">
				<p class="font-[500]">Null Hypothesis</p>
				<p class="text-left">
					The prevalent topics among the subreddit users centered around unfair contracts and job
					offerings in the Philippines.
				</p>
			</div>
			<div class="w-full p-[2rem] pb-[0rem] flex flex-col gap-3">
				<p class="font-[500]">Alternative Hypothesis</p>
				<p class="text-left">
					The prevalent topics among the subreddit users did not center around unfair contracts and
					job offerings in the Philippines.
				</p>
			</div>
		</div>
	</div>
	<TextCard
		title="HYPOTHESIS TESTING"
		desc={`
                <p>
                    To test our hypothesis for the first research question, we used the Chi-Square Goodness of Fit to test if the frequency distribution of the manually-tagged topics is significantly different from the expected.
                </p>
                <p>
                    The contingency table can be seen in Table 1 below. The observed values were calculated on Python by taking the number of submissions under Unfair, and subtracting that value from the total number of posts for the Non-Unfair column. The expected values were each set to half the total number of posts since our goal is simply to get the distribution of each category.
                </p>
                <div class="relative overflow-hidden shadow-md rounded-lg">
                    <table class="table-fixed w-full text-left">
                        <thead class=" bg-[#3e3e3e] text-[#e5e7eb]">
                            <tr>
                                <td class="py-3 border text-center  p-4"></td>
                                <td class="py-3 border text-center  p-4">Unfair</td>
                                <td class="py-3 border text-center  p-4">Non-Unfair</td>
                            </tr>
                        </thead>
                        <tbody class=" bg-[#FFFFFF] text-[#6b7280]" style="background-color: #FFFFFF; color: #6b7280;">
                            <tr class="py-5">
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-3214d5de-7fff-d99b-098b-13adba5dc6f1"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">Observed no. of Posts</span></span>
                                </td>
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-4679175d-7fff-325e-4806-382e54f7cefd"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">166</span></span>
                                </td>
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-af25a1de-7fff-4b9a-37c5-aaa4d852affa"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">1810</span></span>
                                </td>
                            </tr>
                            <tr class="py-5">
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-a2056e8c-7fff-e4cf-33ec-b5f3e28fd9fc"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">Expected no. of Posts</span></span>
                                </td>
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-4679175d-7fff-325e-4806-382e54f7cefd"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">988</span></span>
                                </td>
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-04136002-7fff-6069-ec72-6767dbc6719f"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">988</span></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p data-footnote class='text-xs w-full text-center'><span class='font-[500]'>Table 1.</span> Contingency table of manually-tagged topics on their frequency.<p>
                <p>
                    For a test of significance at α = 0.05 and df = 1, we get X<sup>2</sup> = 1367.7814 and p-value of 2.1070e-299. As such, since we have a p-value less than our significance level, we therefore <span class='font-[500]'>fail to reject the null hypothesis</span>, believing that the prevalent topic in the subreddit is not centered around unfair contracts and job offers.
                </p>
            `}
	/>
	<div class="flex flex-col items-center my-[2rem] relative">
		<p class="text-center">Research Question #2</p>
		<h3 class="text-center my-[1rem]">
			Which of these topics receive the most Reddit engagements?
		</h3>
	</div>
	<TextCard
		title="EXPLORATORY DATA ANALYSIS"
		desc={`
               <p>
                    Similar to how the first research question was tackled, we also performed further analysis by constructing graphs. This time, however, engagement was used as a metric over the frequency of posts to address the second research question. Engagement was calculated by summing the number of upvotes and comments, then multiplying them to the upvote:downvote ratio for standardization.
                </p>
                <p>
                    The two sets of plots prepared to examine the performance of posts by the number of engagements were measured in terms of monthly and cumulative values through time. As with the previous plots, the first set used data manually tagged on mentions of unfair job offerings and contracts while the second set makes use of the five topics identified by the LDA. 
                </p>

               
                <p><span class='font-[500]'>Manually-tagged Topics</span></p>
                <div class = 'flex flex-col gap-[1rem]'>
                    <iframe title=" " class="rounded-lg w-full" width="700" height="500" frameborder="0" scrolling="no" src="//plotly.com/~klienmaago/26.embed?autosize=true&link=false"></iframe>
                    <p data-footnote class='text-xs w-full text-center'><span class='font-[500]'>Figure 5.</span> Monthly engagement of Unfair and Non-Unfair.<p>
                </div>
                <div class = 'flex flex-col gap-[1rem]'>
                    <iframe title=" " class="rounded-lg w-full" width="700" height="500" frameborder="0" scrolling="no" src="//plotly.com/~klienmaago/28.embed?autosize=true&link=false"></iframe>
                    <p data-footnote class='text-xs w-full text-center'><span class='font-[500]'>Figure 6.</span> Cumulative engagement of Unfair and Non-Unfair.<p>
                </div>
                <p>
                    Looking at Figures 5 and 6, Posts tagged as not about Unfair Offerings consistently received more engagements, with significant spikes in June 2023 and Dec 2023 which line up with <a href="#r1" class ="inline_a">our analysis earlier</a>.
                </p>
                <p class='mt-[2rem]'><span class='font-[500]'>LDA Topics</span></p>
                <div class = 'flex flex-col gap-[1rem]'>
                    <iframe title=" " class="rounded-lg w-full" width="700" height="500" frameborder="0" scrolling="no" src="//plotly.com/~klienmaago/30.embed?autosize=true&link=false"></iframe>
                    <p data-footnote class='text-xs w-full text-center'><span class='font-[500]'>Figure 7.</span> Monthly engagement of LDA Topics.<p>
                </div>
                <div class = 'flex flex-col gap-[1rem]'>
                    <iframe title=" " class="rounded-lg w-full" width="700" height="500" frameborder="0" scrolling="no" src="//plotly.com/~klienmaago/32.embed?autosize=true&link=false"></iframe>
                    <p data-footnote class='text-xs w-full text-center'><span class='font-[500]'>Figure 8.</span> Cumulative engagement of LDA Topics.<p>
                </div>
                <p>
                    The topic <span class='font-[500]'>BPO Work & Culture had the most engagement with a significant spike in June 2023</span>, which coincides with the topic's amount of posts for the same month, as seen in Figure 7.
                </p>
                <p>
                    However, the topic's engagement started declining by Dec 2023, with the Employee Well-being topic taking its place. This may suggest that the sharp employment rate decline took a toll on employee well-being or, at the very least, is related to it.
                </p>
            `}
	/>
    <div class="flex flex-col items-center my-[2rem] relative">
		<h3 class="text-center my-[1rem]">
			Recalling our hypothesis...
		</h3>
		<div class="w-full flex lg:flex-row flex-col justify-between gap-6">
			<div class="w-full p-[2rem] pb-[0rem] flex flex-col gap-3">
				<p class="font-[500]">Null Hypothesis</p>
				<p class="text-left">
					The topic with the most engagements based on upvotes and comments is the same as the most
					prevalent topic.
				</p>
			</div>
			<div class="w-full p-[2rem] pb-[0rem] flex flex-col gap-3">
				<p class="font-[500]">Alternative Hypothesis</p>
				<p class="text-left">
					The topic with the most engagements based on upvotes and comments is different from the
					most prevalent topic.
				</p>
			</div>
		</div>
	</div>
	<TextCard
		title="HYPOTHESIS TESTING"
		desc={`
                <p>
                    Moving on to the testing of the hypothesis for the second research question, we used the same statistical tool. However, the topic of unfairness of job offers and contracts is now tested with the engagements of posts in the subreddit.
                </p>
                <p>
                    The contingency table is seen in Table 2. The observed values were calculated on Python by taking the summed engagement of submissions under Unfair, and subtracting that value from the total number of posts for the Non-Unfair. Again, the expected values were each set to half the total number of posts since our goal is simply to get the distribution of each category.
                </p>
                <div class="relative overflow-hidden shadow-md rounded-lg">
                    <table class="table-fixed w-full text-left">
                        <thead class=" bg-[#3e3e3e] text-[#e5e7eb]">
                            <tr>
                                <td class="py-3 border text-center  p-4"></td>
                                <td class="py-3 border text-center  p-4">Unfair</td>
                                <td class="py-3 border text-center  p-4">Non-Unfair</td>
                            </tr>
                        </thead>
                        <tbody class=" bg-[#FFFFFF] text-[#6b7280]" style="background-color: #FFFFFF; color: #6b7280;">
                            <tr class="py-5">
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-3214d5de-7fff-d99b-098b-13adba5dc6f1"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">Observed Engagements</span></span>
                                </td>
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-4679175d-7fff-325e-4806-382e54f7cefd"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">8620</span></span>
                                </td>
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-af25a1de-7fff-4b9a-37c5-aaa4d852affa"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">137769.83000000002</span></span>
                                </td>
                            </tr>
                            <tr class="py-5">
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-a2056e8c-7fff-e4cf-33ec-b5f3e28fd9fc"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">Expected Engagements</span></span>
                                </td>
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-4679175d-7fff-325e-4806-382e54f7cefd"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">73194.91500000001</span></span>
                                </td>
                                <td class="py-5 border text-center  p-4"><span id="docs-internal-guid-04136002-7fff-6069-ec72-6767dbc6719f"><span style="font-size: 11pt; font-family: &quot;Inter&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">73194.91500000001</span></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p data-footnote class='text-xs w-full text-center'><span class='font-[500]'>Table 2.</span> Contingency table of manually-tagged topics on their engagement.<p>
                <p>
                    For a test of significance at α = 0.05 and df = 1, we get X<sup>2</sup> = 1367.7814 and p-value of 2.1070e-299. As such, since we have a p-value less than our significance level, we therefore <span class='font-[500]'>fail to reject the null hypothesis</span>, believing that the prevalent topic in the subreddit is not centered around unfair contracts and job offers.
                </p>
            `}
	/>
</div>

<!-- <iframe title=" " class="rounded-lg" width="900" height="500" frameborder="0" scrolling="no" src="//plotly.com/~klienmaago/1.embed?autosize=true&link=false"></iframe> -->