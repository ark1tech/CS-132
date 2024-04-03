import { c as create_ssr_component, b as add_attribute, e as escape, d as subscribe, f as each, v as validate_component } from "../../chunks/ssr.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { icon } = $$props;
  let { href } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<div class="w-fit border border-[#24478c] shadow-[0_0_5px_0_#19346a] rounded-lg overflow-clip "><a class="text-white flex flex-row items-center py-2 px-[0.9rem] gap-[0.6rem] bg-[#091742] shadow-[inset_0_-8px_20px_#19346a] "${add_attribute("href", href, 0)}><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --> ${escape(label)}</a></div> <div class="border-[#19346a]"></div>`;
});
const reddit2 = "/_app/immutable/assets/Reddit2.DXCuTfPO.webp";
const antiwork = "/_app/immutable/assets/antiwork.CF_qkN3T.webp";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classesHeader = "" } = $$props;
  let { headerText = "" } = $$props;
  let { code = "" } = $$props;
  if ($$props.classesHeader === void 0 && $$bindings.classesHeader && classesHeader !== void 0)
    $$bindings.classesHeader(classesHeader);
  if ($$props.headerText === void 0 && $$bindings.headerText && headerText !== void 0)
    $$bindings.headerText(headerText);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  return `<header class="${"svhighlight-header rounded-t-lg flex justify-between items-center p-2 pl-4 " + escape(classesHeader, true)}"> <span class="code-block-language">${escape(headerText)}</span>  <button class="svhighlight-copy-btn px-2 py-1 rounded-lg transition-all duration-200 text-white/70 hover:text-white/95" aria-label="copy code button">${`<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"></path></svg>`}</button></header>`;
});
const CodeLine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showLineNumbers = false } = $$props;
  let { lineNumberTextClasses = "" } = $$props;
  let { lineNumber } = $$props;
  let { line = "" } = $$props;
  let { language = "" } = $$props;
  if ($$props.showLineNumbers === void 0 && $$bindings.showLineNumbers && showLineNumbers !== void 0)
    $$bindings.showLineNumbers(showLineNumbers);
  if ($$props.lineNumberTextClasses === void 0 && $$bindings.lineNumberTextClasses && lineNumberTextClasses !== void 0)
    $$bindings.lineNumberTextClasses(lineNumberTextClasses);
  if ($$props.lineNumber === void 0 && $$bindings.lineNumber && lineNumber !== void 0)
    $$bindings.lineNumber(lineNumber);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  return ` ${showLineNumbers ? `<div class="${"absolute select-none w-10 pr-2 font-mono text-right transition-all duration-300 ease-in " + escape(lineNumberTextClasses, true)}">${escape(lineNumber)}</div>` : ``}  <div class="${"transition-all " + escape(showLineNumbers ? "pl-12" : "pl-2", true) + " duration-200 ease-in"}"><pre class="whitespace-pre"><code class="${"language-" + escape(language, true)}"><!-- HTML_TAG_START -->${line}<!-- HTML_TAG_END --></code></pre></div>`;
});
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let applyHighlight;
  let applyBlur;
  let classesHeader;
  let classesCodeBlock;
  let $activeFocusBlockStore, $$unsubscribe_activeFocusBlockStore;
  let { language = "plaintext" } = $$props;
  let { code = "" } = $$props;
  let { highlightLines = "" } = $$props;
  let { focusType = "blur" } = $$props;
  let { showHeader = true } = $$props;
  let { headerText = language.toUpperCase() } = $$props;
  let { showLineNumbers = true } = $$props;
  let { focusBlocks = [] } = $$props;
  let { showFocusButtons = false } = $$props;
  let { activeFocusBlockStore = null } = $$props;
  $$unsubscribe_activeFocusBlockStore = subscribe(activeFocusBlockStore, (value) => $activeFocusBlockStore = value);
  let { background = "bg-gray-900" } = $$props;
  let { headerClasses = "bg-gray-800 text-white/80 text-xs font-bold" } = $$props;
  let { focusButtonClasses = "flex-grow px-2 py-1 rounded-lg border-2 text-sm font-bold transition-all border-gray-900 text-gray-900 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500 hover:text-white" } = $$props;
  let { codeTextClasses = "text-sm text-white" } = $$props;
  let { lineNumberTextClasses = "text-white/90" } = $$props;
  let { rounded = "rounded-lg" } = $$props;
  let { dimensions = "w-full h-fit" } = $$props;
  let { highlightColor = "bg-gray-200/10" } = $$props;
  let uniqueID = Math.random().toString(16).slice(2);
  let highlightedLinesList = [];
  let blur = focusType === "blur";
  let lines = [];
  let updatedFocusBlocks;
  const scrollToLine = (line) => {
  };
  const handleFocusBlock = (block) => {
    highlightedLinesList = [];
    if (block.scrollLine != void 0 && block.scrollLine >= 0 && block.scrollLine < lines.length)
      scrollToLine(block.scrollLine);
    highlightedLinesList = block.highlightLines;
  };
  const arrayRange = (start, stop) => Array.from({ length: stop - start }, (value, index) => start + index);
  const stringToLinesArray = (l) => {
    let linesArray = [];
    const splitHighlights = l.replace(/\s/g, "").split(",");
    splitHighlights.forEach((range) => {
      const splitRange = range.split("-");
      if (splitRange.length === 2) {
        linesArray = [
          ...linesArray,
          ...arrayRange(parseInt(splitRange[0]), parseInt(splitRange[1]) + 1)
        ];
      } else {
        linesArray = [...linesArray, parseInt(splitRange[0])];
      }
    });
    return linesArray.filter((v) => !Number.isNaN(v));
  };
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.highlightLines === void 0 && $$bindings.highlightLines && highlightLines !== void 0)
    $$bindings.highlightLines(highlightLines);
  if ($$props.focusType === void 0 && $$bindings.focusType && focusType !== void 0)
    $$bindings.focusType(focusType);
  if ($$props.showHeader === void 0 && $$bindings.showHeader && showHeader !== void 0)
    $$bindings.showHeader(showHeader);
  if ($$props.headerText === void 0 && $$bindings.headerText && headerText !== void 0)
    $$bindings.headerText(headerText);
  if ($$props.showLineNumbers === void 0 && $$bindings.showLineNumbers && showLineNumbers !== void 0)
    $$bindings.showLineNumbers(showLineNumbers);
  if ($$props.focusBlocks === void 0 && $$bindings.focusBlocks && focusBlocks !== void 0)
    $$bindings.focusBlocks(focusBlocks);
  if ($$props.showFocusButtons === void 0 && $$bindings.showFocusButtons && showFocusButtons !== void 0)
    $$bindings.showFocusButtons(showFocusButtons);
  if ($$props.activeFocusBlockStore === void 0 && $$bindings.activeFocusBlockStore && activeFocusBlockStore !== void 0)
    $$bindings.activeFocusBlockStore(activeFocusBlockStore);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.headerClasses === void 0 && $$bindings.headerClasses && headerClasses !== void 0)
    $$bindings.headerClasses(headerClasses);
  if ($$props.focusButtonClasses === void 0 && $$bindings.focusButtonClasses && focusButtonClasses !== void 0)
    $$bindings.focusButtonClasses(focusButtonClasses);
  if ($$props.codeTextClasses === void 0 && $$bindings.codeTextClasses && codeTextClasses !== void 0)
    $$bindings.codeTextClasses(codeTextClasses);
  if ($$props.lineNumberTextClasses === void 0 && $$bindings.lineNumberTextClasses && lineNumberTextClasses !== void 0)
    $$bindings.lineNumberTextClasses(lineNumberTextClasses);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.dimensions === void 0 && $$bindings.dimensions && dimensions !== void 0)
    $$bindings.dimensions(dimensions);
  if ($$props.highlightColor === void 0 && $$bindings.highlightColor && highlightColor !== void 0)
    $$bindings.highlightColor(highlightColor);
  {
    {
      updatedFocusBlocks = focusBlocks.map((block) => ({
        ...block,
        highlightLines: stringToLinesArray(block.lines)
      }));
    }
  }
  {
    if (highlightLines) {
      highlightedLinesList = [];
      highlightedLinesList = stringToLinesArray(highlightLines);
    }
  }
  applyHighlight = (line) => {
    return focusType === "highlight" && highlightedLinesList.indexOf(line) !== -1;
  };
  {
    if (activeFocusBlockStore && focusBlocks.length > 0 && $activeFocusBlockStore >= 0 && $activeFocusBlockStore < focusBlocks.length) {
      handleFocusBlock(updatedFocusBlocks[$activeFocusBlockStore]);
    }
  }
  applyBlur = (line) => {
    return focusType === "blur" && blur && highlightedLinesList.length > 0 && highlightedLinesList.indexOf(line) === -1;
  };
  classesHeader = `${headerClasses} ${headerText}`;
  classesCodeBlock = `${background} ${codeTextClasses} ${rounded}`;
  $$unsubscribe_activeFocusBlockStore();
  return `  <div class="${"svhiglight-" + escape(uniqueID, true) + " flex flex-col " + escape(dimensions, true)}">${showFocusButtons && updatedFocusBlocks.length > 0 ? `<div class="svhiglight-focus-buttons flex justify-start flex-wrap gap-x-4 gap-y-2">${each(updatedFocusBlocks, (block, i) => {
    return `<button${add_attribute("class", focusButtonClasses, 0)}>${escape(block.text ?? `Focus ${i}`)} </button>`;
  })}</div>` : ``} ${language && code ? `<div class="${"svhiglight-" + escape(uniqueID, true) + "-block flex flex-col overflow-auto mt-2 " + escape(classesCodeBlock, true)}"> ${showHeader ? `${validate_component(Header, "Header").$$render($$result, { classesHeader, headerText, code }, {}, {})}` : ``}  ${``}  ${lines.length > 0 ? `<div id="${"svhighlight-" + escape(uniqueID, true) + "-code"}" class="overflow-auto p-2"> ${each(lines, (line, i) => {
    return `<div id="${"svhighlight-" + escape(uniqueID, true) + "-line-" + escape(i, true)}" class="${"relative transition-all duration-300 ease-in " + escape(applyHighlight(i) ? highlightColor : "", true) + " " + escape(applyBlur(i) ? "blur-[0.095rem] opacity-60" : "", true)}">${validate_component(CodeLine, "CodeLine").$$render(
      $$result,
      {
        showLineNumbers,
        lineNumberTextClasses,
        lineNumber: i,
        line,
        language
      },
      {},
      {}
    )} </div>`;
  })}</div>` : ``}</div>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${$$result.head += `<!-- HEAD_svelte-gbdeqf_START -->${$$result.title = `<title>pocarí</title>`, ""}<meta name="description" content="CS 132 Pocari"><!-- HEAD_svelte-gbdeqf_END -->`, ""} <section class="h-auto pt-[3rem] flex flex-col items-center gap-[2rem]"><div class="w-full flex flex-col items-center gap-[1rem]" data-svelte-h="svelte-1czzjnr"><div class="w-fit"><a class="font-bold font-['JetBrains_Mono'] text-center text-gray-500 text-xs" href="https://dcs.upd.edu.ph/academics/undergraduate-program/" target="_blank">A CS 132 DATA SCIENCE PORTFOLIO:</a></div> <h1 class="bg-gradient-to-tr from-[#565656] to-[#ffffff] text-transparent bg-clip-text"><span class="font-[100] text-inherit">ANTI</span>WORK</h1> </div> <p class="font-light text-center" data-svelte-h="svelte-19pm6bg">Our project delves into the pervasive issue of labor exploitation in the Philippines through an
		innovative analysis of data sourced from the subreddit
		<span class="inline-flex flex-row items-baseline gap-[0.3rem] ml-[0.2rem]"><img${add_attribute("src", antiwork, 0)} alt="r/AntiworkPH Logo" class="h-[0.8rem] w-auto rounded-full relative bottom-0"> <a href="https://www.reddit.com/r/AntiworkPH/" class="inline_url" target="_blank">r/AntiworkPH</a> </span>. By harnessing machine learning techniques, we aim to uncover nuanced patterns and
		themes within this online community&#39;s discourse, shedding light on the multifaceted dimensions
		of anti-work sentiments and labor struggles.</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      icon: down_arrow,
      label: "Learn more",
      href: "#overview"
    },
    {},
    {}
  )} <img${add_attribute("src", reddit2, 0)} alt="reddit2" class="w-full h-auto gradient-mask-b-0"></section> <section id="overview" class="min-h-[100vh] pt-[3rem] w-full flex flex-col items-center gap-[2rem]" data-svelte-h="svelte-1glgbq4"><div class="w-fit"><h2 class="bg-gradient-to-tr from-[#565656] to-[#ffffff] text-transparent bg-clip-text"><span class="font-[100] text-inherit">OVER</span>VIEW</h2></div> <p class="font-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis leo vel. Nulla
		pharetra diam sit amet nisl suscipit. Diam sit amet nisl suscipit adipiscing bibendum est. Odio
		facilisis mauris sit amet massa. Vel facilisis volutpat est velit. Tristique nulla aliquet enim
		tortor at auctor. Morbi tristique senectus et netus et malesuada fames ac.</p> <p class="font-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis leo vel. Nulla
		pharetra diam sit amet nisl suscipit. Diam sit amet nisl suscipit adipiscing bibendum est. Odio
		facilisis mauris sit amet massa. Vel facilisis volutpat est velit. Tristique nulla aliquet enim
		tortor at auctor. Morbi tristique senectus et netus et malesuada fames ac.</p> <p class="font-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis leo vel. Nulla
		pharetra diam sit amet nisl suscipit. Diam sit amet nisl suscipit adipiscing bibendum est. Odio
		facilisis mauris sit amet massa. Vel facilisis volutpat est velit. Tristique nulla aliquet enim
		tortor at auctor. Morbi tristique senectus et netus et malesuada fames ac.</p></section> <section id="collection" class="min-h-[100vh] pt-[3rem] w-full flex flex-col items-center gap-[2rem]"><div class="w-fit" data-svelte-h="svelte-1tjgaav"><h2 class="bg-gradient-to-tr from-[#565656] to-[#ffffff] text-transparent bg-clip-text"><span class="font-[100] text-inherit">DATA</span>COLLECTION</h2></div> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "python",
      code,
      background: "bg-transparent",
      showHeader: true,
      showLineNumbers: true,
      codeTextClasses: "text-xs text-white",
      dimensions: "w-full",
      lineNumberTextClasses: "text-[#565656] text-xs"
    },
    {},
    {}
  )} </section>`;
});
export {
  Page as default
};
