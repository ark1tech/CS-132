<script>
	import Button from './Button.svelte';
	import reddit from '$lib/images/Reddit.webp';
	import reddit2 from '$lib/images/Reddit2.webp';
	import antiwork from '$lib/images/antiwork.webp';

	import { CodeBlock } from 'svhighlight';
	import 'highlight.js/styles/github-dark.css';

	let code = `
import praw
import csv
import time
from datetime import datetime, timedelta

def main():
	reddit = praw.Reddit(
			user_agent = True, 
			client_id = "-", 
			client_secret = "-", 
			username = "-",
			password = "-"
		)
	
	# SCRAPE 
	subreddit = reddit.subreddit("AntiworkPH")

	count = 0 
	with open('reddit_submissions.csv', 'w', newline='') as file:
		writer = csv.writer(file)
		writer.writerow([
			"title", 
			"content", 
			"upvotes_count",
			"comments_count", 
			"upvote_ratio",
			"is_text",
			"flair",
			"url",
			"time",
			"id"
		])
		for submission in subreddit.stream.submissions():
			time.sleep(1.1)

			if submission.hidden:
				print(f"❌ Skipped (Hidden) ~ https://www.reddit.com/{submission.permalink}")
				continue
			if (not submission.is_self) and len(submission.selftext) <= 200:
				print(f"❌ Skipped (High-Context) ~ https://www.reddit.com/{submission.permalink}")
				continue
			if submission.link_flair_text == "Meme 🔥":
				print(f"❌ Skipped (Meme) ~ https://www.reddit.com/{submission.permalink}")
				continue
			if datetime.fromtimestamp(submission.created_utc) >= datetime.now() - timedelta(days=7):
				print(f"❌ Skipped (Date {datetime.fromtimestamp(submission.created_utc)}) ~ https://www.reddit.com/{submission.permalink}")
				continue

			print(f"[{count}] 🤖 Scraping ~ https://www.reddit.com/{submission.permalink}")
			writer.writerow([
				f"{submission.title}", 
				f"{submission.selftext}", 
				f"{submission.score}", 
				f"{submission.num_comments}", 
				f"{submission.upvote_ratio}", 
				f"{submission.is_self}",  
				f"{submission.link_flair_text}",
				f"https://www.reddit.com/{submission.permalink}",
				f"{datetime.fromtimestamp(submission.created_utc)}",
				f"{submission.id}"
			])

			count += 1
			if count == 3000: 
				break

if __name__ == "__main__":
	main()`;

	const down_arrow = `<svg
			xmlns="http://www.w3.org/2000/svg"
			width="19"
			height="19"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-down"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path
				d="M16 15l-4 4"
			/><path d="M8 15l4 4" />
		</svg>`;
</script>

<svelte:head>
	<title>pocarí</title>
	<meta name="description" content="CS 132 Pocari" />
</svelte:head>

<section class="h-auto pt-[3rem] flex flex-col items-center gap-[2rem]">
	<div class="w-full flex flex-col items-center gap-[1rem]">
		<div class="w-fit">
			<a
				class="font-bold font-['JetBrains_Mono'] text-center text-gray-500 text-xs"
				href="https://dcs.upd.edu.ph/academics/undergraduate-program/"
				target="_blank"
			>
				A CS 132 DATA SCIENCE PORTFOLIO:
			</a>
		</div>
		<h1 class="bg-gradient-to-tr from-[#565656] to-[#ffffff] text-transparent bg-clip-text">
			<span class="font-[100] text-inherit">ANTI</span>WORK
		</h1>
		<!-- <h1
			class="bg-gradient-to-tr from-[#172a4d] to-[#2f3ccb] brightness-200 drop-shadow-[0_0_7px_#19346a] text-transparent bg-clip-text"
		>
			<span class="font-[100] text-inherit">r/</span>AntiworkPH
		</h1> -->
	</div>
	<p class="font-light text-center">
		Our project delves into the pervasive issue of labor exploitation in the Philippines through an
		innovative analysis of data sourced from the subreddit
		<span class="inline-flex flex-row items-baseline gap-[0.3rem] ml-[0.2rem]">
			<img
				src={antiwork}
				alt="r/AntiworkPH Logo"
				class="h-[0.8rem] w-auto rounded-full relative bottom-0"
			/>
			<a href="https://www.reddit.com/r/AntiworkPH/" class="inline_url" target="_blank">
				r/AntiworkPH</a
			>
		</span>. By harnessing machine learning techniques, we aim to uncover nuanced patterns and
		themes within this online community's discourse, shedding light on the multifaceted dimensions
		of anti-work sentiments and labor struggles.
	</p>
	<Button icon={down_arrow} label={'Learn more'} href={'#overview'} />
	<img src={reddit2} alt="reddit2" class="w-full h-auto gradient-mask-b-0" />
</section>

<section id="overview" class="min-h-[100vh] pt-[3rem] w-full flex flex-col items-center gap-[2rem]">
	<div class="w-fit">
		<h2 class="bg-gradient-to-tr from-[#565656] to-[#ffffff] text-transparent bg-clip-text">
			<span class="font-[100] text-inherit">OVER</span>VIEW
		</h2>
	</div>
	<p class="font-light text-center">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis leo vel. Nulla
		pharetra diam sit amet nisl suscipit. Diam sit amet nisl suscipit adipiscing bibendum est. Odio
		facilisis mauris sit amet massa. Vel facilisis volutpat est velit. Tristique nulla aliquet enim
		tortor at auctor. Morbi tristique senectus et netus et malesuada fames ac.
	</p>
	<p class="font-light text-center">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis leo vel. Nulla
		pharetra diam sit amet nisl suscipit. Diam sit amet nisl suscipit adipiscing bibendum est. Odio
		facilisis mauris sit amet massa. Vel facilisis volutpat est velit. Tristique nulla aliquet enim
		tortor at auctor. Morbi tristique senectus et netus et malesuada fames ac.
	</p>
	<p class="font-light text-center">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis leo vel. Nulla
		pharetra diam sit amet nisl suscipit. Diam sit amet nisl suscipit adipiscing bibendum est. Odio
		facilisis mauris sit amet massa. Vel facilisis volutpat est velit. Tristique nulla aliquet enim
		tortor at auctor. Morbi tristique senectus et netus et malesuada fames ac.
	</p>
</section>

<section
	id="collection"
	class="min-h-[100vh] pt-[3rem] w-full flex flex-col items-center gap-[2rem]"
>
	<div class="w-fit">
		<h2 class="bg-gradient-to-tr from-[#565656] to-[#ffffff] text-transparent bg-clip-text">
			<span class="font-[100] text-inherit">DATA</span>COLLECTION
		</h2>
	</div>
	<CodeBlock
		language="python"
		{code}
		background="bg-transparent"
		showHeader={true}
		showLineNumbers={true}
		codeTextClasses="text-xs text-white"
		dimensions="w-full"
		lineNumberTextClasses="text-[#565656] text-xs"
	/>
</section>

<style>
</style>
