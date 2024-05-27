import { c as create_ssr_component, b as add_attribute, e as escape, f as compute_rest_props, h as createEventDispatcher, o as onDestroy, i as spread, j as escape_attribute_value, k as escape_object, v as validate_component } from "../../chunks/ssr.js";
import { pointer, min, easeCubicInOut, bin, stack, stackOffsetDiverging, scaleOrdinal, select, area, line, scaleBand, brushX, scaleTime, axisBottom, axisLeft, scaleLinear, arc, easeLinear, extent, axisTop, axisRight, max, scaleLog, curveLinear, curveLinearClosed, curveBasis, curveBasisClosed, curveBasisOpen, curveBundle, curveCardinal, curveCardinalClosed, curveCardinalOpen, curveCatmullRom, curveCatmullRomClosed, curveCatmullRomOpen, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore } from "d3";
import "d3-sankey";
import "d3-cloud";
import "katex";
const Button1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { icon } = $$props;
  let { href } = $$props;
  let { target } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<div class="w-fit border border-[#c9896a] shadow-[0_0_5px_0_#ffab81] hover:shadow-[0_0_15px_0px_#ffab81] transition-all ease-in-out duration-300 rounded-lg overflow-clip "><a class="text-white flex flex-row items-center py-2 px-[0.9rem] gap-[0.6rem] bg-[#ff5e01] shadow-[inset_0_-5px_10px_#ffab81] "${add_attribute("target", target, 0)}${add_attribute("href", href, 0)}><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --> ${escape(label)}</a></div> <div class="border-[#ffab81]"></div>`;
});
const Collect$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234A5464'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-archive'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M3%204m0%202a2%202%200%200%201%202%20-2h14a2%202%200%200%201%202%202v0a2%202%200%200%201%20-2%202h-14a2%202%200%200%201%20-2%20-2z'%20/%3e%3cpath%20d='M5%208v10a2%202%200%200%200%202%202h10a2%202%200%200%200%202%20-2v-10'%20/%3e%3cpath%20d='M10%2012l4%200'%20/%3e%3c/svg%3e";
const Analyze = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234A5464'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-analyze'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M20%2011a8.1%208.1%200%200%200%20-6.986%20-6.918a8.095%208.095%200%200%200%20-8.019%203.918'%20/%3e%3cpath%20d='M4%2013a8.1%208.1%200%200%200%2015%203'%20/%3e%3cpath%20d='M19%2016m-1%200a1%201%200%201%200%202%200a1%201%200%201%200%20-2%200'%20/%3e%3cpath%20d='M5%208m-1%200a1%201%200%201%200%202%200a1%201%200%201%200%20-2%200'%20/%3e%3cpath%20d='M12%2012m-3%200a3%203%200%201%200%206%200a3%203%200%201%200%20-6%200'%20/%3e%3c/svg%3e";
const Category = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%234A5464'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-category-2'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M14%204h6v6h-6z'%20/%3e%3cpath%20d='M4%2014h6v6h-6z'%20/%3e%3cpath%20d='M17%2017m-3%200a3%203%200%201%200%206%200a3%203%200%201%200%20-6%200'%20/%3e%3cpath%20d='M7%207m-3%200a3%203%200%201%200%206%200a3%203%200%201%200%20-6%200'%20/%3e%3c/svg%3e";
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full flex flex-col items-start gap-[2rem]" data-svelte-h="svelte-6sjs6j"><h4 class="text-left w-full flex-wrap text-pretty">Everyone needs a source of income to live comfortably; <br> for most Filipinos—<span class="text-[#ff5e01]">it&#39;s more than just about making ends meet</span></h4> <div class="w-full flex flex-col gap-[1rem]"><p class="text-left text-pretty w-full">In December 2023, the Philippines logged an <span class="font-[500]">unemployment rate of 3.1%, a decrease of 617,000 unemployed individuals from the previous
				year</span><sup><a class="text-[#de7030] text-xs hover:text-[#ff4747] ease-out transition-all duration-500" target="_blank" href="https://neda.gov.ph/unemployment-lowest-in-almost-two-decades-generating-high-quality-jobs-crucial/#:~:text=According%20to%20the%20Philippine%20Statistics,decrease%20of%20617%2C000%20unemployed%20individuals ">[1]</a></sup>. This improvement is being celebrated as the lowest unemployment rate in almost two decades,
			but beyond these statistics, the country is continuously plagued by pressing labor issues.</p> <p class="text-left text-pretty w-full">As of 2024, the current minimum wage is set at ₱573-₱610 in Metro Manila, the highest in any
			other region. In comparison, the required minimum to feed a family of five is ₱1188 per day
			according to the IBON foundation<sup><a class="text-[#de7030] text-xs hover:text-[#ff4747] ease-out transition-all duration-500" target="_blank" href="https://www.philstar.com/headlines/2024/01/02/2322987/labor-group-says-2023-wage-hike-not-enough-workers-daily-expenses">[2]</a></sup>.</p> <p class="text-left text-pretty w-full">With such low wages, some choose to be separated from families and face poor job conditions to
			pursue employment outside the country, as the number of Overseas Filipino Workers reaches its
			peak in 55 years<sup><a class="text-[#de7030] text-xs hover:text-[#ff4747] ease-out transition-all duration-500" target="_blank" href="https://www.philstar.com/headlines/2024/04/12/2347168/historic-2023-ofw-deployment-moves-philippines-labor-migration-forward-pandemic">[3]</a></sup>. That is not to say that local workers lack in their share of labor exploitation.
			Contractualization, a common employment practice in the country that hires workers for
			short-term contracts, leaves affected Filipinos without necessary benefits and job security.</p> <p class="text-left text-pretty w-full">Under the 17 Sustainable Development Goals (SDG) established by the United Nations General
			Assembly, specifically SDG 8, there is a need to <span class="font-[500]">“protect labor rights and promote safe and secure working environments for all workers,
				including migrant workers, in particular women migrants, and those in precarious
				employment.”</span> For the country to achieve this goal, the issues faced by the Philippine workforce must first
			be properly recognized and addressed before eventually focusing on resolving them.</p></div></div> <div class="w-full flex flex-col items-center gap-[2rem]" data-svelte-h="svelte-t1twwb"><h4 class="text-left w-full flex-wrap text-pretty">There&#39;s so much data on the Internet, and here&#39;s what we can do</h4> <div class="w-full flex flex-col gap-[1rem]"><p class="text-left w-full">The subreddit r/AntiworkPH provides workers a platform to vent their frustrations and,
			consequently, shed light on the current situation of the Philippine labor market.</p> <p class="text-left w-full">As such, we seek to unravel which topics have plagued the Philippine workforce since the
			subreddit started on 2022. Through this, our group aims to bring awareness and hopefully
			provide a more realistic view of the Philippine labor environment.</p></div></div> <div class="w-full flex flex-col items-start gap-[2rem]" data-svelte-h="svelte-2qus1i"><h4 class="text-left w-full flex-wrap text-pretty">Then—what are the prevalent topics about labor struggles submitted on r/AntiworkPH?</h4> <div class="w-full flex lg:flex-row flex-col justify-between gap-6"><div class="w-full p-[2rem] flex flex-col gap-3"><p class="font-[500]">Null Hypothesis</p> <p class="text-left">The prevalent topics among the subreddit users centered around unfair contracts and job
				offerings in the Philippines.</p></div> <div class="w-full p-[2rem] flex flex-col gap-3"><p class="font-[500]">Alternative Hypothesis</p> <p class="text-left">The prevalent topics among the subreddit users did not center around unfair contracts and
				job offerings in the Philippines.</p></div></div></div> <div class="w-full flex flex-col items-start gap-[2rem]" data-svelte-h="svelte-fniqup"><h4 class="text-left w-full flex-wrap text-pretty">Which of these topics receive the most Reddit engagements?</h4> <div class="w-full flex lg:flex-row flex-col justify-between gap-6"><div class="w-full p-[2rem] flex flex-col gap-3"><p class="font-[500]">Null Hypothesis</p> <p class="text-left">The topic with the most engagements based on upvotes and comments is the same as the most
				prevalent topic.</p></div> <div class="w-full p-[2rem] flex flex-col gap-3"><p class="font-[500]">Alternative Hypothesis</p> <p class="text-left">The topic with the most engagements based on upvotes and comments is different from the most
				prevalent topic.</p></div></div></div> <div class="w-full flex flex-col items-center gap-[2rem]" data-svelte-h="svelte-bqqpsq"><h4 class="text-left w-full flex-wrap text-pretty"><span class="text-[#ff5e01]">What now?</span></h4> <div class="w-full flex lg:flex-row flex-col gap-3"><div class="w-full hover:bg-[#ffa78a] duration-300 transition-all ease-in-out bg-gradient-to-tr from-[#ffb29df6] shadow-[-5px_5px_10px_0px_#dbd1d15d] flex flex-col items-center p-[0.1rem] rounded-lg"><div class="text-left w-full flex flex-col gap-3 font-[400] h-full bg-gradient-to-tr from-[#ffede7] p-[2rem] rounded-md"><img${add_attribute("src", Collect$1, 0)} alt="" class="w-fit"> <p><span class="font-[500]">Collect</span> various submissions on r/AntiworkPH using a Reddit
					API.</p></div></div> <div class="w-full hover:bg-[#ffa78a] duration-300 transition-all ease-in-out bg-gradient-to-tr from-[#ffb29df6] shadow-[-5px_5px_10px_0px_#dbd1d15d] flex flex-col items-center p-[0.1rem] rounded-lg"><div class="text-left w-full flex flex-col gap-3 font-[400] h-full bg-gradient-to-tr from-[#ffede7] p-[2rem] rounded-md"><img${add_attribute("src", Category, 0)} alt="" class="w-fit"> <p><span class="font-[500]">Extract</span> relevant topics using natural language processing.</p></div></div> <div class="w-full hover:bg-[#ffa78a] duration-300 transition-all ease-in-out bg-gradient-to-tr from-[#ffb29df6] shadow-[-5px_5px_10px_0px_#dbd1d15d] flex flex-col items-center p-[0.1rem] rounded-lg"><div class="text-left w-full flex flex-col gap-3 font-[400] h-full bg-gradient-to-tr from-[#ffede7] p-[2rem] rounded-md"><img${add_attribute("src", Analyze, 0)} alt="" class="w-fit"> <p><span class="font-[500]">Analyze</span> the relationships of these topics to various Reddit
					metadata.</p></div></div></div></div>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { icon } = $$props;
  let { href } = $$props;
  let { target } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<div class="w-fit border border-[#c9896a] shadow-[0_0_5px_0_#ffab81] hover:shadow-[0_0_15px_0px_#ffab81] transition-all ease-in-out duration-300 rounded-lg overflow-clip "><a class="text-white flex flex-row items-center py-2 px-[0.9rem] gap-[0.6rem] bg-[#ff5e01] shadow-[inset_0_-5px_10px_#ffab81] "${add_attribute("target", target, 0)}${add_attribute("href", href, 0)}><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --> ${escape(label)}</a></div> <div class="border-[#ffab81]"></div>`;
});
const Button2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { icon } = $$props;
  let { href } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<div class="w-fit border border-[#ff5e01] shadow-[0_0_5px_0_#ffab81] rounded-lg overflow-clip "><a class="text-[#ff5e01] hover:text-white hover:bg-[#ff5e01] transition-all ease-in-out duration-300 flex flex-row items-center py-2 px-[0.9rem] gap-[0.6rem] " target="_blank"${add_attribute("href", href, 0)}><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --> ${escape(label)}</a></div> <div class="border-[#ffab81]"></div>`;
});
const TextCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { desc } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  return `<div class="w-full border border-white backdrop-blur-lg rounded-lg shadow-[0px_10px_20px_-20px_#84848475] bg-[#ffffff75]"><div class="textcard w-full h-full gap-4 p-[2rem] flex flex-col"><p class="textcardtitle w-full h-full font-[500] font-['JetBrains_Mono'] tracking-tight">${escape(title)}</p> <div class="flex flex-col gap-[1rem]"><!-- HTML_TAG_START -->${desc}<!-- HTML_TAG_END --></div></div></div>`;
});
var r$1 = /* @__PURE__ */ ((E2) => (E2.RENDER_FINISHED = "render-finished", E2.RESIZE = "chart-resize", E2.MOUSEOVER = "chart-mouseover", E2.MOUSEOUT = "chart-mouseout", E2))(r$1 || {}), e = /* @__PURE__ */ ((E2) => (E2.SHOW = "show-modal", E2.HIDE = "hide-modal", E2))(e || {}), O = /* @__PURE__ */ ((E2) => (E2.UPDATE = "model-update", E2))(O || {}), a = /* @__PURE__ */ ((E2) => (E2.SHOW_OVERFLOW_MENU = "show-toolbar-overflow-menu", E2.HIDE_OVERFLOW_MENU = "hide-toolbar-overflow-menu", E2.BUTTON_CLICK = "toolbar-button-click", E2.SHOW_TOOLTIP = "toolbar-show-tooltip", E2.HIDE_TOOLTIP = "toolbar-hide-tooltip", E2))(a || {}), u$1 = /* @__PURE__ */ ((E2) => (E2.UPDATE = "zoom-bar-update", E2.SELECTION_START = "zoom-bar-selection-start", E2.SELECTION_IN_PROGRESS = "zoom-bar-selection-in-progress", E2.SELECTION_END = "zoom-bar-selection-end", E2))(u$1 || {}), o = /* @__PURE__ */ ((E2) => (E2.CHANGE = "zoom-domain-change", E2))(o || {}), _$1 = /* @__PURE__ */ ((E2) => (E2.CANVAS_ZOOM_IN = "canvas-zoom-in", E2.CANVAS_ZOOM_OUT = "canvas-zoom-out", E2))(_$1 || {}), t = /* @__PURE__ */ ((E2) => (E2.LABEL_MOUSEOVER = "axis-label-mouseover", E2.LABEL_MOUSEMOVE = "axis-label-mousemove", E2.LABEL_CLICK = "axis-label-click", E2.LABEL_MOUSEOUT = "axis-label-mouseout", E2.LABEL_FOCUS = "axis-label-focus", E2.LABEL_BLUR = "axis-label-blur", E2.RENDER_COMPLETE = "axis-render-complete", E2))(t || {}), R = /* @__PURE__ */ ((E2) => (E2.POINT_MOUSEOVER = "scatter-mouseover", E2.POINT_MOUSEMOVE = "scatter-mousemove", E2.POINT_CLICK = "scatter-click", E2.POINT_MOUSEOUT = "scatter-mouseout", E2))(R || {}), s = /* @__PURE__ */ ((E2) => (E2.WORD_MOUSEOVER = "wordcloud-word-mouseover", E2.WORD_MOUSEMOVE = "wordcloud-word-mousemove", E2.WORD_CLICK = "wordcloud-word-click", E2.WORD_MOUSEOUT = "wordcloud-word-mouseout", E2))(s || {}), M$2 = /* @__PURE__ */ ((E2) => (E2.SLICE_MOUSEOVER = "pie-slice-mouseover", E2.SLICE_MOUSEMOVE = "pie-slice-mousemove", E2.SLICE_CLICK = "pie-slice-click", E2.SLICE_MOUSEOUT = "pie-slice-mouseout", E2))(M$2 || {}), v$3 = /* @__PURE__ */ ((E2) => (E2.ARC_MOUSEOVER = "gauge-arc-mouseover", E2.ARC_MOUSEMOVE = "gauge-arc-mousemove", E2.ARC_CLICK = "gauge-arc-click", E2.ARC_MOUSEOUT = "gauge-arc-mouseout", E2))(v$3 || {}), U$2 = /* @__PURE__ */ ((E2) => (E2.BAR_MOUSEOVER = "bar-mouseover", E2.BAR_MOUSEMOVE = "bar-mousemove", E2.BAR_CLICK = "bar-click", E2.BAR_MOUSEOUT = "bar-mouseout", E2))(U$2 || {}), S = /* @__PURE__ */ ((E2) => (E2.BOX_MOUSEOVER = "box-mouseover", E2.BOX_MOUSEMOVE = "box-mousemove", E2.BOX_CLICK = "box-click", E2.BOX_MOUSEOUT = "box-mouseout", E2.OUTLIER_MOUSEOVER = "outlier-mouseover", E2.OUTLIER_MOUSEMOVE = "outlier-mousemove", E2.OUTLIER_CLICK = "outlier-click", E2.OUTLIER_MOUSEOUT = "outlier-mouseout", E2))(S || {}), I$2 = /* @__PURE__ */ ((E2) => (E2.SCATTER_MOUSEOVER = "scatter-mouseover", E2.SCATTER_MOUSEMOVE = "scatter-mousemove", E2.SCATTER_CLICK = "scatter-click", E2.SCATTER_MOUSEOUT = "scatter-mouseout", E2))(I$2 || {}), m = /* @__PURE__ */ ((E2) => (E2.POINT_MOUSEOVER = "scatter-mouseover", E2.POINT_MOUSEMOVE = "scatter-mousemove", E2.POINT_CLICK = "scatter-click", E2.POINT_MOUSEOUT = "scatter-mouseout", E2))(m || {}), l = /* @__PURE__ */ ((E2) => (E2.X_AXIS_MOUSEOVER = "radar-x-axis-mouseover", E2.X_AXIS_MOUSEMOVE = "radar-x-axis-mousemove", E2.X_AXIS_CLICK = "radar-x-axis-click", E2.X_AXIS_MOUSEOUT = "radar-x-axis-mouseout", E2))(l || {}), c = /* @__PURE__ */ ((E2) => (E2.NODE_MOUSEOVER = "tree-node-mouseover", E2.NODE_CLICK = "tree-node-click", E2.NODE_MOUSEOUT = "tree-node-mouseout", E2))(c || {}), L$1 = /* @__PURE__ */ ((E2) => (E2.LEAF_MOUSEOVER = "leaf-mouseover", E2.LEAF_MOUSEMOVE = "leaf-mousemove", E2.LEAF_CLICK = "leaf-click", E2.LEAF_MOUSEOUT = "leaf-mouseout", E2))(L$1 || {}), N$2 = /* @__PURE__ */ ((E2) => (E2.SHOW = "show-tooltip", E2.MOVE = "move-tooltip", E2.HIDE = "hide-tooltip", E2))(N$2 || {}), n = /* @__PURE__ */ ((E2) => (E2.SHOW = "show-threshold", E2.HIDE = "hide-threshold", E2))(n || {}), A$2 = /* @__PURE__ */ ((E2) => (E2.ITEM_HOVER = "legend-item-onhover", E2.ITEM_CLICK = "legend-item-onclick", E2.ITEM_MOUSEOUT = "legend-item-onmouseout", E2.ITEMS_UPDATE = "legend-items-update", E2))(A$2 || {}), C$2 = /* @__PURE__ */ ((E2) => (E2.CIRCLE_MOUSEOVER = "circle-leaf-mouseover", E2.CIRCLE_CLICK = "circle-leaf-click", E2.CIRCLE_MOUSEOUT = "circle-leaf-mouseout", E2.CIRCLE_MOUSEMOVE = "circle-leaf-mousemove", E2))(C$2 || {}), T$2 = /* @__PURE__ */ ((E2) => (E2.NODE_MOUSEOVER = "alluvial-node-mouseover", E2.NODE_CLICK = "alluvial-node-click", E2.NODE_MOUSEOUT = "alluvial-node-mouseout", E2.NODE_MOUSEMOVE = "alluvial-node-mousemove", E2.LINE_MOUSEOVER = "alluvial-line-mouseover", E2.LINE_CLICK = "alluvial-line-click", E2.LINE_MOUSEOUT = "alluvial-line-mouseout", E2.LINE_MOUSEMOVE = "alluvial-line-mousemove", E2))(T$2 || {}), V$2 = /* @__PURE__ */ ((E2) => (E2.METER_MOUSEOVER = "meter-mouseover", E2.METER_CLICK = "meter-click", E2.METER_MOUSEOUT = "meter-mouseout", E2.METER_MOUSEMOVE = "meter-mousemove", E2))(V$2 || {}), i$1 = /* @__PURE__ */ ((E2) => (E2.HEATMAP_MOUSEOVER = "heatmap-mouseover", E2.HEATMAP_CLICK = "heatmap-click", E2.HEATMAP_MOUSEOUT = "heatmap-mouseout", E2.HEATMAP_MOUSEMOVE = "hetmap-mousemove", E2))(i$1 || {}), d = /* @__PURE__ */ ((E2) => (E2.CHOROPLETH_MOUSEOVER = "choropleth-mouseover", E2.CHOROPLETH_CLICK = "choropleth-click", E2.CHOROPLETH_MOUSEOUT = "choropleth-mouseout", E2.CHOROPLETH_MOUSEMOVE = "choropleth-mousemove", E2))(d || {});
const H$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alluvial: T$2,
  Area: R,
  Axis: t,
  Bar: U$2,
  Boxplot: S,
  CanvasZoom: _$1,
  Chart: r$1,
  Choropleth: d,
  CirclePack: C$2,
  Gauge: v$3,
  Heatmap: i$1,
  Legend: A$2,
  Line: m,
  Meter: V$2,
  Modal: e,
  Model: O,
  Pie: M$2,
  Radar: l,
  Scatter: I$2,
  Threshold: n,
  Toolbar: a,
  Tooltip: N$2,
  Tree: c,
  Treemap: L$1,
  WordCloud: s,
  ZoomBar: u$1,
  ZoomDomain: o
}, Symbol.toStringTag, { value: "Module" })), oE = H$2;
var D$3 = /* @__PURE__ */ ((E2) => (E2.HTML = "html", E2.SVG = "svg", E2))(D$3 || {}), g$2 = /* @__PURE__ */ ((E2) => (E2.WHITE = "white", E2.G100 = "g100", E2.G90 = "g90", E2.G10 = "g10", E2))(g$2 || {}), b$1 = /* @__PURE__ */ ((E2) => (E2.BACKGROUND = "background", E2.FILL = "fill", E2.STROKE = "stroke", E2.TOOLTIP = "tooltip", E2))(b$1 || {}), f = /* @__PURE__ */ ((E2) => (E2.LEFT = "left", E2.RIGHT = "right", E2.TOP = "top", E2.BOTTOM = "bottom", E2))(f || {}), K$2 = /* @__PURE__ */ ((E2) => (E2.GRAPH_VIEW = "graph_view", E2.SLIDER_VIEW = "slider_view", E2))(K$2 || {}), h$1 = /* @__PURE__ */ ((E2) => (E2.END_LINE = "end_line", E2.MID_LINE = "mid_line", E2.FRONT_LINE = "front_line", E2.NONE = "none", E2))(h$1 || {}), F$2 = /* @__PURE__ */ ((E2) => (E2.VERTICAL = "vertical", E2.HORIZONTAL = "horizontal", E2))(F$2 || {}), P$1 = /* @__PURE__ */ ((E2) => (E2.TIME = "time", E2.LINEAR = "linear", E2.LOG = "log", E2.LABELS = "labels", E2.LABELS_RATIO = "labels-ratio", E2))(P$1 || {}), w$1 = /* @__PURE__ */ ((E2) => (E2.RIGHT = "right", E2.LEFT = "left", E2.TOP = "top", E2.BOTTOM = "bottom", E2))(w$1 || {}), k$4 = /* @__PURE__ */ ((E2) => (E2.LEFT = "left", E2.CENTER = "center", E2.RIGHT = "right", E2))(k$4 || {}), G$2 = /* @__PURE__ */ ((E2) => (E2.HORIZONTAL = "horizontal", E2.VERTICAL = "vertical", E2))(G$2 || {}), X$3 = /* @__PURE__ */ ((E2) => (E2.TREE = "tree", E2.DENDROGRAM = "dendrogram", E2))(X$3 || {}), W$3 = /* @__PURE__ */ ((E2) => (E2.ROW = "row", E2.COLUMN = "column", E2.ROW_REVERSE = "row-reverse", E2.COLUMN_REVERSE = "column-reverse", E2))(W$3 || {}), z$2 = /* @__PURE__ */ ((E2) => (E2.FIXED = "fixed", E2.PREFERRED = "preferred", E2.STRETCH = "stretch", E2))(z$2 || {}), B$2 = /* @__PURE__ */ ((E2) => (E2.CENTER = "center", E2))(B$2 || {}), Z$4 = /* @__PURE__ */ ((E2) => (E2.GRID = "grid", E2.VERT_OR_HORIZ = "vertOrHoriz", E2.PIE = "pie", E2.DONUT = "donut", E2))(Z$4 || {}), Q$2 = /* @__PURE__ */ ((E2) => (E2.SEMI = "semi", E2.FULL = "full", E2))(Q$2 || {}), j$2 = /* @__PURE__ */ ((E2) => (E2.ALWAYS = "always", E2.AUTO = "auto", E2.NEVER = "never", E2))(j$2 || {}), p$2 = /* @__PURE__ */ ((E2) => (E2.SCATTER = "scatter", E2.LINE = "line", E2.SIMPLE_BAR = "simple-bar", E2.STACKED_BAR = "stacked-bar", E2.GROUPED_BAR = "grouped-bar", E2.AREA = "area", E2.STACKED_AREA = "stacked-area", E2))(p$2 || {}), y$2 = /* @__PURE__ */ ((E2) => (E2.EXPORT_CSV = "Export as CSV", E2.EXPORT_PNG = "Export as PNG", E2.EXPORT_JPG = "Export as JPG", E2.ZOOM_IN = "Zoom in", E2.ZOOM_OUT = "Zoom out", E2.RESET_ZOOM = "Reset zoom", E2.MAKE_FULLSCREEN = "Make fullscreen", E2.EXIT_FULLSCREEN = "Exit fullscreen", E2.SHOW_AS_DATATABLE = "Show as data-table", E2.CUSTOM = "Custom", E2))(y$2 || {}), EE = /* @__PURE__ */ ((E2) => (E2.LEFT = "left", E2.RIGHT = "right", E2))(EE || {}), rE = /* @__PURE__ */ ((E2) => (E2.CHECKBOX = "checkbox", E2.RADIUS = "radius", E2.AREA = "area", E2.SIZE = "size", E2.LINE = "line", E2.QUARTILE = "quartile", E2.ZOOM = "zoom", E2))(rE || {}), OE = /* @__PURE__ */ ((E2) => (E2.ON = "on", E2.AUTO = "auto", E2.OFF = "off", E2))(OE || {}), aE = /* @__PURE__ */ ((E2) => (E2.DEFAULT = "default", E2.HOVERABLE = "hoverable", E2))(aE || {}), uE = /* @__PURE__ */ ((E2) => (E2.geoEqualEarth = "geoEqualEarth", E2.geoAlbers = "geoAlbers", E2.geoConicEqualArea = "geoConicEqualArea", E2.geoConicEquidistant = "geoConicEquidistant", E2.geoEquirectangular = "geoEquirectangular", E2.geoMercator = "geoMercator", E2.geoNaturalEarth1 = "geoNaturalEarth1", E2))(uE || {});
function Ie$3(e2) {
  return (t2 = {}) => {
    const n2 = t2.width ? String(t2.width) : e2.defaultWidth;
    return e2.formats[n2] || e2.formats[e2.defaultWidth];
  };
}
function re$1(e2) {
  return (t2, n2) => {
    const r2 = n2 != null && n2.context ? String(n2.context) : "standalone";
    let a2;
    if (r2 === "formatting" && e2.formattingValues) {
      const o2 = e2.defaultFormattingWidth || e2.defaultWidth, s2 = n2 != null && n2.width ? String(n2.width) : o2;
      a2 = e2.formattingValues[s2] || e2.formattingValues[o2];
    } else {
      const o2 = e2.defaultWidth, s2 = n2 != null && n2.width ? String(n2.width) : e2.defaultWidth;
      a2 = e2.values[s2] || e2.values[o2];
    }
    const i2 = e2.argumentCallback ? e2.argumentCallback(t2) : t2;
    return a2[i2];
  };
}
function ae$1(e2) {
  return (t2, n2 = {}) => {
    const r2 = n2.width, a2 = r2 && e2.matchPatterns[r2] || e2.matchPatterns[e2.defaultMatchWidth], i2 = t2.match(a2);
    if (!i2)
      return null;
    const o2 = i2[0], s2 = r2 && e2.parsePatterns[r2] || e2.parsePatterns[e2.defaultParseWidth], u2 = Array.isArray(s2) ? nr(s2, (f2) => f2.test(o2)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      tr(s2, (f2) => f2.test(o2))
    );
    let c2;
    c2 = e2.valueCallback ? e2.valueCallback(u2) : u2, c2 = n2.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n2.valueCallback(c2)
    ) : c2;
    const l2 = t2.slice(o2.length);
    return { value: c2, rest: l2 };
  };
}
function tr(e2, t2) {
  for (const n2 in e2)
    if (Object.prototype.hasOwnProperty.call(e2, n2) && t2(e2[n2]))
      return n2;
}
function nr(e2, t2) {
  for (let n2 = 0; n2 < e2.length; n2++)
    if (t2(e2[n2]))
      return n2;
}
function rr(e2) {
  return (t2, n2 = {}) => {
    const r2 = t2.match(e2.matchPattern);
    if (!r2)
      return null;
    const a2 = r2[0], i2 = t2.match(e2.parsePattern);
    if (!i2)
      return null;
    let o2 = e2.valueCallback ? e2.valueCallback(i2[0]) : i2[0];
    o2 = n2.valueCallback ? n2.valueCallback(o2) : o2;
    const s2 = t2.slice(a2.length);
    return { value: o2, rest: s2 };
  };
}
function A$1(e2) {
  const t2 = Object.prototype.toString.call(e2);
  return e2 instanceof Date || typeof e2 == "object" && t2 === "[object Date]" ? new e2.constructor(+e2) : typeof e2 == "number" || t2 === "[object Number]" || typeof e2 == "string" || t2 === "[object String]" ? new Date(e2) : /* @__PURE__ */ new Date(NaN);
}
let ar = {};
function Pe$2() {
  return ar;
}
function ue(e2, t2) {
  var s2, u2, c2, l2;
  const n2 = Pe$2(), r2 = (t2 == null ? void 0 : t2.weekStartsOn) ?? ((u2 = (s2 = t2 == null ? void 0 : t2.locale) == null ? void 0 : s2.options) == null ? void 0 : u2.weekStartsOn) ?? n2.weekStartsOn ?? ((l2 = (c2 = n2.locale) == null ? void 0 : c2.options) == null ? void 0 : l2.weekStartsOn) ?? 0, a2 = A$1(e2), i2 = a2.getDay(), o2 = (i2 < r2 ? 7 : 0) + i2 - r2;
  return a2.setDate(a2.getDate() - o2), a2.setHours(0, 0, 0, 0), a2;
}
const ir = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, or = (e2, t2, n2) => {
  let r2;
  const a2 = ir[e2];
  return typeof a2 == "string" ? r2 = a2 : t2 === 1 ? r2 = a2.one : r2 = a2.other.replace("{{count}}", t2.toString()), n2 != null && n2.addSuffix ? n2.comparison && n2.comparison > 0 ? "in " + r2 : r2 + " ago" : r2;
}, sr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ur = (e2, t2, n2, r2) => sr[e2], cr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, lr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, fr = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, dr = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, hr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, gr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, mr = (e2, t2) => {
  const n2 = Number(e2), r2 = n2 % 100;
  if (r2 > 20 || r2 < 10)
    switch (r2 % 10) {
      case 1:
        return n2 + "st";
      case 2:
        return n2 + "nd";
      case 3:
        return n2 + "rd";
    }
  return n2 + "th";
}, yr = {
  ordinalNumber: mr,
  era: re$1({
    values: cr,
    defaultWidth: "wide"
  }),
  quarter: re$1({
    values: lr,
    defaultWidth: "wide",
    argumentCallback: (e2) => e2 - 1
  }),
  month: re$1({
    values: fr,
    defaultWidth: "wide"
  }),
  day: re$1({
    values: dr,
    defaultWidth: "wide"
  }),
  dayPeriod: re$1({
    values: hr,
    defaultWidth: "wide",
    formattingValues: gr,
    defaultFormattingWidth: "wide"
  })
}, pr = /^(\d+)(th|st|nd|rd)?/i, br = /\d+/i, wr$1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Tr = {
  any: [/^b/i, /^(a|c)/i]
}, vr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Or = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Sr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Mr = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, _r = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Pr$1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, xr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ar$1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Er = {
  ordinalNumber: rr({
    matchPattern: pr,
    parsePattern: br,
    valueCallback: (e2) => parseInt(e2, 10)
  }),
  era: ae$1({
    matchPatterns: wr$1,
    defaultMatchWidth: "wide",
    parsePatterns: Tr,
    defaultParseWidth: "any"
  }),
  quarter: ae$1({
    matchPatterns: vr,
    defaultMatchWidth: "wide",
    parsePatterns: Or,
    defaultParseWidth: "any",
    valueCallback: (e2) => e2 + 1
  }),
  month: ae$1({
    matchPatterns: Sr,
    defaultMatchWidth: "wide",
    parsePatterns: Mr,
    defaultParseWidth: "any"
  }),
  day: ae$1({
    matchPatterns: _r,
    defaultMatchWidth: "wide",
    parsePatterns: Pr$1,
    defaultParseWidth: "any"
  }),
  dayPeriod: ae$1({
    matchPatterns: xr,
    defaultMatchWidth: "any",
    parsePatterns: Ar$1,
    defaultParseWidth: "any"
  })
}, $r$1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Cr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Dr$1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ir = {
  date: Ie$3({
    formats: $r$1,
    defaultWidth: "full"
  }),
  time: Ie$3({
    formats: Cr,
    defaultWidth: "full"
  }),
  dateTime: Ie$3({
    formats: Dr$1,
    defaultWidth: "full"
  })
}, Qt = {
  code: "en-US",
  formatDistance: or,
  formatLong: Ir,
  formatRelative: ur,
  localize: yr,
  match: Er,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var Xt = typeof global == "object" && global && global.Object === Object && global, Fr$1 = typeof self == "object" && self && self.Object === Object && self, D$2 = Xt || Fr$1 || Function("return this")(), P = D$2.Symbol, kt$1 = Object.prototype, Lr$1 = kt$1.hasOwnProperty, Rr = kt$1.toString, ie$1 = P ? P.toStringTag : void 0;
function jr$1(e2) {
  var t2 = Lr$1.call(e2, ie$1), n2 = e2[ie$1];
  try {
    e2[ie$1] = void 0;
    var r2 = true;
  } catch {
  }
  var a2 = Rr.call(e2);
  return r2 && (t2 ? e2[ie$1] = n2 : delete e2[ie$1]), a2;
}
var Nr$1 = Object.prototype, Wr$1 = Nr$1.toString;
function Yr$1(e2) {
  return Wr$1.call(e2);
}
var Gr$1 = "[object Null]", Br$1 = "[object Undefined]", dt$2 = P ? P.toStringTag : void 0;
function U$1(e2) {
  return e2 == null ? e2 === void 0 ? Br$1 : Gr$1 : dt$2 && dt$2 in Object(e2) ? jr$1(e2) : Yr$1(e2);
}
function C$1(e2) {
  return e2 != null && typeof e2 == "object";
}
var Hr$1 = "[object Symbol]";
function Qe$2(e2) {
  return typeof e2 == "symbol" || C$1(e2) && U$1(e2) == Hr$1;
}
function qr$1(e2, t2) {
  for (var n2 = -1, r2 = e2 == null ? 0 : e2.length, a2 = Array(r2); ++n2 < r2; )
    a2[n2] = t2(e2[n2], n2, e2);
  return a2;
}
var _ = Array.isArray, Ur$1 = 1 / 0, ht$1 = P ? P.prototype : void 0, gt$1 = ht$1 ? ht$1.toString : void 0;
function Vt(e2) {
  if (typeof e2 == "string")
    return e2;
  if (_(e2))
    return qr$1(e2, Vt) + "";
  if (Qe$2(e2))
    return gt$1 ? gt$1.call(e2) : "";
  var t2 = e2 + "";
  return t2 == "0" && 1 / e2 == -Ur$1 ? "-0" : t2;
}
function I$1(e2) {
  var t2 = typeof e2;
  return e2 != null && (t2 == "object" || t2 == "function");
}
function Xe$2(e2) {
  return e2;
}
var zr$1 = "[object AsyncFunction]", Qr$1 = "[object Function]", Xr$1 = "[object GeneratorFunction]", kr$1 = "[object Proxy]";
function ke$2(e2) {
  if (!I$1(e2))
    return false;
  var t2 = U$1(e2);
  return t2 == Qr$1 || t2 == Xr$1 || t2 == zr$1 || t2 == kr$1;
}
var Fe$2 = D$2["__core-js_shared__"], mt$1 = function() {
  var e2 = /[^.]+$/.exec(Fe$2 && Fe$2.keys && Fe$2.keys.IE_PROTO || "");
  return e2 ? "Symbol(src)_1." + e2 : "";
}();
function Vr$1(e2) {
  return !!mt$1 && mt$1 in e2;
}
var Zr$1 = Function.prototype, Kr$1 = Zr$1.toString;
function z$1(e2) {
  if (e2 != null) {
    try {
      return Kr$1.call(e2);
    } catch {
    }
    try {
      return e2 + "";
    } catch {
    }
  }
  return "";
}
var Jr$1 = /[\\^$.*+?()[\]{}|]/g, ea = /^\[object .+?Constructor\]$/, ta = Function.prototype, na = Object.prototype, ra = ta.toString, aa = na.hasOwnProperty, ia = RegExp(
  "^" + ra.call(aa).replace(Jr$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oa(e2) {
  if (!I$1(e2) || Vr$1(e2))
    return false;
  var t2 = ke$2(e2) ? ia : ea;
  return t2.test(z$1(e2));
}
function sa(e2, t2) {
  return e2 == null ? void 0 : e2[t2];
}
function Q$1(e2, t2) {
  var n2 = sa(e2, t2);
  return oa(n2) ? n2 : void 0;
}
var We$2 = Q$1(D$2, "WeakMap"), yt$2 = Object.create, ua = /* @__PURE__ */ function() {
  function e2() {
  }
  return function(t2) {
    if (!I$1(t2))
      return {};
    if (yt$2)
      return yt$2(t2);
    e2.prototype = t2;
    var n2 = new e2();
    return e2.prototype = void 0, n2;
  };
}();
function ca(e2, t2, n2) {
  switch (n2.length) {
    case 0:
      return e2.call(t2);
    case 1:
      return e2.call(t2, n2[0]);
    case 2:
      return e2.call(t2, n2[0], n2[1]);
    case 3:
      return e2.call(t2, n2[0], n2[1], n2[2]);
  }
  return e2.apply(t2, n2);
}
function la() {
}
function Zt(e2, t2) {
  var n2 = -1, r2 = e2.length;
  for (t2 || (t2 = Array(r2)); ++n2 < r2; )
    t2[n2] = e2[n2];
  return t2;
}
var fa = 800, da = 16, ha = Date.now;
function ga(e2) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = ha(), a2 = da - (r2 - n2);
    if (n2 = r2, a2 > 0) {
      if (++t2 >= fa)
        return arguments[0];
    } else
      t2 = 0;
    return e2.apply(void 0, arguments);
  };
}
function ma(e2) {
  return function() {
    return e2;
  };
}
var Oe$1 = function() {
  try {
    var e2 = Q$1(Object, "defineProperty");
    return e2({}, "", {}), e2;
  } catch {
  }
}(), ya = Oe$1 ? function(e2, t2) {
  return Oe$1(e2, "toString", {
    configurable: true,
    enumerable: false,
    value: ma(t2),
    writable: true
  });
} : Xe$2;
const pa = ya;
var ba$1 = ga(pa);
function wa$1(e2, t2) {
  for (var n2 = -1, r2 = e2 == null ? 0 : e2.length; ++n2 < r2 && t2(e2[n2], n2, e2) !== false; )
    ;
  return e2;
}
function Ta$1(e2, t2, n2, r2) {
  for (var a2 = e2.length, i2 = n2 + (r2 ? 1 : -1); r2 ? i2-- : ++i2 < a2; )
    if (t2(e2[i2], i2, e2))
      return i2;
  return -1;
}
function va(e2) {
  return e2 !== e2;
}
function Oa$1(e2, t2, n2) {
  for (var r2 = n2 - 1, a2 = e2.length; ++r2 < a2; )
    if (e2[r2] === t2)
      return r2;
  return -1;
}
function Sa$1(e2, t2, n2) {
  return t2 === t2 ? Oa$1(e2, t2, n2) : Ta$1(e2, va, n2);
}
function Ma$1(e2, t2) {
  var n2 = e2 == null ? 0 : e2.length;
  return !!n2 && Sa$1(e2, t2, 0) > -1;
}
var _a$1 = 9007199254740991, Pa = /^(?:0|[1-9]\d*)$/;
function Ve$2(e2, t2) {
  var n2 = typeof e2;
  return t2 = t2 ?? _a$1, !!t2 && (n2 == "number" || n2 != "symbol" && Pa.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t2;
}
function Ze$2(e2, t2, n2) {
  t2 == "__proto__" && Oe$1 ? Oe$1(e2, t2, {
    configurable: true,
    enumerable: true,
    value: n2,
    writable: true
  }) : e2[t2] = n2;
}
function de$1(e2, t2) {
  return e2 === t2 || e2 !== e2 && t2 !== t2;
}
var xa$1 = Object.prototype, Aa$1 = xa$1.hasOwnProperty;
function Kt(e2, t2, n2) {
  var r2 = e2[t2];
  (!(Aa$1.call(e2, t2) && de$1(r2, n2)) || n2 === void 0 && !(t2 in e2)) && Ze$2(e2, t2, n2);
}
function he(e2, t2, n2, r2) {
  var a2 = !n2;
  n2 || (n2 = {});
  for (var i2 = -1, o2 = t2.length; ++i2 < o2; ) {
    var s2 = t2[i2], u2 = r2 ? r2(n2[s2], e2[s2], s2, n2, e2) : void 0;
    u2 === void 0 && (u2 = e2[s2]), a2 ? Ze$2(n2, s2, u2) : Kt(n2, s2, u2);
  }
  return n2;
}
var pt$1 = Math.max;
function Ea(e2, t2, n2) {
  return t2 = pt$1(t2 === void 0 ? e2.length - 1 : t2, 0), function() {
    for (var r2 = arguments, a2 = -1, i2 = pt$1(r2.length - t2, 0), o2 = Array(i2); ++a2 < i2; )
      o2[a2] = r2[t2 + a2];
    a2 = -1;
    for (var s2 = Array(t2 + 1); ++a2 < t2; )
      s2[a2] = r2[a2];
    return s2[t2] = n2(o2), ca(e2, this, s2);
  };
}
function Jt(e2, t2) {
  return ba$1(Ea(e2, t2, Xe$2), e2 + "");
}
var $a = 9007199254740991;
function Ke$1(e2) {
  return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= $a;
}
function ge$1(e2) {
  return e2 != null && Ke$1(e2.length) && !ke$2(e2);
}
function Ca$1(e2, t2, n2) {
  if (!I$1(n2))
    return false;
  var r2 = typeof t2;
  return (r2 == "number" ? ge$1(n2) && Ve$2(t2, n2.length) : r2 == "string" && t2 in n2) ? de$1(n2[t2], e2) : false;
}
function Da(e2) {
  return Jt(function(t2, n2) {
    var r2 = -1, a2 = n2.length, i2 = a2 > 1 ? n2[a2 - 1] : void 0, o2 = a2 > 2 ? n2[2] : void 0;
    for (i2 = e2.length > 3 && typeof i2 == "function" ? (a2--, i2) : void 0, o2 && Ca$1(n2[0], n2[1], o2) && (i2 = a2 < 3 ? void 0 : i2, a2 = 1), t2 = Object(t2); ++r2 < a2; ) {
      var s2 = n2[r2];
      s2 && e2(t2, s2, r2, i2);
    }
    return t2;
  });
}
var Ia$1 = Object.prototype;
function xe$2(e2) {
  var t2 = e2 && e2.constructor, n2 = typeof t2 == "function" && t2.prototype || Ia$1;
  return e2 === n2;
}
function Fa(e2, t2) {
  for (var n2 = -1, r2 = Array(e2); ++n2 < e2; )
    r2[n2] = t2(n2);
  return r2;
}
var La$1 = "[object Arguments]";
function bt$1(e2) {
  return C$1(e2) && U$1(e2) == La$1;
}
var en = Object.prototype, Ra = en.hasOwnProperty, ja = en.propertyIsEnumerable, Na = bt$1(/* @__PURE__ */ function() {
  return arguments;
}()) ? bt$1 : function(e2) {
  return C$1(e2) && Ra.call(e2, "callee") && !ja.call(e2, "callee");
};
const Z$3 = Na;
function Wa() {
  return false;
}
var tn = typeof exports == "object" && exports && !exports.nodeType && exports, wt = tn && typeof module == "object" && module && !module.nodeType && module, Ya = wt && wt.exports === tn, Tt = Ya ? D$2.Buffer : void 0, Ga = Tt ? Tt.isBuffer : void 0, Ba = Ga || Wa;
const K$1 = Ba;
var Ha = "[object Arguments]", qa = "[object Array]", Ua = "[object Boolean]", za = "[object Date]", Qa = "[object Error]", Xa = "[object Function]", ka = "[object Map]", Va = "[object Number]", Za = "[object Object]", Ka = "[object RegExp]", Ja = "[object Set]", ei = "[object String]", ti = "[object WeakMap]", ni = "[object ArrayBuffer]", ri = "[object DataView]", ai = "[object Float32Array]", ii = "[object Float64Array]", oi = "[object Int8Array]", si = "[object Int16Array]", ui = "[object Int32Array]", ci = "[object Uint8Array]", li = "[object Uint8ClampedArray]", fi = "[object Uint16Array]", di = "[object Uint32Array]", p$1 = {};
p$1[ai] = p$1[ii] = p$1[oi] = p$1[si] = p$1[ui] = p$1[ci] = p$1[li] = p$1[fi] = p$1[di] = true;
p$1[Ha] = p$1[qa] = p$1[ni] = p$1[Ua] = p$1[ri] = p$1[za] = p$1[Qa] = p$1[Xa] = p$1[ka] = p$1[Va] = p$1[Za] = p$1[Ka] = p$1[Ja] = p$1[ei] = p$1[ti] = false;
function hi(e2) {
  return C$1(e2) && Ke$1(e2.length) && !!p$1[U$1(e2)];
}
function Je$2(e2) {
  return function(t2) {
    return e2(t2);
  };
}
var nn = typeof exports == "object" && exports && !exports.nodeType && exports, se$1 = nn && typeof module == "object" && module && !module.nodeType && module, gi = se$1 && se$1.exports === nn, Le$1 = gi && Xt.process, J$2 = function() {
  try {
    var e2 = se$1 && se$1.require && se$1.require("util").types;
    return e2 || Le$1 && Le$1.binding && Le$1.binding("util");
  } catch {
  }
}(), vt = J$2 && J$2.isTypedArray, mi = vt ? Je$2(vt) : hi;
const Ae$2 = mi;
var yi = Object.prototype, pi = yi.hasOwnProperty;
function rn(e2, t2) {
  var n2 = _(e2), r2 = !n2 && Z$3(e2), a2 = !n2 && !r2 && K$1(e2), i2 = !n2 && !r2 && !a2 && Ae$2(e2), o2 = n2 || r2 || a2 || i2, s2 = o2 ? Fa(e2.length, String) : [], u2 = s2.length;
  for (var c2 in e2)
    (t2 || pi.call(e2, c2)) && !(o2 && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a2 && (c2 == "offset" || c2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i2 && (c2 == "buffer" || c2 == "byteLength" || c2 == "byteOffset") || // Skip index properties.
    Ve$2(c2, u2))) && s2.push(c2);
  return s2;
}
function an(e2, t2) {
  return function(n2) {
    return e2(t2(n2));
  };
}
var bi = an(Object.keys, Object), wi = Object.prototype, Ti = wi.hasOwnProperty;
function on(e2) {
  if (!xe$2(e2))
    return bi(e2);
  var t2 = [];
  for (var n2 in Object(e2))
    Ti.call(e2, n2) && n2 != "constructor" && t2.push(n2);
  return t2;
}
function Ee$2(e2) {
  return ge$1(e2) ? rn(e2) : on(e2);
}
function vi(e2) {
  var t2 = [];
  if (e2 != null)
    for (var n2 in Object(e2))
      t2.push(n2);
  return t2;
}
var Oi = Object.prototype, Si = Oi.hasOwnProperty;
function Mi(e2) {
  if (!I$1(e2))
    return vi(e2);
  var t2 = xe$2(e2), n2 = [];
  for (var r2 in e2)
    r2 == "constructor" && (t2 || !Si.call(e2, r2)) || n2.push(r2);
  return n2;
}
function me$1(e2) {
  return ge$1(e2) ? rn(e2, true) : Mi(e2);
}
var _i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pi = /^\w*$/;
function et$3(e2, t2) {
  if (_(e2))
    return false;
  var n2 = typeof e2;
  return n2 == "number" || n2 == "symbol" || n2 == "boolean" || e2 == null || Qe$2(e2) ? true : Pi.test(e2) || !_i.test(e2) || t2 != null && e2 in Object(t2);
}
var ce$1 = Q$1(Object, "create");
function xi() {
  this.__data__ = ce$1 ? ce$1(null) : {}, this.size = 0;
}
function Ai(e2) {
  var t2 = this.has(e2) && delete this.__data__[e2];
  return this.size -= t2 ? 1 : 0, t2;
}
var Ei = "__lodash_hash_undefined__", $i = Object.prototype, Ci = $i.hasOwnProperty;
function Di(e2) {
  var t2 = this.__data__;
  if (ce$1) {
    var n2 = t2[e2];
    return n2 === Ei ? void 0 : n2;
  }
  return Ci.call(t2, e2) ? t2[e2] : void 0;
}
var Ii = Object.prototype, Fi = Ii.hasOwnProperty;
function Li(e2) {
  var t2 = this.__data__;
  return ce$1 ? t2[e2] !== void 0 : Fi.call(t2, e2);
}
var Ri = "__lodash_hash_undefined__";
function ji(e2, t2) {
  var n2 = this.__data__;
  return this.size += this.has(e2) ? 0 : 1, n2[e2] = ce$1 && t2 === void 0 ? Ri : t2, this;
}
function B$1(e2) {
  var t2 = -1, n2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e2[t2];
    this.set(r2[0], r2[1]);
  }
}
B$1.prototype.clear = xi;
B$1.prototype.delete = Ai;
B$1.prototype.get = Di;
B$1.prototype.has = Li;
B$1.prototype.set = ji;
function Ni() {
  this.__data__ = [], this.size = 0;
}
function $e$1(e2, t2) {
  for (var n2 = e2.length; n2--; )
    if (de$1(e2[n2][0], t2))
      return n2;
  return -1;
}
var Wi = Array.prototype, Yi = Wi.splice;
function Gi(e2) {
  var t2 = this.__data__, n2 = $e$1(t2, e2);
  if (n2 < 0)
    return false;
  var r2 = t2.length - 1;
  return n2 == r2 ? t2.pop() : Yi.call(t2, n2, 1), --this.size, true;
}
function Bi(e2) {
  var t2 = this.__data__, n2 = $e$1(t2, e2);
  return n2 < 0 ? void 0 : t2[n2][1];
}
function Hi(e2) {
  return $e$1(this.__data__, e2) > -1;
}
function qi(e2, t2) {
  var n2 = this.__data__, r2 = $e$1(n2, e2);
  return r2 < 0 ? (++this.size, n2.push([e2, t2])) : n2[r2][1] = t2, this;
}
function F$1(e2) {
  var t2 = -1, n2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e2[t2];
    this.set(r2[0], r2[1]);
  }
}
F$1.prototype.clear = Ni;
F$1.prototype.delete = Gi;
F$1.prototype.get = Bi;
F$1.prototype.has = Hi;
F$1.prototype.set = qi;
var le$1 = Q$1(D$2, "Map");
function Ui() {
  this.size = 0, this.__data__ = {
    hash: new B$1(),
    map: new (le$1 || F$1)(),
    string: new B$1()
  };
}
function zi(e2) {
  var t2 = typeof e2;
  return t2 == "string" || t2 == "number" || t2 == "symbol" || t2 == "boolean" ? e2 !== "__proto__" : e2 === null;
}
function Ce$2(e2, t2) {
  var n2 = e2.__data__;
  return zi(t2) ? n2[typeof t2 == "string" ? "string" : "hash"] : n2.map;
}
function Qi(e2) {
  var t2 = Ce$2(this, e2).delete(e2);
  return this.size -= t2 ? 1 : 0, t2;
}
function Xi(e2) {
  return Ce$2(this, e2).get(e2);
}
function ki(e2) {
  return Ce$2(this, e2).has(e2);
}
function Vi(e2, t2) {
  var n2 = Ce$2(this, e2), r2 = n2.size;
  return n2.set(e2, t2), this.size += n2.size == r2 ? 0 : 1, this;
}
function L(e2) {
  var t2 = -1, n2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e2[t2];
    this.set(r2[0], r2[1]);
  }
}
L.prototype.clear = Ui;
L.prototype.delete = Qi;
L.prototype.get = Xi;
L.prototype.has = ki;
L.prototype.set = Vi;
var Zi = "Expected a function";
function tt$3(e2, t2) {
  if (typeof e2 != "function" || t2 != null && typeof t2 != "function")
    throw new TypeError(Zi);
  var n2 = function() {
    var r2 = arguments, a2 = t2 ? t2.apply(this, r2) : r2[0], i2 = n2.cache;
    if (i2.has(a2))
      return i2.get(a2);
    var o2 = e2.apply(this, r2);
    return n2.cache = i2.set(a2, o2) || i2, o2;
  };
  return n2.cache = new (tt$3.Cache || L)(), n2;
}
tt$3.Cache = L;
var Ki = 500;
function Ji(e2) {
  var t2 = tt$3(e2, function(r2) {
    return n2.size === Ki && n2.clear(), r2;
  }), n2 = t2.cache;
  return t2;
}
var eo$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, to$1 = /\\(\\)?/g, no$1 = Ji(function(e2) {
  var t2 = [];
  return e2.charCodeAt(0) === 46 && t2.push(""), e2.replace(eo$1, function(n2, r2, a2, i2) {
    t2.push(a2 ? i2.replace(to$1, "$1") : r2 || n2);
  }), t2;
});
function ro$1(e2) {
  return e2 == null ? "" : Vt(e2);
}
function sn(e2, t2) {
  return _(e2) ? e2 : et$3(e2, t2) ? [e2] : no$1(ro$1(e2));
}
var ao$1 = 1 / 0;
function De$2(e2) {
  if (typeof e2 == "string" || Qe$2(e2))
    return e2;
  var t2 = e2 + "";
  return t2 == "0" && 1 / e2 == -ao$1 ? "-0" : t2;
}
function un$1(e2, t2) {
  t2 = sn(t2, e2);
  for (var n2 = 0, r2 = t2.length; e2 != null && n2 < r2; )
    e2 = e2[De$2(t2[n2++])];
  return n2 && n2 == r2 ? e2 : void 0;
}
function io$1(e2, t2, n2) {
  var r2 = e2 == null ? void 0 : un$1(e2, t2);
  return r2 === void 0 ? n2 : r2;
}
function nt$3(e2, t2) {
  for (var n2 = -1, r2 = t2.length, a2 = e2.length; ++n2 < r2; )
    e2[a2 + n2] = t2[n2];
  return e2;
}
var Ot$1 = P ? P.isConcatSpreadable : void 0;
function oo$1(e2) {
  return _(e2) || Z$3(e2) || !!(Ot$1 && e2 && e2[Ot$1]);
}
function cn(e2, t2, n2, r2, a2) {
  var i2 = -1, o2 = e2.length;
  for (n2 || (n2 = oo$1), a2 || (a2 = []); ++i2 < o2; ) {
    var s2 = e2[i2];
    t2 > 0 && n2(s2) ? t2 > 1 ? cn(s2, t2 - 1, n2, r2, a2) : nt$3(a2, s2) : r2 || (a2[a2.length] = s2);
  }
  return a2;
}
var so$1 = an(Object.getPrototypeOf, Object);
const rt$2 = so$1;
var uo$1 = "[object Object]", co$1 = Function.prototype, lo$1 = Object.prototype, ln = co$1.toString, fo$1 = lo$1.hasOwnProperty, ho$1 = ln.call(Object);
function go$1(e2) {
  if (!C$1(e2) || U$1(e2) != uo$1)
    return false;
  var t2 = rt$2(e2);
  if (t2 === null)
    return true;
  var n2 = fo$1.call(t2, "constructor") && t2.constructor;
  return typeof n2 == "function" && n2 instanceof n2 && ln.call(n2) == ho$1;
}
function mo$1() {
  this.__data__ = new F$1(), this.size = 0;
}
function yo$1(e2) {
  var t2 = this.__data__, n2 = t2.delete(e2);
  return this.size = t2.size, n2;
}
function po$1(e2) {
  return this.__data__.get(e2);
}
function bo$1(e2) {
  return this.__data__.has(e2);
}
var wo$1 = 200;
function To$1(e2, t2) {
  var n2 = this.__data__;
  if (n2 instanceof F$1) {
    var r2 = n2.__data__;
    if (!le$1 || r2.length < wo$1 - 1)
      return r2.push([e2, t2]), this.size = ++n2.size, this;
    n2 = this.__data__ = new L(r2);
  }
  return n2.set(e2, t2), this.size = n2.size, this;
}
function x(e2) {
  var t2 = this.__data__ = new F$1(e2);
  this.size = t2.size;
}
x.prototype.clear = mo$1;
x.prototype.delete = yo$1;
x.prototype.get = po$1;
x.prototype.has = bo$1;
x.prototype.set = To$1;
function vo$1(e2, t2) {
  return e2 && he(t2, Ee$2(t2), e2);
}
function Oo$1(e2, t2) {
  return e2 && he(t2, me$1(t2), e2);
}
var fn = typeof exports == "object" && exports && !exports.nodeType && exports, St = fn && typeof module == "object" && module && !module.nodeType && module, So$1 = St && St.exports === fn, Mt = So$1 ? D$2.Buffer : void 0, _t = Mt ? Mt.allocUnsafe : void 0;
function dn$1(e2, t2) {
  if (t2)
    return e2.slice();
  var n2 = e2.length, r2 = _t ? _t(n2) : new e2.constructor(n2);
  return e2.copy(r2), r2;
}
function Mo$1(e2, t2) {
  for (var n2 = -1, r2 = e2 == null ? 0 : e2.length, a2 = 0, i2 = []; ++n2 < r2; ) {
    var o2 = e2[n2];
    t2(o2, n2, e2) && (i2[a2++] = o2);
  }
  return i2;
}
function hn$1() {
  return [];
}
var _o$1 = Object.prototype, Po$1 = _o$1.propertyIsEnumerable, Pt$1 = Object.getOwnPropertySymbols, at$2 = Pt$1 ? function(e2) {
  return e2 == null ? [] : (e2 = Object(e2), Mo$1(Pt$1(e2), function(t2) {
    return Po$1.call(e2, t2);
  }));
} : hn$1;
function xo$1(e2, t2) {
  return he(e2, at$2(e2), t2);
}
var Ao$1 = Object.getOwnPropertySymbols, gn$1 = Ao$1 ? function(e2) {
  for (var t2 = []; e2; )
    nt$3(t2, at$2(e2)), e2 = rt$2(e2);
  return t2;
} : hn$1;
function Eo$1(e2, t2) {
  return he(e2, gn$1(e2), t2);
}
function mn$1(e2, t2, n2) {
  var r2 = t2(e2);
  return _(e2) ? r2 : nt$3(r2, n2(e2));
}
function Ye$3(e2) {
  return mn$1(e2, Ee$2, at$2);
}
function $o$1(e2) {
  return mn$1(e2, me$1, gn$1);
}
var Ge$2 = Q$1(D$2, "DataView"), Be$1 = Q$1(D$2, "Promise"), V$1 = Q$1(D$2, "Set"), xt = "[object Map]", Co$1 = "[object Object]", At = "[object Promise]", Et$1 = "[object Set]", $t$1 = "[object WeakMap]", Ct = "[object DataView]", Do$1 = z$1(Ge$2), Io$1 = z$1(le$1), Fo$1 = z$1(Be$1), Lo$1 = z$1(V$1), Ro$1 = z$1(We$2), W$2 = U$1;
(Ge$2 && W$2(new Ge$2(new ArrayBuffer(1))) != Ct || le$1 && W$2(new le$1()) != xt || Be$1 && W$2(Be$1.resolve()) != At || V$1 && W$2(new V$1()) != Et$1 || We$2 && W$2(new We$2()) != $t$1) && (W$2 = function(e2) {
  var t2 = U$1(e2), n2 = t2 == Co$1 ? e2.constructor : void 0, r2 = n2 ? z$1(n2) : "";
  if (r2)
    switch (r2) {
      case Do$1:
        return Ct;
      case Io$1:
        return xt;
      case Fo$1:
        return At;
      case Lo$1:
        return Et$1;
      case Ro$1:
        return $t$1;
    }
  return t2;
});
const ee$1 = W$2;
var jo$1 = Object.prototype, No$1 = jo$1.hasOwnProperty;
function Wo$1(e2) {
  var t2 = e2.length, n2 = new e2.constructor(t2);
  return t2 && typeof e2[0] == "string" && No$1.call(e2, "index") && (n2.index = e2.index, n2.input = e2.input), n2;
}
var Se$1 = D$2.Uint8Array;
function it$3(e2) {
  var t2 = new e2.constructor(e2.byteLength);
  return new Se$1(t2).set(new Se$1(e2)), t2;
}
function Yo$1(e2, t2) {
  var n2 = t2 ? it$3(e2.buffer) : e2.buffer;
  return new e2.constructor(n2, e2.byteOffset, e2.byteLength);
}
var Go$1 = /\w*$/;
function Bo$1(e2) {
  var t2 = new e2.constructor(e2.source, Go$1.exec(e2));
  return t2.lastIndex = e2.lastIndex, t2;
}
var Dt$1 = P ? P.prototype : void 0, It = Dt$1 ? Dt$1.valueOf : void 0;
function Ho$1(e2) {
  return It ? Object(It.call(e2)) : {};
}
function yn(e2, t2) {
  var n2 = t2 ? it$3(e2.buffer) : e2.buffer;
  return new e2.constructor(n2, e2.byteOffset, e2.length);
}
var qo$1 = "[object Boolean]", Uo$1 = "[object Date]", zo$1 = "[object Map]", Qo$1 = "[object Number]", Xo$1 = "[object RegExp]", ko$1 = "[object Set]", Vo$1 = "[object String]", Zo$1 = "[object Symbol]", Ko$1 = "[object ArrayBuffer]", Jo$1 = "[object DataView]", es = "[object Float32Array]", ts = "[object Float64Array]", ns = "[object Int8Array]", rs = "[object Int16Array]", as = "[object Int32Array]", is = "[object Uint8Array]", os = "[object Uint8ClampedArray]", ss = "[object Uint16Array]", us = "[object Uint32Array]";
function cs(e2, t2, n2) {
  var r2 = e2.constructor;
  switch (t2) {
    case Ko$1:
      return it$3(e2);
    case qo$1:
    case Uo$1:
      return new r2(+e2);
    case Jo$1:
      return Yo$1(e2, n2);
    case es:
    case ts:
    case ns:
    case rs:
    case as:
    case is:
    case os:
    case ss:
    case us:
      return yn(e2, n2);
    case zo$1:
      return new r2();
    case Qo$1:
    case Vo$1:
      return new r2(e2);
    case Xo$1:
      return Bo$1(e2);
    case ko$1:
      return new r2();
    case Zo$1:
      return Ho$1(e2);
  }
}
function pn$1(e2) {
  return typeof e2.constructor == "function" && !xe$2(e2) ? ua(rt$2(e2)) : {};
}
var ls = "[object Map]";
function fs(e2) {
  return C$1(e2) && ee$1(e2) == ls;
}
var Ft$1 = J$2 && J$2.isMap, ds = Ft$1 ? Je$2(Ft$1) : fs, hs = "[object Set]";
function gs(e2) {
  return C$1(e2) && ee$1(e2) == hs;
}
var Lt = J$2 && J$2.isSet, ms = Lt ? Je$2(Lt) : gs, ys = 1, ps = 2, bs = 4, bn$1 = "[object Arguments]", ws$1 = "[object Array]", Ts = "[object Boolean]", vs = "[object Date]", Os = "[object Error]", wn$1 = "[object Function]", Ss = "[object GeneratorFunction]", Ms$1 = "[object Map]", _s$1 = "[object Number]", Tn$1 = "[object Object]", Ps$1 = "[object RegExp]", xs$1 = "[object Set]", As$1 = "[object String]", Es = "[object Symbol]", $s$1 = "[object WeakMap]", Cs$1 = "[object ArrayBuffer]", Ds$1 = "[object DataView]", Is$1 = "[object Float32Array]", Fs$1 = "[object Float64Array]", Ls$1 = "[object Int8Array]", Rs$1 = "[object Int16Array]", js = "[object Int32Array]", Ns$1 = "[object Uint8Array]", Ws$1 = "[object Uint8ClampedArray]", Ys = "[object Uint16Array]", Gs$1 = "[object Uint32Array]", y$1 = {};
y$1[bn$1] = y$1[ws$1] = y$1[Cs$1] = y$1[Ds$1] = y$1[Ts] = y$1[vs] = y$1[Is$1] = y$1[Fs$1] = y$1[Ls$1] = y$1[Rs$1] = y$1[js] = y$1[Ms$1] = y$1[_s$1] = y$1[Tn$1] = y$1[Ps$1] = y$1[xs$1] = y$1[As$1] = y$1[Es] = y$1[Ns$1] = y$1[Ws$1] = y$1[Ys] = y$1[Gs$1] = true;
y$1[Os] = y$1[wn$1] = y$1[$s$1] = false;
function ve$1(e2, t2, n2, r2, a2, i2) {
  var o2, s2 = t2 & ys, u2 = t2 & ps, c2 = t2 & bs;
  if (n2 && (o2 = a2 ? n2(e2, r2, a2, i2) : n2(e2)), o2 !== void 0)
    return o2;
  if (!I$1(e2))
    return e2;
  var l2 = _(e2);
  if (l2) {
    if (o2 = Wo$1(e2), !s2)
      return Zt(e2, o2);
  } else {
    var f2 = ee$1(e2), d2 = f2 == wn$1 || f2 == Ss;
    if (K$1(e2))
      return dn$1(e2, s2);
    if (f2 == Tn$1 || f2 == bn$1 || d2 && !a2) {
      if (o2 = u2 || d2 ? {} : pn$1(e2), !s2)
        return u2 ? Eo$1(e2, Oo$1(o2, e2)) : xo$1(e2, vo$1(o2, e2));
    } else {
      if (!y$1[f2])
        return a2 ? e2 : {};
      o2 = cs(e2, f2, s2);
    }
  }
  i2 || (i2 = new x());
  var m2 = i2.get(e2);
  if (m2)
    return m2;
  i2.set(e2, o2), ms(e2) ? e2.forEach(function(w2) {
    o2.add(ve$1(w2, t2, n2, w2, e2, i2));
  }) : ds(e2) && e2.forEach(function(w2, O2) {
    o2.set(O2, ve$1(w2, t2, n2, O2, e2, i2));
  });
  var T3 = c2 ? u2 ? $o$1 : Ye$3 : u2 ? me$1 : Ee$2, v2 = l2 ? void 0 : T3(e2);
  return wa$1(v2 || e2, function(w2, O2) {
    v2 && (O2 = w2, w2 = e2[O2]), Kt(o2, O2, ve$1(w2, t2, n2, O2, e2, i2));
  }), o2;
}
var Bs$1 = 1, Hs$1 = 4;
function qs(e2) {
  return ve$1(e2, Bs$1 | Hs$1);
}
var Us$1 = "__lodash_hash_undefined__";
function zs$1(e2) {
  return this.__data__.set(e2, Us$1), this;
}
function Qs(e2) {
  return this.__data__.has(e2);
}
function fe(e2) {
  var t2 = -1, n2 = e2 == null ? 0 : e2.length;
  for (this.__data__ = new L(); ++t2 < n2; )
    this.add(e2[t2]);
}
fe.prototype.add = fe.prototype.push = zs$1;
fe.prototype.has = Qs;
function Xs(e2, t2) {
  for (var n2 = -1, r2 = e2 == null ? 0 : e2.length; ++n2 < r2; )
    if (t2(e2[n2], n2, e2))
      return true;
  return false;
}
function vn(e2, t2) {
  return e2.has(t2);
}
var ks$1 = 1, Vs$1 = 2;
function On$1(e2, t2, n2, r2, a2, i2) {
  var o2 = n2 & ks$1, s2 = e2.length, u2 = t2.length;
  if (s2 != u2 && !(o2 && u2 > s2))
    return false;
  var c2 = i2.get(e2), l2 = i2.get(t2);
  if (c2 && l2)
    return c2 == t2 && l2 == e2;
  var f2 = -1, d2 = true, m2 = n2 & Vs$1 ? new fe() : void 0;
  for (i2.set(e2, t2), i2.set(t2, e2); ++f2 < s2; ) {
    var T3 = e2[f2], v2 = t2[f2];
    if (r2)
      var w2 = o2 ? r2(v2, T3, f2, t2, e2, i2) : r2(T3, v2, f2, e2, t2, i2);
    if (w2 !== void 0) {
      if (w2)
        continue;
      d2 = false;
      break;
    }
    if (m2) {
      if (!Xs(t2, function(O2, b2) {
        if (!vn(m2, b2) && (T3 === O2 || a2(T3, O2, n2, r2, i2)))
          return m2.push(b2);
      })) {
        d2 = false;
        break;
      }
    } else if (!(T3 === v2 || a2(T3, v2, n2, r2, i2))) {
      d2 = false;
      break;
    }
  }
  return i2.delete(e2), i2.delete(t2), d2;
}
function Zs(e2) {
  var t2 = -1, n2 = Array(e2.size);
  return e2.forEach(function(r2, a2) {
    n2[++t2] = [a2, r2];
  }), n2;
}
function ot$2(e2) {
  var t2 = -1, n2 = Array(e2.size);
  return e2.forEach(function(r2) {
    n2[++t2] = r2;
  }), n2;
}
var Ks = 1, Js = 2, eu = "[object Boolean]", tu$1 = "[object Date]", nu$1 = "[object Error]", ru = "[object Map]", au = "[object Number]", iu = "[object RegExp]", ou = "[object Set]", su$1 = "[object String]", uu = "[object Symbol]", cu = "[object ArrayBuffer]", lu = "[object DataView]", Rt = P ? P.prototype : void 0, Re$1 = Rt ? Rt.valueOf : void 0;
function fu(e2, t2, n2, r2, a2, i2, o2) {
  switch (n2) {
    case lu:
      if (e2.byteLength != t2.byteLength || e2.byteOffset != t2.byteOffset)
        return false;
      e2 = e2.buffer, t2 = t2.buffer;
    case cu:
      return !(e2.byteLength != t2.byteLength || !i2(new Se$1(e2), new Se$1(t2)));
    case eu:
    case tu$1:
    case au:
      return de$1(+e2, +t2);
    case nu$1:
      return e2.name == t2.name && e2.message == t2.message;
    case iu:
    case su$1:
      return e2 == t2 + "";
    case ru:
      var s2 = Zs;
    case ou:
      var u2 = r2 & Ks;
      if (s2 || (s2 = ot$2), e2.size != t2.size && !u2)
        return false;
      var c2 = o2.get(e2);
      if (c2)
        return c2 == t2;
      r2 |= Js, o2.set(e2, t2);
      var l2 = On$1(s2(e2), s2(t2), r2, a2, i2, o2);
      return o2.delete(e2), l2;
    case uu:
      if (Re$1)
        return Re$1.call(e2) == Re$1.call(t2);
  }
  return false;
}
var du = 1, hu = Object.prototype, gu = hu.hasOwnProperty;
function mu(e2, t2, n2, r2, a2, i2) {
  var o2 = n2 & du, s2 = Ye$3(e2), u2 = s2.length, c2 = Ye$3(t2), l2 = c2.length;
  if (u2 != l2 && !o2)
    return false;
  for (var f2 = u2; f2--; ) {
    var d2 = s2[f2];
    if (!(o2 ? d2 in t2 : gu.call(t2, d2)))
      return false;
  }
  var m2 = i2.get(e2), T3 = i2.get(t2);
  if (m2 && T3)
    return m2 == t2 && T3 == e2;
  var v2 = true;
  i2.set(e2, t2), i2.set(t2, e2);
  for (var w2 = o2; ++f2 < u2; ) {
    d2 = s2[f2];
    var O2 = e2[d2], b2 = t2[d2];
    if (r2)
      var S2 = o2 ? r2(b2, O2, d2, t2, e2, i2) : r2(O2, b2, d2, e2, t2, i2);
    if (!(S2 === void 0 ? O2 === b2 || a2(O2, b2, n2, r2, i2) : S2)) {
      v2 = false;
      break;
    }
    w2 || (w2 = d2 == "constructor");
  }
  if (v2 && !w2) {
    var E2 = e2.constructor, R2 = t2.constructor;
    E2 != R2 && "constructor" in e2 && "constructor" in t2 && !(typeof E2 == "function" && E2 instanceof E2 && typeof R2 == "function" && R2 instanceof R2) && (v2 = false);
  }
  return i2.delete(e2), i2.delete(t2), v2;
}
var yu = 1, jt$1 = "[object Arguments]", Nt$1 = "[object Array]", be$3 = "[object Object]", pu = Object.prototype, Wt$1 = pu.hasOwnProperty;
function bu(e2, t2, n2, r2, a2, i2) {
  var o2 = _(e2), s2 = _(t2), u2 = o2 ? Nt$1 : ee$1(e2), c2 = s2 ? Nt$1 : ee$1(t2);
  u2 = u2 == jt$1 ? be$3 : u2, c2 = c2 == jt$1 ? be$3 : c2;
  var l2 = u2 == be$3, f2 = c2 == be$3, d2 = u2 == c2;
  if (d2 && K$1(e2)) {
    if (!K$1(t2))
      return false;
    o2 = true, l2 = false;
  }
  if (d2 && !l2)
    return i2 || (i2 = new x()), o2 || Ae$2(e2) ? On$1(e2, t2, n2, r2, a2, i2) : fu(e2, t2, u2, n2, r2, a2, i2);
  if (!(n2 & yu)) {
    var m2 = l2 && Wt$1.call(e2, "__wrapped__"), T3 = f2 && Wt$1.call(t2, "__wrapped__");
    if (m2 || T3) {
      var v2 = m2 ? e2.value() : e2, w2 = T3 ? t2.value() : t2;
      return i2 || (i2 = new x()), a2(v2, w2, n2, r2, i2);
    }
  }
  return d2 ? (i2 || (i2 = new x()), mu(e2, t2, n2, r2, a2, i2)) : false;
}
function st$2(e2, t2, n2, r2, a2) {
  return e2 === t2 ? true : e2 == null || t2 == null || !C$1(e2) && !C$1(t2) ? e2 !== e2 && t2 !== t2 : bu(e2, t2, n2, r2, st$2, a2);
}
var wu = 1, Tu = 2;
function vu(e2, t2, n2, r2) {
  var a2 = n2.length, i2 = a2, o2 = !r2;
  if (e2 == null)
    return !i2;
  for (e2 = Object(e2); a2--; ) {
    var s2 = n2[a2];
    if (o2 && s2[2] ? s2[1] !== e2[s2[0]] : !(s2[0] in e2))
      return false;
  }
  for (; ++a2 < i2; ) {
    s2 = n2[a2];
    var u2 = s2[0], c2 = e2[u2], l2 = s2[1];
    if (o2 && s2[2]) {
      if (c2 === void 0 && !(u2 in e2))
        return false;
    } else {
      var f2 = new x();
      if (r2)
        var d2 = r2(c2, l2, u2, e2, t2, f2);
      if (!(d2 === void 0 ? st$2(l2, c2, wu | Tu, r2, f2) : d2))
        return false;
    }
  }
  return true;
}
function Sn$1(e2) {
  return e2 === e2 && !I$1(e2);
}
function Ou(e2) {
  for (var t2 = Ee$2(e2), n2 = t2.length; n2--; ) {
    var r2 = t2[n2], a2 = e2[r2];
    t2[n2] = [r2, a2, Sn$1(a2)];
  }
  return t2;
}
function Mn$1(e2, t2) {
  return function(n2) {
    return n2 == null ? false : n2[e2] === t2 && (t2 !== void 0 || e2 in Object(n2));
  };
}
function Su(e2) {
  var t2 = Ou(e2);
  return t2.length == 1 && t2[0][2] ? Mn$1(t2[0][0], t2[0][1]) : function(n2) {
    return n2 === e2 || vu(n2, e2, t2);
  };
}
function Mu(e2, t2) {
  return e2 != null && t2 in Object(e2);
}
function _u(e2, t2, n2) {
  t2 = sn(t2, e2);
  for (var r2 = -1, a2 = t2.length, i2 = false; ++r2 < a2; ) {
    var o2 = De$2(t2[r2]);
    if (!(i2 = e2 != null && n2(e2, o2)))
      break;
    e2 = e2[o2];
  }
  return i2 || ++r2 != a2 ? i2 : (a2 = e2 == null ? 0 : e2.length, !!a2 && Ke$1(a2) && Ve$2(o2, a2) && (_(e2) || Z$3(e2)));
}
function Pu(e2, t2) {
  return e2 != null && _u(e2, t2, Mu);
}
var xu = 1, Au = 2;
function Eu(e2, t2) {
  return et$3(e2) && Sn$1(t2) ? Mn$1(De$2(e2), t2) : function(n2) {
    var r2 = io$1(n2, e2);
    return r2 === void 0 && r2 === t2 ? Pu(n2, e2) : st$2(t2, r2, xu | Au);
  };
}
function $u(e2) {
  return function(t2) {
    return t2 == null ? void 0 : t2[e2];
  };
}
function Cu(e2) {
  return function(t2) {
    return un$1(t2, e2);
  };
}
function Du(e2) {
  return et$3(e2) ? $u(De$2(e2)) : Cu(e2);
}
function Iu(e2) {
  return typeof e2 == "function" ? e2 : e2 == null ? Xe$2 : typeof e2 == "object" ? _(e2) ? Eu(e2[0], e2[1]) : Su(e2) : Du(e2);
}
function Fu(e2) {
  return function(t2, n2, r2) {
    for (var a2 = -1, i2 = Object(t2), o2 = r2(t2), s2 = o2.length; s2--; ) {
      var u2 = o2[e2 ? s2 : ++a2];
      if (n2(i2[u2], u2, i2) === false)
        break;
    }
    return t2;
  };
}
var Lu = Fu();
function He$2(e2, t2, n2) {
  (n2 !== void 0 && !de$1(e2[t2], n2) || n2 === void 0 && !(t2 in e2)) && Ze$2(e2, t2, n2);
}
function qe$2(e2) {
  return C$1(e2) && ge$1(e2);
}
function Ue$1(e2, t2) {
  if (!(t2 === "constructor" && typeof e2[t2] == "function") && t2 != "__proto__")
    return e2[t2];
}
function Ru(e2) {
  return he(e2, me$1(e2));
}
function ju(e2, t2, n2, r2, a2, i2, o2) {
  var s2 = Ue$1(e2, n2), u2 = Ue$1(t2, n2), c2 = o2.get(u2);
  if (c2) {
    He$2(e2, n2, c2);
    return;
  }
  var l2 = i2 ? i2(s2, u2, n2 + "", e2, t2, o2) : void 0, f2 = l2 === void 0;
  if (f2) {
    var d2 = _(u2), m2 = !d2 && K$1(u2), T3 = !d2 && !m2 && Ae$2(u2);
    l2 = u2, d2 || m2 || T3 ? _(s2) ? l2 = s2 : qe$2(s2) ? l2 = Zt(s2) : m2 ? (f2 = false, l2 = dn$1(u2, true)) : T3 ? (f2 = false, l2 = yn(u2, true)) : l2 = [] : go$1(u2) || Z$3(u2) ? (l2 = s2, Z$3(s2) ? l2 = Ru(s2) : (!I$1(s2) || ke$2(s2)) && (l2 = pn$1(u2))) : f2 = false;
  }
  f2 && (o2.set(u2, l2), a2(l2, u2, r2, i2, o2), o2.delete(u2)), He$2(e2, n2, l2);
}
function _n$1(e2, t2, n2, r2, a2) {
  e2 !== t2 && Lu(t2, function(i2, o2) {
    if (a2 || (a2 = new x()), I$1(i2))
      ju(e2, t2, o2, n2, _n$1, r2, a2);
    else {
      var s2 = r2 ? r2(Ue$1(e2, o2), i2, o2 + "", e2, t2, a2) : void 0;
      s2 === void 0 && (s2 = i2), He$2(e2, o2, s2);
    }
  }, me$1);
}
function Nu(e2, t2, n2) {
  for (var r2 = -1, a2 = e2 == null ? 0 : e2.length; ++r2 < a2; )
    if (n2(t2, e2[r2]))
      return true;
  return false;
}
function Wu(e2) {
  var t2 = e2 == null ? 0 : e2.length;
  return t2 ? e2[t2 - 1] : void 0;
}
var Yu = "[object Map]", Gu = "[object Set]", Bu = Object.prototype, Hu = Bu.hasOwnProperty;
function qu(e2) {
  if (e2 == null)
    return true;
  if (ge$1(e2) && (_(e2) || typeof e2 == "string" || typeof e2.splice == "function" || K$1(e2) || Ae$2(e2) || Z$3(e2)))
    return !e2.length;
  var t2 = ee$1(e2);
  if (t2 == Yu || t2 == Gu)
    return !e2.size;
  if (xe$2(e2))
    return !on(e2).length;
  for (var n2 in e2)
    if (Hu.call(e2, n2))
      return false;
  return true;
}
var Uu = Da(function(e2, t2, n2) {
  _n$1(e2, t2, n2);
});
const h = Uu;
var zu = 1 / 0, Qu = V$1 && 1 / ot$2(new V$1([, -0]))[1] == zu ? function(e2) {
  return new V$1(e2);
} : la, Xu = 200;
function Pn$1(e2, t2, n2) {
  var r2 = -1, a2 = Ma$1, i2 = e2.length, o2 = true, s2 = [], u2 = s2;
  if (n2)
    o2 = false, a2 = Nu;
  else if (i2 >= Xu) {
    var c2 = t2 ? null : Qu(e2);
    if (c2)
      return ot$2(c2);
    o2 = false, a2 = vn, u2 = new fe();
  } else
    u2 = t2 ? [] : s2;
  e:
    for (; ++r2 < i2; ) {
      var l2 = e2[r2], f2 = t2 ? t2(l2) : l2;
      if (l2 = n2 || l2 !== 0 ? l2 : 0, o2 && f2 === f2) {
        for (var d2 = u2.length; d2--; )
          if (u2[d2] === f2)
            continue e;
        t2 && u2.push(f2), s2.push(l2);
      } else
        a2(u2, f2, n2) || (u2 !== s2 && u2.push(f2), s2.push(l2));
    }
  return s2;
}
var ku = Jt(function(e2) {
  var t2 = Wu(e2);
  return qe$2(t2) && (t2 = void 0), Pn$1(cn(e2, 1, qe$2, true), Iu(t2));
});
function bl$1(e2) {
  return e2 && e2.length ? Pn$1(e2) : [];
}
const Vu = "cds", Zu = {
  opacity: {
    unselected: 0.05,
    selected: 0.4
  }
}, Ku = {
  ticks: {
    number: 7,
    rotateIfSmallerThan: 30,
    verticalSpaceRatio: 2.5,
    horizontalSpaceRatio: 3.5
  },
  ratio: {
    reference: "value",
    compareTo: "marker"
  },
  paddingRatio: 0.1,
  hover: {
    rectanglePadding: 4
  }
}, Ju = {
  duration: 1e3,
  ease: easeCubicInOut,
  zoomLevel: 3
}, xn$1 = {
  circles: {
    fillOpacity: 0.3,
    hover: {
      stroke: "#FFF"
    }
  },
  padding: {
    mainGroup: 4,
    children: 2
  },
  hierarchyLevel: 2
}, ec = {
  pairingOptions: {
    "1-color": 4,
    "2-color": 5,
    "3-color": 5,
    "4-color": 3,
    "5-color": 2,
    "14-color": 1
  }
}, nc = {
  defaultBins: 10
}, rc = {
  items: {
    status: {
      ACTIVE: 1,
      DISABLED: 0
    },
    horizontalSpace: 12,
    verticalSpace: 24,
    textYOffset: 8,
    spaceAfter: 4
  },
  checkbox: {
    radius: 6.5
  },
  radius: {
    iconData: [
      { cx: 7, cy: 7, r: 6.5 },
      { cx: 7, cy: 10, r: 3.5 }
    ],
    fill: null,
    stroke: "#8c8c8c"
  },
  line: {
    yPosition: 6,
    width: 24,
    strokeWidth: 1.4,
    fill: null,
    stroke: "#999999"
  },
  area: {
    width: 24,
    height: 14,
    fill: "#6f6f6f",
    stroke: null
  },
  size: {
    iconData: [
      { width: 23, height: 12 },
      { width: 13, height: 6 }
    ],
    fill: null,
    stroke: "#8D8D8D"
  },
  quartile: {
    iconData: [
      { x: 0, y: 0, width: 24, height: 13 },
      { x: 11, y: 4, width: 1, height: 4 }
    ]
  },
  zoom: {
    iconData: [{ x: 0, y: 0, width: 12, height: 12 }],
    color: "#8D8D8D"
  },
  color: {
    barWidth: 300,
    barHeight: 8,
    axisYTranslation: 10
  }
}, ac = {
  opacity: {
    unselected: 0.3,
    selected: 1
  },
  weight: {
    selected: 2,
    unselected: 1
  }
}, oc = {
  radiusOffset: -15,
  innerRadius: 2,
  padAngle: 7e-3,
  hoverArc: {
    outerRadiusOffset: 3
  },
  xOffset: 30,
  yOffset: 20,
  yOffsetCallout: 10,
  callout: {
    minSliceDegree: 5,
    offsetX: 15,
    offsetY: 12,
    horizontalLineLength: 8,
    textMargin: 2
  }
}, lc = {
  default: {
    size: 24
  }
}, fc = {
  defaultOffset: 4,
  horizontalOffset: 10
}, dc = {
  default: {
    duration: 300
  },
  pie_slice_mouseover: {
    duration: 100
  },
  pie_slice_mouseout: {
    duration: 100
  },
  pie_chart_titles: {
    duration: 375
  },
  graph_element_mouseover_fill_update: {
    duration: 100
  },
  graph_element_mouseout_fill_update: {
    duration: 100
  }
}, gc = {
  height: {
    [K$2.GRAPH_VIEW]: 32,
    [K$2.SLIDER_VIEW]: 10
  },
  spacerHeight: 8,
  handleWidth: 5,
  handleBarWidth: 1,
  handleBarHeight: 12
}, An$1 = [
  {
    type: rE.RADIUS,
    name: "Radius"
  },
  {
    type: rE.AREA,
    name: "Poor area"
  },
  {
    type: rE.AREA,
    name: "Satisfactory area"
  },
  {
    type: rE.AREA,
    name: "Great area"
  },
  {
    type: rE.QUARTILE,
    name: "Quartiles"
  }
], k$3 = {
  type: h$1.END_LINE,
  threshold: 16,
  numCharacter: 14
}, mc = {
  code: typeof navigator < "u" && (navigator == null ? void 0 : navigator.language) || "en-US",
  // read from browser's navigator.language
  number: (e2, t2 = (navigator == null ? void 0 : navigator.language) || "en-US") => e2.toLocaleString(t2),
  // based on code property if specified
  date: (e2, t2 = (navigator == null ? void 0 : navigator.language) || "en-US", n2 = {}, r2 = null) => r2 || e2.toLocaleDateString(t2, n2),
  // based on code property if specified
  time: (e2, t2 = (navigator == null ? void 0 : navigator.language) || "en-US", n2 = {}, r2 = null) => r2 || e2.toLocaleTimeString(t2, n2),
  // based on code property if specified
  optionsObject: {
    "15seconds": {
      primary: {
        "MMM d, pp": {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hourCycle: "h12"
        },
        "MMM d, h:mm:ss.SSS a": {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          fractionalSecondDigits: 3,
          hourCycle: "h12"
        }
      },
      secondary: {
        pp: {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hourCycle: "h12"
        },
        "h:mm:ss.SSS a": {
          hour: "numeric",
          minute: "2-digit",
          fractionalSecondDigits: 3,
          hourCycle: "h12"
        }
      },
      type: "time"
    },
    minute: {
      primary: {
        "MMM d, p": {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hourCycle: "h12"
        }
      },
      secondary: {
        p: {
          hour: "numeric",
          minute: "2-digit",
          hourCycle: "h12"
        }
      },
      type: "time"
    },
    "30minutes": {
      primary: {
        "MMM d, p": {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hourCycle: "h12"
        }
      },
      secondary: {
        p: {
          hour: "numeric",
          minute: "2-digit",
          hourCycle: "h12"
        }
      },
      type: "time"
    },
    hourly: {
      primary: {
        "MMM d, hh a": {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          hourCycle: "h12"
        }
      },
      secondary: {
        "hh a": {
          hour: "2-digit",
          hourCycle: "h12"
        }
      },
      type: "time"
    },
    daily: {
      primary: {
        "MMM d": {
          month: "short",
          day: "numeric"
        }
      },
      secondary: {
        d: {
          day: "numeric"
        }
      },
      type: "date"
    },
    weekly: {
      primary: {
        "eee, MMM d": {
          weekday: "short",
          month: "short",
          day: "numeric"
        }
      },
      secondary: {
        eee: {
          weekday: "short"
        }
      },
      type: "date"
    },
    monthly: {
      primary: {
        "MMM yyyy": {
          month: "short",
          year: "numeric"
        }
      },
      secondary: {
        MMM: {
          month: "short"
        }
      },
      type: "date"
    },
    quarterly: {
      primary: {},
      secondary: {},
      type: "date"
    },
    yearly: {
      primary: {
        yyyy: {
          year: "numeric"
        }
      },
      secondary: {
        yyyy: {
          year: "numeric"
        }
      },
      type: "date"
    }
  },
  translations: {
    group: "Group",
    total: "Total",
    meter: {
      title: ""
      //default is emply string as meter title is dataset label
    },
    tabularRep: {
      title: "Tabular representation",
      downloadAsCSV: "Download as CSV"
    },
    toolbar: {
      exportAsCSV: "Export to CSV",
      exportAsJPG: "Export to JPG",
      exportAsPNG: "Export to PNG",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      resetZoom: "Reset zoom",
      moreOptions: "More options",
      makeFullScreen: "Make fullscreen",
      exitFullScreen: "Exit fullscreen",
      showAsTable: "Show as table"
    }
  }
}, yc = {
  enabled: true,
  position: w$1.BOTTOM,
  clickable: true,
  truncation: k$3,
  alignment: k$4.LEFT,
  order: null,
  additionalItems: []
}, En = {
  x: {
    // set enable to false will not draw grid and stroke of grid backdrop
    enabled: true,
    numberOfTicks: 15,
    alignWithAxisTicks: false
  },
  y: {
    // set enable to false will not draw grid and stroke of grid backdrop
    enabled: true,
    numberOfTicks: 5,
    alignWithAxisTicks: false
  }
}, $n = {
  // enable or disable ruler
  enabled: true
}, ut$2 = {
  enabled: true,
  showTotal: true,
  truncation: k$3,
  groupLabel: "Group"
}, Cn$1 = {
  top: {
    visible: true,
    includeZero: true,
    truncation: k$3
  },
  bottom: {
    visible: true,
    includeZero: true,
    truncation: k$3
  },
  left: {
    visible: true,
    includeZero: true,
    truncation: k$3
  },
  right: {
    visible: true,
    includeZero: true,
    truncation: k$3
  }
}, ye$1 = {
  addSpaceOnEdges: 1,
  showDayName: false,
  localeObject: Qt,
  timeIntervalFormats: {
    "15seconds": { primary: "MMM d, pp", secondary: "pp" },
    minute: { primary: "MMM d, p", secondary: "p" },
    "30minutes": { primary: "MMM d, p", secondary: "p" },
    hourly: { primary: "MMM d, hh a", secondary: "hh a" },
    daily: { primary: "MMM d", secondary: "d" },
    weekly: { primary: "eee, MMM d", secondary: "eee" },
    monthly: { primary: "MMM yyyy", secondary: "MMM" },
    quarterly: { primary: "QQQ ''yy", secondary: "QQQ" },
    yearly: { primary: "yyyy", secondary: "yyyy" }
  }
};
let Dn$1 = false;
try {
  Dn$1 = typeof document < "u" && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
} catch (e2) {
  console.warn("Fullscreen capabilities check failed: ", e2.message);
}
const M$1 = {
  width: null,
  height: null,
  resizable: true,
  theme: g$2.WHITE,
  tooltip: ut$2,
  legend: yc,
  locale: mc,
  style: {
    prefix: "cc"
  },
  data: {
    groupMapsTo: "group",
    loading: false,
    selectedGroups: []
  },
  color: {
    scale: null,
    pairing: {
      numberOfVariants: null,
      option: 1
    },
    gradient: {
      enabled: false
    }
  },
  toolbar: {
    enabled: true,
    numberOfIcons: 3,
    controls: [
      {
        type: y$2.SHOW_AS_DATATABLE
      },
      ...Dn$1 ? [
        {
          type: y$2.MAKE_FULLSCREEN
        }
      ] : [],
      {
        type: y$2.EXPORT_CSV
      },
      {
        type: y$2.EXPORT_PNG
      },
      {
        type: y$2.EXPORT_JPG
      }
    ]
  }
}, In$1 = h({}, M$1, {
  thematic: {
    projection: uE.geoNaturalEarth1
  }
}), pe$1 = h({}, M$1, {
  axes: Cn$1,
  timeScale: ye$1,
  grid: En,
  ruler: $n,
  zoomBar: {
    zoomRatio: 0.4,
    minZoomRatio: 0.01,
    top: {
      enabled: false,
      type: K$2.GRAPH_VIEW
    }
  }
}), H$1 = h({}, pe$1, {
  bars: {
    maxWidth: 16,
    spacingFactor: 0.25
  },
  timeScale: h(ye$1, {
    addSpaceOnEdges: 1
  })
}), pc = h({}, H$1, {}), bc = h({}, H$1, {}), wc = h({}, H$1, {
  bars: h({}, H$1.bars, {
    dividerSize: 1.5
  })
}), Tc = h({}, H$1, {}), ct$1 = h({}, pe$1, {
  points: {
    // default point radius to 4
    radius: 4,
    fillOpacity: 0.3,
    filled: true,
    enabled: true
  }
}), vc = ct$1, Fn$1 = h({}, ct$1, {
  points: {
    // default point radius to 3
    radius: 3,
    filled: false,
    enabled: true
  }
}), Ln$1 = h({}, Fn$1, {
  timeScale: h(ye$1, {
    addSpaceOnEdges: 0
  })
}), Oc = Ln$1, Sc = h({}, pe$1, {
  bubble: {
    radiusMapsTo: "radius",
    radiusLabel: "Radius",
    radiusRange: (e2) => {
      const t2 = Math.min(e2.width, e2.height);
      return [t2 * 3 / 400, t2 * 25 / 400];
    },
    fillOpacity: 0.2,
    enabled: true
  },
  points: {
    filled: true
  },
  legend: {
    additionalItems: [
      {
        type: rE.RADIUS,
        name: "Radius"
      }
    ]
  }
}), Mc = h({}, pe$1, {
  bullet: {
    performanceAreaTitles: ["Poor", "Satisfactory", "Great"]
  },
  grid: {
    x: {
      enabled: false
    },
    y: {
      enabled: false
    }
  },
  legend: {
    additionalItems: [
      {
        type: rE.AREA,
        name: "Poor area"
      },
      {
        type: rE.AREA,
        name: "Satisfactory area"
      },
      {
        type: rE.AREA,
        name: "Great area"
      },
      {
        type: rE.QUARTILE,
        name: "Quartiles"
      }
    ]
  }
}), _c = h({}, H$1, {
  bars: {
    dividerSize: 1.5
  },
  timeScale: h(ye$1, {
    addSpaceOnEdges: 0
  })
}), Pc = h({}, M$1, {
  tooltip: h({}, ut$2, {
    wordLabel: "Word",
    valueLabel: "Value"
  }),
  wordCloud: {
    fontSizeMapsTo: "value",
    fontSizeRange: (e2) => {
      const t2 = Math.min(e2.width, e2.height);
      return [t2 * 20 / 400, t2 * 75 / 400];
    },
    wordMapsTo: "word"
  }
}), Rn$1 = h({}, M$1, {
  pie: {
    labels: {
      formatter: null,
      enabled: true
    },
    alignment: k$4.LEFT,
    sortFunction: null,
    valueMapsTo: "value"
  }
}), xc = h({}, M$1, {
  legend: {
    enabled: false
  },
  gauge: {
    type: Q$2.SEMI,
    arcWidth: 16,
    deltaArrow: {
      size: (e2) => e2 / 8,
      enabled: true
    },
    showPercentageSymbol: true,
    status: null,
    numberSpacing: 10,
    deltaFontSize: (e2) => e2 / 8,
    valueFontSize: (e2) => e2 / 2.5,
    alignment: k$4.LEFT
  }
}), Ac = h({}, Rn$1, {
  donut: {
    center: {
      numberFontSize: (e2) => `${Math.min(e2 / 100 * 24, 24)}px`,
      titleFontSize: (e2) => `${Math.min(e2 / 100 * 15, 15)}px`,
      titleYPosition: (e2) => Math.min(e2 / 80 * 20, 20)
    },
    alignment: k$4.LEFT
  }
}), jn$1 = h({}, M$1, {
  legend: {
    enabled: false,
    clickable: false
  },
  meter: {
    showLabels: true,
    proportional: null,
    statusBar: {
      percentageIndicator: {
        enabled: true
      }
    }
  }
}), Ec = h({}, jn$1, {
  legend: {
    enabled: true
  }
}), $c = h({}, M$1, {
  radar: {
    axes: {
      angle: "key",
      value: "value"
    },
    alignment: k$4.LEFT
  },
  tooltip: {
    gridline: {
      enabled: true
    }
  }
}), Cc = h({}, H$1, {
  comboChartTypes: []
}), Dc = h(
  {
    tree: {
      type: X$3.TREE
    }
  },
  M$1,
  {}
), Ic = h({}, M$1, {
  data: h(M$1.data, {
    groupMapsTo: "name"
  })
}), Fc = h({}, M$1, xn$1, {
  data: h(M$1.data, {
    groupMapsTo: "name"
  })
}), Lc = h({}, M$1, {
  alluvial: {
    data: h(M$1.data, {
      groupMapsTo: "source"
    }),
    nodeAlignment: k$4.CENTER,
    nodePadding: 24,
    monochrome: false,
    nodes: []
  }
}), Rc = h({}, M$1, {
  axes: Cn$1,
  heatmap: {
    divider: {
      state: OE.AUTO
    },
    colorLegend: {
      type: "linear"
    }
  }
}), jc = h({}, In$1, {
  choropleth: {
    colorLegend: {
      type: "linear"
    }
  }
}), Nc = {
  alluvialChart: Lc,
  areaChart: Ln$1,
  axisChart: pe$1,
  boxplotChart: Tc,
  bubbleChart: Sc,
  bulletChart: Mc,
  chart: M$1,
  circlePackChart: Fc,
  choroplethChart: jc,
  comboChart: Cc,
  donutChart: Ac,
  gaugeChart: xc,
  groupedBarChart: bc,
  heatmapChart: Rc,
  histogramChart: _c,
  lineChart: Fn$1,
  lollipopChart: vc,
  meterChart: jn$1,
  pieChart: Rn$1,
  proportionalMeterChart: Ec,
  radarChart: $c,
  scatterChart: ct$1,
  simpleBarChart: pc,
  stackedAreaChart: Oc,
  stackedBarChart: wc,
  thematicChart: In$1,
  treeChart: Dc,
  treemapChart: Ic,
  wordCloudChart: Pc
};
function Tl(e2, t2, n2) {
  let r2 = null;
  return function(...a2) {
    const i2 = this;
    i2.mousePosition = pointer(a2[0], n2), clearTimeout(r2), r2 = setTimeout(function() {
      e2.apply(i2, a2);
    }, t2);
  };
}
function vl$1(e2, t2) {
  var a2;
  const n2 = qs(e2), r2 = Object.keys(t2.axes || {});
  (a2 = t2 == null ? void 0 : t2.toolbar) != null && a2.controls && delete n2.toolbar.controls, r2.length === 0 && delete n2.axes;
  for (const i2 in n2.axes)
    if (r2.includes(i2)) {
      const o2 = t2.axes[i2];
      (o2.primary || o2.secondary) && console.warn(
        "`primary` & `secondary` are no longer needed for axis configurations. Read more here https://charts.carbondesignsystem.com/?path=/story/docs-tutorials--tabular-data-format"
      );
      const s2 = o2.mapsTo;
      if (s2 == null) {
        const u2 = o2.scaleType;
        u2 == null ? o2.mapsTo = "value" : u2 === P$1.TIME ? o2.mapsTo = "date" : u2 === P$1.LABELS && (o2.mapsTo = "key");
      }
    } else
      delete n2.axes[i2];
  return Wc(n2, t2), h(n2, t2);
}
function Ol(e2) {
  if (!e2)
    return;
  const t2 = /translate\([0-9]+\.?[0-9]*,[0-9]+\.?[0-9]*\)/, n2 = e2.getAttribute("transform").match(t2);
  if (!n2)
    return null;
  if (n2[0]) {
    const r2 = n2[0].replace(/translate\(/, "").replace(/\)/, "").split(",");
    return {
      tx: r2[0],
      ty: r2[1]
    };
  }
  return null;
}
function _l(e2, t2, n2) {
  if (n2 > e2.length)
    return e2;
  if (t2 === h$1.MID_LINE)
    return e2.substr(0, n2 / 2) + "..." + e2.substr(-n2 / 2);
  if (t2 === h$1.FRONT_LINE)
    return "..." + e2.substr(-n2);
  if (t2 === h$1.END_LINE)
    return e2.substr(0, n2) + "...";
}
function Wc(e2, t2) {
  const n2 = G$1(e2, "legend", "additionalItems"), r2 = G$1(t2, "legend", "additionalItems");
  if (n2 && r2) {
    const a2 = r2.map((s2) => s2.type), i2 = n2.map((s2) => s2.type), o2 = An$1.filter(
      (s2) => i2.includes(s2.type) && !a2.includes(s2.type)
    );
    e2.legend.additionalItems = o2, t2.legend.additionalItems = ku(
      o2,
      r2,
      "name"
    );
  }
}
const G$1 = (e2, ...t2) => {
  let n2 = e2;
  if (n2) {
    for (const r2 of t2)
      if (n2[r2] !== null && n2[r2] !== void 0)
        n2 = n2[r2];
      else
        return null;
    return n2;
  }
  return null;
}, Yc = (e2, t2) => t2 === F$2.HORIZONTAL ? {
  y0: e2.x0,
  y1: e2.x1,
  x0: e2.y0,
  x1: e2.y1
} : e2, Pl = (e2, t2) => {
  const { x0: n2, x1: r2, y0: a2, y1: i2 } = Yc(e2, t2);
  return `M${n2},${a2}L${n2},${i2}L${r2},${i2}L${r2},${a2}L${n2},${a2}`;
};
function xl(e2, t2, n2) {
  return n2 === F$2.VERTICAL ? [e2, t2] : [t2, e2];
}
const Nn$1 = 6048e5, Gc = 864e5, Al = 6e4, El$1 = 36e5;
function Yt$1(e2) {
  const t2 = A$1(e2);
  return t2.setHours(0, 0, 0, 0), t2;
}
function Gt$1(e2) {
  const t2 = A$1(e2), n2 = new Date(
    Date.UTC(
      t2.getFullYear(),
      t2.getMonth(),
      t2.getDate(),
      t2.getHours(),
      t2.getMinutes(),
      t2.getSeconds(),
      t2.getMilliseconds()
    )
  );
  return n2.setUTCFullYear(t2.getFullYear()), +e2 - +n2;
}
function Bc(e2, t2) {
  const n2 = Yt$1(e2), r2 = Yt$1(t2), a2 = +n2 - Gt$1(n2), i2 = +r2 - Gt$1(r2);
  return Math.round((a2 - i2) / Gc);
}
function q$2(e2, t2) {
  return e2 instanceof Date ? new e2.constructor(t2) : new Date(t2);
}
function Hc(e2) {
  const t2 = A$1(e2), n2 = q$2(e2, 0);
  return n2.setFullYear(t2.getFullYear(), 0, 1), n2.setHours(0, 0, 0, 0), n2;
}
function qc(e2) {
  const t2 = A$1(e2);
  return Bc(t2, Hc(t2)) + 1;
}
function Me$1(e2) {
  return ue(e2, { weekStartsOn: 1 });
}
function Wn(e2) {
  const t2 = A$1(e2), n2 = t2.getFullYear(), r2 = q$2(e2, 0);
  r2.setFullYear(n2 + 1, 0, 4), r2.setHours(0, 0, 0, 0);
  const a2 = Me$1(r2), i2 = q$2(e2, 0);
  i2.setFullYear(n2, 0, 4), i2.setHours(0, 0, 0, 0);
  const o2 = Me$1(i2);
  return t2.getTime() >= a2.getTime() ? n2 + 1 : t2.getTime() >= o2.getTime() ? n2 : n2 - 1;
}
function Uc(e2) {
  const t2 = Wn(e2), n2 = q$2(e2, 0);
  return n2.setFullYear(t2, 0, 4), n2.setHours(0, 0, 0, 0), Me$1(n2);
}
function zc(e2) {
  const t2 = A$1(e2), n2 = +Me$1(t2) - +Uc(t2);
  return Math.round(n2 / Nn$1) + 1;
}
function Yn(e2, t2) {
  var l2, f2, d2, m2;
  const n2 = A$1(e2), r2 = n2.getFullYear(), a2 = Pe$2(), i2 = (t2 == null ? void 0 : t2.firstWeekContainsDate) ?? ((f2 = (l2 = t2 == null ? void 0 : t2.locale) == null ? void 0 : l2.options) == null ? void 0 : f2.firstWeekContainsDate) ?? a2.firstWeekContainsDate ?? ((m2 = (d2 = a2.locale) == null ? void 0 : d2.options) == null ? void 0 : m2.firstWeekContainsDate) ?? 1, o2 = q$2(e2, 0);
  o2.setFullYear(r2 + 1, 0, i2), o2.setHours(0, 0, 0, 0);
  const s2 = ue(o2, t2), u2 = q$2(e2, 0);
  u2.setFullYear(r2, 0, i2), u2.setHours(0, 0, 0, 0);
  const c2 = ue(u2, t2);
  return n2.getTime() >= s2.getTime() ? r2 + 1 : n2.getTime() >= c2.getTime() ? r2 : r2 - 1;
}
function Qc(e2, t2) {
  var s2, u2, c2, l2;
  const n2 = Pe$2(), r2 = (t2 == null ? void 0 : t2.firstWeekContainsDate) ?? ((u2 = (s2 = t2 == null ? void 0 : t2.locale) == null ? void 0 : s2.options) == null ? void 0 : u2.firstWeekContainsDate) ?? n2.firstWeekContainsDate ?? ((l2 = (c2 = n2.locale) == null ? void 0 : c2.options) == null ? void 0 : l2.firstWeekContainsDate) ?? 1, a2 = Yn(e2, t2), i2 = q$2(e2, 0);
  return i2.setFullYear(a2, 0, r2), i2.setHours(0, 0, 0, 0), ue(i2, t2);
}
function Xc(e2, t2) {
  const n2 = A$1(e2), r2 = +ue(n2, t2) - +Qc(n2, t2);
  return Math.round(r2 / Nn$1) + 1;
}
function g$1(e2, t2) {
  const n2 = e2 < 0 ? "-" : "", r2 = Math.abs(e2).toString().padStart(t2, "0");
  return n2 + r2;
}
const j$1 = {
  // Year
  y(e2, t2) {
    const n2 = e2.getFullYear(), r2 = n2 > 0 ? n2 : 1 - n2;
    return g$1(t2 === "yy" ? r2 % 100 : r2, t2.length);
  },
  // Month
  M(e2, t2) {
    const n2 = e2.getMonth();
    return t2 === "M" ? String(n2 + 1) : g$1(n2 + 1, 2);
  },
  // Day of the month
  d(e2, t2) {
    return g$1(e2.getDate(), t2.length);
  },
  // AM or PM
  a(e2, t2) {
    const n2 = e2.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t2) {
      case "a":
      case "aa":
        return n2.toUpperCase();
      case "aaa":
        return n2;
      case "aaaaa":
        return n2[0];
      case "aaaa":
      default:
        return n2 === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e2, t2) {
    return g$1(e2.getHours() % 12 || 12, t2.length);
  },
  // Hour [0-23]
  H(e2, t2) {
    return g$1(e2.getHours(), t2.length);
  },
  // Minute
  m(e2, t2) {
    return g$1(e2.getMinutes(), t2.length);
  },
  // Second
  s(e2, t2) {
    return g$1(e2.getSeconds(), t2.length);
  },
  // Fraction of second
  S(e2, t2) {
    const n2 = t2.length, r2 = e2.getMilliseconds(), a2 = Math.trunc(
      r2 * Math.pow(10, n2 - 3)
    );
    return g$1(a2, t2.length);
  }
}, X$2 = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Bt$1 = {
  // Era
  G: function(e2, t2, n2) {
    const r2 = e2.getFullYear() > 0 ? 1 : 0;
    switch (t2) {
      case "G":
      case "GG":
      case "GGG":
        return n2.era(r2, { width: "abbreviated" });
      case "GGGGG":
        return n2.era(r2, { width: "narrow" });
      case "GGGG":
      default:
        return n2.era(r2, { width: "wide" });
    }
  },
  // Year
  y: function(e2, t2, n2) {
    if (t2 === "yo") {
      const r2 = e2.getFullYear(), a2 = r2 > 0 ? r2 : 1 - r2;
      return n2.ordinalNumber(a2, { unit: "year" });
    }
    return j$1.y(e2, t2);
  },
  // Local week-numbering year
  Y: function(e2, t2, n2, r2) {
    const a2 = Yn(e2, r2), i2 = a2 > 0 ? a2 : 1 - a2;
    if (t2 === "YY") {
      const o2 = i2 % 100;
      return g$1(o2, 2);
    }
    return t2 === "Yo" ? n2.ordinalNumber(i2, { unit: "year" }) : g$1(i2, t2.length);
  },
  // ISO week-numbering year
  R: function(e2, t2) {
    const n2 = Wn(e2);
    return g$1(n2, t2.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e2, t2) {
    const n2 = e2.getFullYear();
    return g$1(n2, t2.length);
  },
  // Quarter
  Q: function(e2, t2, n2) {
    const r2 = Math.ceil((e2.getMonth() + 1) / 3);
    switch (t2) {
      case "Q":
        return String(r2);
      case "QQ":
        return g$1(r2, 2);
      case "Qo":
        return n2.ordinalNumber(r2, { unit: "quarter" });
      case "QQQ":
        return n2.quarter(r2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n2.quarter(r2, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n2.quarter(r2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e2, t2, n2) {
    const r2 = Math.ceil((e2.getMonth() + 1) / 3);
    switch (t2) {
      case "q":
        return String(r2);
      case "qq":
        return g$1(r2, 2);
      case "qo":
        return n2.ordinalNumber(r2, { unit: "quarter" });
      case "qqq":
        return n2.quarter(r2, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n2.quarter(r2, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n2.quarter(r2, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e2, t2, n2) {
    const r2 = e2.getMonth();
    switch (t2) {
      case "M":
      case "MM":
        return j$1.M(e2, t2);
      case "Mo":
        return n2.ordinalNumber(r2 + 1, { unit: "month" });
      case "MMM":
        return n2.month(r2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n2.month(r2, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n2.month(r2, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e2, t2, n2) {
    const r2 = e2.getMonth();
    switch (t2) {
      case "L":
        return String(r2 + 1);
      case "LL":
        return g$1(r2 + 1, 2);
      case "Lo":
        return n2.ordinalNumber(r2 + 1, { unit: "month" });
      case "LLL":
        return n2.month(r2, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n2.month(r2, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n2.month(r2, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e2, t2, n2, r2) {
    const a2 = Xc(e2, r2);
    return t2 === "wo" ? n2.ordinalNumber(a2, { unit: "week" }) : g$1(a2, t2.length);
  },
  // ISO week of year
  I: function(e2, t2, n2) {
    const r2 = zc(e2);
    return t2 === "Io" ? n2.ordinalNumber(r2, { unit: "week" }) : g$1(r2, t2.length);
  },
  // Day of the month
  d: function(e2, t2, n2) {
    return t2 === "do" ? n2.ordinalNumber(e2.getDate(), { unit: "date" }) : j$1.d(e2, t2);
  },
  // Day of year
  D: function(e2, t2, n2) {
    const r2 = qc(e2);
    return t2 === "Do" ? n2.ordinalNumber(r2, { unit: "dayOfYear" }) : g$1(r2, t2.length);
  },
  // Day of week
  E: function(e2, t2, n2) {
    const r2 = e2.getDay();
    switch (t2) {
      case "E":
      case "EE":
      case "EEE":
        return n2.day(r2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n2.day(r2, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n2.day(r2, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n2.day(r2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e2, t2, n2, r2) {
    const a2 = e2.getDay(), i2 = (a2 - r2.weekStartsOn + 8) % 7 || 7;
    switch (t2) {
      case "e":
        return String(i2);
      case "ee":
        return g$1(i2, 2);
      case "eo":
        return n2.ordinalNumber(i2, { unit: "day" });
      case "eee":
        return n2.day(a2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n2.day(a2, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n2.day(a2, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n2.day(a2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e2, t2, n2, r2) {
    const a2 = e2.getDay(), i2 = (a2 - r2.weekStartsOn + 8) % 7 || 7;
    switch (t2) {
      case "c":
        return String(i2);
      case "cc":
        return g$1(i2, t2.length);
      case "co":
        return n2.ordinalNumber(i2, { unit: "day" });
      case "ccc":
        return n2.day(a2, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n2.day(a2, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n2.day(a2, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n2.day(a2, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e2, t2, n2) {
    const r2 = e2.getDay(), a2 = r2 === 0 ? 7 : r2;
    switch (t2) {
      case "i":
        return String(a2);
      case "ii":
        return g$1(a2, t2.length);
      case "io":
        return n2.ordinalNumber(a2, { unit: "day" });
      case "iii":
        return n2.day(r2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n2.day(r2, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n2.day(r2, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n2.day(r2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e2, t2, n2) {
    const a2 = e2.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t2) {
      case "a":
      case "aa":
        return n2.dayPeriod(a2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n2.dayPeriod(a2, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n2.dayPeriod(a2, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n2.dayPeriod(a2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e2, t2, n2) {
    const r2 = e2.getHours();
    let a2;
    switch (r2 === 12 ? a2 = X$2.noon : r2 === 0 ? a2 = X$2.midnight : a2 = r2 / 12 >= 1 ? "pm" : "am", t2) {
      case "b":
      case "bb":
        return n2.dayPeriod(a2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n2.dayPeriod(a2, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n2.dayPeriod(a2, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n2.dayPeriod(a2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e2, t2, n2) {
    const r2 = e2.getHours();
    let a2;
    switch (r2 >= 17 ? a2 = X$2.evening : r2 >= 12 ? a2 = X$2.afternoon : r2 >= 4 ? a2 = X$2.morning : a2 = X$2.night, t2) {
      case "B":
      case "BB":
      case "BBB":
        return n2.dayPeriod(a2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n2.dayPeriod(a2, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n2.dayPeriod(a2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e2, t2, n2) {
    if (t2 === "ho") {
      let r2 = e2.getHours() % 12;
      return r2 === 0 && (r2 = 12), n2.ordinalNumber(r2, { unit: "hour" });
    }
    return j$1.h(e2, t2);
  },
  // Hour [0-23]
  H: function(e2, t2, n2) {
    return t2 === "Ho" ? n2.ordinalNumber(e2.getHours(), { unit: "hour" }) : j$1.H(e2, t2);
  },
  // Hour [0-11]
  K: function(e2, t2, n2) {
    const r2 = e2.getHours() % 12;
    return t2 === "Ko" ? n2.ordinalNumber(r2, { unit: "hour" }) : g$1(r2, t2.length);
  },
  // Hour [1-24]
  k: function(e2, t2, n2) {
    let r2 = e2.getHours();
    return r2 === 0 && (r2 = 24), t2 === "ko" ? n2.ordinalNumber(r2, { unit: "hour" }) : g$1(r2, t2.length);
  },
  // Minute
  m: function(e2, t2, n2) {
    return t2 === "mo" ? n2.ordinalNumber(e2.getMinutes(), { unit: "minute" }) : j$1.m(e2, t2);
  },
  // Second
  s: function(e2, t2, n2) {
    return t2 === "so" ? n2.ordinalNumber(e2.getSeconds(), { unit: "second" }) : j$1.s(e2, t2);
  },
  // Fraction of second
  S: function(e2, t2) {
    return j$1.S(e2, t2);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e2, t2, n2) {
    const r2 = e2.getTimezoneOffset();
    if (r2 === 0)
      return "Z";
    switch (t2) {
      case "X":
        return qt(r2);
      case "XXXX":
      case "XX":
        return Y$2(r2);
      case "XXXXX":
      case "XXX":
      default:
        return Y$2(r2, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e2, t2, n2) {
    const r2 = e2.getTimezoneOffset();
    switch (t2) {
      case "x":
        return qt(r2);
      case "xxxx":
      case "xx":
        return Y$2(r2);
      case "xxxxx":
      case "xxx":
      default:
        return Y$2(r2, ":");
    }
  },
  // Timezone (GMT)
  O: function(e2, t2, n2) {
    const r2 = e2.getTimezoneOffset();
    switch (t2) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ht$1(r2, ":");
      case "OOOO":
      default:
        return "GMT" + Y$2(r2, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e2, t2, n2) {
    const r2 = e2.getTimezoneOffset();
    switch (t2) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ht$1(r2, ":");
      case "zzzz":
      default:
        return "GMT" + Y$2(r2, ":");
    }
  },
  // Seconds timestamp
  t: function(e2, t2, n2) {
    const r2 = Math.trunc(e2.getTime() / 1e3);
    return g$1(r2, t2.length);
  },
  // Milliseconds timestamp
  T: function(e2, t2, n2) {
    const r2 = e2.getTime();
    return g$1(r2, t2.length);
  }
};
function Ht$1(e2, t2 = "") {
  const n2 = e2 > 0 ? "-" : "+", r2 = Math.abs(e2), a2 = Math.trunc(r2 / 60), i2 = r2 % 60;
  return i2 === 0 ? n2 + String(a2) : n2 + String(a2) + t2 + g$1(i2, 2);
}
function qt(e2, t2) {
  return e2 % 60 === 0 ? (e2 > 0 ? "-" : "+") + g$1(Math.abs(e2) / 60, 2) : Y$2(e2, t2);
}
function Y$2(e2, t2 = "") {
  const n2 = e2 > 0 ? "-" : "+", r2 = Math.abs(e2), a2 = g$1(Math.trunc(r2 / 60), 2), i2 = g$1(r2 % 60, 2);
  return n2 + a2 + t2 + i2;
}
const Ut$1 = (e2, t2) => {
  switch (e2) {
    case "P":
      return t2.date({ width: "short" });
    case "PP":
      return t2.date({ width: "medium" });
    case "PPP":
      return t2.date({ width: "long" });
    case "PPPP":
    default:
      return t2.date({ width: "full" });
  }
}, Gn = (e2, t2) => {
  switch (e2) {
    case "p":
      return t2.time({ width: "short" });
    case "pp":
      return t2.time({ width: "medium" });
    case "ppp":
      return t2.time({ width: "long" });
    case "pppp":
    default:
      return t2.time({ width: "full" });
  }
}, kc = (e2, t2) => {
  const n2 = e2.match(/(P+)(p+)?/) || [], r2 = n2[1], a2 = n2[2];
  if (!a2)
    return Ut$1(e2, t2);
  let i2;
  switch (r2) {
    case "P":
      i2 = t2.dateTime({ width: "short" });
      break;
    case "PP":
      i2 = t2.dateTime({ width: "medium" });
      break;
    case "PPP":
      i2 = t2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i2 = t2.dateTime({ width: "full" });
      break;
  }
  return i2.replace("{{date}}", Ut$1(r2, t2)).replace("{{time}}", Gn(a2, t2));
}, Vc = {
  p: Gn,
  P: kc
}, Zc = /^D+$/, Kc = /^Y+$/, Jc = ["D", "DD", "YY", "YYYY"];
function el$1(e2) {
  return Zc.test(e2);
}
function tl$1(e2) {
  return Kc.test(e2);
}
function nl$1(e2, t2, n2) {
  const r2 = rl$1(e2, t2, n2);
  if (console.warn(r2), Jc.includes(e2))
    throw new RangeError(r2);
}
function rl$1(e2, t2, n2) {
  const r2 = e2[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e2.toLowerCase()}\` instead of \`${e2}\` (in \`${t2}\`) for formatting ${r2} to the input \`${n2}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function al$1(e2) {
  return e2 instanceof Date || typeof e2 == "object" && Object.prototype.toString.call(e2) === "[object Date]";
}
function il$1(e2) {
  if (!al$1(e2) && typeof e2 != "number")
    return false;
  const t2 = A$1(e2);
  return !isNaN(Number(t2));
}
const ol$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, sl$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ul$1 = /^'([^]*?)'?$/, cl$1 = /''/g, ll$1 = /[a-zA-Z]/;
function ze$2(e2, t2, n2) {
  var l2, f2, d2, m2, T3, v2, w2, O2;
  const r2 = Pe$2(), a2 = (n2 == null ? void 0 : n2.locale) ?? r2.locale ?? Qt, i2 = (n2 == null ? void 0 : n2.firstWeekContainsDate) ?? ((f2 = (l2 = n2 == null ? void 0 : n2.locale) == null ? void 0 : l2.options) == null ? void 0 : f2.firstWeekContainsDate) ?? r2.firstWeekContainsDate ?? ((m2 = (d2 = r2.locale) == null ? void 0 : d2.options) == null ? void 0 : m2.firstWeekContainsDate) ?? 1, o2 = (n2 == null ? void 0 : n2.weekStartsOn) ?? ((v2 = (T3 = n2 == null ? void 0 : n2.locale) == null ? void 0 : T3.options) == null ? void 0 : v2.weekStartsOn) ?? r2.weekStartsOn ?? ((O2 = (w2 = r2.locale) == null ? void 0 : w2.options) == null ? void 0 : O2.weekStartsOn) ?? 0, s2 = A$1(e2);
  if (!il$1(s2))
    throw new RangeError("Invalid time value");
  let u2 = t2.match(sl$1).map((b2) => {
    const S2 = b2[0];
    if (S2 === "p" || S2 === "P") {
      const E2 = Vc[S2];
      return E2(b2, a2.formatLong);
    }
    return b2;
  }).join("").match(ol$1).map((b2) => {
    if (b2 === "''")
      return { isToken: false, value: "'" };
    const S2 = b2[0];
    if (S2 === "'")
      return { isToken: false, value: fl$1(b2) };
    if (Bt$1[S2])
      return { isToken: true, value: b2 };
    if (S2.match(ll$1))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + S2 + "`"
      );
    return { isToken: false, value: b2 };
  });
  a2.localize.preprocessor && (u2 = a2.localize.preprocessor(s2, u2));
  const c2 = {
    firstWeekContainsDate: i2,
    weekStartsOn: o2,
    locale: a2
  };
  return u2.map((b2) => {
    if (!b2.isToken)
      return b2.value;
    const S2 = b2.value;
    (!(n2 != null && n2.useAdditionalWeekYearTokens) && tl$1(S2) || !(n2 != null && n2.useAdditionalDayOfYearTokens) && el$1(S2)) && nl$1(S2, t2, String(e2));
    const E2 = Bt$1[S2[0]];
    return E2(s2, S2, a2.localize, c2);
  }).join("");
}
function fl$1(e2) {
  const t2 = e2.match(ul$1);
  return t2 ? t2[1].replace(cl$1, "'") : e2;
}
var Bn = /* @__PURE__ */ ((e2) => (e2["15seconds"] = "15seconds", e2.minute = "minute", e2["30minutes"] = "30minutes", e2.hourly = "hourly", e2.daily = "daily", e2.weekly = "weekly", e2.monthly = "monthly", e2.quarterly = "quarterly", e2.yearly = "yearly", e2))(Bn || {});
const je$1 = [
  ["15seconds", 15 * 1e3],
  ["minute", 60 * 1e3],
  ["30minutes", 30 * 60 * 1e3],
  ["hourly", 60 * 60 * 1e3],
  ["daily", 24 * 60 * 60 * 1e3],
  ["monthly", 30 * 24 * 60 * 60 * 1e3],
  ["quarterly", 3 * 30 * 24 * 60 * 60 * 1e3],
  ["yearly", 12 * 30 * 24 * 60 * 60 * 1e3]
];
function dl$1(e2, t2, n2, r2, a2) {
  const i2 = t2 === 0, o2 = Number(ze$2(new Date(e2), "c")) === 2, s2 = Number(ze$2(new Date(e2), "q")) === 1, u2 = t2 !== 0 ? n2[t2 - 1] : null;
  switch (r2) {
    case "15seconds":
      return i2 || we$2(e2) || oe$1(e2, u2) || N$1(e2);
    case "minute":
      return i2 || we$2(e2) || oe$1(e2, u2) || N$1(e2);
    case "30minutes":
      return i2 || we$2(e2) || oe$1(e2, u2) || N$1(e2);
    case "hourly":
      return i2 || we$2(e2) || oe$1(e2, u2) || N$1(e2);
    case "daily":
      return a2 ? i2 || o2 || N$1(e2) : i2 || oe$1(e2, u2) || N$1(e2);
    case "weekly":
      return i2 || o2 || N$1(e2);
    case "monthly":
      return i2 || N$1(e2);
    case "quarterly":
      return i2 || s2;
    case "yearly":
      return false;
    default:
      throw new Error(`${r2} is not a valid time interval.`);
  }
}
function $l(e2, t2, n2, r2, a2, i2) {
  const o2 = a2.showDayName, s2 = r2 === "daily" && o2 ? "weekly" : r2, u2 = new Date(e2), c2 = G$1(a2, "timeIntervalFormats")[s2], l2 = G$1(c2, "primary"), f2 = G$1(c2, "secondary"), d2 = dl$1(e2, t2, n2, r2, o2);
  let m2 = d2 ? l2 : f2;
  r2 === "15seconds" && u2.getMilliseconds() !== 0 && (m2 = m2.replace("pp", "h:mm:ss.SSS a"));
  const T3 = a2.localeObject, { code: v2, optionsObject: w2 } = i2, O2 = w2[r2].type, b2 = w2[r2][d2 ? "primary" : "secondary"][m2];
  if (r2 === "quarterly" || !b2) {
    const E2 = ze$2(u2, m2, { locale: T3 }).split("").map((R2) => {
      let lt2 = Number(R2);
      return R2 !== " " && !Number.isNaN(lt2) ? lt2.toLocaleString(v2) : R2;
    });
    return i2[O2](u2, v2, {}, E2.join(""));
  } else
    return i2[O2](u2, v2, b2);
}
function _e$2(e2) {
  const t2 = new Date(e2);
  return {
    M: t2.getMonth() + 1,
    // month: 1-12
    d: t2.getDate(),
    // day of the month: 1-31
    H: t2.getHours(),
    // 24-hour clock: 0-23
    m: t2.getMinutes(),
    // minute: 0-59
    s: t2.getSeconds()
    // seconds: 0-59
  };
}
function hl$1(e2) {
  if (e2)
    return e2.slice(1).map((t2, n2) => t2 - e2[n2]);
}
function gl$1(e2) {
  const t2 = je$1.reduce((n2, [, r2], a2) => {
    const i2 = je$1[n2][1], o2 = Math.abs(i2 - e2), s2 = Math.abs(r2 - e2);
    return o2 < s2 ? n2 : a2;
  }, 0);
  return je$1[t2][0];
}
function Cl(e2, t2) {
  if (Bn[t2])
    return t2;
  if (e2.length === 1)
    return "15seconds";
  const n2 = hl$1(e2), r2 = min(n2);
  return gl$1(r2);
}
function we$2(e2) {
  const { s: t2, m: n2, H: r2 } = _e$2(e2);
  return r2 === 0 && n2 === 0 && t2 === 0;
}
function oe$1(e2, t2) {
  const n2 = _e$2(e2).M, r2 = _e$2(t2).M;
  return n2 !== r2;
}
function N$1(e2) {
  const { M: t2, d: n2, s: r2, m: a2, H: i2 } = _e$2(e2);
  return t2 === 1 && n2 === 1 && i2 === 0 && a2 === 0 && r2 === 0;
}
function Dl(e2) {
  return e2 === void 0 ? "" : e2.toISOString();
}
var r = /* @__PURE__ */ ((c2) => (c2.GRAPHICS_DOCUMENT = "graphics-document", c2.GRAPHICS_OBJECT = "graphics-object", c2.GRAPHICS_SYMBOL = "graphics-symbol", c2.GROUP = "group", c2.DOCUMENT = "document", c2.CHECKBOX = "checkbox", c2.BUTTON = "button", c2.MENU = "menu", c2.MENU_ITEM = "menuitem", c2.IMG = "img", c2))(r || {});
function i(a2, e2) {
  return a2 && Lu(a2, e2, Ee$2);
}
function k$2(a2, e2) {
  return function(r2, n2) {
    if (r2 == null)
      return r2;
    if (!ge$1(r2))
      return a2(r2, n2);
    for (var u2 = r2.length, s2 = e2 ? u2 : -1, f2 = Object(r2); (e2 ? s2-- : ++s2 < u2) && n2(f2[s2], s2, f2) !== false; )
      ;
    return r2;
  };
}
var v$2 = k$2(i);
function tt$2(d2, t2, e2, s2) {
  for (var a2 = -1, n2 = d2 == null ? 0 : d2.length; ++a2 < n2; ) {
    var o2 = d2[a2];
    t2(s2, o2, e2(o2), d2);
  }
  return s2;
}
function et$2(d2, t2, e2, s2) {
  return v$2(d2, function(a2, n2, o2) {
    t2(s2, a2, e2(a2), o2);
  }), s2;
}
function st$1(d2, t2) {
  return function(e2, s2) {
    var a2 = _(e2) ? tt$2 : et$2, n2 = t2 ? t2() : {};
    return a2(e2, d2, Iu(s2), n2);
  };
}
function at$1(d2) {
  for (var t2 = -1, e2 = d2 == null ? 0 : d2.length, s2 = {}; ++t2 < e2; ) {
    var a2 = d2[t2];
    s2[a2[0]] = a2[1];
  }
  return s2;
}
var ot$1 = Object.prototype, nt$2 = ot$1.hasOwnProperty, rt$1 = st$1(function(d2, t2, e2) {
  nt$2.call(d2, e2) ? d2[e2].push(t2) : Ze$2(d2, e2, [t2]);
});
function it$2(d2) {
  const t2 = d2.trim();
  return ["=", "+", "-", "@", "	", "\r"].includes(t2.charAt(0)) ? ` ${t2}` : /[,\"\n]/.test(t2) ? `"${t2}"` : t2;
}
let D$1 = class D {
  constructor(t2) {
    this.state = {
      options: {}
    }, this.colorScale = {}, this.colorClassNames = {}, this.services = t2;
  }
  formatTable({ headers: t2, cells: e2 }) {
    const s2 = this.getOptions(), {
      code: a2,
      date: n2,
      number: o2
    } = G$1(s2, "locale"), i2 = G$1(s2, "tabularRepModal", "tableHeadingFormatter"), r2 = G$1(s2, "tabularRepModal", "tableCellFormatter"), { cartesianScales: c2 } = this.services, l2 = c2 == null ? void 0 : c2.getDomainAxisScaleType();
    let p2;
    return l2 === P$1.TIME && (p2 = (g2) => n2(g2, a2, { month: "short", day: "numeric", year: "numeric" })), [
      typeof i2 == "function" ? i2(t2) : t2,
      ...typeof r2 == "function" ? r2(e2) : e2.map((g2) => {
        p2 && (g2[1] = p2(g2[1]));
        for (let m2 in g2) {
          let y2 = g2[m2];
          typeof y2 == "number" && (g2[m2] = o2(y2, a2));
        }
        return g2;
      })
    ];
  }
  getAllDataFromDomain(t2) {
    if (!this.getData())
      return null;
    const e2 = this.getOptions();
    let s2 = this.getData();
    const a2 = this.getDataGroups(), { groupMapsTo: n2 } = G$1(e2, "data"), o2 = G$1(e2, "axes");
    return t2 && (s2 = s2.filter((i2) => t2.includes(i2[n2]))), o2 && Object.keys(o2).forEach((i2) => {
      const r2 = o2[i2].mapsTo, c2 = o2[i2].scaleType;
      if ((c2 === P$1.LINEAR || c2 === P$1.LOG) && (s2 = s2.map((l2) => ({
        ...l2,
        [r2]: l2[r2] === null ? l2[r2] : Number(l2[r2])
      }))), r2 && o2[i2].domain)
        if (c2 === P$1.LABELS)
          s2 = s2.filter(
            (l2) => o2[i2].domain.includes(l2[r2])
          );
        else {
          const [l2, p2] = o2[i2].domain;
          s2 = s2.filter(
            (h2) => !(r2 in h2) || h2[r2] >= l2 && h2[r2] <= p2
          );
        }
    }), s2.filter((i2) => a2.find((r2) => r2.name === i2[n2]));
  }
  /**
   * Charts that have group configs passed into them, only want to retrieve the display data relevant to that chart
   * @param groups the included datasets for the particular chart
   */
  getDisplayData(t2) {
    if (!this.get("data"))
      return null;
    const { ACTIVE: e2 } = rc.items.status, s2 = this.getDataGroups(t2), { groupMapsTo: a2 } = this.getOptions().data;
    return this.getAllDataFromDomain(t2).filter((o2) => s2.find(
      (i2) => i2.name === o2[a2] && i2.status === e2
    ));
  }
  getData() {
    return this.get("data");
  }
  isDataEmpty() {
    return !this.getData().length;
  }
  /**
   *
   * @param newData The new raw data to be set
   */
  setData(t2) {
    const e2 = this.sanitize(qs(t2)), s2 = this.generateDataGroups(e2);
    return this.set({
      data: e2,
      dataGroups: s2
    }), e2;
  }
  getDataGroups(t2) {
    return G$1(this.getOptions(), "data", "loading") ? [] : t2 ? this.get("dataGroups").filter((s2) => t2.includes(s2.name)) : this.get("dataGroups");
  }
  getActiveDataGroups(t2) {
    const { ACTIVE: e2 } = rc.items.status;
    return this.getDataGroups(t2).filter((s2) => s2.status === e2);
  }
  getDataGroupNames(t2) {
    return this.getDataGroups(t2).map((s2) => s2.name);
  }
  getActiveDataGroupNames(t2) {
    return this.getActiveDataGroups(t2).map((s2) => s2.name);
  }
  aggregateBinDataByGroup(t2) {
    return rt$1(t2, "group");
  }
  getBinConfigurations() {
    const t2 = this.getDisplayData(), e2 = this.getOptions(), s2 = this.services.cartesianScales.getMainXAxisPosition(), a2 = this.services.cartesianScales.getDomainIdentifier(), n2 = e2.axes[s2], { groupMapsTo: o2 } = e2.data, { bins: i2 = nc.defaultBins } = n2, r2 = Array.isArray(i2), c2 = bin().value((g2) => g2[a2]).thresholds(i2)(t2);
    if (r2)
      c2[c2.length - 1].x1 = i2[i2.length - 1];
    else {
      const g2 = c2[0].x1 - c2[0].x0;
      c2[c2.length - 1].x1 = +c2[c2.length - 1].x0 + g2;
    }
    const l2 = r2 ? [i2[0], i2[i2.length - 1]] : [c2[0].x0, c2[c2.length - 1].x1], p2 = Array.from(new Set(t2.map((g2) => g2[o2]))), h2 = [];
    return c2.forEach((g2) => {
      const m2 = `${g2.x0}-${g2.x1}`, y2 = this.aggregateBinDataByGroup(g2);
      p2.forEach((x2) => {
        h2.push({
          group: x2,
          key: m2,
          value: y2[x2] || 0,
          bin: g2.x0
        });
      });
    }), {
      bins: c2,
      binsDomain: l2
    };
  }
  getBinnedStackedData() {
    const t2 = this.getOptions(), { groupMapsTo: e2 } = t2.data, s2 = this.getActiveDataGroupNames(), { bins: a2 } = this.getBinConfigurations(), n2 = this.getDataValuesGroupedByKeys({
      bins: a2
    });
    return stack().keys(s2)(n2).map((o2, i2) => Object.keys(o2).filter((r2) => !isNaN(r2)).map((r2) => {
      const c2 = o2[r2];
      return c2[e2] = s2[i2], c2;
    }));
  }
  getGroupedData(t2) {
    const e2 = this.getDisplayData(t2), s2 = {}, { groupMapsTo: a2 } = this.getOptions().data;
    return e2.map((n2) => {
      const o2 = n2[a2];
      s2[o2] !== null && s2[o2] !== void 0 ? s2[o2].push(n2) : s2[o2] = [n2];
    }), Object.keys(s2).map((n2) => ({
      name: n2,
      data: s2[n2]
    }));
  }
  getStackKeys({ bins: t2 = null, groups: e2 = null } = { bins: null, groups: null }) {
    const s2 = this.getOptions(), a2 = this.getDisplayData(e2);
    let n2;
    t2 ? n2 = t2.map((r2) => `${r2.x0}:${r2.x1}`) : n2 = bl$1(
      a2.map((r2) => {
        const c2 = this.services.cartesianScales.getDomainIdentifier(r2);
        return r2[c2] instanceof Date ? Dl(r2[c2]) : r2[c2] && typeof r2[c2].toString == "function" ? r2[c2].toString() : r2[c2];
      })
    );
    const o2 = this.services.cartesianScales.domainAxisPosition, i2 = s2.axes[o2].scaleType;
    return i2 === P$1.TIME ? n2.sort((r2, c2) => {
      const l2 = new Date(r2), p2 = new Date(c2);
      return l2 - p2;
    }) : (i2 === P$1.LOG || i2 === P$1.LINEAR) && n2.sort((r2, c2) => r2 - c2), n2;
  }
  getDataValuesGroupedByKeys({ bins: t2 = null, groups: e2 = null }) {
    const s2 = this.getOptions(), { groupMapsTo: a2 } = s2.data, n2 = this.getDisplayData(e2), o2 = this.getDataGroupNames(), i2 = this.getStackKeys({ bins: t2, groups: e2 });
    return t2 ? i2.map((r2) => {
      const [c2, l2] = r2.split(":"), p2 = { x0: c2, x1: l2 }, h2 = t2.find((g2) => g2.x0.toString() === c2.toString());
      return o2.forEach((g2) => {
        p2[g2] = h2.filter(
          (m2) => m2[a2] === g2
        ).length;
      }), p2;
    }) : i2.map((r2) => {
      const c2 = { sharedStackKey: r2 };
      return o2.forEach((l2) => {
        const p2 = n2.find((g2) => {
          const m2 = this.services.cartesianScales.getDomainIdentifier(g2);
          return g2[a2] === l2 && Object.prototype.hasOwnProperty.call(g2, m2) && (g2[m2] instanceof Date ? Dl(g2[m2]) === r2 : g2[m2].toString() === r2);
        }), h2 = this.services.cartesianScales.getRangeIdentifier(c2);
        c2[l2] = p2 ? p2[h2] : null;
      }), c2;
    });
  }
  getStackedData({ percentage: t2 = false, groups: e2 = null, divergent: s2 = false }) {
    const a2 = this.getOptions(), { groupMapsTo: n2 } = a2.data, o2 = this.getActiveDataGroupNames(e2), i2 = this.getDataValuesGroupedByKeys({
      groups: e2
    });
    if (t2) {
      const c2 = at$1(i2.map((l2) => [l2.sharedStackKey, 0]));
      i2.forEach((l2) => {
        o2.forEach((p2) => {
          c2[l2.sharedStackKey] += l2[p2];
        });
      }), i2.forEach((l2) => {
        o2.forEach((p2) => {
          const h2 = c2[l2.sharedStackKey];
          c2[l2.sharedStackKey] ? l2[p2] = l2[p2] / h2 * 100 : l2[p2] = 0;
        });
      });
    }
    return (s2 ? stack().offset(stackOffsetDiverging) : stack()).keys(o2)(i2).map((c2, l2) => Object.keys(c2).filter((p2) => !isNaN(p2)).map((p2) => {
      const h2 = c2[p2];
      return h2[n2] = o2[l2], h2;
    }));
  }
  /**
   * @return {Object} The chart's options
   */
  getOptions() {
    return this.state.options;
  }
  set(t2, e2) {
    this.state = Object.assign({}, this.state, t2);
    const s2 = Object.assign(
      { skipUpdate: false, animate: true },
      // default configs
      e2
    );
    s2.skipUpdate || this.update(s2.animate);
  }
  get(t2) {
    return t2 ? this.state[t2] : this.state;
  }
  /**
   *
   * @param newOptions New options to be set
   */
  setOptions(t2) {
    const e2 = this.getOptions();
    Wc(e2, t2), this.set({
      options: h(e2, t2)
    });
  }
  /**
   *
   * Updates miscellanous information within the model
   * such as the color scales, or the legend data labels
   */
  update(t2 = true) {
    this.getDisplayData() && (this.updateAllDataGroups(), this.setCustomColorScale(), this.setColorClassNames(), this.services.events.dispatchEvent(oE.Model.UPDATE, { animate: t2 }));
  }
  /*
   * Data labels
   */
  toggleDataLabel(t2) {
    const { ACTIVE: e2, DISABLED: s2 } = rc.items.status, a2 = this.getDataGroups(), n2 = a2.some((l2) => l2.status === s2), o2 = a2.filter((l2) => l2.status === e2);
    if (n2)
      if (o2.length === 1 && o2[0].name === t2)
        a2.forEach((l2, p2) => {
          a2[p2].status = e2;
        });
      else {
        const l2 = a2.findIndex((p2) => p2.name === t2);
        a2[l2].status = a2[l2].status === s2 ? e2 : s2;
      }
    else
      a2.forEach((l2, p2) => {
        a2[p2].status = l2.name === t2 ? e2 : s2;
      });
    const i2 = a2.filter((l2) => l2.status === e2), r2 = this.getOptions();
    a2.some((l2) => l2.status === s2) ? r2.data.selectedGroups = i2.map((l2) => l2.name) : r2.data.selectedGroups = [], this.services.events.dispatchEvent(oE.Legend.ITEMS_UPDATE, {
      dataGroups: a2
    }), this.set({
      dataGroups: a2
    });
  }
  /**
   * Should the data point be filled?
   * @param group
   * @param key
   * @param data
   * @param defaultFilled the default for this chart
   */
  getIsFilled(t2, e2, s2, a2) {
    const n2 = this.getOptions();
    return n2.getIsFilled ? n2.getIsFilled(t2, e2, s2, a2) : a2;
  }
  getFillColor(t2, e2, s2) {
    const a2 = this.getOptions(), n2 = G$1(this.colorScale, t2);
    return a2.getFillColor ? a2.getFillColor(t2, e2, s2, n2) : n2;
  }
  getStrokeColor(t2, e2, s2) {
    const a2 = this.getOptions(), n2 = G$1(this.colorScale, t2);
    return a2.getStrokeColor ? a2.getStrokeColor(t2, e2, s2, n2) : n2;
  }
  isUserProvidedColorScaleValid() {
    const t2 = G$1(this.getOptions(), "color", "scale"), e2 = this.getDataGroups();
    return t2 == null || Object.keys(t2).length == 0 ? false : e2.some(
      (s2) => Object.keys(t2).includes(s2.name)
    );
  }
  getColorClassName(t2) {
    const e2 = this.colorClassNames(t2.dataGroupName);
    let s2 = t2.originalClassName;
    return t2.classNameTypes.forEach(
      (a2) => s2 = t2.originalClassName ? `${s2} ${a2}-${e2}` : `${a2}-${e2}`
    ), s2 || "";
  }
  /**
   * For charts that might hold an associated status for their dataset
   */
  getStatus() {
    return null;
  }
  getAllDataGroupsNames() {
    return this.allDataGroups;
  }
  /**
   * Converts data provided in the older format to tabular
   *
   */
  transformToTabularData(t2) {
    console.warn(
      "We've updated the charting data format to be tabular by default. The current format you're using is deprecated and will be removed in v1.0, read more here https://charts.carbondesignsystem.com/?path=/story/docs-tutorials--tabular-data-format"
    );
    const e2 = [], { datasets: s2, labels: a2 } = t2;
    return s2.forEach((n2) => {
      n2.data.forEach((o2, i2) => {
        let r2;
        const c2 = G$1(n2, "label");
        if (c2 === null) {
          const p2 = G$1(a2, i2);
          p2 ? r2 = p2 : r2 = "Ungrouped";
        } else
          r2 = c2;
        const l2 = {
          group: r2,
          key: a2[i2]
        };
        isNaN(o2) ? (l2.value = o2.value, l2.date = o2.date) : l2.value = o2, e2.push(l2);
      });
    }), e2;
  }
  getTabularDataArray() {
    return [];
  }
  exportToCSV() {
    const e2 = this.getTabularDataArray().map(
      (o2) => o2.map((i2) => `"${(i2 === "&ndash;" ? "–" : i2).split(/[,;'"`]/).map((l2) => it$2(l2)).join("")}"`)
    ).map((o2) => o2.join(",")).join(`
`), s2 = this.getOptions();
    let a2 = "myChart";
    const n2 = G$1(s2, "fileDownload", "fileName");
    typeof n2 == "function" ? a2 = n2("csv") : typeof n2 == "string" && (a2 = n2), this.services.files.downloadCSV(e2, `${a2}.csv`);
  }
  getTabularData(t2) {
    return Array.isArray(t2) ? t2 : this.transformToTabularData(t2);
  }
  sanitize(t2) {
    return t2 = this.getTabularData(t2), t2;
  }
  /*
   * Data groups
   */
  updateAllDataGroups() {
    this.allDataGroups ? this.getDataGroupNames().forEach((t2) => {
      this.allDataGroups.indexOf(t2) === -1 && this.allDataGroups.push(t2);
    }) : this.allDataGroups = this.getDataGroupNames();
  }
  generateDataGroups(t2) {
    const { groupMapsTo: e2 } = this.getOptions().data, { ACTIVE: s2, DISABLED: a2 } = rc.items.status, n2 = this.getOptions(), o2 = bl$1(t2.map((r2) => r2[e2]));
    n2.data.selectedGroups.length && (n2.data.selectedGroups.every(
      (c2) => o2.includes(c2)
    ) || (n2.data.selectedGroups = []));
    const i2 = (r2) => !n2.data.selectedGroups.length || n2.data.selectedGroups.includes(r2) ? s2 : a2;
    return o2.map((r2) => ({
      name: r2,
      status: i2(r2)
    }));
  }
  /*
   * Fill scales
   */
  setCustomColorScale() {
    if (!this.isUserProvidedColorScaleValid())
      return;
    const t2 = this.getOptions(), e2 = G$1(t2, "color", "scale");
    Object.keys(e2).forEach((a2) => {
      this.allDataGroups.includes(a2) || console.warn(`"${a2}" does not exist in data groups.`);
    }), this.allDataGroups.filter((a2) => e2[a2]).forEach(
      (a2) => this.colorScale[a2] = e2[a2]
    );
  }
  /*
   * Color palette
   */
  setColorClassNames() {
    const t2 = G$1(this.getOptions(), "color", "pairing");
    let e2 = G$1(t2, "numberOfVariants");
    (!e2 || e2 < this.allDataGroups.length) && (e2 = this.allDataGroups.length);
    let s2 = G$1(t2, "option");
    const a2 = ec.pairingOptions, n2 = e2 > 5 ? 14 : e2, o2 = `${n2}-color`;
    s2 = s2 <= a2[o2] ? s2 : 1;
    const i2 = this.allDataGroups.map(
      (r2, c2) => `${n2}-${s2}-${c2 % 14 + 1}`
    );
    this.colorClassNames = scaleOrdinal().range(i2).domain(this.allDataGroups);
  }
};
let T$1 = class T extends D$1 {
  // can't be protected as it's used by two-dimensional-axes.ts
  constructor(t2) {
    super(t2), this.axisFlavor = aE.DEFAULT;
  }
  // get the scales information
  // needed for getTabularArray()
  assignRangeAndDomains() {
    const { cartesianScales: t2 } = this.services, e2 = this.getOptions(), s2 = t2.isDualAxes(), a2 = {
      primaryDomain: t2.domainAxisPosition,
      primaryRange: t2.rangeAxisPosition,
      secondaryDomain: null,
      secondaryRange: null
    };
    return s2 && (a2.secondaryDomain = t2.secondaryDomainAxisPosition, a2.secondaryRange = t2.secondaryRangeAxisPosition), Object.keys(a2).forEach(
      (n2) => {
        const o2 = a2[n2];
        t2.scales[o2] ? a2[n2] = {
          position: o2,
          label: t2.getScaleLabel(o2),
          identifier: G$1(e2, "axes", o2, "mapsTo")
        } : a2[n2] = null;
      }
    ), a2;
  }
  getTabularDataArray() {
    const t2 = this.getDisplayData(), e2 = this.getOptions(), { groupMapsTo: s2 } = e2.data, { primaryDomain: a2, primaryRange: n2, secondaryDomain: o2, secondaryRange: i2 } = this.assignRangeAndDomains(), { number: r2, code: c2 } = G$1(this.getOptions(), "locale"), l2 = [
      "Group",
      a2.label,
      n2.label,
      ...o2 ? [o2.label] : [],
      ...i2 ? [i2.label] : []
    ], p2 = t2.map((h2) => [
      h2[s2],
      h2[a2.identifier] === null ? "&ndash;" : h2[a2.identifier],
      h2[n2.identifier] === null || isNaN(h2[n2.identifier]) ? "&ndash;" : r2(h2[n2.identifier], c2),
      ...o2 ? [
        h2[o2.identifier] === null ? "&ndash;" : h2[o2.identifier]
      ] : [],
      ...i2 ? [
        h2[i2.identifier] === null || isNaN(h2[i2.identifier]) ? "&ndash;" : h2[i2.identifier]
      ] : []
    ]);
    return super.formatTable({ headers: l2, cells: p2 });
  }
  setData(t2) {
    let e2;
    if (t2 && (e2 = super.setData(t2), G$1(this.getOptions(), "zoomBar", f.TOP, "enabled"))) {
      const s2 = G$1(
        this.getOptions(),
        "zoomBar",
        f.TOP,
        "data"
      );
      this.setZoomBarData(s2);
    }
    return e2;
  }
  /**
   * @param zoomBarData any special zoom bar data to use instead of the model data
   */
  setZoomBarData(t2) {
    const e2 = t2 ? this.sanitize(qs(t2)) : this.getDisplayData();
    let s2 = e2;
    const { cartesianScales: a2 } = this.services;
    if (e2 && a2.domainAxisPosition && a2.rangeAxisPosition) {
      const n2 = a2.getDomainIdentifier(), o2 = a2.getRangeIdentifier();
      let i2 = e2.map((r2) => r2[n2].getTime());
      i2 = bl$1(i2).sort(), s2 = i2.map((r2) => {
        let c2 = 0;
        const l2 = {};
        return e2.forEach((p2) => {
          p2[n2].getTime() === r2 && (c2 += p2[o2]);
        }), l2[n2] = new Date(r2), l2[o2] = c2, l2;
      });
    }
    this.set({ zoomBarData: s2 });
  }
  getZoomBarData() {
    return this.get("zoomBarData");
  }
  sanitizeDateValues(t2) {
    const e2 = this.getOptions();
    if (!e2.axes)
      return t2;
    const s2 = [];
    return Object.keys(f).forEach((a2) => {
      const n2 = f[a2], o2 = e2.axes[n2];
      if (o2 && o2.scaleType === P$1.TIME) {
        const i2 = o2.mapsTo;
        (i2 !== null || i2 !== void 0) && s2.push(i2);
      }
    }), s2.length > 0 && t2.forEach((a2) => {
      s2.forEach((n2) => {
        G$1(a2, n2, "getTime") === null && (a2[n2] = new Date(a2[n2]));
      });
    }), t2;
  }
  sanitize(t2) {
    return t2 = super.sanitize(t2), t2 = this.sanitizeDateValues(t2), t2;
  }
};
var me = /\s/;
function ge(t2) {
  for (var e2 = t2.length; e2-- && me.test(t2.charAt(e2)); )
    ;
  return e2;
}
var pe = /^\s+/;
function ye(t2) {
  return t2 && t2.slice(0, ge(t2) + 1).replace(pe, "");
}
var q$1 = NaN, we$1 = /^[-+]0x[0-9a-f]+$/i, Se = /^0b[01]+$/i, Ee$1 = /^0o[0-7]+$/i, be$2 = parseInt;
function j(t2) {
  if (typeof t2 == "number")
    return t2;
  if (Qe$2(t2))
    return q$1;
  if (I$1(t2)) {
    var e2 = typeof t2.valueOf == "function" ? t2.valueOf() : t2;
    t2 = I$1(e2) ? e2 + "" : e2;
  }
  if (typeof t2 != "string")
    return t2 === 0 ? t2 : +t2;
  t2 = ye(t2);
  var n2 = Se.test(t2);
  return n2 || Ee$1.test(t2) ? be$2(t2.slice(2), n2 ? 2 : 8) : we$1.test(t2) ? q$1 : +t2;
}
var M = function() {
  return D$2.Date.now();
}, xe$1 = "Expected a function", Re = Math.max, Ce$1 = Math.min;
function Te(t2, e2, n2) {
  var r2, i2, s2, a2, c2, o2, u2 = 0, f2 = false, m2 = false, h2 = true;
  if (typeof t2 != "function")
    throw new TypeError(xe$1);
  e2 = j(e2) || 0, I$1(n2) && (f2 = !!n2.leading, m2 = "maxWait" in n2, s2 = m2 ? Re(j(n2.maxWait) || 0, e2) : s2, h2 = "trailing" in n2 ? !!n2.trailing : h2);
  function w2(l2) {
    var S2 = r2, C2 = i2;
    return r2 = i2 = void 0, u2 = l2, a2 = t2.apply(C2, S2), a2;
  }
  function R2(l2) {
    return u2 = l2, c2 = setTimeout(L2, e2), f2 ? w2(l2) : a2;
  }
  function I2(l2) {
    var S2 = l2 - o2, C2 = l2 - u2, U2 = e2 - S2;
    return m2 ? Ce$1(U2, s2 - C2) : U2;
  }
  function z2(l2) {
    var S2 = l2 - o2, C2 = l2 - u2;
    return o2 === void 0 || S2 >= e2 || S2 < 0 || m2 && C2 >= s2;
  }
  function L2() {
    var l2 = M();
    if (z2(l2))
      return G2(l2);
    c2 = setTimeout(L2, I2(l2));
  }
  function G2(l2) {
    return c2 = void 0, h2 && r2 ? w2(l2) : (r2 = i2 = void 0, a2);
  }
  function ue2() {
    c2 !== void 0 && clearTimeout(c2), u2 = 0, r2 = o2 = i2 = c2 = void 0;
  }
  function he2() {
    return c2 === void 0 ? a2 : G2(M());
  }
  function $() {
    var l2 = M(), S2 = z2(l2);
    if (r2 = arguments, i2 = this, o2 = l2, S2) {
      if (c2 === void 0)
        return R2(o2);
      if (m2)
        return clearTimeout(c2), c2 = setTimeout(L2, e2), w2(o2);
    }
    return c2 === void 0 && (c2 = setTimeout(L2, e2)), a2;
  }
  return $.cancel = ue2, $.flush = he2, $;
}
function Ie$2(t2, e2) {
  if (t2.match(/^[a-z]+:\/\//i))
    return t2;
  if (t2.match(/^\/\//))
    return window.location.protocol + t2;
  if (t2.match(/^[a-z]+:/i))
    return t2;
  const n2 = document.implementation.createHTMLDocument(), r2 = n2.createElement("base"), i2 = n2.createElement("a");
  return n2.head.appendChild(r2), n2.body.appendChild(i2), e2 && (r2.href = e2), i2.href = t2, i2.href;
}
const Le = /* @__PURE__ */ (() => {
  let t2 = 0;
  const e2 = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t2 += 1, `u${e2()}${t2}`);
})();
function y(t2) {
  const e2 = [];
  for (let n2 = 0, r2 = t2.length; n2 < r2; n2++)
    e2.push(t2[n2]);
  return e2;
}
function v$1(t2, e2) {
  const r2 = (t2.ownerDocument.defaultView || window).getComputedStyle(t2).getPropertyValue(e2);
  return r2 ? parseFloat(r2.replace("px", "")) : 0;
}
function De$1(t2) {
  const e2 = v$1(t2, "border-left-width"), n2 = v$1(t2, "border-right-width");
  return t2.clientWidth + e2 + n2;
}
function ve(t2) {
  const e2 = v$1(t2, "border-top-width"), n2 = v$1(t2, "border-bottom-width");
  return t2.clientHeight + e2 + n2;
}
function ee(t2, e2 = {}) {
  const n2 = e2.width || De$1(t2), r2 = e2.height || ve(t2);
  return { width: n2, height: r2 };
}
function Ae$1() {
  let t2, e2;
  try {
    e2 = process;
  } catch {
  }
  const n2 = e2 && e2.env ? e2.env.devicePixelRatio : null;
  return n2 && (t2 = parseInt(n2, 10), Number.isNaN(t2) && (t2 = 1)), t2 || window.devicePixelRatio || 1;
}
const p = 16384;
function Fe$1(t2) {
  (t2.width > p || t2.height > p) && (t2.width > p && t2.height > p ? t2.width > t2.height ? (t2.height *= p / t2.width, t2.width = p) : (t2.width *= p / t2.height, t2.height = p) : t2.width > p ? (t2.height *= p / t2.width, t2.width = p) : (t2.width *= p / t2.height, t2.height = p));
}
function A(t2) {
  return new Promise((e2, n2) => {
    const r2 = new Image();
    r2.decode = () => e2(r2), r2.onload = () => e2(r2), r2.onerror = n2, r2.crossOrigin = "anonymous", r2.decoding = "async", r2.src = t2;
  });
}
async function $e(t2) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t2)).then(encodeURIComponent).then((e2) => `data:image/svg+xml;charset=utf-8,${e2}`);
}
async function Pe$1(t2, e2, n2) {
  const r2 = "http://www.w3.org/2000/svg", i2 = document.createElementNS(r2, "svg"), s2 = document.createElementNS(r2, "foreignObject");
  return i2.setAttribute("width", `${e2}`), i2.setAttribute("height", `${n2}`), i2.setAttribute("viewBox", `0 0 ${e2} ${n2}`), s2.setAttribute("width", "100%"), s2.setAttribute("height", "100%"), s2.setAttribute("x", "0"), s2.setAttribute("y", "0"), s2.setAttribute("externalResourcesRequired", "true"), i2.appendChild(s2), s2.appendChild(t2), $e(i2);
}
const g = (t2, e2) => {
  if (t2 instanceof e2)
    return true;
  const n2 = Object.getPrototypeOf(t2);
  return n2 === null ? false : n2.constructor.name === e2.name || g(n2, e2);
};
function Me(t2) {
  const e2 = t2.getPropertyValue("content");
  return `${t2.cssText} content: '${e2.replace(/'|"/g, "")}';`;
}
function He$1(t2) {
  return y(t2).map((e2) => {
    const n2 = t2.getPropertyValue(e2), r2 = t2.getPropertyPriority(e2);
    return `${e2}: ${n2}${r2 ? " !important" : ""};`;
  }).join(" ");
}
function Oe(t2, e2, n2) {
  const r2 = `.${t2}:${e2}`, i2 = n2.cssText ? Me(n2) : He$1(n2);
  return document.createTextNode(`${r2}{${i2}}`);
}
function N(t2, e2, n2) {
  const r2 = window.getComputedStyle(t2, n2), i2 = r2.getPropertyValue("content");
  if (i2 === "" || i2 === "none")
    return;
  const s2 = Le();
  try {
    e2.className = `${e2.className} ${s2}`;
  } catch {
    return;
  }
  const a2 = document.createElement("style");
  a2.appendChild(Oe(s2, n2, r2)), e2.appendChild(a2);
}
function Be(t2, e2) {
  N(t2, e2, ":before"), N(t2, e2, ":after");
}
const X$1 = "application/font-woff", J$1 = "image/jpeg", ke$1 = {
  woff: X$1,
  woff2: X$1,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: J$1,
  jpeg: J$1,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Ve$1(t2) {
  const e2 = /\.([^./]*?)$/g.exec(t2);
  return e2 ? e2[1] : "";
}
function V(t2) {
  const e2 = Ve$1(t2).toLowerCase();
  return ke$1[e2] || "";
}
function We$1(t2) {
  return t2.split(/,/)[1];
}
function B(t2) {
  return t2.search(/^(data:)/) !== -1;
}
function te(t2, e2) {
  return `data:${e2};base64,${t2}`;
}
async function ne(t2, e2, n2) {
  const r2 = await fetch(t2, e2);
  if (r2.status === 404)
    throw new Error(`Resource "${r2.url}" not found`);
  const i2 = await r2.blob();
  return new Promise((s2, a2) => {
    const c2 = new FileReader();
    c2.onerror = a2, c2.onloadend = () => {
      try {
        s2(n2({ res: r2, result: c2.result }));
      } catch (o2) {
        a2(o2);
      }
    }, c2.readAsDataURL(i2);
  });
}
const H = {};
function ze$1(t2, e2, n2) {
  let r2 = t2.replace(/\?.*/, "");
  return n2 && (r2 = t2), /ttf|otf|eot|woff2?/i.test(r2) && (r2 = r2.replace(/.*\//, "")), e2 ? `[${e2}]${r2}` : r2;
}
async function W$1(t2, e2, n2) {
  const r2 = ze$1(t2, e2, n2.includeQueryParams);
  if (H[r2] != null)
    return H[r2];
  n2.cacheBust && (t2 += (/\?/.test(t2) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i2;
  try {
    const s2 = await ne(t2, n2.fetchRequestInit, ({ res: a2, result: c2 }) => (e2 || (e2 = a2.headers.get("Content-Type") || ""), We$1(c2)));
    i2 = te(s2, e2);
  } catch (s2) {
    i2 = n2.imagePlaceholder || "";
    let a2 = `Failed to fetch resource: ${t2}`;
    s2 && (a2 = typeof s2 == "string" ? s2 : s2.message), a2 && console.warn(a2);
  }
  return H[r2] = i2, i2;
}
async function Ge$1(t2) {
  const e2 = t2.toDataURL();
  return e2 === "data:," ? t2.cloneNode(false) : A(e2);
}
async function Ue(t2, e2) {
  if (t2.currentSrc) {
    const s2 = document.createElement("canvas"), a2 = s2.getContext("2d");
    s2.width = t2.clientWidth, s2.height = t2.clientHeight, a2 == null || a2.drawImage(t2, 0, 0, s2.width, s2.height);
    const c2 = s2.toDataURL();
    return A(c2);
  }
  const n2 = t2.poster, r2 = V(n2), i2 = await W$1(n2, r2, e2);
  return A(i2);
}
async function _e$1(t2) {
  var e2;
  try {
    if (!((e2 = t2 == null ? void 0 : t2.contentDocument) === null || e2 === void 0) && e2.body)
      return await F(t2.contentDocument.body, {}, true);
  } catch {
  }
  return t2.cloneNode(false);
}
async function qe$1(t2, e2) {
  return g(t2, HTMLCanvasElement) ? Ge$1(t2) : g(t2, HTMLVideoElement) ? Ue(t2, e2) : g(t2, HTMLIFrameElement) ? _e$1(t2) : t2.cloneNode(false);
}
const je = (t2) => t2.tagName != null && t2.tagName.toUpperCase() === "SLOT";
async function Ne$1(t2, e2, n2) {
  var r2, i2;
  let s2 = [];
  return je(t2) && t2.assignedNodes ? s2 = y(t2.assignedNodes()) : g(t2, HTMLIFrameElement) && (!((r2 = t2.contentDocument) === null || r2 === void 0) && r2.body) ? s2 = y(t2.contentDocument.body.childNodes) : s2 = y(((i2 = t2.shadowRoot) !== null && i2 !== void 0 ? i2 : t2).childNodes), s2.length === 0 || g(t2, HTMLVideoElement) || await s2.reduce((a2, c2) => a2.then(() => F(c2, n2)).then((o2) => {
    o2 && e2.appendChild(o2);
  }), Promise.resolve()), e2;
}
function Xe$1(t2, e2) {
  const n2 = e2.style;
  if (!n2)
    return;
  const r2 = window.getComputedStyle(t2);
  r2.cssText ? (n2.cssText = r2.cssText, n2.transformOrigin = r2.transformOrigin) : y(r2).forEach((i2) => {
    let s2 = r2.getPropertyValue(i2);
    i2 === "font-size" && s2.endsWith("px") && (s2 = `${Math.floor(parseFloat(s2.substring(0, s2.length - 2))) - 0.1}px`), g(t2, HTMLIFrameElement) && i2 === "display" && s2 === "inline" && (s2 = "block"), i2 === "d" && e2.getAttribute("d") && (s2 = `path(${e2.getAttribute("d")})`), n2.setProperty(i2, s2, r2.getPropertyPriority(i2));
  });
}
function Je$1(t2, e2) {
  g(t2, HTMLTextAreaElement) && (e2.innerHTML = t2.value), g(t2, HTMLInputElement) && e2.setAttribute("value", t2.value);
}
function Qe$1(t2, e2) {
  if (g(t2, HTMLSelectElement)) {
    const n2 = e2, r2 = Array.from(n2.children).find((i2) => t2.value === i2.getAttribute("value"));
    r2 && r2.setAttribute("selected", "");
  }
}
function Ye$2(t2, e2) {
  return g(e2, Element) && (Xe$1(t2, e2), Be(t2, e2), Je$1(t2, e2), Qe$1(t2, e2)), e2;
}
async function Ze$1(t2, e2) {
  const n2 = t2.querySelectorAll ? t2.querySelectorAll("use") : [];
  if (n2.length === 0)
    return t2;
  const r2 = {};
  for (let s2 = 0; s2 < n2.length; s2++) {
    const c2 = n2[s2].getAttribute("xlink:href");
    if (c2) {
      const o2 = t2.querySelector(c2), u2 = document.querySelector(c2);
      !o2 && u2 && !r2[c2] && (r2[c2] = await F(u2, e2, true));
    }
  }
  const i2 = Object.values(r2);
  if (i2.length) {
    const s2 = "http://www.w3.org/1999/xhtml", a2 = document.createElementNS(s2, "svg");
    a2.setAttribute("xmlns", s2), a2.style.position = "absolute", a2.style.width = "0", a2.style.height = "0", a2.style.overflow = "hidden", a2.style.display = "none";
    const c2 = document.createElementNS(s2, "defs");
    a2.appendChild(c2);
    for (let o2 = 0; o2 < i2.length; o2++)
      c2.appendChild(i2[o2]);
    t2.appendChild(a2);
  }
  return t2;
}
async function F(t2, e2, n2) {
  return !n2 && e2.filter && !e2.filter(t2) ? null : Promise.resolve(t2).then((r2) => qe$1(r2, e2)).then((r2) => Ne$1(t2, r2, e2)).then((r2) => Ye$2(t2, r2)).then((r2) => Ze$1(r2, e2));
}
const re = /url\((['"]?)([^'"]+?)\1\)/g, Ke = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, et$1 = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function tt$1(t2) {
  const e2 = t2.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e2})(['"]?\\))`, "g");
}
function nt$1(t2) {
  const e2 = [];
  return t2.replace(re, (n2, r2, i2) => (e2.push(i2), n2)), e2.filter((n2) => !B(n2));
}
async function rt(t2, e2, n2, r2, i2) {
  try {
    const s2 = n2 ? Ie$2(e2, n2) : e2, a2 = V(e2);
    let c2;
    if (i2) {
      const o2 = await i2(s2);
      c2 = te(o2, a2);
    } else
      c2 = await W$1(s2, a2, r2);
    return t2.replace(tt$1(e2), `$1${c2}$3`);
  } catch {
  }
  return t2;
}
function it$1(t2, { preferredFontFormat: e2 }) {
  return e2 ? t2.replace(et$1, (n2) => {
    for (; ; ) {
      const [r2, , i2] = Ke.exec(n2) || [];
      if (!i2)
        return "";
      if (i2 === e2)
        return `src: ${r2};`;
    }
  }) : t2;
}
function ie(t2) {
  return t2.search(re) !== -1;
}
async function se(t2, e2, n2) {
  if (!ie(t2))
    return t2;
  const r2 = it$1(t2, n2);
  return nt$1(r2).reduce((s2, a2) => s2.then((c2) => rt(c2, a2, e2, n2)), Promise.resolve(r2));
}
async function D2(t2, e2, n2) {
  var r2;
  const i2 = (r2 = e2.style) === null || r2 === void 0 ? void 0 : r2.getPropertyValue(t2);
  if (i2) {
    const s2 = await se(i2, null, n2);
    return e2.style.setProperty(t2, s2, e2.style.getPropertyPriority(t2)), true;
  }
  return false;
}
async function st(t2, e2) {
  await D2("background", t2, e2) || await D2("background-image", t2, e2), await D2("mask", t2, e2) || await D2("mask-image", t2, e2);
}
async function at(t2, e2) {
  const n2 = g(t2, HTMLImageElement);
  if (!(n2 && !B(t2.src)) && !(g(t2, SVGImageElement) && !B(t2.href.baseVal)))
    return;
  const r2 = n2 ? t2.src : t2.href.baseVal, i2 = await W$1(r2, V(r2), e2);
  await new Promise((s2, a2) => {
    t2.onload = s2, t2.onerror = a2;
    const c2 = t2;
    c2.decode && (c2.decode = s2), c2.loading === "lazy" && (c2.loading = "eager"), n2 ? (t2.srcset = "", t2.src = i2) : t2.href.baseVal = i2;
  });
}
async function ct(t2, e2) {
  const r2 = y(t2.childNodes).map((i2) => ae(i2, e2));
  await Promise.all(r2).then(() => t2);
}
async function ae(t2, e2) {
  g(t2, Element) && (await st(t2, e2), await at(t2, e2), await ct(t2, e2));
}
function ot(t2, e2) {
  const { style: n2 } = t2;
  e2.backgroundColor && (n2.backgroundColor = e2.backgroundColor), e2.width && (n2.width = `${e2.width}px`), e2.height && (n2.height = `${e2.height}px`);
  const r2 = e2.style;
  return r2 != null && Object.keys(r2).forEach((i2) => {
    n2[i2] = r2[i2];
  }), t2;
}
const Q = {};
async function Y$1(t2) {
  let e2 = Q[t2];
  if (e2 != null)
    return e2;
  const r2 = await (await fetch(t2)).text();
  return e2 = { url: t2, cssText: r2 }, Q[t2] = e2, e2;
}
async function Z$2(t2, e2) {
  let n2 = t2.cssText;
  const r2 = /url\(["']?([^"')]+)["']?\)/g, s2 = (n2.match(/url\([^)]+\)/g) || []).map(async (a2) => {
    let c2 = a2.replace(r2, "$1");
    return c2.startsWith("https://") || (c2 = new URL(c2, t2.url).href), ne(c2, e2.fetchRequestInit, ({ result: o2 }) => (n2 = n2.replace(a2, `url(${o2})`), [a2, o2]));
  });
  return Promise.all(s2).then(() => n2);
}
function K(t2) {
  if (t2 == null)
    return [];
  const e2 = [], n2 = /(\/\*[\s\S]*?\*\/)/gi;
  let r2 = t2.replace(n2, "");
  const i2 = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const o2 = i2.exec(r2);
    if (o2 === null)
      break;
    e2.push(o2[0]);
  }
  r2 = r2.replace(i2, "");
  const s2 = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a2 = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", c2 = new RegExp(a2, "gi");
  for (; ; ) {
    let o2 = s2.exec(r2);
    if (o2 === null) {
      if (o2 = c2.exec(r2), o2 === null)
        break;
      s2.lastIndex = c2.lastIndex;
    } else
      c2.lastIndex = s2.lastIndex;
    e2.push(o2[0]);
  }
  return e2;
}
async function lt(t2, e2) {
  const n2 = [], r2 = [];
  return t2.forEach((i2) => {
    if ("cssRules" in i2)
      try {
        y(i2.cssRules || []).forEach((s2, a2) => {
          if (s2.type === CSSRule.IMPORT_RULE) {
            let c2 = a2 + 1;
            const o2 = s2.href, u2 = Y$1(o2).then((f2) => Z$2(f2, e2)).then((f2) => K(f2).forEach((m2) => {
              try {
                i2.insertRule(m2, m2.startsWith("@import") ? c2 += 1 : i2.cssRules.length);
              } catch (h2) {
                console.error("Error inserting rule from remote css", {
                  rule: m2,
                  error: h2
                });
              }
            })).catch((f2) => {
              console.error("Error loading remote css", f2.toString());
            });
            r2.push(u2);
          }
        });
      } catch (s2) {
        const a2 = t2.find((c2) => c2.href == null) || document.styleSheets[0];
        i2.href != null && r2.push(Y$1(i2.href).then((c2) => Z$2(c2, e2)).then((c2) => K(c2).forEach((o2) => {
          a2.insertRule(o2, i2.cssRules.length);
        })).catch((c2) => {
          console.error("Error loading remote stylesheet", c2);
        })), console.error("Error inlining remote css file", s2);
      }
  }), Promise.all(r2).then(() => (t2.forEach((i2) => {
    if ("cssRules" in i2)
      try {
        y(i2.cssRules || []).forEach((s2) => {
          n2.push(s2);
        });
      } catch (s2) {
        console.error(`Error while reading CSS rules from ${i2.href}`, s2);
      }
  }), n2));
}
function ut$1(t2) {
  return t2.filter((e2) => e2.type === CSSRule.FONT_FACE_RULE).filter((e2) => ie(e2.style.getPropertyValue("src")));
}
async function ht(t2, e2) {
  if (t2.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n2 = y(t2.ownerDocument.styleSheets), r2 = await lt(n2, e2);
  return ut$1(r2);
}
async function ft$1(t2, e2) {
  const n2 = await ht(t2, e2);
  return (await Promise.all(n2.map((i2) => {
    const s2 = i2.parentStyleSheet ? i2.parentStyleSheet.href : null;
    return se(i2.cssText, s2, e2);
  }))).join(`
`);
}
async function dt$1(t2, e2) {
  const n2 = e2.fontEmbedCSS != null ? e2.fontEmbedCSS : e2.skipFonts ? null : await ft$1(t2, e2);
  if (n2) {
    const r2 = document.createElement("style"), i2 = document.createTextNode(n2);
    r2.appendChild(i2), t2.firstChild ? t2.insertBefore(r2, t2.firstChild) : t2.appendChild(r2);
  }
}
async function mt(t2, e2 = {}) {
  const { width: n2, height: r2 } = ee(t2, e2), i2 = await F(t2, e2, true);
  return await dt$1(i2, e2), await ae(i2, e2), ot(i2, e2), await Pe$1(i2, n2, r2);
}
async function ce(t2, e2 = {}) {
  const { width: n2, height: r2 } = ee(t2, e2), i2 = await mt(t2, e2), s2 = await A(i2), a2 = document.createElement("canvas"), c2 = a2.getContext("2d"), o2 = e2.pixelRatio || Ae$1(), u2 = e2.canvasWidth || n2, f2 = e2.canvasHeight || r2;
  return a2.width = u2 * o2, a2.height = f2 * o2, e2.skipAutoScale || Fe$1(a2), a2.style.width = `${u2}`, a2.style.height = `${f2}`, e2.backgroundColor && (c2.fillStyle = e2.backgroundColor, c2.fillRect(0, 0, a2.width, a2.height)), c2.drawImage(s2, 0, 0, a2.width, a2.height), a2;
}
async function gt(t2, e2 = {}) {
  return (await ce(t2, e2)).toDataURL();
}
async function pt(t2, e2 = {}) {
  return (await ce(t2, e2)).toDataURL("image/jpeg", e2.quality || 1);
}
class oe {
  constructor(e2, n2) {
    this.model = e2, this.services = n2, this.init();
  }
  init() {
  }
  update() {
  }
  // Used to pass down information to the components
  setModel(e2) {
    this.model = e2;
  }
  // Used to pass down services to the components
  setServices(e2) {
    this.services = e2;
  }
}
const yt$1 = "DONT_STYLE_ME_css_styles_verifier";
let k$1 = class k extends oe {
  // initialized in initializeID() called by init()
  constructor(e2, n2) {
    super(e2, n2);
  }
  static getHTMLElementSize(e2) {
    return {
      width: e2.clientWidth,
      height: e2.clientHeight
    };
  }
  static getSVGElementSize(e2, n2 = {
    useAttrs: false,
    useClientDimensions: false,
    useBBox: false,
    useBoundingRect: false
  }) {
    e2.attr || (e2 = select(e2));
    const r2 = {
      width: 0,
      height: 0
    }, i2 = (h2) => {
      h2 && Object.keys(r2).forEach((w2) => {
        if (h2[w2]) {
          const R2 = h2[w2], I2 = parseFloat(R2);
          R2 && I2 > r2[w2] && ("" + R2).indexOf("%") === -1 && (r2[w2] = I2);
        }
      });
    }, s2 = {
      width: e2.attr("width"),
      height: e2.attr("height")
    }, a2 = e2.node();
    let c2, o2, u2, f2;
    try {
      typeof a2.getBBox == "function" && (c2 = a2.getBBox(), o2 = {
        width: c2.width,
        height: c2.height
      });
    } catch (h2) {
      console.error(h2);
    }
    try {
      typeof (a2 == null ? void 0 : a2.getBoundingClientRect) == "function" && (u2 = a2.getBoundingClientRect(), f2 = {
        width: u2.width,
        height: u2.height
      });
    } catch (h2) {
      console.error(h2);
    }
    let m2;
    if (a2 instanceof SVGSVGElement && (m2 = {
      width: a2.clientWidth,
      height: a2.clientHeight
    }), n2) {
      if (n2.useAttrs && (i2(s2), r2.width > 0 && r2.height > 0))
        return r2;
      if (n2.useClientDimensions && (i2(m2), r2.width > 0 && r2.height > 0))
        return m2;
      if (n2.useBBox && (i2(o2), r2.width > 0 && r2.height > 0))
        return o2;
      if (n2.useBoundingRect && (i2(f2), r2.width > 0 && r2.height > 0))
        return f2;
    }
    try {
      const h2 = {
        width: G$1(e2.node(), "width", "baseVal", "value"),
        height: G$1(e2.node(), "height", "baseVal", "value")
      };
      i2(h2);
    } catch {
      i2(m2), i2(o2), i2(s2);
    }
    return r2;
  }
  static appendOrSelect(e2, n2) {
    const r2 = e2.select(`${n2}`);
    if (r2.empty()) {
      let i2 = n2.split("#"), s2, a2;
      return i2.length === 2 ? (s2 = i2[0], i2 = i2[1].split("."), a2 = i2[0]) : (i2 = n2.split("."), s2 = i2[0]), e2.append(s2).attr("id", a2).attr("class", i2.slice(1).join(" "));
    }
    return r2;
  }
  init() {
    this.initializeID(), this.styleHolderElement(), this.addMainContainer(), this.model.getOptions().resizable && this.addResizeListener(), this.addHolderListeners(), this.handleFullscreenChange();
  }
  getChartID() {
    return this.chartID;
  }
  getElementOffset(e2, n2 = false) {
    const r2 = { left: 0, top: 0 }, i2 = e2.getBoundingClientRect(), s2 = n2 ? { left: 0, top: 0 } : this.getHolder().getBoundingClientRect();
    try {
      r2.left = i2.left - s2.left, r2.top = i2.top - s2.top;
    } catch (a2) {
      console.error(a2);
    }
    return r2;
  }
  generateElementIDString(e2) {
    return `chart-${this.chartID}-${e2}`;
  }
  initializeID() {
    this.chartID = Math.floor((1 + Math.random()) * 281474976710656).toString(16);
  }
  addMainContainer() {
    const e2 = this.model.getOptions(), n2 = G$1(e2, "style", "prefix"), r2 = select(this.getHolder()).append("div").classed(`${Vu}--${n2}--chart-wrapper`, true).attr("id", `chart-${this.getChartID()}`).style("height", "100%").style("width", "100%");
    r2.append("g").attr("class", yt$1), this.mainContainer = r2.node();
  }
  update() {
    this.styleHolderElement();
  }
  styleHolderElement() {
    const e2 = this.getHolder(), { width: n2, height: r2, theme: i2 } = this.model.getOptions();
    n2 !== this.width && (e2.style.width = n2, this.width = n2), r2 !== this.height && (e2.style.height = r2, this.height = r2), select(this.getHolder()).classed(`${Vu}--chart-holder`, true).attr("data-carbon-theme", i2);
  }
  getHolder() {
    return this.model.get("holder");
  }
  exportToJPG() {
    const e2 = this, n2 = this.model.getOptions(), r2 = this.getHolder(), i2 = select(r2);
    i2.classed("filled", true), pt(this.getMainContainer(), {
      quality: 1,
      // Remove toolbar
      filter: (s2) => !(s2.classList && s2.classList.contains("cds--cc--toolbar"))
    }).then(function(s2) {
      var o2;
      let a2 = "myChart";
      const c2 = G$1(n2, "fileDownload", "fileName");
      typeof c2 == "function" ? a2 = c2("jpg") : typeof c2 == "string" && (a2 = c2), (o2 = e2.services.files) == null || o2.downloadImage(s2, `${a2}.jpg`), i2.classed("filled", false);
    });
  }
  exportToPNG() {
    const e2 = this, n2 = this.model.getOptions(), r2 = this.getHolder(), i2 = select(r2);
    i2.classed("filled", true), gt(this.getMainContainer(), {
      quality: 1,
      // Remove toolbar
      filter: (s2) => !(s2.classList && s2.classList.contains("cds--cc--toolbar"))
    }).then(function(s2) {
      var o2;
      let a2 = "myChart";
      const c2 = G$1(n2, "fileDownload", "fileName");
      typeof c2 == "function" ? a2 = c2("png") : typeof c2 == "string" && (a2 = c2), (o2 = e2.services.files) == null || o2.downloadImage(s2, `${a2}.png`), i2.classed("filled", false);
    }).catch(function(s2) {
      console.error("oops, something went wrong!", s2);
    });
  }
  isFullScreenMode() {
    return select(this.getHolder()).classed("fullscreen");
  }
  toggleFullscreen() {
    const e2 = this.getHolder();
    select(e2).classed("fullscreen") && (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : e2.requestFullscreen ? e2.requestFullscreen() : e2.webkitRequestFullscreen ? e2.webkitRequestFullscreen() : e2.mozRequestFullScreen ? e2.mozRequestFullScreen() : e2.msRequestFullscreen && e2.msRequestFullscreen();
  }
  handleFullscreenChange() {
    document.addEventListener("fullscreenchange", () => {
      const e2 = select(this.getHolder()), n2 = e2.classed("fullscreen");
      e2.classed("fullscreen", !n2);
    });
  }
  setSVGMaxHeight() {
    if (!this.model.getOptions().height) {
      const { height: e2 } = k.getSVGElementSize(
        select(this.mainContainer),
        {
          useBBox: true
        }
      ), n2 = select(this.mainContainer).attr("class"), r2 = select(this.mainContainer).selectAll(`.${n2} > svg`);
      let i2 = 0;
      r2.nodes().forEach(function(s2) {
        i2 += Number(
          k.getSVGElementSize(select(s2), {
            useBBox: true
          }).height
        );
      }), i2 <= e2 ? select(this.mainContainer).attr("height", i2) : select(this.mainContainer).attr("height", "100%");
    }
  }
  getMainContainer() {
    return this.mainContainer;
  }
  addHolderListeners() {
    const e2 = this.getHolder();
    e2 && select(e2).on("mouseover", () => {
      var n2;
      (n2 = this.services.events) == null || n2.dispatchEvent(oE.Chart.MOUSEOVER);
    }).on("mouseout", () => {
      var n2;
      (n2 = this.services.events) == null || n2.dispatchEvent(oE.Chart.MOUSEOUT);
    });
  }
  addResizeListener() {
    const e2 = this.getHolder();
    if (!e2)
      return;
    let n2 = e2.clientWidth, r2 = e2.clientHeight;
    const i2 = Te(() => {
      var a2;
      e2 && (Math.abs(n2 - e2.clientWidth) > 1 || Math.abs(r2 - e2.clientHeight) > 1) && (n2 = e2.clientWidth, r2 = e2.clientHeight, (a2 = this.services.events) == null || a2.dispatchEvent(oE.Chart.RESIZE));
    }, 12.5);
    new ResizeObserver(i2).observe(e2);
  }
};
class le extends oe {
  static appendOrUpdateLinearGradient(e2) {
    let n2 = e2.svg.select(`defs linearGradient#${e2.id}`);
    n2.empty() && (n2 = e2.svg.append("defs").append("linearGradient").attr("id", e2.id).attr("x1", e2.x1).attr("x2", e2.x2).attr("y1", e2.y1).attr("y2", e2.y2)), n2.selectAll("stop").remove(), n2.selectAll("stop").data(e2.stops).enter().append("stop").attr("offset", (r2) => r2.offset).style("stop-color", (r2) => r2.color).style("stop-opacity", (r2) => r2.opacity);
  }
  static getOffsetRatio(e2) {
    return (Math.abs(e2[1]) * 100 / Math.abs(e2[0] - e2[1])).toFixed(2) + "%";
  }
  static getStops(e2, n2) {
    const r2 = e2[0] < 0 && e2[1] > 0;
    let i2 = [
      {
        offset: "0%",
        color: n2,
        opacity: "0.6"
      },
      {
        offset: "80%",
        color: n2,
        opacity: "0"
      }
    ];
    return r2 && (i2 = [
      {
        offset: "0%",
        color: n2,
        opacity: "0.6"
      },
      {
        offset: le.getOffsetRatio(e2),
        color: n2,
        opacity: "0"
      },
      {
        offset: "100%",
        color: n2,
        opacity: "0.6"
      }
    ]), i2;
  }
}
function Lr(o2, e2, t2) {
  return o2 === o2 && (t2 !== void 0 && (o2 = o2 <= t2 ? o2 : t2), e2 !== void 0 && (o2 = o2 >= e2 ? o2 : e2)), o2;
}
function ba(o2, e2, t2) {
  return t2 === void 0 && (t2 = e2, e2 = void 0), t2 !== void 0 && (t2 = j(t2), t2 = t2 === t2 ? t2 : 0), e2 !== void 0 && (e2 = j(e2), e2 = e2 === e2 ? e2 : 0), Lr(j(o2), e2, t2);
}
var Ar = "Expected a function";
function wr(o2, e2, t2) {
  if (typeof o2 != "function")
    throw new TypeError(Ar);
  return setTimeout(function() {
    o2.apply(void 0, t2);
  }, e2);
}
Jt(function(o2, e2, t2) {
  return wr(o2, j(e2) || 0, t2);
});
function Sa(o2, e2) {
  return st$2(o2, e2);
}
function kr(o2, e2) {
  var t2;
  return v$2(o2, function(n2, s2, a2) {
    return t2 = e2(n2, s2, a2), !t2;
  }), !!t2;
}
function Dr(o2, e2, t2) {
  var n2 = _(o2) ? Xs : kr;
  return t2 && Ca$1(o2, e2, t2) && (e2 = void 0), n2(o2, Iu(e2));
}
class Y {
  constructor(e2, t2, n2) {
    if (this.type = "", this.renderType = D$3.HTML, this.id = "", this.parent = void 0, this.configs = {}, this.model = e2, this.services = t2, n2 && (this.configs = n2, this.configs.id)) {
      const s2 = G$1(this.model.getOptions(), "style", "prefix");
      this.id = `${s2}--${this.configs.id}`;
    }
    this.parent || this.setParent(
      select(
        this.services.domUtils.getMainContainer()
      )
    );
  }
  init() {
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    console.error("Error: Component did not provide the required render function.");
  }
  destroy() {
  }
  // Used to pass down information to the components
  setModel(e2) {
    this.model = e2;
  }
  // Used to pass down information to the components
  setServices(e2) {
    this.services = e2;
  }
  setParent(e2) {
    var n2;
    const t2 = this.parent;
    if (this.parent = e2, !(t2 && t2.node() === e2.node()) && this.type) {
      const s2 = G$1(this.model.getOptions(), "style", "prefix");
      (n2 = this.parent) == null || n2.classed(`${Vu}--${s2}--${this.type}`, true), t2 && t2.classed(`${Vu}--${s2}--${this.type}`, false);
    }
  }
  getParent() {
    return this.parent;
  }
  getComponentContainer(e2 = { withinChartClip: false }) {
    if (this.type) {
      const t2 = G$1(this.model.getOptions(), "style", "prefix"), n2 = this.id ? `#${this.id}` : "", s2 = k$1.appendOrSelect(
        this.parent,
        `${this.renderType === D$3.SVG ? "svg" : "div"}${n2}.${Vu}--${t2}--${this.type}`
      );
      if (e2.withinChartClip) {
        const a2 = this.model.get("chartClipId");
        if (a2) {
          const r2 = select(`#${a2}`).select("rect");
          r2.size() !== 0 && parseFloat(r2.attr("height")) > 0 && s2.attr("clip-path", `url(#${a2})`);
        }
      }
      return s2.attr("width", "100%").attr("height", "100%");
    }
    return this.parent;
  }
  /**
   * graphs used in combo charts share a model with global options but can receive their own local options.
   * this function retrieves the global options and merges it with any options passed into this
   * component's config.options object.
   */
  getOptions() {
    return this.configs.options ? h({}, this.model.getOptions(), this.configs.options) : this.model.getOptions();
  }
}
/*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE */
const {
  entries: Oa,
  setPrototypeOf: xs,
  isFrozen: Pr,
  getPrototypeOf: Nr,
  getOwnPropertyDescriptor: Vr
} = Object;
let {
  freeze: be$1,
  seal: Ie$1,
  create: Ta
} = Object, {
  apply: bn,
  construct: Sn
} = typeof Reflect < "u" && Reflect;
be$1 || (be$1 = function(e2) {
  return e2;
});
Ie$1 || (Ie$1 = function(e2) {
  return e2;
});
bn || (bn = function(e2, t2, n2) {
  return e2.apply(t2, n2);
});
Sn || (Sn = function(e2, t2) {
  return new e2(...t2);
});
const kt = Ae(Array.prototype.forEach), Ls = Ae(Array.prototype.pop), yt = Ae(Array.prototype.push), Bt = Ae(String.prototype.toLowerCase), dn = Ae(String.prototype.toString), As = Ae(String.prototype.match), Et = Ae(String.prototype.replace), Br = Ae(String.prototype.indexOf), Gr = Ae(String.prototype.trim), De = Ae(Object.prototype.hasOwnProperty), xe = Ae(RegExp.prototype.test), bt = Hr(TypeError);
function Ae(o2) {
  return function(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++)
      n2[s2 - 1] = arguments[s2];
    return bn(o2, e2, n2);
  };
}
function Hr(o2) {
  return function() {
    for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++)
      t2[n2] = arguments[n2];
    return Sn(o2, t2);
  };
}
function Z$1(o2, e2) {
  let t2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Bt;
  xs && xs(o2, null);
  let n2 = e2.length;
  for (; n2--; ) {
    let s2 = e2[n2];
    if (typeof s2 == "string") {
      const a2 = t2(s2);
      a2 !== s2 && (Pr(e2) || (e2[n2] = a2), s2 = a2);
    }
    o2[s2] = true;
  }
  return o2;
}
function $r(o2) {
  for (let e2 = 0; e2 < o2.length; e2++)
    De(o2, e2) || (o2[e2] = null);
  return o2;
}
function Ye$1(o2) {
  const e2 = Ta(null);
  for (const [t2, n2] of Oa(o2))
    De(o2, t2) && (Array.isArray(n2) ? e2[t2] = $r(n2) : n2 && typeof n2 == "object" && n2.constructor === Object ? e2[t2] = Ye$1(n2) : e2[t2] = n2);
  return e2;
}
function Dt(o2, e2) {
  for (; o2 !== null; ) {
    const n2 = Vr(o2, e2);
    if (n2) {
      if (n2.get)
        return Ae(n2.get);
      if (typeof n2.value == "function")
        return Ae(n2.value);
    }
    o2 = Nr(o2);
  }
  function t2() {
    return null;
  }
  return t2;
}
const ws = be$1(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), hn = be$1(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), un = be$1(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ur = be$1(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), pn = be$1(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Fr = be$1(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ms = be$1(["#text"]), Cs = be$1(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), gn = be$1(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), _s = be$1(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Pt = be$1(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), zr = Ie$1(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Wr = Ie$1(/<%[\w\W]*|[\w\W]*%>/gm), jr = Ie$1(/\${[\w\W]*}/gm), Xr = Ie$1(/^data-[\-\w.\u00B7-\uFFFF]/), Zr = Ie$1(/^aria-[\-\w]+$/), xa = Ie$1(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Yr = Ie$1(/^(?:\w+script|data):/i), qr = Ie$1(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), La = Ie$1(/^html$/i), Kr = Ie$1(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i);
var Is = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: zr,
  ERB_EXPR: Wr,
  TMPLIT_EXPR: jr,
  DATA_ATTR: Xr,
  ARIA_ATTR: Zr,
  IS_ALLOWED_URI: xa,
  IS_SCRIPT_OR_DATA: Yr,
  ATTR_WHITESPACE: qr,
  DOCTYPE_NAME: La,
  CUSTOM_ELEMENT: Kr
});
const Jr = function() {
  return typeof window > "u" ? null : window;
}, Qr = function(e2, t2) {
  if (typeof e2 != "object" || typeof e2.createPolicy != "function")
    return null;
  let n2 = null;
  const s2 = "data-tt-policy-suffix";
  t2 && t2.hasAttribute(s2) && (n2 = t2.getAttribute(s2));
  const a2 = "dompurify" + (n2 ? "#" + n2 : "");
  try {
    return e2.createPolicy(a2, {
      createHTML(i2) {
        return i2;
      },
      createScriptURL(i2) {
        return i2;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a2 + " could not be created."), null;
  }
};
function Aa() {
  let o2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jr();
  const e2 = (U2) => Aa(U2);
  if (e2.version = "3.0.10", e2.removed = [], !o2 || !o2.document || o2.document.nodeType !== 9)
    return e2.isSupported = false, e2;
  let {
    document: t2
  } = o2;
  const n2 = t2, s2 = n2.currentScript, {
    DocumentFragment: a2,
    HTMLTemplateElement: i2,
    Node: r2,
    Element: l2,
    NodeFilter: c2,
    NamedNodeMap: d2 = o2.NamedNodeMap || o2.MozNamedAttrMap,
    HTMLFormElement: p2,
    DOMParser: h2,
    trustedTypes: u2
  } = o2, g2 = l2.prototype, m2 = Dt(g2, "cloneNode"), E2 = Dt(g2, "nextSibling"), O2 = Dt(g2, "childNodes"), x2 = Dt(g2, "parentNode");
  if (typeof i2 == "function") {
    const U2 = t2.createElement("template");
    U2.content && U2.content.ownerDocument && (t2 = U2.content.ownerDocument);
  }
  let y2, w2 = "";
  const {
    implementation: A2,
    createNodeIterator: L2,
    createDocumentFragment: I2,
    getElementsByTagName: P2
  } = t2, {
    importNode: W2
  } = n2;
  let R2 = {};
  e2.isSupported = typeof Oa == "function" && typeof x2 == "function" && A2 && A2.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: _2,
    ERB_EXPR: V2,
    TMPLIT_EXPR: F2,
    DATA_ATTR: M2,
    ARIA_ATTR: J2,
    IS_SCRIPT_OR_DATA: me2,
    ATTR_WHITESPACE: q2,
    CUSTOM_ELEMENT: H2
  } = Is;
  let {
    IS_ALLOWED_URI: ae2
  } = Is, ce2 = null;
  const pt2 = Z$1({}, [...ws, ...hn, ...un, ...pn, ...Ms]);
  let re2 = null;
  const Ke2 = Z$1({}, [...Cs, ...gn, ..._s, ...Pt]);
  let Q2 = Object.seal(Ta(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  })), Ue2 = null, $ = null, K2 = true, se2 = true, oe2 = false, fe2 = true, Re2 = false, C2 = false, D3 = false, N2 = false, Se2 = false, Lt2 = false, At2 = false, Xn = true, Zn = false;
  const Ra2 = "user-content-";
  let qt2 = true, gt2 = false, Je2 = {}, Qe2 = null;
  const Yn2 = Z$1({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qn = null;
  const Kn = Z$1({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kt2 = null;
  const Jn = Z$1({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt2 = "http://www.w3.org/1998/Math/MathML", Mt2 = "http://www.w3.org/2000/svg", Ne2 = "http://www.w3.org/1999/xhtml";
  let et2 = Ne2, Jt2 = false, Qt2 = null;
  const ka2 = Z$1({}, [wt2, Mt2, Ne2], dn);
  let mt2 = null;
  const Da2 = ["application/xhtml+xml", "text/html"], Pa2 = "text/html";
  let ue2 = null, tt2 = null;
  const Na2 = t2.createElement("form"), Qn = function(b2) {
    return b2 instanceof RegExp || b2 instanceof Function;
  }, en2 = function() {
    let b2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(tt2 && tt2 === b2)) {
      if ((!b2 || typeof b2 != "object") && (b2 = {}), b2 = Ye$1(b2), mt2 = // eslint-disable-next-line unicorn/prefer-includes
      Da2.indexOf(b2.PARSER_MEDIA_TYPE) === -1 ? Pa2 : b2.PARSER_MEDIA_TYPE, ue2 = mt2 === "application/xhtml+xml" ? dn : Bt, ce2 = De(b2, "ALLOWED_TAGS") ? Z$1({}, b2.ALLOWED_TAGS, ue2) : pt2, re2 = De(b2, "ALLOWED_ATTR") ? Z$1({}, b2.ALLOWED_ATTR, ue2) : Ke2, Qt2 = De(b2, "ALLOWED_NAMESPACES") ? Z$1({}, b2.ALLOWED_NAMESPACES, dn) : ka2, Kt2 = De(b2, "ADD_URI_SAFE_ATTR") ? Z$1(
        Ye$1(Jn),
        // eslint-disable-line indent
        b2.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        ue2
        // eslint-disable-line indent
      ) : Jn, qn = De(b2, "ADD_DATA_URI_TAGS") ? Z$1(
        Ye$1(Kn),
        // eslint-disable-line indent
        b2.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        ue2
        // eslint-disable-line indent
      ) : Kn, Qe2 = De(b2, "FORBID_CONTENTS") ? Z$1({}, b2.FORBID_CONTENTS, ue2) : Yn2, Ue2 = De(b2, "FORBID_TAGS") ? Z$1({}, b2.FORBID_TAGS, ue2) : {}, $ = De(b2, "FORBID_ATTR") ? Z$1({}, b2.FORBID_ATTR, ue2) : {}, Je2 = De(b2, "USE_PROFILES") ? b2.USE_PROFILES : false, K2 = b2.ALLOW_ARIA_ATTR !== false, se2 = b2.ALLOW_DATA_ATTR !== false, oe2 = b2.ALLOW_UNKNOWN_PROTOCOLS || false, fe2 = b2.ALLOW_SELF_CLOSE_IN_ATTR !== false, Re2 = b2.SAFE_FOR_TEMPLATES || false, C2 = b2.WHOLE_DOCUMENT || false, Se2 = b2.RETURN_DOM || false, Lt2 = b2.RETURN_DOM_FRAGMENT || false, At2 = b2.RETURN_TRUSTED_TYPE || false, N2 = b2.FORCE_BODY || false, Xn = b2.SANITIZE_DOM !== false, Zn = b2.SANITIZE_NAMED_PROPS || false, qt2 = b2.KEEP_CONTENT !== false, gt2 = b2.IN_PLACE || false, ae2 = b2.ALLOWED_URI_REGEXP || xa, et2 = b2.NAMESPACE || Ne2, Q2 = b2.CUSTOM_ELEMENT_HANDLING || {}, b2.CUSTOM_ELEMENT_HANDLING && Qn(b2.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Q2.tagNameCheck = b2.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b2.CUSTOM_ELEMENT_HANDLING && Qn(b2.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Q2.attributeNameCheck = b2.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b2.CUSTOM_ELEMENT_HANDLING && typeof b2.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Q2.allowCustomizedBuiltInElements = b2.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Re2 && (se2 = false), Lt2 && (Se2 = true), Je2 && (ce2 = Z$1({}, Ms), re2 = [], Je2.html === true && (Z$1(ce2, ws), Z$1(re2, Cs)), Je2.svg === true && (Z$1(ce2, hn), Z$1(re2, gn), Z$1(re2, Pt)), Je2.svgFilters === true && (Z$1(ce2, un), Z$1(re2, gn), Z$1(re2, Pt)), Je2.mathMl === true && (Z$1(ce2, pn), Z$1(re2, _s), Z$1(re2, Pt))), b2.ADD_TAGS && (ce2 === pt2 && (ce2 = Ye$1(ce2)), Z$1(ce2, b2.ADD_TAGS, ue2)), b2.ADD_ATTR && (re2 === Ke2 && (re2 = Ye$1(re2)), Z$1(re2, b2.ADD_ATTR, ue2)), b2.ADD_URI_SAFE_ATTR && Z$1(Kt2, b2.ADD_URI_SAFE_ATTR, ue2), b2.FORBID_CONTENTS && (Qe2 === Yn2 && (Qe2 = Ye$1(Qe2)), Z$1(Qe2, b2.FORBID_CONTENTS, ue2)), qt2 && (ce2["#text"] = true), C2 && Z$1(ce2, ["html", "head", "body"]), ce2.table && (Z$1(ce2, ["tbody"]), delete Ue2.tbody), b2.TRUSTED_TYPES_POLICY) {
        if (typeof b2.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b2.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        y2 = b2.TRUSTED_TYPES_POLICY, w2 = y2.createHTML("");
      } else
        y2 === void 0 && (y2 = Qr(u2, s2)), y2 !== null && typeof w2 == "string" && (w2 = y2.createHTML(""));
      be$1 && be$1(b2), tt2 = b2;
    }
  }, es2 = Z$1({}, ["mi", "mo", "mn", "ms", "mtext"]), ts2 = Z$1({}, ["foreignobject", "desc", "title", "annotation-xml"]), Va2 = Z$1({}, ["title", "style", "font", "a", "script"]), ns2 = Z$1({}, [...hn, ...un, ...Ur]), ss2 = Z$1({}, [...pn, ...Fr]), Ba2 = function(b2) {
    let k3 = x2(b2);
    (!k3 || !k3.tagName) && (k3 = {
      namespaceURI: et2,
      tagName: "template"
    });
    const G2 = Bt(b2.tagName), ee2 = Bt(k3.tagName);
    return Qt2[b2.namespaceURI] ? b2.namespaceURI === Mt2 ? k3.namespaceURI === Ne2 ? G2 === "svg" : k3.namespaceURI === wt2 ? G2 === "svg" && (ee2 === "annotation-xml" || es2[ee2]) : !!ns2[G2] : b2.namespaceURI === wt2 ? k3.namespaceURI === Ne2 ? G2 === "math" : k3.namespaceURI === Mt2 ? G2 === "math" && ts2[ee2] : !!ss2[G2] : b2.namespaceURI === Ne2 ? k3.namespaceURI === Mt2 && !ts2[ee2] || k3.namespaceURI === wt2 && !es2[ee2] ? false : !ss2[G2] && (Va2[G2] || !ns2[G2]) : !!(mt2 === "application/xhtml+xml" && Qt2[b2.namespaceURI]) : false;
  }, ze2 = function(b2) {
    yt(e2.removed, {
      element: b2
    });
    try {
      b2.parentNode.removeChild(b2);
    } catch {
      b2.remove();
    }
  }, tn2 = function(b2, k3) {
    try {
      yt(e2.removed, {
        attribute: k3.getAttributeNode(b2),
        from: k3
      });
    } catch {
      yt(e2.removed, {
        attribute: null,
        from: k3
      });
    }
    if (k3.removeAttribute(b2), b2 === "is" && !re2[b2])
      if (Se2 || Lt2)
        try {
          ze2(k3);
        } catch {
        }
      else
        try {
          k3.setAttribute(b2, "");
        } catch {
        }
  }, as2 = function(b2) {
    let k3 = null, G2 = null;
    if (N2)
      b2 = "<remove></remove>" + b2;
    else {
      const ye2 = As(b2, /^[\r\n\t ]+/);
      G2 = ye2 && ye2[0];
    }
    mt2 === "application/xhtml+xml" && et2 === Ne2 && (b2 = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b2 + "</body></html>");
    const ee2 = y2 ? y2.createHTML(b2) : b2;
    if (et2 === Ne2)
      try {
        k3 = new h2().parseFromString(ee2, mt2);
      } catch {
      }
    if (!k3 || !k3.documentElement) {
      k3 = A2.createDocument(et2, "template", null);
      try {
        k3.documentElement.innerHTML = Jt2 ? w2 : ee2;
      } catch {
      }
    }
    const ve2 = k3.body || k3.documentElement;
    return b2 && G2 && ve2.insertBefore(t2.createTextNode(G2), ve2.childNodes[0] || null), et2 === Ne2 ? P2.call(k3, C2 ? "html" : "body")[0] : C2 ? k3.documentElement : ve2;
  }, is2 = function(b2) {
    return L2.call(
      b2.ownerDocument || b2,
      b2,
      // eslint-disable-next-line no-bitwise
      c2.SHOW_ELEMENT | c2.SHOW_COMMENT | c2.SHOW_TEXT | c2.SHOW_PROCESSING_INSTRUCTION,
      null
    );
  }, Ga2 = function(b2) {
    return b2 instanceof p2 && (typeof b2.nodeName != "string" || typeof b2.textContent != "string" || typeof b2.removeChild != "function" || !(b2.attributes instanceof d2) || typeof b2.removeAttribute != "function" || typeof b2.setAttribute != "function" || typeof b2.namespaceURI != "string" || typeof b2.insertBefore != "function" || typeof b2.hasChildNodes != "function");
  }, rs2 = function(b2) {
    return typeof r2 == "function" && b2 instanceof r2;
  }, Ve2 = function(b2, k3, G2) {
    R2[b2] && kt(R2[b2], (ee2) => {
      ee2.call(e2, k3, G2, tt2);
    });
  }, os2 = function(b2) {
    let k3 = null;
    if (Ve2("beforeSanitizeElements", b2, null), Ga2(b2))
      return ze2(b2), true;
    const G2 = ue2(b2.nodeName);
    if (Ve2("uponSanitizeElement", b2, {
      tagName: G2,
      allowedTags: ce2
    }), b2.hasChildNodes() && !rs2(b2.firstElementChild) && xe(/<[/\w]/g, b2.innerHTML) && xe(/<[/\w]/g, b2.textContent))
      return ze2(b2), true;
    if (!ce2[G2] || Ue2[G2]) {
      if (!Ue2[G2] && cs2(G2) && (Q2.tagNameCheck instanceof RegExp && xe(Q2.tagNameCheck, G2) || Q2.tagNameCheck instanceof Function && Q2.tagNameCheck(G2)))
        return false;
      if (qt2 && !Qe2[G2]) {
        const ee2 = x2(b2) || b2.parentNode, ve2 = O2(b2) || b2.childNodes;
        if (ve2 && ee2) {
          const ye2 = ve2.length;
          for (let Oe2 = ye2 - 1; Oe2 >= 0; --Oe2)
            ee2.insertBefore(m2(ve2[Oe2], true), E2(b2));
        }
      }
      return ze2(b2), true;
    }
    return b2 instanceof l2 && !Ba2(b2) || (G2 === "noscript" || G2 === "noembed" || G2 === "noframes") && xe(/<\/no(script|embed|frames)/i, b2.innerHTML) ? (ze2(b2), true) : (Re2 && b2.nodeType === 3 && (k3 = b2.textContent, kt([_2, V2, F2], (ee2) => {
      k3 = Et(k3, ee2, " ");
    }), b2.textContent !== k3 && (yt(e2.removed, {
      element: b2.cloneNode()
    }), b2.textContent = k3)), Ve2("afterSanitizeElements", b2, null), false);
  }, ls2 = function(b2, k3, G2) {
    if (Xn && (k3 === "id" || k3 === "name") && (G2 in t2 || G2 in Na2))
      return false;
    if (!(se2 && !$[k3] && xe(M2, k3))) {
      if (!(K2 && xe(J2, k3))) {
        if (!re2[k3] || $[k3]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(cs2(b2) && (Q2.tagNameCheck instanceof RegExp && xe(Q2.tagNameCheck, b2) || Q2.tagNameCheck instanceof Function && Q2.tagNameCheck(b2)) && (Q2.attributeNameCheck instanceof RegExp && xe(Q2.attributeNameCheck, k3) || Q2.attributeNameCheck instanceof Function && Q2.attributeNameCheck(k3)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            k3 === "is" && Q2.allowCustomizedBuiltInElements && (Q2.tagNameCheck instanceof RegExp && xe(Q2.tagNameCheck, G2) || Q2.tagNameCheck instanceof Function && Q2.tagNameCheck(G2)))
          )
            return false;
        } else if (!Kt2[k3]) {
          if (!xe(ae2, Et(G2, q2, ""))) {
            if (!((k3 === "src" || k3 === "xlink:href" || k3 === "href") && b2 !== "script" && Br(G2, "data:") === 0 && qn[b2])) {
              if (!(oe2 && !xe(me2, Et(G2, q2, "")))) {
                if (G2)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, cs2 = function(b2) {
    return b2 !== "annotation-xml" && As(b2, H2);
  }, ds2 = function(b2) {
    Ve2("beforeSanitizeAttributes", b2, null);
    const {
      attributes: k3
    } = b2;
    if (!k3)
      return;
    const G2 = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: re2
    };
    let ee2 = k3.length;
    for (; ee2--; ) {
      const ve2 = k3[ee2], {
        name: ye2,
        namespaceURI: Oe2,
        value: We2
      } = ve2, ft2 = ue2(ye2);
      let Te2 = ye2 === "value" ? We2 : Gr(We2);
      if (G2.attrName = ft2, G2.attrValue = Te2, G2.keepAttr = true, G2.forceKeepAttr = void 0, Ve2("uponSanitizeAttribute", b2, G2), Te2 = G2.attrValue, G2.forceKeepAttr || (tn2(ye2, b2), !G2.keepAttr))
        continue;
      if (!fe2 && xe(/\/>/i, Te2)) {
        tn2(ye2, b2);
        continue;
      }
      Re2 && kt([_2, V2, F2], (us2) => {
        Te2 = Et(Te2, us2, " ");
      });
      const hs2 = ue2(b2.nodeName);
      if (ls2(hs2, ft2, Te2)) {
        if (Zn && (ft2 === "id" || ft2 === "name") && (tn2(ye2, b2), Te2 = Ra2 + Te2), y2 && typeof u2 == "object" && typeof u2.getAttributeType == "function" && !Oe2)
          switch (u2.getAttributeType(hs2, ft2)) {
            case "TrustedHTML": {
              Te2 = y2.createHTML(Te2);
              break;
            }
            case "TrustedScriptURL": {
              Te2 = y2.createScriptURL(Te2);
              break;
            }
          }
        try {
          Oe2 ? b2.setAttributeNS(Oe2, ye2, Te2) : b2.setAttribute(ye2, Te2), Ls(e2.removed);
        } catch {
        }
      }
    }
    Ve2("afterSanitizeAttributes", b2, null);
  }, Ha2 = function U2(b2) {
    let k3 = null;
    const G2 = is2(b2);
    for (Ve2("beforeSanitizeShadowDOM", b2, null); k3 = G2.nextNode(); )
      Ve2("uponSanitizeShadowNode", k3, null), !os2(k3) && (k3.content instanceof a2 && U2(k3.content), ds2(k3));
    Ve2("afterSanitizeShadowDOM", b2, null);
  };
  return e2.sanitize = function(U2) {
    let b2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k3 = null, G2 = null, ee2 = null, ve2 = null;
    if (Jt2 = !U2, Jt2 && (U2 = "<!-->"), typeof U2 != "string" && !rs2(U2))
      if (typeof U2.toString == "function") {
        if (U2 = U2.toString(), typeof U2 != "string")
          throw bt("dirty is not a string, aborting");
      } else
        throw bt("toString is not a function");
    if (!e2.isSupported)
      return U2;
    if (D3 || en2(b2), e2.removed = [], typeof U2 == "string" && (gt2 = false), gt2) {
      if (U2.nodeName) {
        const We2 = ue2(U2.nodeName);
        if (!ce2[We2] || Ue2[We2])
          throw bt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (U2 instanceof r2)
      k3 = as2("<!---->"), G2 = k3.ownerDocument.importNode(U2, true), G2.nodeType === 1 && G2.nodeName === "BODY" || G2.nodeName === "HTML" ? k3 = G2 : k3.appendChild(G2);
    else {
      if (!Se2 && !Re2 && !C2 && // eslint-disable-next-line unicorn/prefer-includes
      U2.indexOf("<") === -1)
        return y2 && At2 ? y2.createHTML(U2) : U2;
      if (k3 = as2(U2), !k3)
        return Se2 ? null : At2 ? w2 : "";
    }
    k3 && N2 && ze2(k3.firstChild);
    const ye2 = is2(gt2 ? U2 : k3);
    for (; ee2 = ye2.nextNode(); )
      os2(ee2) || (ee2.content instanceof a2 && Ha2(ee2.content), ds2(ee2));
    if (gt2)
      return U2;
    if (Se2) {
      if (Lt2)
        for (ve2 = I2.call(k3.ownerDocument); k3.firstChild; )
          ve2.appendChild(k3.firstChild);
      else
        ve2 = k3;
      return (re2.shadowroot || re2.shadowrootmode) && (ve2 = W2.call(n2, ve2, true)), ve2;
    }
    let Oe2 = C2 ? k3.outerHTML : k3.innerHTML;
    return C2 && ce2["!doctype"] && k3.ownerDocument && k3.ownerDocument.doctype && k3.ownerDocument.doctype.name && xe(La, k3.ownerDocument.doctype.name) && (Oe2 = "<!DOCTYPE " + k3.ownerDocument.doctype.name + `>
` + Oe2), Re2 && kt([_2, V2, F2], (We2) => {
      Oe2 = Et(Oe2, We2, " ");
    }), y2 && At2 ? y2.createHTML(Oe2) : Oe2;
  }, e2.setConfig = function() {
    let U2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    en2(U2), D3 = true;
  }, e2.clearConfig = function() {
    tt2 = null, D3 = false;
  }, e2.isValidAttribute = function(U2, b2, k3) {
    tt2 || en2({});
    const G2 = ue2(U2), ee2 = ue2(b2);
    return ls2(G2, ee2, k3);
  }, e2.addHook = function(U2, b2) {
    typeof b2 == "function" && (R2[U2] = R2[U2] || [], yt(R2[U2], b2));
  }, e2.removeHook = function(U2) {
    if (R2[U2])
      return Ls(R2[U2]);
  }, e2.removeHooks = function(U2) {
    R2[U2] && (R2[U2] = []);
  }, e2.removeAllHooks = function() {
    R2 = {};
  }, e2;
}
var Fn = Aa();
const Nt = (o2) => Fn.sanitize(o2, {
  USE_PROFILES: {
    html: true,
    svg: true,
    svgFilters: true
  }
}), eo = (o2) => Fn.sanitize(o2, {
  NAMESPACE: "http://www.w3.org/2000/svg",
  USE_PROFILES: {
    html: true,
    svg: true,
    svgFilters: true
  }
}), Pe = (o2) => Fn.sanitize(o2, { ALLOWED_TAGS: [] }), Wt = class Wt2 extends Y {
  constructor() {
    super(...arguments), this.type = "toolbar", this.renderType = D$3.HTML;
  }
  init() {
    const e2 = () => this.updateOverflowMenu(false);
    this.services.events.addEventListener(oE.Toolbar.SHOW_OVERFLOW_MENU, () => {
      this.renderOverflowMenu(), document.body.addEventListener("click", e2);
    }), this.services.events.addEventListener(oE.Toolbar.HIDE_OVERFLOW_MENU, () => {
      document.body.removeEventListener("click", e2);
    });
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    const t2 = this.getComponentContainer().attr("role", "toolbar").attr("aria-label", "chart toolbar");
    if (G$1(this.getOptions(), "data", "loading"))
      t2.html(""), this.overflowMenu = null;
    else {
      this.overflowMenu || (this.overflowMenu = t2.append("div").attr(
        "class",
        "cds--overflow-menu-options cds--overflow-menu--flip cds--overflow-menu-options cds--overflow-menu--flip"
      ).attr("tabindex", -1).html("<ul role='menu'></ul>"));
      const { buttonList: s2, overflowMenuItemList: a2 } = this.getControlConfigs();
      a2 && s2.push(this.getOverflowButtonConfig());
      const i2 = t2.selectAll("div.toolbar-control").data(s2, (c2) => c2.id);
      i2.exit().remove();
      const r2 = i2.enter().append("div").attr("class", "toolbar-control cds--overflow-menu cds--overflow-menu"), l2 = this;
      r2.merge(i2).classed("disabled", (c2) => c2.shouldBeDisabled()).attr("role", "button").attr("aria-disabled", (c2) => c2.shouldBeDisabled()).attr("aria-label", (c2) => c2.title).html((c2) => `
			<button
				class="cds--overflow-menu__trigger cds--overflow-menu__trigger"
				aria-haspopup="true" aria-expanded="false" id="${this.services.domUtils.generateElementIDString(
        `control-${Pe(c2.id)}`
      )}" aria-label="${Pe(c2.title)}">
				<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" class="cds--overflow-menu__icon cds--overflow-menu__icon" viewBox="0 0 32 32" aria-hidden="true">
					${eo(c2.iconSVG.content)}
				</svg>
			</button>`).each(function(c2, d2) {
        select(this).select("svg").style("pointer-events", "none").style("will-change", "transform").style("width", c2.iconSVG.width !== void 0 ? c2.iconSVG.width : "20px").style("height", c2.iconSVG.height !== void 0 ? c2.iconSVG.height : "20px"), select(this).select("button").on("mouseover focus", function(p2) {
          const h2 = select(this);
          h2.classed("hovered", true), l2.services.events.dispatchEvent(oE.Toolbar.SHOW_TOOLTIP, {
            event: p2,
            hoveredElement: h2,
            content: c2.title,
            noWrap: true,
            placements: ["top", "bottom"]
          });
        }).on("mouseout blur", function() {
          l2.services.events.dispatchEvent(oE.Toolbar.HIDE_TOOLTIP);
        }).on("click", (p2) => {
          c2.shouldBeDisabled() || l2.triggerFunctionAndEvent(c2, p2, this);
        }).on("keydown", (p2) => {
          p2.key && p2.key === "Enter" || p2.key === " " ? (p2.preventDefault(), l2.triggerFunctionAndEvent(c2, p2, this)) : p2.key && p2.key === "ArrowLeft" ? l2.focusOnPreviousEnabledToolbarItem(d2) : p2.key && p2.key === "ArrowRight" && l2.focusOnNextEnabledToolbarItem(d2);
        });
      }), this.overflowButton = this.getComponentContainer().select(
        `button.cds--overflow-menu__trigger#${this.services.domUtils.generateElementIDString(
          "control-toolbar-overflow-menu"
        )}`
      );
    }
  }
  renderOverflowMenu() {
    const { overflowMenuItemList: e2 } = this.getControlConfigs(), t2 = this.overflowMenu.select("ul").selectAll("li.cds--overflow-menu-options__option").data(e2, (s2) => G$1(s2, "id"));
    t2.exit().remove();
    const n2 = t2.enter().append("li").attr("id", (s2) => this.services.domUtils.generateElementIDString(`control-${s2.id}`)).attr("class", "cds--overflow-menu-options__option cds--overflow-menu-options__option").attr("role", "menuitem").attr("tabindex", 1);
    n2.append("button").attr("class", "cds--overflow-menu-options__btn cds--overflow-menu-options__btn"), n2.merge(t2).classed("cds--overflow-menu-options__option--disabled", (s2) => s2.shouldBeDisabled()).classed("cds--overflow-menu-options__option--disabled", (s2) => s2.shouldBeDisabled()).attr("aria-disabled", (s2) => s2.shouldBeDisabled()).selectAll("button").text((s2) => s2.title);
  }
  isOverflowMenuOpen() {
    return this.overflowMenu.classed("is-open");
  }
  // show/hide overflow menu
  updateOverflowMenu(e2) {
    this.overflowMenu && (this.overflowMenu.classed("is-open", e2), this.overflowButton && (this.overflowButton.attr("aria-expanded", e2), select(this.overflowButton.node().parentNode).classed("cds--overflow-menu--open", e2).classed("cds--overflow-menu--open", e2)), e2 ? this.services.events.dispatchEvent(oE.Toolbar.SHOW_OVERFLOW_MENU) : this.services.events.dispatchEvent(oE.Toolbar.HIDE_OVERFLOW_MENU));
  }
  // Toolbar controllers
  focusOnPreviousEnabledToolbarItem(e2) {
    const t2 = this.getToolbarButtonItems();
    let n2 = t2.length;
    for (let s2 = e2 - 1; s2 >= 0; s2--)
      if (!t2[s2].shouldBeDisabled()) {
        n2 = s2;
        break;
      }
    if (n2 < t2.length) {
      const s2 = select(
        `button#${this.services.domUtils.generateElementIDString(
          `control-${t2[n2].id}`
        )}`
      ).node();
      "focus" in s2 && s2.focus();
    }
  }
  focusOnNextEnabledToolbarItem(e2) {
    const t2 = this.getToolbarButtonItems();
    let n2 = -1;
    for (let s2 = e2 + 1; s2 < t2.length; s2++)
      if (!t2[s2].shouldBeDisabled()) {
        n2 = s2;
        break;
      }
    if (n2 > -1) {
      const s2 = select(
        `button#${this.services.domUtils.generateElementIDString(
          `control-${t2[n2].id}`
        )}`
      ).node();
      "focus" in s2 && s2.focus();
    }
  }
  focusOnPreviousEnabledMenuItem(e2) {
    const t2 = this.getOverflowMenuItems();
    let n2 = t2.length;
    for (let s2 = e2 - 1; s2 >= 0; s2--)
      if (!t2[s2].shouldBeDisabled()) {
        n2 = s2;
        break;
      }
    if (n2 < t2.length) {
      const s2 = select(
        `#${this.services.domUtils.generateElementIDString(
          `control-${t2[n2].id}`
        )} button`
      ).node();
      "focus" in s2 && s2.focus();
    }
  }
  focusOnNextEnabledMenuItem(e2) {
    const t2 = this.getOverflowMenuItems();
    let n2 = -1;
    for (let s2 = e2 + 1; s2 < t2.length; s2++)
      if (!t2[s2].shouldBeDisabled()) {
        n2 = s2;
        break;
      }
    if (n2 > -1) {
      const s2 = select(
        `#${this.services.domUtils.generateElementIDString(
          `control-${t2[n2].id}`
        )} button`
      ).node();
      "focus" in s2 && s2.focus();
    }
  }
  toggleOverflowMenu(e2) {
    if (this.isOverflowMenuOpen())
      this.updateOverflowMenu(false);
    else {
      this.updateOverflowMenu(true);
      const t2 = this;
      this.getOverflowMenuItems().forEach((s2, a2) => {
        const i2 = select(
          `#${this.services.domUtils.generateElementIDString(`control-${s2.id}`)}`
        );
        i2 !== null && (i2.on("click", () => {
          t2.triggerFunctionAndEvent(s2, e2, i2.node()), t2.updateOverflowMenu(false);
        }), i2.on("keydown", (r2) => {
          r2 && r2.key === "Enter" ? t2.triggerFunctionAndEvent(s2, e2, i2.node()) : r2 && r2.key === "ArrowUp" ? t2.focusOnPreviousEnabledMenuItem(a2) : r2 && r2.key === "ArrowDown" ? t2.focusOnNextEnabledMenuItem(a2) : r2 && r2.key === "Escape" && t2.updateOverflowMenu(false), r2.preventDefault();
        }));
      }), t2.focusOnNextEnabledMenuItem(-1);
    }
    e2 && e2.stopImmediatePropagation();
  }
  // Calls passed function && dispatches event
  triggerFunctionAndEvent(e2, t2, n2) {
    typeof e2.shouldBeDisabled == "function" && e2.shouldBeDisabled() || (typeof e2.clickFunction == "function" && e2.clickFunction(t2), this.services.events.dispatchEvent(oE.Toolbar.BUTTON_CLICK, {
      control: e2,
      event: t2,
      element: n2
    }));
  }
  getControlConfigs() {
    const e2 = G$1(this.getOptions(), "toolbar", "numberOfIcons") - 1, t2 = G$1(this.getOptions(), "toolbar", "controls"), n2 = [], s2 = [], a2 = [];
    return t2.forEach((i2) => {
      let r2 = null;
      if (i2.type === y$2.CUSTOM)
        G$1(i2, "id") === null && (i2.id = `toolbar-button-${Wt2.buttonID++}`), G$1(i2, "shouldBeDisabled") === null && (i2.shouldBeDisabled = () => false), r2 = i2;
      else {
        const l2 = this.services.domUtils.isFullScreenMode();
        i2.type === y$2.MAKE_FULLSCREEN && l2 ? i2.type = y$2.EXIT_FULLSCREEN : i2.type === y$2.EXIT_FULLSCREEN && !l2 && (i2.type = y$2.MAKE_FULLSCREEN), r2 = this.getControlConfigByType(i2.type);
      }
      r2 && (r2.text = i2.text ? i2.text : i2.type, r2.id.indexOf("toolbar-export") !== -1 ? n2.push(r2) : s2.length < e2 ? G$1(r2, "iconSVG", "content") === null ? a2.push(r2) : s2.push(r2) : a2.push(r2));
    }), a2.push(...n2), a2.length ? {
      buttonList: s2,
      overflowMenuItemList: a2
    } : {
      buttonList: s2
    };
  }
  getToolbarButtonItems() {
    const { buttonList: e2, overflowMenuItemList: t2 } = this.getControlConfigs();
    return t2 && e2.push(this.getOverflowButtonConfig()), e2 || [];
  }
  getOverflowMenuItems() {
    const { overflowMenuItemList: e2 } = this.getControlConfigs();
    return e2 || [];
  }
  // special button config for overflow button
  getOverflowButtonConfig() {
    const { moreOptions: e2 } = G$1(this.model.getOptions(), "locale", "translations", "toolbar");
    return {
      id: "toolbar-overflow-menu",
      title: e2,
      shouldBeDisabled: () => false,
      iconSVG: {
        content: `<circle cx="16" cy="8" r="2"></circle>
				<circle cx="16" cy="16" r="2"></circle>
				<circle cx="16" cy="24" r="2"></circle>`
      },
      clickFunction: (t2) => this.toggleOverflowMenu(t2)
    };
  }
  getControlConfigByType(e2) {
    const t2 = this.services.zoom && this.services.zoom.isZoomBarEnabled() && !this.services.zoom.isEmptyState(), n2 = this.model.getDisplayData(), s2 = this.model.getOptions(), {
      exportAsCSV: a2,
      exportAsJPG: i2,
      exportAsPNG: r2,
      zoomIn: l2,
      zoomOut: c2,
      resetZoom: d2,
      makeFullScreen: p2,
      exitFullScreen: h2,
      showAsTable: u2
    } = G$1(
      s2,
      "locale",
      "translations",
      "toolbar"
    );
    let g2;
    switch (e2) {
      case y$2.ZOOM_IN:
        t2 && (g2 = {
          id: "toolbar-zoomIn",
          title: l2,
          shouldBeDisabled: () => this.services.zoom.isMinZoomDomain(),
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.zoom.zoomIn()
        });
        break;
      case y$2.ZOOM_OUT:
        t2 && (g2 = {
          id: "toolbar-zoomOut",
          title: c2,
          shouldBeDisabled: () => this.services.zoom.isMaxZoomDomain(),
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.zoom.zoomOut()
        });
        break;
      case y$2.RESET_ZOOM:
        t2 && (g2 = {
          id: "toolbar-resetZoom",
          title: d2,
          shouldBeDisabled: () => this.services.zoom.isMaxZoomDomain(),
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.zoom.resetZoomDomain()
        });
        break;
      case y$2.MAKE_FULLSCREEN:
        g2 = {
          id: "toolbar-makefullscreen",
          iconSVG: {
            content: this.getControlIconByType(e2),
            width: "15px",
            height: "15px"
          },
          title: p2,
          shouldBeDisabled: () => false,
          clickFunction: () => {
            this.services.domUtils.toggleFullscreen();
          }
        };
        break;
      case y$2.EXIT_FULLSCREEN:
        g2 = {
          id: "toolbar-exitfullscreen",
          iconSVG: {
            content: this.getControlIconByType(e2),
            width: "15px",
            height: "15px"
          },
          title: h2,
          shouldBeDisabled: () => false,
          clickFunction: () => {
            this.services.domUtils.toggleFullscreen();
          }
        };
        break;
      case y$2.SHOW_AS_DATATABLE:
        g2 = {
          id: "toolbar-showasdatatable",
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          title: u2,
          shouldBeDisabled: () => n2.length === 0,
          clickFunction: () => this.services.events.dispatchEvent(oE.Modal.SHOW)
        };
        break;
      case y$2.EXPORT_CSV:
        g2 = {
          id: "toolbar-export-CSV",
          title: a2,
          shouldBeDisabled: () => false,
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.model.exportToCSV()
        };
        break;
      case y$2.EXPORT_PNG:
        g2 = {
          id: "toolbar-export-PNG",
          title: r2,
          shouldBeDisabled: () => false,
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.domUtils.exportToPNG()
        };
        break;
      case y$2.EXPORT_JPG:
        g2 = {
          id: "toolbar-export-JPG",
          title: i2,
          shouldBeDisabled: () => false,
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.domUtils.exportToJPG()
        };
        break;
      default:
        throw Error("Not supported toolbar control type: " + e2);
    }
    return g2;
  }
  getControlIconByType(e2) {
    switch (e2) {
      case y$2.ZOOM_IN:
        return `<polygon points="19 13 15 13 15 9 13 9 13 13 9 13 9 15 13 15 13 19 15 19 15 15 19 15 19 13"/>
						<path d="M22.45,21A10.87,10.87,0,0,0,25,14,11,11,0,1,0,14,25a10.87,10.87,0,0,0,7-2.55L28.59,30,30,28.59ZM14,23a9,9,0,1,1,9-9A9,9,0,0,1,14,23Z"/>`;
      case y$2.ZOOM_OUT:
        return `<rect x="9" y="13" width="10" height="2"/>
						<path d="M22.45,21A10.87,10.87,0,0,0,25,14,11,11,0,1,0,14,25a10.87,10.87,0,0,0,7-2.55L28.59,30,30,28.59ZM14,23a9,9,0,1,1,9-9A9,9,0,0,1,14,23Z"/>`;
      case y$2.RESET_ZOOM:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      case y$2.MAKE_FULLSCREEN:
        return '<polygon points="21 2 21 4 26.59 4 17 13.58 18.41 15 28 5.41 28 11 30 11 30 2 21 2"/><polygon points="15 18.42 13.59 17 4 26.59 4 21 2 21 2 30 11 30 11 28 5.41 28 15 18.42"/>';
      case y$2.EXIT_FULLSCREEN:
        return '<polygon points="4 18 4 20 10.586 20 2 28.582 3.414 30 12 21.414 12 28 14 28 14 18 4 18"/><polygon points="30 3.416 28.592 2 20 10.586 20 4 18 4 18 14 28 14 28 12 21.414 12 30 3.416"/>';
      case y$2.SHOW_AS_DATATABLE:
        return '<rect x="4" y="6" width="18" height="2"/><rect x="4" y="12" width="18" height="2"/><rect x="4" y="18" width="18" height="2"/><rect x="4" y="24" width="18" height="2"/><rect x="26" y="6" width="2" height="2"/><rect x="26" y="12" width="2" height="2"/><rect x="26" y="18" width="2" height="2"/><rect x="26" y="24" width="2" height="2"/>';
      case y$2.EXPORT_CSV:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      case y$2.EXPORT_JPG:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      case y$2.EXPORT_PNG:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      default:
        throw Error("Not supported toolbar control type: " + e2);
    }
  }
};
Wt.buttonID = 0;
let Rs = Wt;
const jt = class jt2 extends Y {
  constructor(e2, t2, n2, s2) {
    super(e2, t2, s2), this.type = "layout", this.configs = s2, this.children = n2, this._instanceID = jt2.instanceID++, this.init();
  }
  init() {
    this.children.forEach((e2) => {
      e2.components.forEach((t2) => {
        t2.init();
      });
    });
  }
  getPreferedAndFixedSizeSum() {
    const e2 = this.parent;
    let t2 = 0;
    return e2.selectAll(`div.layout-child-${this._instanceID}`).filter((n2) => {
      const s2 = G$1(n2, "growth");
      return s2 === z$2.PREFERRED || s2 === z$2.FIXED;
    }).each(function(n2) {
      t2 += n2.size;
    }), t2;
  }
  getNumOfStretchChildren() {
    return this.parent.selectAll(`div.layout-child-${this._instanceID}`).filter((t2) => G$1(t2, "growth") === z$2.STRETCH).size();
  }
  render(e2 = true) {
    const t2 = this.parent, { width: n2, height: s2 } = k$1.getHTMLElementSize(t2.node()), a2 = this.configs.direction === W$3.ROW || this.configs.direction === W$3.ROW_REVERSE, i2 = G$1(this.model.getOptions(), "style", "prefix"), r2 = t2.classed(
      `${Vu}--${i2}--layout-row`,
      this.configs.direction === W$3.ROW
    ).classed(
      `${Vu}--${i2}--layout-row-reverse`,
      this.configs.direction === W$3.ROW_REVERSE
    ).classed(
      `${Vu}--${i2}--layout-column`,
      this.configs.direction === W$3.COLUMN
    ).classed(
      `${Vu}--${i2}--layout-column-reverse`,
      this.configs.direction === W$3.COLUMN_REVERSE
    ).classed(
      `${Vu}--${i2}--layout-alignitems-center`,
      this.configs.alignItems === B$2.CENTER
    ).selectAll(`div.layout-child-${this._instanceID}`).data(this.children, (d2) => d2.id);
    r2.enter().append("div").merge(t2.selectAll(`div.layout-child-${this._instanceID}`)).attr("class", (d2) => `layout-child layout-child-${this._instanceID} ${d2.id}`).each(function(d2) {
      d2.components.forEach((p2) => {
        const h2 = select(this), g2 = G$1(d2, "renderType") === D$3.SVG;
        p2.setParent(
          g2 ? k$1.appendOrSelect(h2, "svg.layout-svg-wrapper").attr("width", "100%").attr("height", "100%") : h2
        );
        const m2 = G$1(d2, "growth");
        (m2 === z$2.PREFERRED || m2 === z$2.FIXED) && p2.render(e2);
      });
    }), t2.selectAll(`div.layout-child-${this._instanceID}`).style("height", null).style("width", null).each(function(d2) {
      const p2 = G$1(d2, "growth"), u2 = G$1(d2, "renderType") === D$3.SVG ? k$1.getSVGElementSize(select(this).select("svg.layout-svg-wrapper"), {
        useBBox: true
      }) : k$1.getHTMLElementSize(this);
      if (p2 === z$2.PREFERRED) {
        const g2 = a2 ? u2.width : u2.height, m2 = a2 ? n2 : s2;
        d2.size = g2 / m2 * 100;
      }
    }), r2.exit().remove(), this.children.filter((d2) => G$1(d2, "growth") === z$2.STRETCH).forEach((d2) => {
      d2.size = (100 - +this.getPreferedAndFixedSizeSum()) / +this.getNumOfStretchChildren();
    });
    const c2 = t2.selectAll(`div.layout-child-${this._instanceID}`).data(this.children, (d2) => d2.id);
    a2 ? c2.style("width", (d2) => `${d2.size / 100 * n2}px`).style("height", "100%") : c2.style("height", (d2) => `${d2.size / 100 * s2}px`).style("width", "100%"), c2.each(function(d2) {
      d2.components.forEach((p2) => {
        G$1(d2, "growth") === z$2.STRETCH && p2.render(e2);
      });
    });
  }
  // Pass on model to children as well
  setModel(e2) {
    super.setModel(e2), this.children.forEach((t2) => {
      t2.components.forEach((n2) => n2.setModel(e2));
    });
  }
  // Pass on essentials to children as well
  setServices(e2) {
    super.setServices(e2), this.children.forEach((t2) => {
      t2.components.forEach((n2) => n2.setServices(e2));
    });
  }
  destroy() {
    this.children.forEach((e2) => {
      e2.components.forEach((t2) => t2.destroy());
    });
  }
};
jt.instanceID = Math.floor(Math.random() * 99999999999);
let ks = jt;
class mh extends Y {
  constructor() {
    super(...arguments), this.type = "spacer";
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    this.getComponentContainer().style("width", `${this.configs.size || lc.default.size}px`).style("height", `${this.configs.size || lc.default.size}px`).attr("opacity", 0);
  }
}
var to = {
  prefix: "bx",
  selectorTabbable: `
    a[href], area[href], input:not([disabled]):not([tabindex='-1']),
    button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
    textarea:not([disabled]):not([tabindex='-1']),
    iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]
  `,
  selectorFocusable: `
    a[href], area[href], input:not([disabled]),
    button:not([disabled]),select:not([disabled]),
    textarea:not([disabled]),
    iframe, object, embed, *[tabindex], *[contenteditable=true]
  `
}, mn = to;
function Ds(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var n2 = e2[t2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(o2, n2.key, n2);
  }
}
function no(o2, e2, t2) {
  return e2 && Ds(o2.prototype, e2), t2 && Ds(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function so(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function ao(o2) {
  return lo(o2) || oo(o2) || ro(o2) || io();
}
function io() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ro(o2, e2) {
  if (o2) {
    if (typeof o2 == "string")
      return On(o2, e2);
    var t2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (t2 === "Object" && o2.constructor && (t2 = o2.constructor.name), t2 === "Map" || t2 === "Set")
      return Array.from(o2);
    if (t2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2))
      return On(o2, e2);
  }
}
function oo(o2) {
  if (typeof Symbol < "u" && o2[Symbol.iterator] != null || o2["@@iterator"] != null)
    return Array.from(o2);
}
function lo(o2) {
  if (Array.isArray(o2))
    return On(o2);
}
function On(o2, e2) {
  (e2 == null || e2 > o2.length) && (e2 = o2.length);
  for (var t2 = 0, n2 = new Array(e2); t2 < e2; t2++)
    n2[t2] = o2[t2];
  return n2;
}
function wa(o2) {
  return o2.reduce(function(e2, t2) {
    return Array.isArray(t2) ? e2.push.apply(e2, ao(wa(t2))) : e2.push(t2), e2;
  }, []);
}
function co() {
  for (var o2 = arguments.length, e2 = new Array(o2), t2 = 0; t2 < o2; t2++)
    e2[t2] = arguments[t2];
  return wa(e2).reduce(function(n2, s2) {
    return s2(n2);
  }, /* @__PURE__ */ function() {
    function n2() {
      so(this, n2);
    }
    return no(n2);
  }());
}
function Tn(o2) {
  "@babel/helpers - typeof";
  return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, Tn(o2);
}
function ho(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function Ps(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var n2 = e2[t2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(o2, n2.key, n2);
  }
}
function uo(o2, e2, t2) {
  return e2 && Ps(o2.prototype, e2), t2 && Ps(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function po(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && xn(o2, e2);
}
function xn(o2, e2) {
  return xn = Object.setPrototypeOf || function(n2, s2) {
    return n2.__proto__ = s2, n2;
  }, xn(o2, e2);
}
function go(o2) {
  var e2 = fo();
  return function() {
    var n2 = Ht(o2), s2;
    if (e2) {
      var a2 = Ht(this).constructor;
      s2 = Reflect.construct(n2, arguments, a2);
    } else
      s2 = n2.apply(this, arguments);
    return mo(this, s2);
  };
}
function mo(o2, e2) {
  if (e2 && (Tn(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ma(o2);
}
function Ma(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function fo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Ht(o2) {
  return Ht = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Ht(o2);
}
function vo(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    po(s2, t2);
    var n2 = go(s2);
    function s2(a2) {
      var i2, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (ho(this, s2), i2 = n2.call(this, a2, r2), i2.children = [], !a2 || a2.nodeType !== Node.ELEMENT_NODE)
        throw new TypeError("DOM element should be given to initialize this widget.");
      return i2.element = a2, i2.options = Object.assign(Object.create(i2.constructor.options), r2), i2.constructor.components.set(i2.element, Ma(i2)), i2;
    }
    return uo(s2, [{
      key: "release",
      value: (
        /**
         * Releases this component's instance from the associated element.
         */
        function() {
          for (var i2 = this.children.pop(); i2; i2 = this.children.pop())
            i2.release();
          return this.constructor.components.delete(this.element), null;
        }
      )
    }], [{
      key: "create",
      value: function(i2, r2) {
        return this.components.get(i2) || new this(i2, r2);
      }
    }]), s2;
  }(o2);
  return e2;
}
function Ln(o2) {
  "@babel/helpers - typeof";
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, Ln(o2);
}
function yo(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function Ns(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var n2 = e2[t2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(o2, n2.key, n2);
  }
}
function Eo(o2, e2, t2) {
  return e2 && Ns(o2.prototype, e2), t2 && Ns(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Gt() {
  return typeof Reflect < "u" && Reflect.get ? Gt = Reflect.get : Gt = function(e2, t2, n2) {
    var s2 = bo(e2, t2);
    if (s2) {
      var a2 = Object.getOwnPropertyDescriptor(s2, t2);
      return a2.get ? a2.get.call(arguments.length < 3 ? e2 : n2) : a2.value;
    }
  }, Gt.apply(this, arguments);
}
function bo(o2, e2) {
  for (; !Object.prototype.hasOwnProperty.call(o2, e2) && (o2 = ut(o2), o2 !== null); )
    ;
  return o2;
}
function So(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && An(o2, e2);
}
function An(o2, e2) {
  return An = Object.setPrototypeOf || function(n2, s2) {
    return n2.__proto__ = s2, n2;
  }, An(o2, e2);
}
function Oo(o2) {
  var e2 = Lo();
  return function() {
    var n2 = ut(o2), s2;
    if (e2) {
      var a2 = ut(this).constructor;
      s2 = Reflect.construct(n2, arguments, a2);
    } else
      s2 = n2.apply(this, arguments);
    return To(this, s2);
  };
}
function To(o2, e2) {
  if (e2 && (Ln(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return xo(o2);
}
function xo(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Lo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function ut(o2) {
  return ut = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, ut(o2);
}
function Ao(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    So(s2, t2);
    var n2 = Oo(s2);
    function s2() {
      var a2;
      yo(this, s2);
      for (var i2 = arguments.length, r2 = new Array(i2), l2 = 0; l2 < i2; l2++)
        r2[l2] = arguments[l2];
      return a2 = n2.call.apply(n2, [this].concat(r2)), a2.handles = /* @__PURE__ */ new Set(), a2;
    }
    return Eo(s2, [{
      key: "manage",
      value: (
        /**
         * Manages the given handle.
         * @param {Handle} handle The handle to manage.
         * @returns {Handle} The given handle.
         */
        function(i2) {
          return this.handles.add(i2), i2;
        }
      )
      /**
       * Stop managing the given handle.
       * @param {Handle} handle The handle to stop managing.
       * @returns {Handle} The given handle.
       */
    }, {
      key: "unmanage",
      value: function(i2) {
        return this.handles.delete(i2), i2;
      }
    }, {
      key: "release",
      value: function() {
        var i2 = this;
        return this.handles.forEach(function(r2) {
          r2.release(), i2.handles.delete(r2);
        }), Gt(ut(s2.prototype), "release", this).call(this);
      }
    }]), s2;
  }(o2);
  return e2;
}
function Ot(o2) {
  for (var e2 = arguments.length, t2 = new Array(e2 > 1 ? e2 - 1 : 0), n2 = 1; n2 < e2; n2++)
    t2[n2 - 1] = arguments[n2];
  return o2.addEventListener.apply(o2, t2), {
    release: function() {
      return o2.removeEventListener.apply(o2, t2), null;
    }
  };
}
function wn(o2) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, wn(o2);
}
function wo(o2) {
  return Io(o2) || _o(o2) || Co(o2) || Mo();
}
function Mo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Co(o2, e2) {
  if (o2) {
    if (typeof o2 == "string")
      return Mn(o2, e2);
    var t2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (t2 === "Object" && o2.constructor && (t2 = o2.constructor.name), t2 === "Map" || t2 === "Set")
      return Array.from(o2);
    if (t2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2))
      return Mn(o2, e2);
  }
}
function _o(o2) {
  if (typeof Symbol < "u" && o2[Symbol.iterator] != null || o2["@@iterator"] != null)
    return Array.from(o2);
}
function Io(o2) {
  if (Array.isArray(o2))
    return Mn(o2);
}
function Mn(o2, e2) {
  (e2 == null || e2 > o2.length) && (e2 = o2.length);
  for (var t2 = 0, n2 = new Array(e2); t2 < e2; t2++)
    n2[t2] = o2[t2];
  return n2;
}
function Ro(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function Vs(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var n2 = e2[t2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(o2, n2.key, n2);
  }
}
function ko(o2, e2, t2) {
  return e2 && Vs(o2.prototype, e2), t2 && Vs(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Do(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && Cn(o2, e2);
}
function Cn(o2, e2) {
  return Cn = Object.setPrototypeOf || function(n2, s2) {
    return n2.__proto__ = s2, n2;
  }, Cn(o2, e2);
}
function Po(o2) {
  var e2 = Bo();
  return function() {
    var n2 = $t(o2), s2;
    if (e2) {
      var a2 = $t(this).constructor;
      s2 = Reflect.construct(n2, arguments, a2);
    } else
      s2 = n2.apply(this, arguments);
    return No(this, s2);
  };
}
function No(o2, e2) {
  if (e2 && (wn(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Vo(o2);
}
function Vo(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Bo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function $t(o2) {
  return $t = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, $t(o2);
}
function Go(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    Do(s2, t2);
    var n2 = Po(s2);
    function s2() {
      return Ro(this, s2), n2.apply(this, arguments);
    }
    return ko(s2, [{
      key: "_changeState",
      value: (
        /* eslint-disable jsdoc/check-param-names */
        /**
         * The internal implementation for {@link EventedState#changeState `.changeState()`}, performing actual change in state.
         * @param {string} [state] The new state. Can be an omitted, which means toggling.
         * @param {object} [detail]
         *   The object that should be put to event details that is fired before/after changing state.
         *   Can have a `group` property, which specifies what state to be changed.
         * @param {EventedState~changeStateCallback} callback The callback called once changing state is finished or is canceled.
         * @private
         */
        function() {
          throw new Error("_changeState() should be overridden to perform actual change in state.");
        }
      )
      /**
       * Changes the state of this component.
       * @param {string} [state] The new state. Can be an omitted, which means toggling.
       * @param {object} [detail]
       *   The object that should be put to event details that is fired before/after changing state.
       *   Can have a `group` property, which specifies what state to be changed.
       * @param {EventedState~changeStateCallback} [callback] The callback called once changing state is finished or is canceled.
       */
    }, {
      key: "changeState",
      value: function() {
        for (var i2 = this, r2 = arguments.length, l2 = new Array(r2), c2 = 0; c2 < r2; c2++)
          l2[c2] = arguments[c2];
        var d2 = typeof l2[0] == "string" ? l2.shift() : void 0, p2 = Object(l2[0]) === l2[0] && typeof l2[0] != "function" ? l2.shift() : void 0, h2 = typeof l2[0] == "function" ? l2.shift() : void 0;
        if (typeof this.shouldStateBeChanged == "function" && !this.shouldStateBeChanged(d2, p2)) {
          h2 && h2(null, true);
          return;
        }
        var u2 = {
          group: p2 && p2.group,
          state: d2
        }, g2 = [u2.group, d2].filter(Boolean).join("-").split("-").map(function(w2) {
          return w2[0].toUpperCase() + w2.substr(1);
        }).join(""), m2 = new CustomEvent(this.options["eventBefore".concat(g2)], {
          bubbles: true,
          cancelable: true,
          detail: p2
        }), E2 = p2 && p2.delegatorNode || this.element, O2 = !E2.dispatchEvent(m2);
        if (O2) {
          if (h2) {
            var x2 = new Error("Changing state (".concat(JSON.stringify(u2), ") has been canceled."));
            x2.canceled = true, h2(x2);
          }
        } else {
          var y2 = [d2, p2].filter(Boolean);
          this._changeState.apply(this, wo(y2).concat([function() {
            E2.dispatchEvent(new CustomEvent(i2.options["eventAfter".concat(g2)], {
              bubbles: true,
              cancelable: true,
              detail: p2
            })), h2 && h2();
          }]));
        }
      }
      /* eslint-enable jsdoc/check-param-names */
      /**
       * Tests if change in state should happen or not.
       * Classes inheriting {@link EventedState `EventedState`} should override this function.
       * @function EventedState#shouldStateBeChanged
       * @param {string} [state] The new state. Can be an omitted, which means toggling.
       * @param {object} [detail]
       *   The object that should be put to event details that is fired before/after changing state.
       *   Can have a `group` property, which specifies what state to be changed.
       * @returns {boolean}
       *   `false` if change in state shouldn't happen, e.g. when the given new state is the same as the current one.
       */
    }]), s2;
  }(o2);
  return e2;
}
function _n(o2, e2) {
  var t2 = o2.target, n2 = o2.currentTarget;
  if (typeof t2.matches == "function") {
    if (t2.matches(e2))
      return t2;
    if (t2.matches("".concat(e2, " *"))) {
      var s2 = t2.closest(e2);
      if ((n2.nodeType === Node.DOCUMENT_NODE ? n2.documentElement : n2).contains(s2))
        return s2;
    }
  }
}
function Bs(o2) {
  if (!o2 || typeof o2 == "function")
    return {
      launchingElement: null,
      launchingEvent: null
    };
  var e2 = o2.delegateTarget || o2.currentTarget || o2, t2 = o2.currentTarget && o2;
  if (e2 && !e2.nodeType)
    throw new TypeError("DOM Node should be given for launching element.");
  if (t2 && !t2.type)
    throw new TypeError("DOM event should be given for launching event.");
  return {
    launchingElement: e2,
    launchingEvent: t2
  };
}
function In(o2) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, In(o2);
}
function Ho(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function Gs(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var n2 = e2[t2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(o2, n2.key, n2);
  }
}
function $o(o2, e2, t2) {
  return e2 && Gs(o2.prototype, e2), t2 && Gs(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Uo(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && Rn(o2, e2);
}
function Rn(o2, e2) {
  return Rn = Object.setPrototypeOf || function(n2, s2) {
    return n2.__proto__ = s2, n2;
  }, Rn(o2, e2);
}
function Fo(o2) {
  var e2 = jo();
  return function() {
    var n2 = Ut(o2), s2;
    if (e2) {
      var a2 = Ut(this).constructor;
      s2 = Reflect.construct(n2, arguments, a2);
    } else
      s2 = n2.apply(this, arguments);
    return zo(this, s2);
  };
}
function zo(o2, e2) {
  if (e2 && (In(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Wo(o2);
}
function Wo(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function jo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Ut(o2) {
  return Ut = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Ut(o2);
}
function Xo(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    Uo(s2, t2);
    var n2 = Fo(s2);
    function s2() {
      return Ho(this, s2), n2.apply(this, arguments);
    }
    return $o(s2, [{
      key: "show",
      value: (
        /**
         */
        /**
         * Switch to 'shown' state.
         * @param [evtOrElem] The launching event or element.
         * @param {EventedState~changeStateCallback} [callback] The callback.
         */
        function(i2, r2) {
          (!i2 || typeof i2 == "function") && (r2 = i2), this.changeState("shown", Bs(i2), r2);
        }
      )
      /**
       * Switch to 'hidden' state.
       * @param [evtOrElem] The launching event or element.
       * @param {EventedState~changeStateCallback} [callback] The callback.
       */
    }, {
      key: "hide",
      value: function(i2, r2) {
        (!i2 || typeof i2 == "function") && (r2 = i2), this.changeState("hidden", Bs(i2), r2);
      }
    }]), s2;
  }(o2);
  return e2;
}
var Zo = [Go, Xo];
const Yo = Zo;
function qo(o2) {
  return o2 && o2.__esModule && Object.prototype.hasOwnProperty.call(o2, "default") ? o2.default : o2;
}
var Ca = function() {
};
process.env.NODE_ENV !== "production" && (Ca = function(o2, e2, t2) {
  var n2 = arguments.length;
  t2 = new Array(n2 > 2 ? n2 - 2 : 0);
  for (var s2 = 2; s2 < n2; s2++)
    t2[s2 - 2] = arguments[s2];
  if (e2 === void 0)
    throw new Error(
      "`warning(condition, format, ...args)` requires a warning message argument"
    );
  if (e2.length < 10 || /^[s\W]*$/.test(e2))
    throw new Error(
      "The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: " + e2
    );
  if (!o2) {
    var a2 = 0, i2 = "Warning: " + e2.replace(/%s/g, function() {
      return t2[a2++];
    });
    typeof console < "u" && console.error(i2);
    try {
      throw new Error(i2);
    } catch {
    }
  }
});
var Ko = Ca;
const Jo = /* @__PURE__ */ qo(Ko);
function kn(o2) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, kn(o2);
}
function Qo(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function Hs(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var n2 = e2[t2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(o2, n2.key, n2);
  }
}
function el(o2, e2, t2) {
  return e2 && Hs(o2.prototype, e2), t2 && Hs(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function tl(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && Dn(o2, e2);
}
function Dn(o2, e2) {
  return Dn = Object.setPrototypeOf || function(n2, s2) {
    return n2.__proto__ = s2, n2;
  }, Dn(o2, e2);
}
function nl(o2) {
  var e2 = il();
  return function() {
    var n2 = Ft(o2), s2;
    if (e2) {
      var a2 = Ft(this).constructor;
      s2 = Reflect.construct(n2, arguments, a2);
    } else
      s2 = n2.apply(this, arguments);
    return sl(this, s2);
  };
}
function sl(o2, e2) {
  if (e2 && (kn(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return al(o2);
}
function al(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function il() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Ft(o2) {
  return Ft = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Ft(o2);
}
function rl(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    tl(s2, t2);
    var n2 = nl(s2);
    function s2() {
      return Qo(this, s2), n2.apply(this, arguments);
    }
    return el(s2, null, [{
      key: "init",
      value: (
        /**
         * `true` suggests that this component is lazily initialized upon an action/event, etc.
         * @type {boolean}
         */
        /**
         * Instantiates this component in the given element.
         * If the given element indicates that it's an component of this class, instantiates it.
         * Otherwise, instantiates this component by clicking on launcher buttons
         * (buttons with attribute that `options.attribInitTarget` points to) of this component in the given node.
         * @param {Node} target The DOM node to instantiate this component in. Should be a document or an element.
         * @param {object} [options] The component options.
         * @param {string} [options.selectorInit] The CSS selector to find this component.
         * @param {string} [options.attribInitTarget] The attribute name in the launcher buttons to find target component.
         * @returns {Handle} The handle to remove the event listener to handle clicking.
         */
        function() {
          var i2 = this, r2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, l2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c2 = Object.assign(Object.create(this.options), l2);
          if (!r2 || r2.nodeType !== Node.ELEMENT_NODE && r2.nodeType !== Node.DOCUMENT_NODE)
            throw new TypeError("DOM document or DOM element should be given to search for and initialize this widget.");
          if (r2.nodeType === Node.ELEMENT_NODE && r2.matches(c2.selectorInit))
            this.create(r2, l2);
          else {
            var d2 = c2.initEventNames.map(function(p2) {
              return Ot(r2, p2, function(h2) {
                var u2 = _n(h2, "[".concat(c2.attribInitTarget, "]"));
                if (u2) {
                  h2.delegateTarget = u2;
                  var g2 = u2.ownerDocument.querySelectorAll(u2.getAttribute(c2.attribInitTarget));
                  if (g2.length > 1)
                    throw new Error("Target widget must be unique.");
                  if (g2.length === 1) {
                    u2.tagName === "A" && h2.preventDefault();
                    var m2 = i2.create(g2[0], l2);
                    typeof m2.createdByLauncher == "function" && m2.createdByLauncher(h2);
                  }
                }
              });
            });
            return {
              release: function() {
                for (var h2 = d2.pop(); h2; h2 = d2.pop())
                  h2.release();
              }
            };
          }
          return "";
        }
      )
    }]), s2.forLazyInit = true, s2;
  }(o2);
  return e2;
}
function Pn(o2) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, Pn(o2);
}
function ol(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function $s(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var n2 = e2[t2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(o2, n2.key, n2);
  }
}
function ll(o2, e2, t2) {
  return e2 && $s(o2.prototype, e2), t2 && $s(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function cl(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && Nn(o2, e2);
}
function Nn(o2, e2) {
  return Nn = Object.setPrototypeOf || function(n2, s2) {
    return n2.__proto__ = s2, n2;
  }, Nn(o2, e2);
}
function dl(o2) {
  var e2 = pl();
  return function() {
    var n2 = zt(o2), s2;
    if (e2) {
      var a2 = zt(this).constructor;
      s2 = Reflect.construct(n2, arguments, a2);
    } else
      s2 = n2.apply(this, arguments);
    return hl(this, s2);
  };
}
function hl(o2, e2) {
  if (e2 && (Pn(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ul(o2);
}
function ul(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function pl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function zt(o2) {
  return zt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, zt(o2);
}
var gl = /* @__PURE__ */ function(o2) {
  cl(t2, o2);
  var e2 = dl(t2);
  function t2(n2, s2) {
    var a2;
    return ol(this, t2), a2 = e2.call(this, n2, s2), a2._handleFocusinListener = void 0, a2._handleKeydownListener = void 0, a2._handleFocusin = function(i2) {
      var r2 = a2.element.querySelector(a2.options.selectorModalContainer) || a2.element;
      a2.element.classList.contains(a2.options.classVisible) && !r2.contains(i2.target) && a2.options.selectorsFloatingMenus.every(function(l2) {
        return !_n(i2, l2);
      }) && a2.element.querySelector(mn.selectorTabbable).focus();
    }, a2._hookCloseActions(), a2;
  }
  return ll(t2, [{
    key: "createdByLauncher",
    value: (
      /**
       * A method that runs when `.init()` is called from `initComponentByLauncher`.
       * @param {Event} evt The event fired on the launcher button.
       */
      function(s2) {
        this.show(s2);
      }
    )
    /**
     * Determines whether or not to emit events and callback function when `.changeState()` is called from `eventedState`.
     * @param {string} state The new state.
     * @returns {boolean} `true` if the given `state` is different from current state.
     */
  }, {
    key: "shouldStateBeChanged",
    value: function(s2) {
      return s2 === "shown" ? !this.element.classList.contains(this.options.classVisible) : this.element.classList.contains(this.options.classVisible);
    }
    /**
     * Changes the shown/hidden state.
     * @private
     * @param {string} state The new state.
     * @param {object} detail The detail data to be included in the event that will be fired.
     * @param {Function} callback Callback called when change in state completes.
     */
  }, {
    key: "_changeState",
    value: function(s2, a2, i2) {
      var r2 = this, l2, c2 = function() {
        if (l2 && (l2 = r2.unmanage(l2).release()), s2 === "shown" && r2.element.offsetWidth > 0 && r2.element.offsetHeight > 0) {
          r2.previouslyFocusedNode = r2.element.ownerDocument.activeElement;
          var u2 = r2.element.querySelector(r2.options.selectorPrimaryFocus) || r2.element.querySelector(mn.selectorTabbable);
          u2.focus(), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Jo(u2, "Modals need to contain a focusable element by either using " + "`".concat(r2.options.selectorPrimaryFocus, "` or settings.selectorTabbable."));
        }
        i2();
      };
      if (this._handleFocusinListener && (this._handleFocusinListener = this.unmanage(this._handleFocusinListener).release()), s2 === "shown") {
        var d2 = "onfocusin" in this.element.ownerDocument.defaultView, p2 = d2 ? "focusin" : "focus";
        this._handleFocusinListener = this.manage(Ot(this.element.ownerDocument, p2, this._handleFocusin, !d2));
      }
      s2 === "hidden" ? (this.element.classList.toggle(this.options.classVisible, false), this.element.ownerDocument.body.classList.toggle(this.options.classBody, false), (this.options.selectorFocusOnClose || this.previouslyFocusedNode) && (this.element.ownerDocument.querySelector(this.options.selectorFocusOnClose) || this.previouslyFocusedNode).focus()) : s2 === "shown" && (this.element.classList.toggle(this.options.classVisible, true), this.element.ownerDocument.body.classList.toggle(this.options.classBody, true)), l2 = this.manage(Ot(this.element, "transitionend", c2));
    }
  }, {
    key: "_hookCloseActions",
    value: function() {
      var s2 = this;
      this.manage(Ot(this.element, "click", function(a2) {
        var i2 = _n(a2, s2.options.selectorModalClose);
        i2 && (a2.delegateTarget = i2), (i2 || a2.target === s2.element) && s2.hide(a2);
      })), this._handleKeydownListener && (this._handleKeydownListener = this.unmanage(this._handleKeydownListener).release()), this._handleKeydownListener = this.manage(Ot(this.element.ownerDocument.body, "keydown", function(a2) {
        a2.which === 27 && s2.shouldStateBeChanged("hidden") && (a2.stopPropagation(), s2.hide(a2));
      }));
    }
    /**
     * Handles `focusin` (or `focus` depending on browser support of `focusin`) event to do wrap-focus behavior.
     * @param {Event} evt The event.
     * @private
     */
  }], [{
    key: "options",
    get: (
      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode Modal.create .create()}, or {@linkcode Modal.init .init()},
       * properties in this object are overridden for the instance being create and how {@linkcode Modal.init .init()} works.
       * @member Modal.options
       * @type {object}
       * @property {string} selectorInit The CSS class to find modal dialogs.
       * @property {string} [selectorModalClose] The selector to find elements that close the modal.
       * @property {string} [selectorPrimaryFocus] The CSS selector to determine the element to put focus when modal gets open.
       * @property {string} [selectorFocusOnClose] The CSS selector to determine the element to put focus when modal closes.
       *   If undefined, focus returns to the previously focused element prior to the modal opening.
       * @property {string} [selectorModalContainer] The CSS selector for the content container of the modal for focus wrap feature.
       * @property {string} attribInitTarget The attribute name in the launcher buttons to find target modal dialogs.
       * @property {string[]} [selectorsFloatingMenu]
       *   The CSS selectors of floating menus.
       *   Used for detecting if focus-wrap behavior should be disabled temporarily.
       * @property {string} [classVisible] The CSS class for the visible state.
       * @property {string} [classBody] The CSS class for `<body>` with open modal.
       * @property {string} [classNoScroll] The CSS class for hiding scroll bar in body element while modal is shown.
       * @property {string} [eventBeforeShown]
       *   The name of the custom event fired before this modal is shown.
       *   Cancellation of this event stops showing the modal.
       * @property {string} [eventAfterShown]
       *   The name of the custom event telling that modal is sure shown
       *   without being canceled by the event handler named by `eventBeforeShown` option (`modal-beingshown`).
       * @property {string} [eventBeforeHidden]
       *   The name of the custom event fired before this modal is hidden.
       *   Cancellation of this event stops hiding the modal.
       * @property {string} [eventAfterHidden]
       *   The name of the custom event telling that modal is sure hidden
       *   without being canceled by the event handler named by `eventBeforeHidden` option (`modal-beinghidden`).
       */
      function() {
        var s2 = mn.prefix;
        return {
          selectorInit: "[data-modal]",
          selectorModalClose: "[data-modal-close]",
          selectorPrimaryFocus: "[data-modal-primary-focus]",
          selectorsFloatingMenus: [".".concat(s2, "--overflow-menu-options"), ".".concat(s2, "--tooltip"), ".flatpickr-calendar"],
          selectorModalContainer: ".".concat(s2, "--modal-container"),
          classVisible: "is-visible",
          classBody: "".concat(s2, "--body--with-modal-open"),
          attribInitTarget: "data-modal-target",
          initEventNames: ["click"],
          eventBeforeShown: "modal-beingshown",
          eventAfterShown: "modal-shown",
          eventBeforeHidden: "modal-beinghidden",
          eventAfterHidden: "modal-hidden"
        };
      }
    )
  }]), t2.components = /* @__PURE__ */ new WeakMap(), t2;
}(co(vo, rl, Yo, Ao));
class fh extends Y {
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.type = "modal", this.isEventListenerAdded = false, this.handleShowModal = () => {
      const s2 = this.services.domUtils.getChartID();
      this.modal.attr("data-modal", true).attr("class", "cds--modal").attr("role", "dialog").attr("aria-modal", true).attr("aria-labelledby", `${s2}__modal-title`).attr("aria-describedby", `${s2}__modal-description`).attr("tabindex", -1), this.modal.html(this.getModalHTML()), this.modal.select("div.cds--modal-footer button.cds--btn").on("click", () => this.model.exportToCSV()), gl.create(this.modal.node()).show(), document.addEventListener("modal-hidden", this.handleHideModal);
    }, this.handleHideModal = () => {
      this.modal.attr("role", null).attr("aria-modal", null).attr("aria-labelledby", null).attr("aria-describedby", null).attr("tabindex", null), document.removeEventListener("modal-hidden", this.handleHideModal);
    }, this.init();
  }
  addEventListeners() {
    this.services.events.addEventListener(oE.Modal.SHOW, this.handleShowModal);
  }
  removeEventListeners() {
    this.services.events.removeEventListener(oE.Modal.SHOW, this.handleShowModal);
  }
  getModalHTML() {
    const e2 = this.services.domUtils.getChartID(), t2 = this.model.getOptions(), { title: n2, downloadAsCSV: s2 } = G$1(t2, "locale", "translations", "tabularRep"), a2 = G$1(t2, "style", "prefix"), i2 = this.model.getTabularDataArray();
    return `
		<div class="cds--modal-container">
			<div class="cds--modal-header">

				<p class="cds--modal-header__label cds--type-delta" id="modal-title">${n2}</p>

				<p class="cds--modal-header__heading cds--type-beta" id="${e2}__modal-description">${Pe(
      t2.title
    )}</p>

				<button class="cds--modal-close" type="button" data-modal-close aria-label="close modal"  data-modal-primary-focus>
					<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close" width="20" height="20" viewBox="0 0 32 32" role="img" class="cds--modal-close__icon">
						<path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path>
					</svg>
				</button>
			</div>

			<div class="cds--modal-content">
				<table class="cds--data-table cds--data-table--no-border">
					<thead>
						<tr>
							${io$1(i2, 0).map(
      (r2) => `<th scope="col">
								<div class="cds--table-header-label">${Pe(r2)}</div>
							</th>`
    ).join("")}
						</tr>
					</thead>

					<tbody>${i2.slice(1).map(
      (r2) => `
							<tr>
								${r2.map((l2) => `<td>${Pe(l2)}</td>`).join("")}
							</tr>`
    ).join("")}
					</tbody>
				</table>
			</div>

			<div class="cds--modal-footer">
			  <div class="${Vu}--${a2}-modal-footer-spacer"></div>
			  <button class="cds--btn cds--btn--primary" type="button" data-modal-primary-focus>${s2}</button>
			</div>
		</div>`;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = this.model.getOptions();
    if (!this.isEventListenerAdded) {
      const n2 = select(this.services.domUtils.getHolder()), s2 = G$1(t2, "style", "prefix");
      this.modal = k$1.appendOrSelect(n2, `div.${Vu}--${s2}--modal`), this.addEventListeners(), this.isEventListenerAdded = true;
    }
  }
  destroy() {
    this.removeEventListeners(), this.isEventListenerAdded = false;
  }
}
class ml extends Y {
  constructor() {
    super(...arguments), this.type = "title", this.renderType = D$3.HTML;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = this.getComponentContainer(), n2 = G$1(this.getOptions(), "title"), s2 = t2.selectAll("p.title").data([n2]);
    if (s2.enter().append("p").classed("title", true).attr("role", "heading").attr("aria-level", 2).merge(s2).html((a2) => Pe(a2)), s2.node() && s2.node().offsetWidth < s2.node().scrollWidth) {
      const a2 = this;
      s2.on("mouseover", function(i2) {
        a2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
          event: i2,
          hoveredElement: s2,
          content: s2.text()
        });
      }).on("mousemove", function(i2) {
        a2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
          event: i2
        });
      }).on("mouseout", function() {
        a2.services.events.dispatchEvent(oE.Tooltip.HIDE);
      });
    }
    s2.exit().remove();
  }
  /**
   * Truncates title creating ellipses and attaching tooltip for exposing full title.
   */
  truncateTitle(e2, t2) {
    if (t2 <= 0)
      return;
    const n2 = e2.text();
    if (e2.node().getComputedTextLength() > t2) {
      e2.append("tspan").text("...");
      const s2 = k$1.appendOrSelect(e2, "tspan").node().getComputedTextLength(), a2 = e2.text(), i2 = this.getSubstringIndex(
        e2.node(),
        0,
        a2.length - 1,
        t2 - s2
      );
      e2.html(a2.substring(0, i2 - 1)).append("tspan").text("...");
      const r2 = this;
      e2.on("mouseover", function(l2) {
        r2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
          event: l2,
          hoveredElement: e2,
          content: n2
        });
      }).on("mousemove", function(l2) {
        r2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
          event: l2
        });
      }).on("mouseout", function() {
        r2.services.events.dispatchEvent(oE.Tooltip.HIDE);
      });
    }
  }
  // computes the maximum space a title can take
  getMaxTitleWidth() {
    return k$1.getSVGElementSize(this.parent.node(), {
      useAttrs: true
    }).width;
  }
  /**
   * Returns the index for a maximum length substring that is less than the width parameter.
   * @param title the title node used for getting the text lengths of substrings
   * @param start the start index for the binary search
   * @param end the end index for the binary search
   * @param width the width of the svg container that holds the title
   */
  getSubstringIndex(e2, t2, n2, s2) {
    const a2 = Math.floor((n2 + t2) / 2);
    return e2.getSubStringLength(0, a2) > s2 ? this.getSubstringIndex(e2, t2, a2, s2) : e2.getSubStringLength(0, a2) < s2 ? e2.getSubStringLength(0, a2 + 1) > s2 ? a2 : this.getSubstringIndex(e2, a2, n2, s2) : a2;
  }
}
class fl extends Y {
  constructor() {
    super(...arguments), this.type = "legend", this.renderType = D$3.HTML;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = this.getOptions(), n2 = G$1(t2, "legend"), s2 = G$1(n2, "alignment"), a2 = G$1(t2, "legend", "orientation");
    let i2 = this.model.getDataGroups();
    const { DISABLED: r$12 } = rc.items.status, l2 = i2.some((x2) => x2.status === r$12), c2 = G$1(n2, "order"), d2 = this.getComponentContainer().classed("center-aligned", s2 === k$4.CENTER).classed("right-aligned", s2 === k$4.RIGHT).classed(a2, true).classed("has-deactivated-items", l2).attr("role", r.GROUP).attr("aria-label", "Data groups").attr("data-name", "legend-items");
    c2 && (i2 = this.sortDataGroups(i2, c2));
    const p2 = d2.selectAll("div.legend-item").data(i2, (x2) => x2.name), h2 = p2.enter().append("div").attr("class", "legend-item");
    h2.merge(d2.selectAll("div.legend-item")).classed("active", function(x2) {
      return x2.status === rc.items.status.ACTIVE;
    });
    const u2 = G$1(this.getOptions(), "legend", "clickable");
    d2.classed("clickable", u2 && i2.length > 1);
    const g2 = rc.checkbox.radius, m2 = h2.append("div").classed("checkbox", true), E2 = m2.merge(p2.select("div.checkbox")).attr("role", r.CHECKBOX).attr("tabindex", u2 ? 0 : -1).attr(
      "aria-labelledby",
      (x2, y2) => this.services.domUtils.generateElementIDString(`legend-datagroup-${y2}-title`)
    ).attr("aria-checked", ({ status: x2 }) => x2 === rc.items.status.ACTIVE).attr("width", g2 * 2).attr("height", g2 * 2).attr(
      "class",
      (x2) => this.model.getColorClassName({
        classNameTypes: [b$1.BACKGROUND],
        dataGroupName: x2.name,
        originalClassName: "checkbox"
      })
    ).style(
      "background",
      (x2) => x2.status === rc.items.status.ACTIVE ? this.model.getFillColor(x2.name) || this.model.getStrokeColor(x2.name) : null
    ).classed("active", function(x2) {
      return x2.status === rc.items.status.ACTIVE;
    });
    m2.append("svg").attr("focusable", false).attr("preserveAspectRatio", "xMidYMid meet").attr("xmlns", "http://www.w3.org/2000/svg").attr("width", "11").attr("height", "11").attr("viewBox", "0 0 31 28").attr("aria-hidden", true).style("will-change", "transform").append("path").attr("d", "M13 21.2l-7.1-7.1-1.4 1.4 7.1 7.1L13 24 27.1 9.9l-1.4-1.5z"), h2.append("p").merge(p2.select("p"));
    const O2 = G$1(t2, "legend", "additionalItems");
    if (O2 && i2.length) {
      const x2 = this, y2 = d2.selectAll("div.additional-item").data(O2);
      y2.exit().remove();
      const w2 = y2.enter().append("div").merge(y2).classed("legend-item", true).classed("additional", true).attr(
        "aria-labelledby",
        (I2, P2) => this.services.domUtils.generateElementIDString(
          `legend-datagroup-${E2.size() + P2}-title`
        )
      );
      w2.selectAll("*").remove();
      let A2, L2 = 1;
      w2.append("svg").classed("icon", true).each(function(I2) {
        const P2 = select(this);
        !A2 || A2 != I2.type ? (A2 = I2.type, L2 = 1) : L2++, x2.addAdditionalItem(P2, I2, L2);
      }), w2.append("p").merge(w2.select("p")), this.truncateLegendText();
    }
    p2.exit().on("mouseover", null).on("click", null).on("mouseout", null).remove(), u2 && h2.size() > 1 && this.addEventListeners();
  }
  sortDataGroups(e2, t2) {
    if (e2.sort(
      (n2, s2) => t2.indexOf(n2.name) - t2.indexOf(s2.name)
    ), t2.length < e2.length) {
      const n2 = e2.length - t2.length;
      return e2.slice(n2).concat(e2.slice(0, n2));
    }
    return e2;
  }
  addAdditionalItem(e2, t2, n2) {
    const { width: s2, height: a2 } = rc.area;
    if (t2.type === rE.RADIUS ? e2.style("width", `${a2}px`).style("height", `${a2}px`) : e2.style("width", `${s2}px`).style("height", `${a2}px`), t2.type === rE.RADIUS) {
      const { iconData: i2, fill: r$12, stroke: l2 } = rc.radius;
      e2.attr("fill", "none").selectAll("circle").data(i2).enter().append("circle").classed("radius", true).attr("role", r.IMG).attr("aria-label", "radius").attr("cx", (d2) => d2.cx).attr("cy", (d2) => d2.cy).attr("r", (d2) => d2.r).style("fill", t2.fill ? t2.fill : r$12).style("stroke", t2.stroke ? t2.stroke : l2);
    } else if (t2.type === rE.LINE) {
      const i2 = rc.line;
      e2.select("line.line").empty() && e2.append("line").classed(`line-${n2}`, true).attr("role", r.IMG).attr("aria-label", "line").attr("x1", 0).attr("y1", i2.yPosition).attr("x2", s2).attr("y2", i2.yPosition).style("stroke", t2.stroke ? t2.stroke : i2.stroke).style("stroke-width", i2.strokeWidth);
    } else if (t2.type === rE.AREA)
      e2.select("rect.area").empty() && e2.append("rect").classed(`area-${n2}`, true).attr("role", r.IMG).attr("aria-label", "area").attr("width", s2).attr("height", a2).style(
        "fill",
        n2 > 3 && !t2.fill ? rc.area.fill : t2.fill
      ).style("stroke", t2.stroke);
    else if (t2.type === rE.SIZE) {
      const { iconData: i2, fill: r$12, stroke: l2 } = rc.size;
      e2.attr("fill", "none").attr("role", r.IMG).attr("aria-label", "size").selectAll("rect").data(i2).enter().append("rect").classed("size", true).attr("width", (d2) => d2.width).attr("height", (d2) => d2.height).attr("y", () => 0).style("fill", t2.fill ? t2.fill : r$12).style("stroke", t2.stroke ? t2.stroke : l2).style("stroke-width", 1);
    } else if (t2.type === rE.QUARTILE) {
      const { iconData: i2 } = rc.quartile;
      e2.selectAll("rect").attr("role", r.IMG).attr("aria-label", "quartile").data(i2).enter().append("rect").attr("class", (l2, c2) => `quartile-${c2 === 0 ? "wrapper" : "line"}`).attr("x", (l2) => l2.x).attr("y", (l2) => l2.y).attr("width", (l2) => l2.width).attr("height", (l2) => l2.height);
    } else if (t2.type === rE.ZOOM) {
      const { iconData: i2, color: r$12 } = G$1(rc, "zoom"), l2 = e2.attr("role", r.IMG).attr("aria-label", "zoom").selectAll("g.icon").data(i2).enter();
      l2.append("g").attr("x", (c2) => c2.x).attr("y", (c2) => c2.y).attr("width", (c2) => c2.width).attr("height", (c2) => c2.height).append("polygon").attr(
        "points",
        "7.7 4.82 5.78 4.82 5.78 2.89 4.82 2.89 4.82 4.82 2.89 4.82 2.89 5.78 4.82 5.78 4.82 7.7 5.78 7.7 5.78 5.78 7.7 5.78 7.7 4.82"
      ).attr("fill", () => t2.color ? t2.color : r$12), l2.append("path").attr(
        "d",
        "M9.36,8.67A5.22,5.22,0,0,0,10.59,5.3,5.3,5.3,0,1,0,5.3,10.59,5.22,5.22,0,0,0,8.67,9.36L12.32,13l.68-.68Zm-4.06,1A4.34,4.34,0,1,1,9.63,5.3,4.33,4.33,0,0,1,5.3,9.63Z"
      ).attr("fill", () => t2.color ? t2.color : r$12);
    }
  }
  truncateLegendText() {
    const e2 = this.getComponentContainer(), t2 = G$1(this.getOptions(), "legend", "truncation"), n2 = G$1(t2, "type"), s2 = G$1(t2, "threshold"), a2 = G$1(t2, "numCharacter"), i2 = e2.selectAll("div.legend-item p");
    i2.attr("id", function() {
      return (this.parentNode.querySelector("div.checkbox") || this.parentNode).getAttribute("aria-labelledby");
    }), n2 !== h$1.NONE ? i2.html(function(r2) {
      const l2 = Pe(r2.name);
      return l2.length > s2 && l2.length !== a2 ? _l(l2, n2, a2) : l2;
    }) : i2.html((r2) => Pe(r2.name));
  }
  addEventListeners() {
    const e2 = this, t2 = this.getComponentContainer(), n2 = this.getOptions(), s2 = G$1(n2, "legend"), a2 = G$1(s2, "truncation");
    t2.selectAll("div.legend-item").on("mouseover", function(i2) {
      e2.services.events.dispatchEvent(oE.Legend.ITEM_HOVER, {
        hoveredElement: select(this)
      });
      const r2 = select(this);
      r2.select("div.checkbox").classed("hovered", true);
      const l2 = r2.datum();
      l2.name.length > a2.threshold && a2.numCharacter < l2.name.length && a2.type !== h$1.NONE && e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: i2,
        hoveredElement: r2,
        content: l2.name
      });
    }).on("mousemove", function(i2) {
      select(this).datum().name.length > a2.threshold && a2.type !== h$1.NONE && e2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: i2
      });
    }).on("click", function() {
      e2.services.events.dispatchEvent(oE.Legend.ITEM_CLICK, {
        clickedElement: select(this)
      });
      const r2 = select(this).datum();
      e2.model.toggleDataLabel(r2.name);
    }).on("mouseout", function() {
      const i2 = select(this);
      i2.select("div.checkbox").classed("hovered", false), i2.datum().name.length > a2.threshold && a2.type !== h$1.NONE && e2.services.events.dispatchEvent(oE.Tooltip.HIDE), e2.services.events.dispatchEvent(oE.Legend.ITEM_MOUSEOUT, {
        hoveredElement: i2
      });
    }), t2.selectAll("div.legend-item div.checkbox").on("keyup", function(i2) {
      i2.key && i2.key === "Tab" && e2.services.events.dispatchEvent(oE.Legend.ITEM_HOVER, {
        hoveredElement: select(this)
      });
    }), t2.selectAll("div.legend-item div.checkbox").on("keydown", function(i2, r2) {
      i2.key && i2.key === " " ? (i2.preventDefault(), e2.model.toggleDataLabel(r2.name)) : i2.key && i2.key === "Tab" && e2.services.events.dispatchEvent(oE.Legend.ITEM_MOUSEOUT, {
        hoveredElement: select(this)
      });
    }), t2.selectAll("g.additional-item").on("mouseover", function(i2) {
      const r2 = select(this), l2 = r2.datum();
      l2.name.length > a2.threshold && e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: i2,
        hoveredElement: r2,
        content: l2.name
      });
    });
  }
}
class vl extends Y {
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.type = "chart-clip", this.renderType = D$3.SVG, this.chartClipId = "chart-clip-id-" + Math.floor(Math.random() * 99999999999), this.init();
  }
  init() {
    this.model.set({ chartClipId: this.chartClipId }, { skipUpdate: true });
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    this.createClipPath();
  }
  createClipPath() {
    const e2 = this.parent, { cartesianScales: t2 } = this.services;
    if (!t2)
      throw new Error("Service cartesianScales was undefined");
    const n2 = t2.getMainXScale(), s2 = t2.getMainYScale(), [a2, i2] = n2.range(), [r2, l2] = s2.range();
    if (!e2)
      throw new Error("svg is undefined");
    this.chartClipPath = k$1.appendOrSelect(
      e2,
      `clipPath.${this.type}`
    ).attr("id", this.chartClipId);
    const c2 = k$1.appendOrSelect(this.chartClipPath, `rect.${this.type}`);
    i2 - a2 > 0 && c2.attr("x", a2).attr("y", l2).attr("width", i2 - a2).attr("height", r2 - l2), this.chartClipPath.merge(c2).lower();
  }
}
class vh extends vl {
  constructor() {
    super(...arguments), this.type = "canvas-chart-clip", this.chartClipId = "canvas-chart-clip-id-" + Math.floor(Math.random() * 99999999999);
  }
  createClipPath() {
    const e2 = this.parent, { width: t2, height: n2 } = k$1.getSVGElementSize(this.parent, {
      useAttrs: true
    });
    this.chartClipPath = k$1.appendOrSelect(e2, `clipPath.${this.type}`).attr(
      "id",
      this.chartClipId
    );
    const s2 = k$1.appendOrSelect(this.chartClipPath, `rect.${this.type}`);
    s2.attr("x", 0).attr("y", 0).attr("width", t2).attr("height", n2), this.chartClipPath.merge(s2).lower();
  }
}
var it, de;
(function(o2) {
  o2.LEFT = "left", o2.RIGHT = "right", o2.TOP = "top", o2.BOTTOM = "bottom";
})(de || (de = {}));
var Us = (it = {}, it[de.LEFT] = function(o2, e2, t2) {
  return {
    top: o2.top - Math.round(e2.offsetHeight / 2) + Math.round(t2.height / 2),
    left: Math.round(o2.left - e2.offsetWidth)
  };
}, it[de.RIGHT] = function(o2, e2, t2) {
  return {
    top: o2.top - Math.round(e2.offsetHeight / 2) + Math.round(t2.height / 2),
    left: Math.round(o2.left + t2.width)
  };
}, it[de.TOP] = function(o2, e2, t2) {
  return {
    top: Math.round(o2.top - e2.offsetHeight),
    left: o2.left - Math.round(e2.offsetWidth / 2) + Math.round(t2.width / 2)
  };
}, it[de.BOTTOM] = function(o2, e2, t2) {
  return {
    top: Math.round(o2.top + t2.height),
    left: o2.left - Math.round(e2.offsetWidth / 2) + Math.round(t2.width / 2)
  };
}, it), Fs = typeof window < "u" ? window : {
  innerHeight: 0,
  scrollY: 0,
  innerWidth: 0,
  scrollX: 0
}, Yt = (
  /** @class */
  function() {
    function o2(e2) {
      e2 === void 0 && (e2 = {}), this.positions = Us, this.positions = Object.assign({}, Us, e2);
    }
    return o2.prototype.getRelativeOffset = function(e2) {
      for (var t2 = {
        left: e2.offsetLeft,
        top: e2.offsetTop
      }; e2.offsetParent && getComputedStyle(e2.offsetParent).position === "static"; )
        t2.left += e2.offsetLeft, t2.top += e2.offsetTop, e2 = e2.offsetParent;
      return t2;
    }, o2.prototype.getAbsoluteOffset = function(e2) {
      for (var t2 = e2, n2 = {
        top: 0,
        left: 0
      }; t2.offsetParent; ) {
        var s2 = getComputedStyle(t2.offsetParent);
        s2.position === "static" && s2.marginLeft && s2.marginTop && (parseInt(s2.marginTop, 10) && (n2.top += parseInt(s2.marginTop, 10)), parseInt(s2.marginLeft, 10) && (n2.left += parseInt(s2.marginLeft, 10))), t2 = t2.offsetParent;
      }
      var a2 = e2.getBoundingClientRect(), i2 = document.body.getBoundingClientRect();
      return {
        top: a2.top - i2.top + n2.top,
        left: a2.left - i2.left + n2.left
      };
    }, o2.prototype.findRelative = function(e2, t2, n2) {
      var s2 = this.getRelativeOffset(e2), a2 = e2.getBoundingClientRect();
      return this.calculatePosition(s2, a2, t2, n2);
    }, o2.prototype.findAbsolute = function(e2, t2, n2) {
      var s2 = this.getAbsoluteOffset(e2), a2 = e2.getBoundingClientRect();
      return this.calculatePosition(s2, a2, t2, n2);
    }, o2.prototype.findPosition = function(e2, t2, n2, s2) {
      s2 === void 0 && (s2 = this.getAbsoluteOffset.bind(this));
      var a2 = s2(e2), i2 = e2.getBoundingClientRect();
      return this.calculatePosition(a2, i2, t2, n2);
    }, o2.prototype.findPositionAt = function(e2, t2, n2) {
      return this.calculatePosition(e2, { top: 0, left: 0, height: 0, width: 0 }, t2, n2);
    }, o2.prototype.getPlacementBox = function(e2, t2) {
      var n2 = e2.offsetHeight + t2.top, s2 = e2.offsetWidth + t2.left;
      return {
        top: t2.top,
        bottom: n2,
        left: t2.left,
        right: s2
      };
    }, o2.prototype.addOffset = function(e2, t2, n2) {
      return t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0), Object.assign({}, e2, {
        top: e2.top + t2,
        left: e2.left + n2
      });
    }, o2.prototype.setElement = function(e2, t2) {
      e2.style.top = t2.top + "px", e2.style.left = t2.left + "px";
    }, o2.prototype.findBestPlacement = function(e2, t2, n2, s2, a2) {
      var i2 = this;
      s2 === void 0 && (s2 = this.defaultContainerFunction.bind(this)), a2 === void 0 && (a2 = this.findPosition.bind(this));
      var r2 = n2.map(function(l2) {
        var c2 = a2(e2, t2, l2), d2 = i2.getPlacementBox(t2, c2), p2 = 0, h2 = 0, u2 = s2();
        d2.top < u2.top ? p2 = u2.top - d2.top : d2.bottom > u2.height && (p2 = d2.bottom - u2.height), d2.left < u2.left ? h2 = u2.left - d2.left : d2.right > u2.width && (h2 = d2.right - u2.width), p2 && !h2 ? h2 = 1 : h2 && !p2 && (p2 = 1);
        var g2 = t2.offsetHeight * t2.offsetWidth, m2 = p2 * h2, E2 = g2 - m2, O2 = E2 / g2;
        return {
          placement: l2,
          weight: O2
        };
      });
      return r2.sort(function(l2, c2) {
        return c2.weight - l2.weight;
      }), r2[0].placement;
    }, o2.prototype.findBestPlacementAt = function(e2, t2, n2, s2) {
      var a2 = this;
      s2 === void 0 && (s2 = this.defaultContainerFunction.bind(this));
      var i2 = function(r2, l2, c2) {
        return a2.findPositionAt(e2, l2, c2);
      };
      return this.findBestPlacement(null, t2, n2, s2, i2);
    }, o2.prototype.defaultContainerFunction = function() {
      return {
        // we go with window here, because that's going to be the simple/common case
        top: 0,
        left: 0,
        height: Fs.innerHeight,
        width: Fs.innerWidth
      };
    }, o2.prototype.calculatePosition = function(e2, t2, n2, s2) {
      return this.positions[s2] ? this.positions[s2](e2, n2, t2) : (console.error("No function found for placement, defaulting to 0,0"), { left: 0, top: 0 });
    }, o2;
  }()
);
new Yt();
class yl extends Y {
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.type = "tooltip", this.renderType = D$3.HTML, this.isEventListenerAdded = false, this.lastTriggeredEventType = "", this.positionService = new Yt(), this.handleShowTooltip = (s2) => {
      const a2 = s2.detail.data || s2.detail.items;
      let i2;
      const r2 = this.formatItems(this.getItems(s2));
      s2.detail.content ? i2 = `<div class="title-tooltip"><p>${Nt(s2.detail.content)}</p></div>` : i2 = Nt(this.getTooltipHTML(r2));
      const l2 = k$1.appendOrSelect(this.tooltip, "div.content-box");
      if (G$1(this.getOptions(), "tooltip", "customHTML"))
        if (s2.detail.content) {
          const c2 = `<div class="title-tooltip"><p>${Nt(
            s2.detail.content
          )}</p></div>`;
          l2.html(c2);
        } else
          l2.html(
            `<div class="title-tooltip"><p>${Nt(
              this.model.getOptions().tooltip.customHTML(a2, i2)
            )}</p></div>`
          );
      else
        l2.html(i2);
      l2.selectAll(".datapoint-tooltip").each(function(c2, d2) {
        const p2 = r2[d2];
        r2[d2] && r2[d2].color && select(this).select(".tooltip-color").attr("class", "tooltip-color").style("background-color", p2.color);
      }), this.positionTooltip(s2), this.tooltip.classed("hidden", false).attr("aria-hidden", false), this.lastTriggeredEventType = s2.type;
    }, this.handleHideTooltip = () => {
      this.tooltip.classed("hidden", true).attr("aria-hidden", true);
    }, this.init();
  }
  addTooltipEventListener() {
    this.services.events.addEventListener(oE.Tooltip.MOVE, (e2) => {
      this.lastTriggeredEventType !== oE.Toolbar.SHOW_TOOLTIP && this.tooltip.classed("hidden") === false && this.positionTooltip(e2);
    }), this.services.events.addEventListener(oE.Tooltip.SHOW, this.handleShowTooltip), this.services.events.addEventListener(oE.Tooltip.HIDE, this.handleHideTooltip), this.services.events.addEventListener(oE.Chart.MOUSEOUT, this.handleHideTooltip), this.services.events.addEventListener(oE.Toolbar.SHOW_TOOLTIP, this.handleShowTooltip), this.services.events.addEventListener(oE.Toolbar.HIDE_TOOLTIP, this.handleHideTooltip);
  }
  removeTooltipEventListener() {
    this.services.events.removeEventListener(oE.Tooltip.MOVE, null), this.services.events.removeEventListener(oE.Tooltip.SHOW, this.handleShowTooltip), this.services.events.removeEventListener(oE.Tooltip.HIDE, this.handleHideTooltip), this.services.events.removeEventListener(oE.Chart.MOUSEOUT, this.handleHideTooltip), this.services.events.removeEventListener(oE.Toolbar.SHOW_TOOLTIP, this.handleShowTooltip), this.services.events.removeEventListener(oE.Toolbar.HIDE_TOOLTIP, this.handleHideTooltip);
  }
  getItems(e2) {
    return e2.detail.items ? e2.detail.items : [];
  }
  formatItems(e2) {
    const t2 = this.getOptions(), n2 = G$1(t2, "tooltip", "truncation", "type"), s2 = G$1(t2, "tooltip", "truncation", "threshold"), a2 = G$1(t2, "tooltip", "truncation", "numCharacter");
    return n2 !== h$1.NONE ? e2.map((i2) => {
      const r2 = i2.labelIcon ? 12 : 0;
      return i2.value = i2.value ? this.valueFormatter(i2.value, i2.label) : i2.value, i2.label && i2.label.length + r2 > s2 && (i2.label = _l(i2.label, n2, a2)), i2.value && i2.value.length > s2 && (i2.value = _l(i2.value, n2, a2)), i2;
    }) : e2.map((i2) => (i2.value = i2.value ? this.valueFormatter(i2.value, i2.label) : i2.value, i2));
  }
  getTooltipHTML(e2) {
    return '<ul class="multi-tooltip">' + e2.map(
      (t2) => `<li>
					<div class="datapoint-tooltip${t2.bold ? " bold" : ""}">
						${t2.class || t2.color ? `<div class="tooltip-color ${t2.class}"></div>` : ""}
						<div class="label">
						<p>${t2.label || ""}</p>
						${t2.labelIcon ? `<span class="label-icon"/>${t2.labelIcon}</span>` : ""}
						</div>
						${t2.value === void 0 || t2.value === null ? "" : `<p class="value"/>${t2.value}</p>`}
					</div>
				</li>`
    ).join("") + "</ul>";
  }
  valueFormatter(e2, t2) {
    const n2 = this.getOptions(), s2 = G$1(n2, "tooltip", "valueFormatter"), {
      code: a2,
      number: i2,
      date: r2
    } = G$1(n2, "locale");
    if (s2)
      return s2(e2, t2);
    if (typeof e2.getTime == "function")
      return r2(e2, a2, { month: "short", day: "numeric", year: "numeric" });
    try {
      if (typeof e2 == "string" && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(e2)) {
        const l2 = new Date(e2);
        return r2(l2, a2, {
          month: "short",
          day: "numeric",
          year: "numeric"
        });
      }
    } catch {
    }
    return i2(e2, a2);
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = this.getOptions(), n2 = G$1(t2, "tooltip", "enabled");
    if (n2) {
      const s2 = select(this.services.domUtils.getHolder()), a2 = G$1(t2, "style", "prefix");
      this.tooltip = k$1.appendOrSelect(s2, `div.${Vu}--${a2}--tooltip`), this.tooltip.style("max-width", null).attr("role", "tooltip"), this.isEventListenerAdded || (this.addTooltipEventListener(), this.isEventListenerAdded = true), this.tooltip.classed("hidden", true);
    } else
      !n2 && this.isEventListenerAdded && (this.removeTooltipEventListener(), this.isEventListenerAdded = false);
  }
  addOffsetByPlacement(e2, t2, n2) {
    const s2 = Object.assign({}, e2);
    return t2 == de.LEFT ? s2.left -= n2 : t2 == de.RIGHT ? s2.left += n2 : t2 == de.TOP ? s2.top -= n2 : t2 == de.BOTTOM && (s2.top += n2), s2;
  }
  positionTooltip(e2) {
    const t2 = this.services.domUtils.getHolder(), n2 = t2.offsetWidth, s2 = t2.offsetHeight, a2 = this.tooltip.node(), i2 = this.getOptions(), r2 = G$1(i2, "zoomBar", "top", "enabled"), l2 = !!G$1(e2, "detail", "noWrap"), c2 = Array.isArray(G$1(e2, "detail", "placements")), d2 = c2 ? G$1(e2, "detail", "placements") : [de.RIGHT, de.LEFT, de.TOP, de.BOTTOM];
    let p2, { horizontalOffset: h2, defaultOffset: u2 } = fc;
    if (this.tooltip.select("div.title-tooltip").classed("title-tooltip-nowrap", l2), c2) {
      const E2 = G$1(e2, "detail", "event", "target"), O2 = this.services.domUtils.getElementOffset(E2, true);
      p2 = this.positionService.findBestPlacementAt(
        O2,
        a2,
        d2,
        () => ({
          top: 0,
          left: 0,
          width: n2,
          height: s2
        })
      );
      let x2 = this.positionService.findPosition(
        E2,
        a2,
        p2,
        () => this.services.domUtils.getElementOffset(E2)
      );
      x2 = this.addOffsetByPlacement(
        x2,
        p2,
        u2
      ), this.positionService.setElement(a2, x2);
      return;
    }
    let g2 = G$1(e2, "detail", "mousePosition");
    if (!g2)
      g2 = pointer(G$1(e2, "detail", "event"), t2);
    else {
      const E2 = G$1(i2, "zoomBar", "top", "type"), O2 = gc.height[E2];
      r2 && (g2[1] += O2 + gc.spacerHeight);
    }
    g2[0] / n2 > 0.9 ? p2 = de.LEFT : g2[0] / n2 < 0.1 ? p2 = de.RIGHT : p2 = this.positionService.findBestPlacementAt(
      {
        left: g2[0],
        top: g2[1]
      },
      a2,
      d2,
      () => ({
        top: void 0,
        // properties were never set to optional (probably should)
        left: void 0,
        // ditto
        width: n2,
        height: s2
      })
    ), p2 === de.LEFT && (h2 *= -1);
    const m2 = this.positionService.findPositionAt(
      {
        left: g2[0] + h2,
        top: g2[1]
      },
      a2,
      p2
    );
    this.positionService.setElement(a2, m2);
  }
}
const dt = class dt2 extends Y {
  constructor() {
    super(...arguments), this.type = "grid-brush", this.renderType = D$3.SVG, this.selectionSelector = "rect.selection", this.frontSelectionSelector = "rect.frontSelection";
  }
  // needs to match the class name in _grid-brush.scss
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    const t2 = this.parent, n2 = this.getComponentContainer();
    if (!t2)
      throw new Error("SVG was not defined");
    const s2 = k$1.appendOrSelect(
      t2,
      "svg.chart-grid-backdrop"
    ), a2 = k$1.appendOrSelect(s2, `g.${this.type}`), i2 = k$1.appendOrSelect(a2, this.selectionSelector), { width: r2, height: l2 } = k$1.getSVGElementSize(s2, {
      useAttrs: true
    }), { cartesianScales: c2 } = this.services, d2 = c2.getMainXScaleType(), p2 = c2.getMainXScale(), [h2] = p2.range();
    n2.attr("transform", `translate(${h2},0)`);
    const u2 = k$1.appendOrSelect(n2, this.frontSelectionSelector);
    if (p2 && d2 === P$1.TIME) {
      let g2 = this.model.get("zoomDomain");
      g2 === void 0 && (g2 = this.services.zoom.getDefaultZoomBarDomain(), g2 && this.model.set({ zoomDomain: g2 }, { animate: false }));
      const m2 = (A2) => {
        const L2 = A2[1] - A2[0];
        let I2 = "0," + L2.toString();
        const P2 = Math.floor(l2 / dt2.DASH_LENGTH), W2 = P2 * dt2.DASH_LENGTH;
        for (let R2 = 0; R2 < P2; R2++)
          I2 += "," + dt2.DASH_LENGTH;
        I2 += "," + (l2 - W2), P2 % 2 === 1 && (I2 += ",0"), I2 += "," + L2.toString(), I2 += "," + l2.toString(), u2.attr("stroke-dasharray", I2);
      }, E2 = (A2) => {
        const L2 = A2.selection;
        L2 === null || L2[0] === L2[1] || (u2.attr("x", parseFloat(i2.attr("x")) + parseFloat(s2.attr("x"))).attr("y", i2.attr("y")).attr("width", i2.attr("width")).attr("height", i2.attr("height")).style("cursor", "pointer").style("display", null), m2(L2));
      }, O2 = (A2, L2) => {
        const I2 = scaleTime().range([0, r2]).domain(g2);
        let P2 = [I2.invert(A2), I2.invert(L2)];
        P2[0].valueOf() === P2[1].valueOf() && (P2 = this.services.zoom.getDefaultZoomBarDomain()), (g2[0].valueOf() !== P2[0].valueOf() || g2[1].valueOf() !== P2[1].valueOf()) && this.services.zoom.handleDomainChange(P2);
      };
      let x2;
      const y2 = (A2) => {
        const L2 = A2.selection;
        L2 !== null && (O2(L2[0], L2[1]), a2.call(x2.move, null), u2.style("display", "none"));
      };
      l2 != 0 && r2 != 0 && (x2 = brushX().extent([
        [0, 0],
        [r2 - 1, l2]
      ]).on("start brush end", E2).on("end.brushed", y2), a2.call(x2));
      const w2 = this.services.zoom.getZoomRatio();
      s2.on("click", function(A2) {
        if (A2.shiftKey) {
          const L2 = this.services.domUtils.getHolder(), I2 = pointer(a2.node(), L2)[0];
          let P2 = I2 - r2 * w2 / 2;
          P2 < 0 && (P2 = 0);
          let W2 = I2 + r2 * w2 / 2;
          W2 > r2 && (W2 = r2), O2(P2, W2);
        }
      });
    }
  }
};
dt.DASH_LENGTH = 4;
let zs = dt;
class yh extends Y {
  constructor() {
    super(...arguments), this.type = "zoom-bar", this.renderType = D$3.SVG, this.MIN_SELECTION_DIFF = 9e-10, this.brushSelector = "g.zoom-bar-brush", this.clipId = "zoomBarClip-" + Math.floor(Math.random() * 99999999999), this.brush = brushX(), this.highlightStrokeWidth = 1;
  }
  init() {
    this.services.events.addEventListener(oE.ZoomBar.UPDATE, this.render.bind(this));
    const e2 = G$1(this.getOptions(), "zoomBar", f.TOP, "data");
    this.model.setZoomBarData(e2);
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    const t2 = this.getComponentContainer(), n2 = this.services.zoom.isZoomBarLoading(f.TOP), s2 = this.services.zoom.isZoomBarLocked(f.TOP), a2 = G$1(this.getOptions(), "zoomBar", f.TOP, "type"), i2 = G$1(this.getOptions(), "axes", f.BOTTOM, "highlights"), r2 = gc.height[a2], { width: l2 } = k$1.getSVGElementSize(this.parent, {
      useAttrs: true
    });
    if (l2 === 0)
      return;
    let c2 = 0;
    const d2 = this.model.get("axesMargins");
    d2 && d2.left && (c2 = d2.left);
    const p2 = k$1.appendOrSelect(t2, "svg.zoom-container").attr("width", "100%").attr("height", r2).attr("opacity", 1);
    if (k$1.appendOrSelect(t2, "rect.zoom-spacer").attr("x", 0).attr("y", r2).attr("width", "100%").attr("height", gc.spacerHeight).attr("opacity", 1).attr("fill", "none"), a2 === K$2.GRAPH_VIEW ? k$1.appendOrSelect(p2, "rect.zoom-bg").attr("x", c2).attr("y", 0).attr("width", l2 - c2).attr("height", "100%").classed("zoom-bg-skeleton", n2).style(
      "stroke",
      n2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    ) : a2 === K$2.SLIDER_VIEW && k$1.appendOrSelect(p2, "rect.zoom-slider-bg").attr("x", c2).attr("y", r2 / 2 - 1).attr("width", l2 - c2).attr("height", 2).classed("zoom-slider-bg-skeleton", n2).style(
      "stroke",
      n2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    ), n2) {
      this.renderSkeleton(p2, c2, l2);
      return;
    }
    const { cartesianScales: h$12 } = this.services, u2 = h$12.getMainXScale(), g2 = h$12.getMainYScale(), m2 = h$12.getMainXScaleType();
    if (u2 && m2 === P$1.TIME) {
      let E2 = this.services.zoom.getZoomBarData();
      if (qu(E2) || E2.length === 1)
        return;
      this.xScale = u2.copy(), this.yScale = g2.copy();
      const O2 = this.services.zoom.getDefaultZoomBarDomain(E2);
      E2 = this.compensateDataForDefaultDomain(E2, O2);
      const x2 = this.model.get("initialZoomDomain"), y2 = G$1(
        this.getOptions(),
        "zoomBar",
        f.TOP,
        "initialZoomDomain"
      );
      y2 && y2[0] && y2[1] && (y2[0] = new Date(y2[0]), y2[1] = new Date(y2[1])), y2 && !(x2 && x2[0].valueOf() === y2[0].valueOf() && x2[1].valueOf() === y2[1].valueOf()) ? this.model.set(
        {
          // use a new object instead of newInitialZoomDomain
          initialZoomDomain: h([], y2),
          zoomDomain: y2 ? h([], y2) : O2
        },
        { skipUpdate: true }
      ) : y2 === null && x2 !== null && this.model.set(
        {
          initialZoomDomain: null,
          zoomDomain: h([], O2)
        },
        { skipUpdate: true }
      ), this.xScale.range([c2, l2]).domain(O2), this.maxSelectionRange = this.xScale.range(), this.yScale.range([0, r2 - 6]).domain(extent(E2, (L2) => L2.value));
      const w2 = this.model.get("zoomDomain");
      if (a2 === K$2.GRAPH_VIEW && (this.renderZoomBarArea(p2, "path.zoom-graph-area-unselected", E2, null), this.updateClipPath(t2, this.clipId, 0, 0, 0, 0), this.renderZoomBarArea(p2, "path.zoom-graph-area", E2, this.clipId), this.renderZoomBarBaseline(p2, c2, l2), i2)) {
        const L2 = i2.highlightStartMapsTo, I2 = i2.highlightEndMapsTo, P2 = i2.color, W2 = i2.labelMapsTo;
        i2.data.forEach((R2, _2) => {
          k$1.appendOrSelect(p2, `rect.highlight-${_2}`).attr("height", r2 - 2 * this.highlightStrokeWidth).attr("y", this.highlightStrokeWidth).attr("x", this.xScale(R2[L2])).attr(
            "width",
            this.xScale(R2[I2]) - this.xScale(R2[L2])
          ).style(
            "fill",
            P2 && P2.scale[R2[W2]] ? P2.scale[R2[W2]] : null
          ).style("fill-opacity", 0.1).style(
            "stroke",
            P2 && P2.scale[R2[W2]] ? P2.scale[R2[W2]] : null
          ).style("stroke-dasharray", "2, 2").attr("stroke-width", "1px");
        });
      }
      this.addBrushEventListener(w2, c2, l2);
      const A2 = k$1.appendOrSelect(t2, this.brushSelector).call(this.brush);
      if (w2 !== void 0)
        if (w2[0].valueOf() === w2[1].valueOf())
          A2.call(this.brush.move, this.xScale.range()), this.updateBrushHandle(this.getComponentContainer(), this.xScale.range());
        else {
          const L2 = w2.map((I2) => this.xScale(I2));
          L2[1] - L2[0] < this.MIN_SELECTION_DIFF || (A2.call(this.brush.move, L2), this.updateBrushHandle(this.getComponentContainer(), L2));
        }
      s2 && (this.brush.filter(() => false), A2.selectAll("rect").attr("cursor", "auto"));
    }
  }
  addBrushEventListener(e2, t2, n2) {
    const s2 = (r2) => {
      const l2 = r2.selection;
      l2 === null ? this.handleBrushedEvent(r2, e2, this.xScale, this.xScale.range()) : l2[0] === l2[1] || this.handleBrushedEvent(r2, e2, this.xScale, l2);
    }, a2 = G$1(this.getOptions(), "zoomBar", f.TOP, "type"), i2 = gc.height[a2];
    this.brush.extent([
      [t2, 0],
      [n2, i2]
    ]).on("start brush end", null).on("start brush end", s2);
  }
  // brush event listener
  handleBrushedEvent(e2, t2, n2, s2) {
    const a2 = [n2.invert(s2[0]), n2.invert(s2[1])];
    if (this.updateBrushHandle(this.getComponentContainer(), s2), e2.sourceEvent != null && (e2.sourceEvent.type === "mousemove" || e2.sourceEvent.type === "mouseup" || e2.sourceEvent.type === "mousedown" || e2.sourceEvent.type === "touchstart" || e2.sourceEvent.type === "touchmove" || e2.sourceEvent.type === "touchend")) {
      (t2 === void 0 || t2[0] !== a2[0] || t2[1] !== a2[1]) && this.services.zoom.handleDomainChange(a2, {
        dispatchEvent: false
      });
      let i2;
      e2.type === "start" ? i2 = oE.ZoomBar.SELECTION_START : e2.type === "brush" ? i2 = oE.ZoomBar.SELECTION_IN_PROGRESS : e2.type === "end" && (i2 = oE.ZoomBar.SELECTION_END, this.services.events.dispatchEvent(oE.ZoomDomain.CHANGE, {
        newDomain: a2
      })), this.services.events.dispatchEvent(i2, {
        selection: s2,
        newDomain: a2
      });
    }
  }
  updateBrushHandle(e2, t2) {
    const n2 = this, s2 = gc.handleWidth, a2 = G$1(this.getOptions(), "zoomBar", f.TOP, "type"), i2 = gc.height[a2], r2 = -s2 / 2, l2 = gc.handleBarWidth, c2 = a2 === K$2.GRAPH_VIEW ? gc.handleBarHeight : 6, d2 = -l2 / 2, p2 = (i2 - c2) / 2;
    e2.select(this.brushSelector).selectAll("rect.handle").data([{ type: "w" }, { type: "e" }]).attr("x", function(u2) {
      if (u2.type === "w")
        return Math.max(t2[0] + r2, n2.maxSelectionRange[0]);
      if (u2.type === "e")
        return Math.min(t2[1] + r2, n2.maxSelectionRange[1] - s2);
    }).attr("y", 0).attr("width", s2).attr("height", i2).attr("cursor", "ew-resize").style("display", null);
    const h2 = e2.select(this.brushSelector).selectAll("rect.handle-bar").data([{ type: "w" }, { type: "e" }]);
    h2.enter().append("rect").attr("class", function(u2) {
      return "handle-bar handle-bar--" + u2.type;
    }), h2.attr("x", function(u2) {
      if (u2.type === "w")
        return Math.max(
          t2[0] + d2,
          n2.maxSelectionRange[0] - r2 + d2
        );
      if (u2.type === "e")
        return Math.min(
          t2[1] + d2,
          n2.maxSelectionRange[1] + r2 + d2
        );
    }).attr("y", p2).attr("width", l2).attr("height", c2).attr("cursor", "ew-resize"), a2 === K$2.SLIDER_VIEW && this.updateSliderSelectedArea(t2), this.updateClipPath(
      e2,
      this.clipId,
      t2[0],
      0,
      t2[1] - t2[0],
      i2
    );
  }
  updateSliderSelectedArea(e2) {
    const t2 = G$1(this.getOptions(), "zoomBar", f.TOP, "type"), n2 = gc.height[t2], a2 = this.getComponentContainer().select("svg.zoom-container");
    k$1.appendOrSelect(a2, "rect.zoom-slider-selected-area").attr("x", e2[0]).attr("y", n2 / 2 - 1).attr("width", e2[1] - e2[0]).attr("height", 2);
  }
  renderZoomBarArea(e2, t2, n2, s2) {
    const { cartesianScales: a2 } = this.services, i2 = a2.getMainXAxisPosition(), r2 = a2.getMainYAxisPosition(), l2 = a2.getMainXScaleType(), c2 = a2.getMainYScaleType(), d2 = (O2, x2, y2) => (w2) => a2.getValueFromScale(O2, x2, y2, w2), p2 = d2(this.xScale, l2, i2), h2 = d2(this.yScale, c2, r2), u2 = G$1(this.getOptions(), "zoomBar", f.TOP, "type"), g2 = gc.height[u2], m2 = area().x((O2) => p2(O2)).y0(g2).y1((O2) => g2 - h2(O2)), E2 = k$1.appendOrSelect(e2, t2).datum(n2).attr("d", m2);
    s2 && E2.attr("clip-path", `url(#${s2})`);
  }
  updateClipPath(e2, t2, n2, s2, a2, i2) {
    const r2 = k$1.appendOrSelect(e2, "clipPath").attr("id", t2);
    k$1.appendOrSelect(r2, "rect").attr("x", n2).attr("y", s2).attr("width", a2).attr("height", i2);
  }
  // assume the domains in data are already sorted
  compensateDataForDefaultDomain(e2, t2) {
    if (!e2 || e2.length < 2)
      return;
    const n2 = qs(e2), s2 = this.services.cartesianScales.getDomainIdentifier(), a2 = this.services.cartesianScales.getRangeIdentifier();
    if (Number(t2[0]) < Number(n2[0][s2])) {
      const i2 = {};
      i2[s2] = t2[0], i2[a2] = 0, n2.unshift(i2);
    }
    if (Number(t2[1]) > Number(n2[n2.length - 1][s2])) {
      const i2 = {};
      i2[s2] = t2[1], i2[a2] = 0, n2.push(i2);
    }
    return n2;
  }
  renderZoomBarBaseline(e2, t2, n2, s2 = false) {
    const a2 = G$1(
      this.model.getOptions(),
      "zoomBar",
      f.TOP,
      "type"
    ), i2 = gc.height[a2], r2 = line()([
      [t2, i2],
      [n2, i2]
    ]);
    k$1.appendOrSelect(e2, "path.zoom-bg-baseline").attr("d", r2).classed("zoom-bg-baseline-skeleton", s2).style(
      "stroke",
      s2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    );
  }
  renderSkeleton(e2, t2, n2) {
    this.renderZoomBarArea(e2, "path.zoom-graph-area-unselected", [], null), this.renderZoomBarArea(e2, "path.zoom-graph-area", [], this.clipId), this.brush.on("start brush end", null), k$1.appendOrSelect(this.getComponentContainer(), this.brushSelector).html(null), G$1(this.getOptions(), "zoomBar", f.TOP, "type") === K$2.GRAPH_VIEW && this.renderZoomBarBaseline(e2, t2, n2, true);
  }
  destroy() {
    this.brush.on("start brush end", null), this.services.events.removeEventListener(oE.ZoomBar.UPDATE, this.render.bind(this));
  }
}
class Eh extends Y {
  constructor(e2, t2) {
    super(e2, t2), this.type = "threshold", this.renderType = D$3.SVG, this.positionService = new Yt();
  }
  render(e2 = false) {
    const t2 = G$1(this.getOptions(), "axes"), n2 = [];
    Object.keys(t2).forEach((h2) => {
      if (Object.values(f).includes(h2)) {
        const u2 = t2[h2];
        u2.thresholds && u2.thresholds.length > 0 && n2.push({
          axisPosition: h2,
          thresholds: u2.thresholds,
          correspondingDatasets: u2 == null ? void 0 : u2.correspondingDatasets,
          mapsTo: u2 == null ? void 0 : u2.mapsTo
        });
      }
    });
    const a2 = this.getComponentContainer({ withinChartClip: true }).selectAll("g.axis-thresholds").data(n2, (h2) => h2.axisPosition);
    a2.exit().attr("opacity", 0).remove();
    const r2 = a2.enter().append("g").merge(a2);
    r2.attr("class", (h2) => `axis-thresholds ${h2.axisPosition}`);
    const l2 = r2.selectAll("g.threshold-group").data(
      (h2) => h2.thresholds.map((u2) => (u2.axisPosition = h2.axisPosition, u2.datum = this.constructDatumObj(h2, u2), u2))
    );
    l2.exit().attr("opacity", 0).remove();
    const c2 = l2.enter().append("g");
    c2.append("line").attr("class", "threshold-line"), c2.append("rect").attr("class", "threshold-hoverable-area"), c2.merge(l2).attr("class", "threshold-group");
    const p2 = this;
    r2.each(function({ axisPosition: h2 }) {
      const u2 = p2.services.cartesianScales.getScaleByPosition(
        h2
      ), g2 = p2.services.cartesianScales.getScaleTypeByPosition(h2);
      let m2 = null, E2 = null;
      h2 === f.LEFT || h2 === f.RIGHT ? (E2 = u2, m2 = p2.services.cartesianScales.getMainXScale()) : (m2 = u2, E2 = p2.services.cartesianScales.getMainYScale());
      const O2 = g2 === P$1.LABELS, [x2, y2] = m2.range(), [w2, A2] = E2.range(), { cartesianScales: L2 } = p2.services, I2 = L2.getOrientation(), P2 = (F2) => L2.getDomainValue(F2), W2 = (F2) => L2.getRangeValue(F2), [R2, _2] = xl(
        P2,
        W2,
        I2
      ), V2 = select(this);
      h2 === f.TOP || h2 === f.BOTTOM ? (V2.selectAll("line.threshold-line").transition().call(
        (F2) => p2.services.transitions.setupTransition({
          transition: F2,
          name: "threshold-line-update",
          animate: e2
        })
      ).attr("y1", A2).attr("y2", w2).attr(
        "x1",
        ({ datum: F2 }) => R2(F2) + (O2 ? u2.step() / 2 : 0)
      ).attr(
        "x2",
        ({ datum: F2 }) => R2(F2) + (O2 ? u2.step() / 2 : 0)
      ).style("stroke", ({ fillColor: F2 }) => F2), V2.selectAll("rect.threshold-hoverable-area").attr("x", 0).attr("y", ({ datum: F2 }) => -R2(F2)).attr("width", Math.abs(w2 - A2)).classed("rotate", true)) : (V2.selectAll("line.threshold-line").transition().call(
        (F2) => p2.services.transitions.setupTransition({
          transition: F2,
          name: "threshold-line-update",
          animate: e2
        })
      ).attr("x1", x2).attr("x2", y2).attr(
        "y1",
        ({ datum: F2 }) => _2(F2) + (O2 ? u2.step() / 2 : 0)
      ).attr(
        "y2",
        ({ datum: F2 }) => _2(F2) + (O2 ? u2.step() / 2 : 0)
      ).style("stroke", ({ fillColor: F2 }) => F2), V2.selectAll("rect.threshold-hoverable-area").attr("x", x2).attr("y", ({ datum: F2 }) => _2(F2)).attr("width", Math.abs(y2 - x2)).classed("rotate", false));
    }), this.services.events.addEventListener(oE.Threshold.SHOW, (h2) => {
      this.setThresholdLabelPosition(h2.detail), this.label.classed("hidden", false);
    }), this.services.events.addEventListener(oE.Threshold.HIDE, () => {
      this.label.classed("hidden", true);
    }), this.appendThresholdLabel(), this.addEventListeners();
  }
  getFormattedValue(e2) {
    const { value: t2, axisPosition: n2 } = e2, s2 = this.getOptions(), a2 = this.services.cartesianScales.getScaleTypeByPosition(n2), { code: i2, number: r2 } = G$1(s2, "locale");
    if (a2 === P$1.TIME) {
      const l2 = [f.LEFT, f.RIGHT].includes(n2), c2 = this.services.cartesianScales.getMainXScale(), d2 = this.services.cartesianScales.getMainYScale(), p2 = l2 ? d2 : c2, h2 = G$1(s2, "timeScale"), u2 = Cl(
        p2.ticks(),
        G$1(h2, "timeInterval")
      );
      return $l(t2, 0, p2.ticks(), u2, h2, s2.locale);
    }
    return r2(t2, i2);
  }
  appendThresholdLabel() {
    const e2 = select(this.services.domUtils.getHolder()), t2 = G$1(this.getOptions(), "style", "prefix");
    this.label = k$1.appendOrSelect(
      e2,
      `div.${Vu}--${t2}--threshold--label`
    ).classed("hidden", true);
  }
  setThresholdLabelPosition({ event: e2, datum: t2 }) {
    const n2 = this.services.domUtils.getHolder(), s2 = pointer(e2, n2), a2 = t2.valueFormatter ? t2.valueFormatter(t2.value) : this.getFormattedValue(t2);
    this.label.html(Pe(`${t2.label || "Threshold"}: ${a2}`)).style("background-color", t2.fillColor);
    const i2 = this.label.node(), r2 = this.positionService.findBestPlacementAt(
      {
        left: s2[0],
        top: s2[1]
      },
      i2,
      [de.RIGHT, de.LEFT, de.TOP, de.BOTTOM],
      () => ({
        top: void 0,
        // other package lists this as non-optional
        left: void 0,
        // ditto
        width: n2.offsetWidth,
        height: n2.offsetHeight
      })
    ), l2 = this.positionService.findPositionAt(
      {
        left: s2[0],
        top: s2[1]
      },
      i2,
      r2
    );
    this.positionService.setElement(i2, l2);
  }
  // Constructs object to pass in scale functions
  constructDatumObj(e2, t2) {
    const n2 = {};
    return e2.correspondingDatasets && (n2.group = G$1(e2, "correspondingDatasets", 0)), n2[e2.mapsTo] = t2.value, n2;
  }
  addEventListeners() {
    const e2 = this;
    this.getComponentContainer({ withinChartClip: true }).selectAll("rect.threshold-hoverable-area").on("mouseover mousemove", function(n2) {
      select(this.parentNode).select("line.threshold-line").classed("active", true), e2.services.events.dispatchEvent(oE.Threshold.SHOW, {
        event: n2,
        hoveredElement: select(this),
        datum: select(this).datum()
      });
    }).on("mouseout", function(n2) {
      select(this.parentNode).select("line.threshold-line").classed("active", false), e2.services.events.dispatchEvent(oE.Threshold.HIDE, {
        event: n2,
        hoveredElement: select(this),
        datum: select(this).datum()
      });
    });
  }
}
class bh extends Y {
  constructor(e2, t2) {
    super(e2, t2), this.type = "highlight", this.renderType = D$3.SVG, this.positionService = new Yt(), this.highlightStrokeWidth = 1;
  }
  render(e2 = false) {
    const t2 = G$1(this.getOptions(), "axes"), n2 = [];
    Object.keys(t2).forEach((h2) => {
      if (Object.values(f).includes(h2)) {
        const u2 = t2[h2];
        u2.highlights && u2.highlights.data.length > 0 && n2.push({
          axisPosition: h2,
          highlightStartMapsTo: u2.highlights.highlightStartMapsTo,
          highlightEndMapsTo: u2.highlights.highlightEndMapsTo,
          labelMapsTo: u2.highlights.labelMapsTo,
          highlight: u2.highlights.data,
          color: u2.highlights.color
        });
      }
    });
    const a2 = this.getComponentContainer({ withinChartClip: true }).selectAll("g.axis-highlight").data(n2, (h2) => h2.axisPosition);
    a2.exit().attr("opacity", 0).remove();
    const r2 = a2.enter().append("g").merge(a2);
    r2.attr("class", (h2) => `axis-highlight ${h2.axisPosition}`);
    const l2 = r2.selectAll("g.highlight-group").data(
      (h2) => h2.highlight.map((u2) => (u2.axisPosition = h2.axisPosition, u2.highlightStartMapsTo = h2.highlightStartMapsTo, u2.labelMapsTo = h2.labelMapsTo, u2.color = h2.color, u2.highlightEndMapsTo = h2.highlightEndMapsTo, u2))
    );
    l2.exit().attr("opacity", 0).remove();
    const c2 = l2.enter().append("g");
    c2.append("rect").attr("class", "highlight-bar"), c2.append("line").attr("class", "highlight-line"), c2.merge(l2).attr("class", "highlight-group");
    const p2 = this;
    r2.each(function({ axisPosition: h2 }) {
      const u2 = p2.services.cartesianScales.getMainXScale(), g2 = p2.services.cartesianScales.getMainYScale(), [m2, E2] = u2.range(), [O2, x2] = g2.range(), { cartesianScales: y2 } = p2.services, w2 = y2.getOrientation(), A2 = (R2) => y2.getDomainValue(R2), L2 = (R2) => y2.getRangeValue(R2), [I2, P2] = xl(
        A2,
        L2,
        w2
      ), W2 = select(this);
      h2 === f.TOP || h2 === f.BOTTOM ? W2.selectAll("rect.highlight-bar").transition().call(
        (R2) => p2.services.transitions.setupTransition({
          transition: R2,
          name: "highlight-bar-update",
          animate: e2
        })
      ).attr("y", Math.max(x2 + p2.highlightStrokeWidth, 0)).attr("height", Math.max(O2 - 2 * p2.highlightStrokeWidth, 0)).attr("x", ({ highlightStartMapsTo: R2, ..._2 }) => I2(_2[R2])).attr(
        "width",
        ({ highlightStartMapsTo: R2, highlightEndMapsTo: _2, ...V2 }) => Math.max(I2(V2[_2]) - I2(V2[R2]), 0)
      ).style("stroke", ({ color: R2, labelMapsTo: _2, ...V2 }) => R2 && R2.scale[V2[_2]] ? R2.scale[V2[_2]] : null).style("stroke-dasharray", "2, 2").attr("stroke-width", p2.highlightStrokeWidth + "px").style("fill-opacity", 0.1).style("fill", ({ color: R2, labelMapsTo: _2, ...V2 }) => R2 && R2.scale[V2[_2]] ? R2.scale[V2[_2]] : null) : W2.selectAll("rect.highlight-bar").transition().call(
        (R2) => p2.services.transitions.setupTransition({
          transition: R2,
          name: "highlight-bar-update",
          animate: e2
        })
      ).attr("x", m2).attr("width", Math.max(E2 - m2, 0)).attr("y", ({ highlightEndMapsTo: R2, ..._2 }) => P2(_2[R2])).attr(
        "height",
        ({ highlightStartMapsTo: R2, highlightEndMapsTo: _2, ...V2 }) => Math.max(P2(V2[R2]) - P2(V2[_2]), 0)
      ).style("stroke", ({ color: R2, labelMapsTo: _2, ...V2 }) => R2 && R2.scale[V2[_2]] ? R2.scale[V2[_2]] : null).style("stroke-dasharray", "2, 2").attr("stroke-width", p2.highlightStrokeWidth + "px").style("fill-opacity", 0.1).style("fill", ({ color: R2, labelMapsTo: _2, ...V2 }) => R2 && R2.scale[V2[_2]] ? R2.scale[V2[_2]] : null);
    });
  }
}
class Sh extends yl {
  getItems(e2) {
    if (e2.detail.items)
      return e2.detail.items;
    const { data: t2 } = e2.detail;
    if (!t2 || !t2.length || !t2[0])
      return [];
    const n2 = this.getOptions(), { cartesianScales: s2 } = this.services, a2 = s2.getDomainIdentifier(), i2 = s2.isDualAxes(), { groupMapsTo: r2 } = n2.data, l2 = s2.getDomainLabel();
    let c2 = s2.getRangeLabel();
    const d2 = t2[0][a2];
    let p2;
    if (t2.length === 1) {
      const h2 = t2[0], u2 = s2.getRangeIdentifier(h2);
      if (i2) {
        const m2 = s2.getRangeAxisPosition({
          datum: h2,
          groups: [h2[r2]]
        });
        c2 = s2.getScaleLabel(m2);
      }
      const g2 = h2[u2];
      p2 = [
        {
          label: l2,
          value: d2
        },
        ...Array.isArray(g2) && g2.length === 2 ? [
          {
            label: "Start",
            value: g2[0]
          },
          {
            label: "End",
            value: g2[1]
          }
        ] : [
          {
            label: c2,
            value: h2[u2]
          }
        ]
      ], e2.detail.additionalItems && e2.detail.additionalItems.forEach(
        (m2) => p2.push({
          label: m2.label,
          value: m2.value
        })
      ), p2.push({
        label: io$1(n2, "locale.translations.group") || io$1(n2, "tooltip.groupLabel"),
        value: h2[r2],
        color: this.model.getFillColor(h2[r2]),
        class: this.model.getColorClassName({
          classNameTypes: [b$1.TOOLTIP],
          dataGroupName: h2[r2]
        })
      });
    } else if (t2.length > 1 && (p2 = [
      {
        label: l2,
        value: d2
      }
    ], p2 = p2.concat(
      t2.map((h2) => {
        const u2 = h2[s2.getRangeIdentifier(h2)];
        return {
          label: h2[r2],
          value: Array.isArray(u2) && u2.length === 2 ? `${u2[0]} - ${u2[1]}` : u2,
          color: this.model.getFillColor(h2[r2]),
          class: this.model.getColorClassName({
            classNameTypes: [b$1.TOOLTIP],
            dataGroupName: h2[r2]
          })
        };
      }).sort((h2, u2) => u2.value - h2.value)
    ), !i2 && G$1(n2, "tooltip", "showTotal") === true)) {
      const h2 = s2.getRangeIdentifier();
      p2.push({
        label: io$1(n2, "locale.translations.total") || io$1(n2, "tooltip.totalLabel") || "Total",
        value: t2.reduce(
          (u2, g2) => u2 + g2[h2],
          0
        ),
        bold: true
      });
    }
    return p2;
  }
}
class Th extends Y {
  constructor() {
    super(...arguments), this.type = "grid", this.renderType = D$3.SVG;
  }
  render(e2 = true) {
    const t2 = G$1(this.getOptions(), "grid", "x", "enabled"), n2 = G$1(this.getOptions(), "grid", "y", "enabled");
    this.drawBackdrop(t2, n2), !(!t2 && !n2) && (t2 && (k$1.appendOrSelect(this.backdrop, "g.x.grid"), this.drawXGrid(e2)), n2 && (k$1.appendOrSelect(this.backdrop, "g.y.grid"), this.drawYGrid(e2)));
  }
  drawXGrid(e2) {
    const t2 = this.parent, n2 = this.backdrop.attr("height"), s2 = this.services.cartesianScales.getMainXScale(), a2 = axisBottom(s2).tickSizeInner(-n2).tickSizeOuter(0);
    if (G$1(this.getOptions(), "grid", "x", "alignWithAxisTicks")) {
      const l2 = this.services.cartesianScales.getDomainAxisPosition(), c2 = G$1(this.getOptions(), "axes", l2, "ticks", "values");
      c2 && a2.tickValues(c2);
    } else {
      const l2 = G$1(this.getOptions(), "grid", "x", "numberOfTicks");
      a2.ticks(l2);
    }
    const r2 = t2.select(".x.grid").attr("transform", `translate(${-this.backdrop.attr("x")}, ${n2})`);
    e2 ? r2.transition().call(
      (l2) => this.services.transitions.setupTransition({
        transition: l2,
        name: "grid-update",
        animate: e2
      })
    ).call(a2) : r2.call(a2), this.cleanGrid(r2);
  }
  drawYGrid(e2) {
    const t2 = this.parent, n2 = this.backdrop.attr("width"), s2 = this.services.cartesianScales.getMainYScale(), a2 = axisLeft(s2).tickSizeInner(-n2).tickSizeOuter(0);
    if (G$1(this.getOptions(), "grid", "y", "alignWithAxisTicks")) {
      const l2 = this.services.cartesianScales.getRangeAxisPosition(), c2 = G$1(this.getOptions(), "axes", l2, "ticks", "values");
      c2 && a2.tickValues(c2);
    } else {
      const l2 = G$1(this.getOptions(), "grid", "y", "numberOfTicks");
      a2.ticks(l2);
    }
    const r2 = t2.select(".y.grid").attr("transform", `translate(0, ${-this.backdrop.attr("y")})`);
    e2 ? r2.transition().call(
      (l2) => this.services.transitions.setupTransition({
        transition: l2,
        name: "grid-update",
        animate: e2
      })
    ).call(a2) : r2.call(a2), this.cleanGrid(r2);
  }
  /**
   * Returns the threshold for the gridline tooltips based on the mouse location.
   * Calculated based on the mouse position between the two closest gridlines or edges of chart.
   */
  getGridlineThreshold(e2) {
    const t2 = this.parent, n2 = t2.selectAll(".x.grid .tick").nodes().sort((d2, p2) => Number(Ol(d2).tx) - Number(Ol(p2).tx));
    let s2 = -1;
    if (!n2.length)
      return;
    n2.forEach((d2) => {
      e2[0] >= +Ol(d2).tx && s2++;
    });
    const a2 = s2 + 1 < n2.length ? s2 + 1 : n2.length, i2 = n2[s2], r2 = n2[a2];
    let l2;
    if (!i2)
      l2 = +Ol(r2).tx;
    else if (r2)
      l2 = +Ol(r2).tx - +Ol(i2).tx;
    else {
      const d2 = t2.select("rect.chart-grid-backdrop").node();
      l2 = k$1.getSVGElementSize(d2).width - +Ol(i2).tx;
    }
    const { threshold: c2 } = this.getOptions().tooltip.gridline;
    return l2 * c2;
  }
  /**
   * Returns the active gridlines based on the gridline threshold and mouse position.
   * @param position mouse positon
   */
  getActiveGridline(e2) {
    const t2 = G$1(this.getOptions, "tooltip", "gridline", "threshold"), n2 = t2 || this.getGridlineThreshold(e2);
    return this.parent.selectAll(".x.grid .tick").filter(function() {
      const i2 = Ol(this), r2 = {
        min: Number(i2.tx) - n2,
        max: Number(i2.tx) + n2
      };
      return r2.min <= e2[0] && e2[0] <= r2.max;
    });
  }
  drawBackdrop(e2, t2) {
    const n2 = this.parent, s2 = this.services.cartesianScales.getMainXScale(), a2 = this.services.cartesianScales.getMainYScale(), [i2, r2] = s2.range(), [l2, c2] = a2.range();
    this.backdrop = k$1.appendOrSelect(n2, "svg.chart-grid-backdrop");
    const d2 = k$1.appendOrSelect(
      this.backdrop,
      e2 || t2 ? "rect.chart-grid-backdrop.stroked" : "rect.chart-grid-backdrop"
    );
    this.backdrop.merge(d2).attr("x", i2).attr("y", c2).attr("width", Math.abs(r2 - i2)).attr("height", Math.abs(l2 - c2)).lower(), d2.attr("width", "100%").attr("height", "100%");
  }
  cleanGrid(e2) {
    e2.selectAll("text").remove(), e2.select(".domain").remove();
  }
}
class xh extends Y {
  constructor() {
    super(...arguments), this.type = "area", this.renderType = D$3.SVG, this.gradient_id = "gradient-id-" + Math.floor(Math.random() * 99999999999), this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail;
      this.parent.selectAll("path.area").transition("legend-hover-area").call(
        (n2) => this.services.transitions.setupTransition({
          transition: n2,
          name: "legend-hover-area"
        })
      ).attr("opacity", (n2) => n2.name !== t2.datum().name ? Zu.opacity.unselected : Zu.opacity.selected);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.area").transition("legend-mouseout-area").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-area"
        })
      ).attr("opacity", Zu.opacity.selected);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2 = true) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), n2 = this.getOptions();
    let s2 = [0, 0];
    const { cartesianScales: a2 } = this.services, i2 = a2.getOrientation(), r2 = area().curve(this.services.curves.getD3Curve()).defined((A2) => {
      const L2 = a2.getRangeIdentifier(), I2 = A2[L2];
      return I2 != null;
    }), l2 = this.model.getGroupedData(this.configs.groups), c2 = G$1(n2, "bounds"), d2 = c2 && l2 && l2.length === 1;
    !d2 && c2 && console.warn(
      `Bounds can only be shown when having 1 single datagroup, you've supplied ${l2.length}`
    );
    let p2 = 0;
    const h2 = (A2, L2) => {
      G$1(n2, "axes", A2, "includeZero") === false && L2[0] > 0 && L2[1] > 0 && (p2 = L2[0]);
    }, u2 = (A2) => d2 ? a2.getBoundedScaledValues(A2)[0] : a2.getRangeValue(p2), g2 = (A2) => d2 ? a2.getBoundedScaledValues(A2)[1] : a2.getRangeValue(A2);
    i2 === F$2.VERTICAL ? (s2 = a2.getMainYScale().domain(), h2(a2.getMainYAxisPosition(), s2), r2.x((A2) => a2.getDomainValue(A2)).y0((A2) => u2(A2)).y1((A2) => g2(A2))) : (s2 = a2.getMainXScale().domain(), h2(a2.getMainXAxisPosition(), s2), r2.x0((A2) => u2(A2)).x1((A2) => g2(A2)).y((A2) => a2.getDomainValue(A2)));
    const m2 = G$1(n2, "color", "gradient", "enabled"), E2 = l2 && l2.length === 1 && m2;
    l2.length > 1 && m2 && console.error("Gradients can only be enabled when having 1 single dataset");
    const O2 = t2.selectAll("path.area").data(l2, (A2) => A2.name), x2 = select(this.services.domUtils.getMainContainer());
    if (O2.exit().attr("opacity", 0).remove(), !l2.length)
      return;
    if (E2) {
      const A2 = x2.select(
        `path.${this.model.getColorClassName({
          classNameTypes: [b$1.STROKE],
          dataGroupName: l2[0].name
        })}`
      ).node();
      let L2;
      if (A2)
        L2 = getComputedStyle(A2, null).getPropertyValue(
          "stroke"
        );
      else {
        const I2 = G$1(this.model.getOptions(), "color", "scale");
        if (I2 !== null) {
          const P2 = Object.keys(I2);
          L2 = I2[P2[0]];
        }
      }
      le.appendOrUpdateLinearGradient({
        svg: this.parent,
        id: this.services.domUtils.generateElementIDString(
          `${l2[0].name.replace(" ", "")}_${this.gradient_id}`
        ),
        x1: "0%",
        x2: "0%",
        y1: "0%",
        y2: "100%",
        stops: le.getStops(s2, L2)
      });
    } else
      this.parent.selectAll("defs linearGradient").empty() || this.parent.selectAll("defs linearGradient").each(function() {
        this.parentNode.remove();
      });
    const y2 = this, w2 = O2.enter().append("path");
    E2 ? w2.merge(O2).style(
      "fill",
      (A2) => `url(#${this.services.domUtils.generateElementIDString(
        `${A2.name.replace(" ", "")}_${this.gradient_id}`
      )})`
    ).attr("class", "area").attr(
      "class",
      (A2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: A2.name,
        originalClassName: "area"
      })
    ).attr("d", (A2) => {
      const { data: L2 } = A2;
      return r2(L2);
    }) : (w2.attr("opacity", 0).merge(O2).attr("class", "area").attr(
      "class",
      (A2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL, b$1.STROKE],
        dataGroupName: A2.name,
        originalClassName: "area"
      })
    ).style("fill", (A2) => y2.model.getFillColor(A2.name, null, A2.data)).transition().call(
      (A2) => this.services.transitions.setupTransition({
        transition: A2,
        name: "area-update-enter",
        animate: e2
      })
    ).attr("opacity", d2 ? 1 : Zu.opacity.selected).attr("d", (A2) => {
      const { data: L2 } = A2;
      return r2(L2);
    }), d2 && w2.attr("fill-opacity", Zu.opacity.selected).style("stroke", (A2) => y2.model.getStrokeColor(A2.name, null, A2.data)).style("stroke-dasharray", "2, 2").attr("stroke-width", 0.7 + "px"));
  }
  destroy() {
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
class Lh extends Y {
  constructor() {
    super(...arguments), this.type = "line", this.renderType = D$3.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail;
      this.parent.selectAll("path.line").transition("legend-hover-line").call(
        (n2) => this.services.transitions.setupTransition({
          transition: n2,
          name: "legend-hover-line"
        })
      ).attr("opacity", (n2) => n2.name !== t2.datum().name ? ac.opacity.unselected : ac.opacity.selected);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.line").transition("legend-mouseout-line").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-line"
        })
      ).attr("opacity", ac.opacity.selected);
    };
  }
  init() {
    const { events: e2 } = this.services;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2 = true) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), { cartesianScales: n2, curves: s2 } = this.services, a2 = (g2) => n2.getDomainValue(g2), i2 = (g2) => n2.getRangeValue(g2), [r$12, l2] = xl(
      a2,
      i2,
      n2.getOrientation()
    ), c2 = this.getOptions(), d2 = line().x(r$12).y(l2).curve(s2.getD3Curve()).defined((g2) => {
      const m2 = n2.getRangeIdentifier(g2), E2 = g2[m2];
      return E2 != null;
    });
    let p2 = [];
    if (this.configs.stacked) {
      const g2 = Object.keys(c2.axes).some((O2) => c2.axes[O2].percentage), { groupMapsTo: m2 } = c2.data;
      p2 = this.model.getStackedData({
        groups: this.configs.groups,
        percentage: g2
      }).map((O2) => {
        const x2 = this.services.cartesianScales.getDomainIdentifier(O2), y2 = this.services.cartesianScales.getRangeIdentifier(O2);
        return {
          name: G$1(O2, 0, m2),
          data: O2.map((w2) => ({
            [x2]: w2.data.sharedStackKey,
            [m2]: w2[m2],
            [y2]: w2[1]
          })),
          hidden: !Dr(O2, (w2) => w2[0] !== w2[1])
        };
      });
    } else
      p2 = this.model.getGroupedData(this.configs.groups);
    const h2 = t2.selectAll("path.line").data(p2, (g2) => g2.name);
    h2.exit().attr("opacity", 0).remove(), h2.enter().append("path").classed("line", true).attr("opacity", 0).merge(h2).data(p2, (g2) => g2.name).attr(
      "class",
      (g2) => this.model.getColorClassName({
        classNameTypes: [b$1.STROKE],
        dataGroupName: g2.name,
        originalClassName: "line"
      })
    ).style("stroke", (g2) => this.model.getStrokeColor(g2.name, null, g2.data)).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "line").attr("aria-label", (g2) => {
      const { data: m2 } = g2;
      return m2.map((E2) => {
        const O2 = this.services.cartesianScales.getRangeIdentifier(E2);
        return E2[O2];
      }).join(",");
    }).transition().call(
      (g2) => this.services.transitions.setupTransition({
        transition: g2,
        name: "line-update-enter",
        animate: e2
      })
    ).attr("opacity", (g2) => g2.hidden ? 0 : 1).attr("d", (g2) => {
      const { data: m2 } = g2;
      return d2(m2);
    });
  }
  destroy() {
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
const Ws = 5;
function El(o2, e2) {
  return o2 > e2 - Ws && o2 < e2 + Ws;
}
class _a extends Y {
  constructor() {
    super(...arguments), this.type = "ruler", this.renderType = D$3.SVG, this.isXGridEnabled = G$1(this.getOptions(), "grid", "x", "enabled"), this.isYGridEnabled = G$1(this.getOptions(), "grid", "y", "enabled"), this.isEventListenerAdded = false;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = G$1(this.getOptions(), "ruler", "enabled");
    this.drawBackdrop(), t2 && !this.isEventListenerAdded ? this.addBackdropEventListeners() : !t2 && this.isEventListenerAdded && this.removeBackdropEventListeners();
  }
  removeBackdropEventListeners() {
    this.isEventListenerAdded = false, this.backdrop.on("mousemove mouseover mouseout", null);
  }
  formatTooltipData(e2) {
    return e2;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showRuler(e2, [t2, n2]) {
    const s2 = this.parent, a2 = this.services.cartesianScales.getOrientation(), i2 = this.model.getDisplayData(), r2 = this.services.cartesianScales.getRangeScale(), [l2, c2] = r2.range(), d2 = a2 === F$2.HORIZONTAL ? n2 : t2, p2 = k$1.appendOrSelect(s2, "g.ruler").attr("aria-label", "ruler"), h2 = k$1.appendOrSelect(p2, "line.ruler-line"), u2 = s2.selectAll("[role=graphics-symbol]"), g2 = i2.map((E2) => ({
      domainValue: this.services.cartesianScales.getDomainValue(E2),
      originalData: E2
    })).filter((E2) => El(E2.domainValue, d2));
    if (this.pointsWithinLine && g2.length === this.pointsWithinLine.length && g2.map((E2) => E2.domainValue).join() === this.pointsWithinLine.map((E2) => E2.domainValue).join())
      return this.pointsWithinLine = g2, this.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        mousePosition: [t2, n2]
      });
    this.pointsWithinLine = g2;
    const m2 = this.pointsWithinLine.reduce((E2, O2) => {
      if (E2.length === 0)
        return E2.push(O2), E2;
      const x2 = E2[0].domainValue, y2 = Math.abs(d2 - O2.domainValue), w2 = Math.abs(d2 - x2);
      return y2 > w2 || (y2 < w2 ? E2 = [O2] : E2.push(O2)), E2;
    }, []);
    if (m2.length > 0) {
      const E2 = m2.map((w2) => w2.originalData).filter((w2) => {
        const A2 = this.services.cartesianScales.getRangeIdentifier(w2), L2 = w2[A2];
        return L2 != null;
      }), O2 = m2.map(
        (w2) => w2.domainValue
      ), x2 = u2.filter((w2) => {
        const A2 = this.services.cartesianScales.getDomainValue(w2);
        return O2.includes(A2);
      });
      this.elementsToHighlight && this.elementsToHighlight.size() > 0 && !Sa(this.elementsToHighlight, x2) && this.hideRuler(), x2.dispatch("mouseover"), this.elementsToHighlight = x2, this.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        mousePosition: [t2, n2],
        hoveredElement: h2,
        data: this.formatTooltipData(E2)
      }), p2.attr("opacity", 1);
      const y2 = m2[0];
      a2 === "horizontal" ? h2.attr("x1", c2).attr("x2", l2).attr("y1", y2.domainValue).attr("y2", y2.domainValue) : h2.attr("y1", c2).attr("y2", l2).attr("x1", y2.domainValue).attr("x2", y2.domainValue);
    } else
      this.hideRuler();
  }
  hideRuler() {
    const e2 = this.parent, t2 = k$1.appendOrSelect(e2, "g.ruler");
    e2.selectAll("[role=graphics-symbol]").dispatch("mouseout"), this.services.events.dispatchEvent(oE.Tooltip.HIDE), t2.attr("opacity", 0);
  }
  /**
   * Adds the listener on the X grid to trigger multiple point tooltips along the x axis.
   */
  addBackdropEventListeners() {
    this.isEventListenerAdded = true;
    const e2 = this, t2 = this.services.domUtils.getHolder(), n2 = this.model.getDisplayData();
    let s2 = function(a2) {
      const i2 = pointer(a2, e2.parent.node());
      e2.showRuler(a2, i2);
    };
    if (n2.length > 100) {
      const a2 = n2.length % 50 * 12.5;
      s2 = Tl(
        function(i2) {
          const { mousePosition: r2 } = this;
          e2.showRuler(i2, r2);
        },
        a2,
        t2
      );
    }
    this.backdrop.on("mousemove mouseover", s2).on("mouseout", this.hideRuler.bind(this));
  }
  drawBackdrop() {
    const e2 = this.parent;
    this.backdrop = k$1.appendOrSelect(e2, "svg.chart-grid-backdrop");
  }
}
class zn extends Y {
  constructor() {
    super(...arguments), this.type = "scatter", this.renderType = D$3.SVG, this.handleChartHolderOnHover = () => {
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("chart-holder-hover-scatter").call(
        (e2) => {
          var t2;
          return (t2 = this.services.transitions) == null ? void 0 : t2.setupTransition({
            transition: e2,
            name: "chart-holder-hover-scatter"
          });
        }
      ).attr("opacity", 1);
    }, this.handleChartHolderOnMouseOut = () => {
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("chart-holder-mouseout-scatter").call(
        (e2) => {
          var t2;
          return (t2 = this.services.transitions) == null ? void 0 : t2.setupTransition({
            transition: e2,
            name: "chart-holder-mouseout-scatter"
          });
        }
      ).attr("opacity", 0);
    }, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: n2 } = this.getOptions().data;
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("legend-hover-scatter").call(
        (s2) => {
          var a2;
          return (a2 = this.services.transitions) == null ? void 0 : a2.setupTransition({
            transition: s2,
            name: "legend-hover-scatter"
          });
        }
      ).attr("opacity", (s2) => s2[n2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("legend-mouseout-scatter").call(
        (e2) => {
          var t2;
          return (t2 = this.services.transitions) == null ? void 0 : t2.setupTransition({
            transition: e2,
            name: "legend-mouseout-scatter"
          });
        }
      ).attr("opacity", 1);
    };
  }
  init() {
    const { events: e2 } = this.services;
    if (!e2)
      throw new Error("Services events are undefined.");
    e2.addEventListener(
      oE.Legend.ITEM_HOVER,
      this.handleLegendOnHover
    ), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
    const { fadeInOnChartHolderMouseover: t2 } = this.configs;
    t2 && (e2.addEventListener(oE.Chart.MOUSEOVER, this.handleChartHolderOnHover), e2.addEventListener(oE.Chart.MOUSEOUT, this.handleChartHolderOnMouseOut));
  }
  filterBasedOnZoomDomain(e2) {
    const { cartesianScales: t2 } = this.services;
    if (!t2)
      throw new Error("Services cartesianScales are undefined.");
    const n2 = t2.getDomainIdentifier(e2), s2 = this.model.get("zoomDomain");
    return s2 !== void 0 ? e2.filter(
      (a2) => a2[n2].getTime() >= s2[0].getTime() && a2[n2].getTime() <= s2[1].getTime()
    ) : e2;
  }
  getScatterData() {
    const e2 = this.getOptions(), { stacked: t2 } = this.configs;
    let n2;
    if (t2) {
      const s2 = Object.keys(e2.axes).some((a2) => e2.axes[a2].percentage);
      n2 = this.model.getStackedData({
        groups: this.configs.groups,
        percentage: s2
      });
    } else {
      const { cartesianScales: s2 } = this.services;
      if (!s2)
        throw new Error("Services cartesianScales are undefined.");
      n2 = this.model.getDisplayData(this.configs.groups).filter((a2) => {
        const i2 = s2.getRangeIdentifier(a2);
        return a2[i2] !== void 0 && a2[i2] !== null;
      });
    }
    return this.filterBasedOnZoomDomain(n2);
  }
  render(e2) {
    if (!(G$1(this.getOptions(), "points", "enabled") || G$1(this.getOptions(), "bubble", "enabled")))
      return;
    const n2 = this.getComponentContainer({ withinChartClip: true }), s2 = this.getOptions(), { groupMapsTo: a2 } = s2.data, { cartesianScales: i2 } = this.services;
    if (!i2)
      throw new Error("Services cartesianScales are undefined.");
    const r2 = i2.getDomainIdentifier(), l2 = n2.selectAll("circle.dot").data(
      this.getScatterData(),
      (p2) => `${p2[a2]}-${p2[r2]}`
    );
    l2.exit().attr("opacity", 0).remove();
    const d2 = l2.enter().append("circle").classed("dot", true).attr("opacity", 0).merge(l2);
    this.styleCircles(d2, e2), this.addEventListeners();
  }
  // A value is an anomaly if is above all defined domain and range thresholds
  isDatapointThresholdAnomaly(e2) {
    const { handleThresholds: t2 } = this.configs;
    if (!t2)
      return false;
    const { cartesianScales: n2 } = this.services;
    if (!n2)
      throw new Error("Cartesian scales service is undefined");
    const s2 = n2.getOrientation(), [a2, i2] = xl(
      n2.getHighestDomainThreshold(),
      n2.getHighestRangeThreshold(),
      s2
    ), [r2, l2] = xl(
      (p2) => n2.getDomainValue(p2),
      (p2) => n2.getRangeValue(p2),
      s2
    ), c2 = r2(e2), d2 = l2(e2);
    return i2 && a2 ? d2 <= i2.scaleValue && c2 >= a2.scaleValue : i2 ? d2 <= i2.scaleValue : a2 ? c2 >= a2.scaleValue : false;
  }
  styleCircles(e2, t2) {
    const n2 = this.getOptions(), { filled: s2, fillOpacity: a2 } = n2.points, { cartesianScales: i2 } = this.services;
    if (!i2)
      throw new Error("Cartesian scales service is undefined");
    const { groupMapsTo: r$12 } = n2.data, l2 = (u2) => i2.getDomainValue(u2), c2 = (u2) => i2.getRangeValue(u2), [d2, p2] = xl(
      l2,
      c2,
      i2.getOrientation()
    ), { fadeInOnChartHolderMouseover: h2 } = this.configs;
    e2.raise().classed("dot", true).attr("class", (u2) => {
      const g2 = i2.getDomainIdentifier(u2), E2 = this.model.getIsFilled(u2[r$12], u2[g2], u2, s2) ? [b$1.FILL, b$1.STROKE] : [b$1.STROKE];
      return this.model.getColorClassName({
        classNameTypes: E2,
        dataGroupName: u2[r$12],
        originalClassName: "dot"
      }) || "";
    }).classed("threshold-anomaly", (u2) => this.isDatapointThresholdAnomaly(u2)).classed("filled", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      return this.model.getIsFilled(u2[r$12], u2[g2], u2, s2);
    }).classed("unfilled", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      return !this.model.getIsFilled(u2[r$12], u2[g2], u2, s2);
    }).transition().call(
      (u2) => {
        var g2;
        return (g2 = this.services.transitions) == null ? void 0 : g2.setupTransition({
          transition: u2,
          name: "scatter-update-enter",
          animate: t2
        });
      }
    ).attr("cx", d2).attr("cy", p2).attr("r", n2.points.radius).style("fill", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      if (this.model.getIsFilled(u2[r$12], u2[g2], u2, s2))
        return this.model.getFillColor(u2[r$12], u2[g2], u2);
    }).style("stroke", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      return this.model.getStrokeColor(u2[r$12], u2[g2], u2);
    }).attr("fill-opacity", s2 ? a2 : 1).attr("opacity", h2 ? 0 : 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "point").attr("aria-label", (u2) => {
      const g2 = i2.getRangeIdentifier(u2);
      return u2[g2];
    }), this.addEventListeners();
  }
  // Extended in bubble graphs
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTooltipAdditionalItems(e2) {
    return null;
  }
  addEventListeners() {
    const e2 = this, { groupMapsTo: t2 } = e2.getOptions().data;
    if (!this.parent)
      throw new Error("Parent not defined");
    this.parent.selectAll("circle").on("mouseover", function(n2, s2) {
      var i2, r2;
      const a2 = select(this);
      a2.classed("hovered", true).attr(
        "class",
        (l2) => e2.model.getColorClassName({
          classNameTypes: [b$1.FILL],
          dataGroupName: l2[t2],
          originalClassName: a2.attr("class")
        })
      ).style("fill", (l2) => {
        var d2;
        const c2 = (d2 = e2.services.cartesianScales) == null ? void 0 : d2.getDomainIdentifier(l2);
        return e2.model.getFillColor(l2[t2], l2[c2], l2);
      }).classed("unfilled", false), (i2 = e2.services.events) == null || i2.dispatchEvent(oE.Tooltip.SHOW, {
        event: n2,
        hoveredElement: a2,
        data: [s2],
        additionalItems: e2.getTooltipAdditionalItems(s2)
      }), (r2 = e2.services.events) == null || r2.dispatchEvent(oE.Scatter.SCATTER_MOUSEOVER, {
        event: n2,
        element: a2,
        datum: s2
      });
    }).on("mousemove", function(n2, s2) {
      var i2, r2;
      const a2 = select(this);
      (i2 = e2.services.events) == null || i2.dispatchEvent(oE.Scatter.SCATTER_MOUSEMOVE, {
        event: n2,
        element: a2,
        datum: s2
      }), (r2 = e2.services.events) == null || r2.dispatchEvent(oE.Tooltip.MOVE, {
        event: n2
      });
    }).on("click", function(n2, s2) {
      var a2;
      (a2 = e2.services.events) == null || a2.dispatchEvent(oE.Scatter.SCATTER_CLICK, {
        event: n2,
        element: select(this),
        datum: s2
      });
    }).on("mouseout", function(n2, s2) {
      var i2, r2, l2;
      const a2 = select(this);
      if (a2.classed("hovered", false), !e2.configs.filled) {
        const { filled: c2 } = e2.getOptions().points, d2 = (i2 = e2.services.cartesianScales) == null ? void 0 : i2.getDomainIdentifier(s2), p2 = e2.model.getIsFilled(
          s2[t2],
          s2[d2],
          s2,
          c2
        );
        a2.classed("unfilled", !p2).style("fill", (h2) => p2 || c2 ? e2.model.getFillColor(h2[t2], h2[d2], h2) : null);
      }
      (r2 = e2.services.events) == null || r2.dispatchEvent(oE.Scatter.SCATTER_MOUSEOUT, {
        event: n2,
        element: a2,
        datum: s2
      }), (l2 = e2.services.events) == null || l2.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: a2
      });
    });
  }
  destroy() {
    var t2;
    (t2 = this.parent) == null || t2.selectAll("circle").on("mousemove", null).on("mouseout", null);
    const { events: e2 } = this.services;
    if (!e2)
      throw new Error("Services events undefined");
    e2.removeEventListener(
      oE.Legend.ITEM_HOVER,
      this.handleLegendOnHover
    ), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut), e2.removeEventListener(oE.Chart.MOUSEOVER, this.handleChartHolderOnHover), e2.removeEventListener(oE.Chart.MOUSEOUT, this.handleChartHolderOnMouseOut);
  }
}
class Ia extends Y {
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.type = "axes", this.renderType = D$3.SVG, this.truncation = {
      [f.LEFT]: false,
      [f.RIGHT]: false,
      [f.TOP]: false,
      [f.BOTTOM]: false
    }, n2 && (this.configs = n2), this.margins = this.configs.margins;
  }
  render(e2 = true) {
    const { position: t2 } = this.configs, n2 = this.getOptions(), s2 = G$1(n2, "axes", t2, "visible"), a2 = this.getComponentContainer(), { width: i2, height: r$12 } = k$1.getSVGElementSize(a2, {
      useAttrs: true
    }), l2 = k$1.appendOrSelect(a2, `g.axis.${t2}`);
    let c2, d2;
    if (t2 === f.BOTTOM || t2 === f.TOP ? (c2 = this.configs.axes[f.LEFT] ? this.margins.left : 0, d2 = this.configs.axes[f.RIGHT] ? i2 - this.margins.right : i2) : (c2 = r$12 - this.margins.bottom, d2 = this.margins.top), !this.services.cartesianScales)
      throw new Error("Services cartesianScales undefined");
    const p2 = this.services.cartesianScales.getScaleByPosition(t2);
    this.scaleType === P$1.LABELS || this.scaleType === P$1.LABELS_RATIO ? p2.rangeRound([c2, d2]) : p2.range([c2, d2]);
    let h2;
    switch (t2) {
      case f.LEFT:
        h2 = axisLeft;
        break;
      case f.BOTTOM:
        h2 = axisBottom;
        break;
      case f.RIGHT:
        h2 = axisRight;
        break;
      case f.TOP:
        h2 = axisTop;
        break;
    }
    l2.attr("aria-label", `${t2} axis`);
    const u2 = !l2.select("g.ticks").empty();
    let g2 = k$1.appendOrSelect(l2, "g.ticks");
    u2 || (g2.attr("role", `${r.GRAPHICS_OBJECT} ${r.GROUP}`), g2.attr("aria-label", `${t2} ticks`));
    const m2 = k$1.appendOrSelect(l2, "g.ticks.invisible").style("opacity", "0").style("pointer-events", "none").attr("aria-hidden", true).attr("aria-label", `invisible ${t2} ticks`), E2 = G$1(n2, "axes", t2), O2 = this.scaleType === P$1.TIME || E2.scaleType === P$1.TIME, x2 = t2 === f.LEFT || t2 === f.RIGHT, y2 = this.model.get("zoomDomain");
    if (y2 && O2 && !x2 && p2.domain(y2), !s2) {
      g2.attr("aria-hidden", true);
      return;
    }
    const w2 = G$1(E2, "scaleType"), A2 = G$1(n2, "data", "loading"), L2 = G$1(E2, "ticks", "number"), I2 = G$1(E2, "ticks", "values"), P2 = G$1(E2, "truncation", "type"), W2 = G$1(E2, "truncation", "threshold"), R2 = G$1(E2, "truncation", "numCharacter"), _2 = L2 !== null, V2 = G$1(n2, "timeScale"), F2 = k$1.appendOrSelect(m2, "g.tick"), M2 = k$1.appendOrSelect(F2, "text").text("0"), J2 = k$1.getSVGElementSize(M2.node(), {
      useBBox: true
    }).height;
    F2.remove();
    const me2 = this.scaleType || E2.scaleType || P$1.LINEAR, q2 = h2(p2).tickSizeOuter(0);
    if (p2.ticks) {
      let $;
      if (_2 ? $ = L2 : ($ = Ku.ticks.number, x2 && ($ = this.getNumberOfFittingTicks(
        r$12,
        J2,
        Ku.ticks.verticalSpaceRatio
      ))), p2.ticks().length === 1 && p2.ticks()[0] === 0 && ($ = 0), q2.ticks($), O2)
        if (!p2.ticks($).length)
          q2.tickValues([]);
        else {
          const K2 = G$1(n2, "timeScale", "addSpaceOnEdges"), se2 = G$1(n2, "axes", t2, "domain"), oe2 = p2.copy();
          K2 && !se2 && oe2.nice($);
          const fe2 = oe2.ticks($);
          K2 && fe2.length > 2 && !se2 && (fe2.splice(fe2.length - 1, 1), fe2.splice(0, 1)), q2.tickValues(fe2);
        }
    }
    let H2;
    const ae2 = G$1(E2, "ticks", "formatter"), { code: ce2, number: pt2 } = G$1(n2, "locale");
    if (O2) {
      const $ = Cl(
        q2.tickValues(),
        G$1(n2, "timeScale", "timeInterval")
      );
      ae2 === null ? H2 = (K2, se2) => $l(K2, se2, q2.tickValues(), $, V2, n2.locale) : H2 = (K2, se2) => {
        const oe2 = $l(
          K2,
          se2,
          q2.tickValues(),
          $,
          V2,
          n2.locale
        );
        return ae2(K2, se2, oe2);
      };
    } else
      ae2 === null ? me2 === P$1.LINEAR && (H2 = ($) => pt2($, ce2)) : H2 = ae2;
    q2.tickFormat(H2);
    const [re2, Ke2] = this.services.cartesianScales.getScaleByPosition(t2).domain();
    let Q2;
    if (I2) {
      if (O2)
        I2.forEach(($, K2) => {
          $.getTime === void 0 && (I2[K2] = new Date($));
        }), Q2 = I2.filter(($) => {
          const K2 = $.getTime();
          return K2 >= new Date(re2).getTime() && K2 <= new Date(Ke2).getTime();
        });
      else if (w2 === P$1.LABELS) {
        const $ = this.services.cartesianScales.getScaleByPosition(t2).domain();
        Q2 = I2.filter((K2) => $.includes(K2));
      } else
        Q2 = I2.filter(
          ($) => $ >= re2 && $ <= Ke2
        );
      q2.tickValues(Q2);
    }
    switch (t2) {
      case f.LEFT:
        g2.attr("transform", `translate(${this.margins.left}, 0)`);
        break;
      case f.BOTTOM:
        g2.attr("transform", `translate(0, ${r$12 - this.margins.bottom})`);
        break;
      case f.RIGHT:
        g2.attr("transform", `translate(${i2 - this.margins.right}, 0)`);
        break;
      case f.TOP:
        g2.attr("transform", `translate(0, ${this.margins.top})`);
        break;
    }
    const Ue2 = this.model.isDataEmpty();
    if (E2.title) {
      const $ = k$1.appendOrSelect(l2, "text.axis-title").html(
        Ue2 || A2 ? "" : Pe(E2.title)
      ), K2 = G$1(E2, "titleOrientation");
      let se2;
      switch (t2) {
        case f.LEFT:
          K2 === EE.RIGHT ? $.attr("transform", "rotate(90)").attr("y", 0).attr("x", p2.range()[0] / 2).attr("dy", "-0.5em").style("text-anchor", "middle") : $.attr("transform", "rotate(-90)").attr("y", 0).attr("x", -(p2.range()[0] / 2)).attr("dy", "0.75em").style("text-anchor", "middle");
          break;
        case f.BOTTOM:
          $.attr(
            "transform",
            `translate(${this.margins.left / 2 + p2.range()[1] / 2}, ${r$12 + 4})`
          ).style("text-anchor", "middle");
          break;
        case f.RIGHT:
          K2 === EE.LEFT ? $.attr("transform", "rotate(-90)").attr("y", i2).attr("x", -(p2.range()[0] / 2)).style("text-anchor", "middle") : $.attr("transform", "rotate(90)").attr("y", -i2).attr("x", p2.range()[0] / 2).attr("dy", "0.75em").style("text-anchor", "middle");
          break;
        case f.TOP:
          se2 = k$1.getSVGElementSize($, {
            useBBox: true
          }).height, $.attr(
            "transform",
            `translate(${this.margins.left / 2 + p2.range()[1] / 2}, ${se2 / 2})`
          ).style("text-anchor", "middle");
          break;
      }
    }
    if (O2) {
      const $ = Cl(
        q2.tickValues(),
        G$1(n2, "timeScale", "timeInterval")
      ), K2 = V2.showDayName, se2 = g2;
      e2 && (g2 = g2.transition().call(
        (fe2) => this.services.transitions.setupTransition({
          transition: fe2,
          name: "axis-update",
          animate: e2
        })
      )), g2 = g2.call(q2), se2.selectAll(".tick").data(q2.tickValues(), p2).order().select("text").style("font-weight", (fe2, Re2) => dl$1(fe2, Re2, q2.tickValues(), $, K2) ? "bold" : "normal");
    } else
      !e2 || !u2 ? g2 = g2.call(q2) : g2 = g2.transition().call(
        ($) => this.services.transitions.setupTransition({
          transition: $,
          name: "axis-update",
          animate: e2
        })
      ).call(q2);
    if (m2.call(q2), t2 === f.BOTTOM || t2 === f.TOP) {
      let $ = false;
      const K2 = G$1(E2, "ticks", "rotation");
      if (K2 === j$2.ALWAYS)
        $ = true;
      else if (K2 === j$2.NEVER)
        $ = false;
      else if (!K2 || K2 === j$2.AUTO)
        if (p2.step)
          $ = m2.selectAll("g.tick text").nodes().some(
            (oe2) => k$1.getSVGElementSize(oe2, {
              useBBox: true
            }).width >= p2.step()
          );
        else {
          $ = false;
          const se2 = m2.append("text").text("A"), oe2 = k$1.getSVGElementSize(se2.node(), {
            useBBox: true
          }).width;
          let fe2;
          m2.selectAll("g.tick").each(function() {
            const Re2 = select(this), C2 = parseFloat(G$1(Ol(this), "tx"));
            C2 !== null && fe2 + Re2.text().length * oe2 * 0.8 >= C2 && ($ = true), fe2 = C2;
          }), se2.remove();
        }
      $ ? (_2 || (q2.ticks(
        this.getNumberOfFittingTicks(i2, J2, Ku.ticks.horizontalSpaceRatio)
      ), m2.call(q2), g2.call(q2)), l2.selectAll("g.ticks g.tick text").attr("transform", "rotate(-45)").attr("text-anchor", t2 === f.TOP ? "start" : "end")) : l2.selectAll("g.ticks g.tick text").attr("transform", null).attr("text-anchor", null);
    }
    if (A2 ? l2.attr("opacity", 0) : l2.attr("opacity", 1), g2.selectAll("g.tick").attr("aria-label", ($) => $), m2.selectAll("g.tick").attr("aria-label", ($) => $), P2 !== h$1.NONE && w2 === P$1.LABELS && !I2) {
      const $ = this.services.cartesianScales.getScaleDomain(t2);
      if ($.length > 0) {
        const K2 = a2.select(`g.axis.${t2} g.ticks g.tick`).html();
        l2.selectAll("g.ticks g.tick").html(K2);
        const se2 = this;
        l2.selectAll("g.tick text").data($).text(function(oe2) {
          return oe2.length > W2 ? (se2.truncation[t2] = true, _l(oe2, P2, R2)) : oe2;
        }), this.getInvisibleAxisRef().selectAll("g.tick text").data($).text(function(oe2) {
          return oe2.length > W2 ? _l(oe2, P2, R2) : oe2;
        }), l2.selectAll("g.ticks").html(this.getInvisibleAxisRef().html()), l2.selectAll("g.tick text").data($);
      }
    }
    this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this.getComponentContainer(), { position: t2 } = this.configs, n2 = k$1.appendOrSelect(e2, `g.axis.${t2}`), s2 = this.getOptions(), a2 = G$1(s2, "axes", t2), i2 = G$1(a2, "scaleType"), r2 = G$1(a2, "truncation", "threshold"), l2 = this;
    n2.selectAll("g.tick text").on("mouseover", function(c2, d2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEOVER, {
        event: c2,
        element: select(this),
        datum: d2
      }), i2 === P$1.LABELS && d2.length > r2 && l2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: c2,
        hoveredElement: select(this),
        content: d2
      });
    }).on("mousemove", function(c2, d2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEMOVE, {
        event: c2,
        element: select(this),
        datum: d2
      }), i2 === P$1.LABELS && d2.length > r2 && l2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: c2
      });
    }).on("click", function(c2, d2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_CLICK, {
        event: c2,
        element: select(this),
        datum: d2
      });
    }).on("mouseout", function(c2, d2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEOUT, {
        event: c2,
        element: select(this),
        datum: d2
      }), i2 === P$1.LABELS && l2.services.events.dispatchEvent(oE.Tooltip.HIDE);
    });
  }
  getInvisibleAxisRef() {
    const { position: e2 } = this.configs;
    return this.getComponentContainer().select(`g.axis.${e2} g.ticks.invisible`);
  }
  getTitleRef() {
    const { position: e2 } = this.configs;
    return this.getComponentContainer().select(`g.axis.${e2} text.axis-title`);
  }
  getNumberOfFittingTicks(e2, t2, n2) {
    const s2 = Math.floor(e2 / (t2 * n2));
    return ba(s2, 2, Ku.ticks.number);
  }
  destroy() {
    const e2 = this.getComponentContainer(), { position: t2 } = this.configs;
    k$1.appendOrSelect(e2, `g.axis.${t2}`).selectAll("g.tick text").on("mouseover", null).on("mousemove", null).on("mouseout", null);
  }
}
class bl extends Ia {
  constructor(e2, t2, n2) {
    super(e2, t2, n2);
  }
  render(e2 = true) {
    super.render(e2), super.destroy();
    const t2 = this.configs.position, n2 = this.getComponentContainer(), s2 = k$1.appendOrSelect(n2, `g.axis.${t2}`), a2 = this;
    s2.selectAll("g.tick").each(function(i2, r2) {
      const l2 = select(this);
      l2.classed("tick-hover", true).attr("tabindex", r2 === 0 ? 0 : -1);
      const c2 = l2.select("text"), { width: d2, height: p2 } = k$1.getSVGElementSize(c2, {
        useBBox: true
      }), h2 = k$1.appendOrSelect(l2, "rect.axis-holder");
      let u2 = 0, g2 = 0;
      switch (t2) {
        case f.LEFT:
          u2 = -d2 + Number(c2.attr("x")), g2 = -(p2 / 2);
          break;
        case f.RIGHT:
          u2 = Math.abs(Number(c2.attr("x"))), g2 = -(p2 / 2);
          break;
        case f.TOP:
          u2 = -(d2 / 2), g2 = -p2 + Number(c2.attr("y")) / 2, a2.truncation[t2] && (u2 = 0, h2.attr("transform", "rotate(-45)"));
          break;
        case f.BOTTOM:
          u2 = -(d2 / 2), g2 = p2 / 2 - 2, a2.truncation[t2] && (u2 = -d2, h2.attr("transform", "rotate(-45)"));
          break;
      }
      h2.attr("x", u2 - Ku.hover.rectanglePadding).attr("y", g2).attr("width", d2 + Ku.hover.rectanglePadding * 2).attr("height", p2).lower();
    }), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this.getComponentContainer(), { position: t2 } = this.configs, n2 = k$1.appendOrSelect(e2, `g.axis.${t2}`), s2 = this.getOptions(), a2 = G$1(s2, "axes", t2), i2 = G$1(a2, "scaleType"), r2 = G$1(a2, "truncation", "threshold"), l2 = this;
    n2.selectAll("g.tick.tick-hover").on("mouseover", function(c2) {
      const d2 = select(this).select("text"), p2 = d2.datum();
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEOVER, {
        event: c2,
        element: d2,
        datum: p2
      }), i2 === P$1.LABELS && p2.length > r2 && l2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: c2,
        element: d2,
        datum: p2
      });
    }).on("mousemove", function(c2) {
      const d2 = select(this).select("text"), p2 = d2.datum();
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEMOVE, {
        event: c2,
        element: d2,
        datum: p2
      }), l2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: c2
      });
    }).on("click", function(c2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_CLICK, {
        event: c2,
        element: select(this).select("text"),
        datum: select(this).select("text").datum()
      });
    }).on("mouseout", function(c2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEOUT, {
        event: c2,
        element: select(this).select("text"),
        datum: select(this).select("text").datum()
      }), i2 === P$1.LABELS && l2.services.events.dispatchEvent(oE.Tooltip.HIDE);
    }).on("focus", function(c2) {
      const d2 = { clientX: 0, clientY: 0 };
      if (c2.target) {
        c2.target.focus();
        const p2 = c2.target.getBoundingClientRect();
        d2.clientX = p2.x, d2.clientY = p2.y;
      }
      l2.services.events.dispatchEvent(oE.Axis.LABEL_FOCUS, {
        event: { ...c2, ...d2 },
        element: select(this),
        datum: select(this).select("text").datum()
      });
    }).on("blur", function(c2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_BLUR, {
        event: c2,
        element: select(this),
        datum: select(this).select("text").datum()
      });
    }).on("keydown", function(c2) {
      c2.key && c2.key === "Escape" && (l2.services.events.dispatchEvent(oE.Tooltip.HIDE), l2.services.events.dispatchEvent(oE.Axis.LABEL_BLUR, {
        event: c2,
        element: select(this),
        datum: select(this).select("text").datum()
      })), t2 === f.LEFT || t2 === f.RIGHT ? c2.key && c2.key === "ArrowUp" ? l2.goNext(this, c2) : c2.key && c2.key === "ArrowDown" && l2.goPrevious(this, c2) : c2.key && c2.key === "ArrowLeft" ? l2.goPrevious(this, c2) : c2.key && c2.key === "ArrowRight" && l2.goNext(this, c2);
    });
  }
  // Focus on the next HTML element sibling
  goNext(e2, t2) {
    e2.nextElementSibling && e2.nextElementSibling.tagName !== "path" && e2.nextElementSibling.dispatchEvent(new Event("focus")), t2.preventDefault();
  }
  // Focus on the previous HTML element sibling
  goPrevious(e2, t2) {
    e2.previousElementSibling && e2.previousElementSibling.tagName !== "path" && e2.previousElementSibling.dispatchEvent(new Event("focus")), t2.preventDefault();
  }
  destroy() {
    const e2 = this.getComponentContainer(), { position: t2 } = this.configs;
    k$1.appendOrSelect(e2, `g.axis.${t2}`).selectAll("g.tick.tick-hover").on("mouseover", null).on("mousemove", null).on("mouseout", null).on("focus", null).on("blur", null);
  }
}
class Ah extends Y {
  constructor() {
    super(...arguments), this.type = "2D-axes", this.renderType = D$3.SVG, this.children = {}, this.thresholds = [], this.margins = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  render(e2 = false) {
    const t2 = {}, n2 = Object.keys(f), s2 = G$1(this.getOptions(), "axes");
    n2.forEach((r2) => {
      s2[f[r2]] && (t2[f[r2]] = true);
    }), this.configs.axes = t2, n2.forEach((r2) => {
      const l2 = f[r2];
      if (this.configs.axes[l2] && !this.children[l2]) {
        const c2 = {
          position: l2,
          axes: this.configs.axes,
          margins: this.margins
        }, d2 = this.model.axisFlavor === aE.DEFAULT ? new Ia(this.model, this.services, c2) : new bl(this.model, this.services, c2);
        d2.setModel(this.model), d2.setServices(this.services), d2.setParent(this.parent), this.children[l2] = d2;
      }
    }), Object.keys(this.children).forEach((r2) => {
      this.children[r2].render(e2);
    });
    const a2 = {};
    Object.keys(this.children).forEach((r2) => {
      const l2 = this.children[r2], c2 = l2.configs.position, d2 = l2.getInvisibleAxisRef(), { width: p2, height: h2 } = k$1.getSVGElementSize(d2, { useBBox: true });
      let u2;
      switch (l2.getTitleRef().empty() ? u2 = 0 : (u2 = k$1.getSVGElementSize(l2.getTitleRef(), {
        useBBox: true
      }).height, (c2 === f.LEFT || c2 === f.RIGHT) && (u2 += 5)), c2) {
        case f.TOP:
          a2.top = h2 + u2;
          break;
        case f.BOTTOM:
          a2.bottom = h2 + u2;
          break;
        case f.LEFT:
          a2.left = p2 + u2;
          break;
        case f.RIGHT:
          a2.right = p2 + u2;
          break;
      }
    }), this.services.events.dispatchEvent(oE.Axis.RENDER_COMPLETE), Object.keys(a2).some(
      (r2) => this.margins[r2] !== a2[r2]
    ) && (this.margins = Object.assign(this.margins, a2), this.model.set({ axesMargins: this.margins }, { skipUpdate: true }), this.services.events.dispatchEvent(oE.ZoomBar.UPDATE), Object.keys(this.children).forEach((r2) => {
      const l2 = this.children[r2];
      l2.margins = this.margins;
    }), this.render(true));
  }
}
class Sl extends Y {
  constructor() {
    super(...arguments), this.type = "skeleton";
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    const t2 = G$1(this.getOptions(), "data", "loading");
    t2 ? this.renderSkeleton(t2) : this.removeSkeleton();
  }
  renderSkeleton(e2) {
    if (this.configs.skeleton === Z$4.GRID)
      this.renderGridSkeleton(e2);
    else if (this.configs.skeleton === Z$4.VERT_OR_HORIZ)
      this.renderVertOrHorizSkeleton(e2);
    else if (this.configs.skeleton === Z$4.PIE)
      this.renderPieSkeleton(e2);
    else if (this.configs.skeleton === Z$4.DONUT)
      this.renderDonutSkeleton(e2);
    else
      throw new Error(`"${this.configs.skeleton}" is not a valid Skeleton type.`);
  }
  renderGridSkeleton(e2) {
    this.setScales(), this.drawBackdrop(e2), this.drawXGrid(e2), this.drawYGrid(e2), e2 && this.setShimmerEffect("shimmer-lines");
  }
  renderVertOrHorizSkeleton(e2) {
    const t2 = this.services.cartesianScales.getOrientation();
    this.setScales(), this.drawBackdrop(e2), t2 === F$2.VERTICAL && this.drawYGrid(e2), t2 === F$2.HORIZONTAL && this.drawXGrid(e2), this.setShimmerEffect("shimmer-lines");
  }
  renderPieSkeleton(e2) {
    const t2 = this.computeOuterRadius();
    this.drawRing(t2, 0, e2), e2 && this.setShimmerEffect("shimmer-areas");
  }
  renderDonutSkeleton(e2) {
    const t2 = this.computeOuterRadius(), n2 = this.computeInnerRadius();
    this.drawRing(t2, n2, e2), e2 && this.setShimmerEffect("shimmer-areas");
  }
  setScales() {
    const e2 = this.services.cartesianScales.getMainXScale().range(), t2 = this.services.cartesianScales.getMainYScale().range();
    this.xScale = scaleLinear().domain([0, 1]).range(e2), this.yScale = scaleLinear().domain([0, 1]).range(t2);
  }
  drawBackdrop(e2) {
    const t2 = this.parent, { width: n2, height: s2 } = k$1.getSVGElementSize(t2, {
      useAttrs: true
    });
    this.backdrop = k$1.appendOrSelect(t2, "svg.chart-skeleton.DAII").attr("width", n2).attr("height", s2);
    const a2 = k$1.appendOrSelect(this.backdrop, "rect.chart-skeleton-backdrop");
    a2.attr("width", "100%").attr("height", "100%");
    const [i2] = this.xScale.range(), [, r2] = this.yScale.range();
    this.backdrop.merge(a2).attr("x", i2).attr("y", r2), a2.classed("shimmer-effect-lines", e2).classed("empty-state-lines", !e2).style(
      "stroke",
      e2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    );
  }
  drawXGrid(e2) {
    const t2 = +this.backdrop.attr("width"), n2 = G$1(this.getOptions(), "grid", "x", "numberOfTicks"), s2 = this.xScale.ticks(n2).map((r2) => r2 * t2), a2 = k$1.appendOrSelect(this.backdrop, "g.x.skeleton"), i2 = a2.selectAll("line").data(s2);
    i2.enter().append("line").merge(i2).attr("x1", (r2) => r2).attr("x2", (r2) => r2).attr("y1", 0).attr("y2", "100%"), a2.selectAll("line").classed("shimmer-effect-lines", e2).classed("empty-state-lines", !e2).style(
      "stroke",
      e2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    );
  }
  drawYGrid(e2) {
    const t2 = +this.backdrop.attr("height"), n2 = this.backdrop.attr("width"), s2 = G$1(this.getOptions(), "grid", "y", "numberOfTicks"), a2 = this.xScale.ticks(s2).map((l2) => l2 * t2), i2 = k$1.appendOrSelect(this.backdrop, "g.y.skeleton"), r2 = i2.selectAll("line").data(a2);
    r2.enter().append("line").merge(r2).attr("x1", 0).attr("x2", n2).attr("y1", (l2) => l2).attr("y2", (l2) => l2), i2.selectAll("line").classed("shimmer-effect-lines", e2).classed("empty-state-lines", !e2).style(
      "stroke",
      e2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    );
  }
  drawRing(e2, t2, n2 = true) {
    const s2 = this.parent, { width: a2, height: i2 } = k$1.getSVGElementSize(s2, {
      useAttrs: true
    }), r2 = k$1.appendOrSelect(s2, "svg.chart-skeleton").attr("width", a2).attr("height", i2), l2 = t2 === 0 ? "pie" : "donut", c2 = G$1(this.getOptions(), l2, "alignment");
    k$1.appendOrSelect(r2, "rect.chart-skeleton-area-container").attr("width", a2).attr("height", i2).attr("fill", "none");
    const d2 = arc().innerRadius(t2).outerRadius(e2).startAngle(0).endAngle(Math.PI * 2), p2 = e2 + Math.abs(oc.radiusOffset), h2 = e2 + (Math.min(a2, i2) - e2 * 2) / 2, u2 = k$1.appendOrSelect(r2, "path").attr("class", "skeleton-area-shape").attr("transform", `translate(${p2}, ${h2})`).attr("d", d2).classed("shimmer-effect-areas", n2).classed("empty-state-areas", !n2).style(
      "fill",
      n2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-areas")})` : null
    );
    let g2 = e2 + oc.xOffset;
    c2 === k$4.CENTER ? g2 = a2 / 2 : c2 === k$4.RIGHT && (g2 = a2 - e2 - oc.xOffset);
    const m2 = e2 + oc.yOffset;
    u2.attr("transform", `translate(${g2}, ${m2})`);
  }
  // same logic in pie
  computeOuterRadius() {
    const { width: e2, height: t2 } = k$1.getSVGElementSize(this.parent, {
      useAttrs: true
    });
    return Math.min(e2, t2) / 2 + oc.radiusOffset;
  }
  // same logic in donut
  computeInnerRadius() {
    return this.computeOuterRadius() * (3 / 4);
  }
  setShimmerEffect(e2) {
    const a2 = "stop-bg-shimmer", i2 = "stop-shimmer", r2 = this.parent.select(".chart-skeleton"), { width: l2 } = k$1.getSVGElementSize(this.parent, {
      useAttrs: true
    }), c2 = 0, d2 = l2, p2 = k$1.appendOrSelect(r2, "defs").lower(), h2 = k$1.appendOrSelect(p2, "linearGradient").attr("id", this.services.domUtils.generateElementIDString(e2)).attr("class", e2).attr("x1", c2 - 3 * 0.2 * l2).attr("x2", d2).attr("y1", 0).attr("y2", 0).attr("gradientUnits", "userSpaceOnUse").attr("gradientTransform", "translate(0, 0)"), u2 = `
			<stop class="${a2}" offset="${c2}"></stop>
			<stop class="${i2}" offset="${c2 + 0.2}"></stop>
			<stop class="${a2}" offset="${c2 + 2 * 0.2}"></stop>
		`;
    h2.html(u2), g2();
    function g2() {
      h2.attr("gradientTransform", `translate(${c2 - 3 * 0.2 * l2}, 0)`).transition().duration(2e3).delay(1e3).ease(easeLinear).attr("gradientTransform", `translate(${d2 + 3 * 0.2 * l2}, 0)`).on("end", g2);
    }
  }
  removeSkeleton() {
    this.parent.select(".chart-skeleton").remove();
  }
}
class Mh extends Y {
  constructor() {
    super(...arguments), this.type = "zero-line", this.renderType = D$3.SVG;
  }
  render(e2) {
    const t2 = this.services.cartesianScales.getRangeAxisPosition({
      groups: this.configs.groups
    }), n2 = this.services.cartesianScales.getScaleByPosition(t2), [s2, a2] = n2.domain(), i2 = s2 > 0 && a2 < 0 || s2 < 0 && a2 > 0, r2 = this.getComponentContainer();
    if (!i2) {
      r2.selectAll("line.domain").remove();
      return;
    }
    const [l2, c2] = this.services.cartesianScales.getDomainScale().range();
    let d2 = +n2(0) + 0.5;
    d2 || (d2 = n2.range()[0]);
    const p2 = Yc(
      {
        x0: l2,
        x1: c2,
        y0: d2,
        y1: d2
      },
      this.services.cartesianScales.getOrientation()
    );
    k$1.appendOrSelect(r2, "line.domain").transition().call(
      (u2) => this.services.transitions.setupTransition({
        transition: u2,
        name: "zero-line-update",
        animate: e2
      })
    ).attr("y1", p2.y0).attr("y2", p2.y1).attr("x1", p2.x0).attr("x2", p2.x1);
  }
}
class Rh extends _a {
  formatTooltipData(e2) {
    return e2.reverse();
  }
}
class jn extends Y {
  // Gets the correct width for bars based on options & configurations
  getBarWidth() {
    const e2 = this.getOptions();
    if (e2.bars.width)
      return e2.bars.width;
    const t2 = this.model.getDisplayData().length, n2 = this.services.cartesianScales.getMainXScale(), s2 = k$1.getSVGElementSize(this.parent, {
      useAttrs: true
    }).width;
    if (!n2.step) {
      const a2 = G$1(e2, "bars", "spacingFactor");
      return Math.min(e2.bars.maxWidth, s2 * a2 / t2);
    }
    return Math.min(e2.bars.maxWidth, n2.step() / 2);
  }
  isOutsideZoomedDomain(e2, t2) {
    if (this.model.getDisplayData().length <= 1)
      return false;
    const s2 = this.model.get("zoomDomain");
    if (s2 !== void 0) {
      const a2 = this.services.cartesianScales.getDomainScale();
      return e2 < a2(s2[0]) || t2 > a2(s2[1]);
    }
    return false;
  }
}
class Xh extends jn {
  constructor() {
    super(...arguments), this.type = "grouped-bar", this.renderType = D$3.SVG, this.padding = 5, this.defaultStepFactor = 70, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: n2 } = this.getOptions().data;
      this.parent.selectAll("path.bar").transition("legend-hover-bar").call(
        (s2) => this.services.transitions.setupTransition({
          transition: s2,
          name: "legend-hover-bar"
        })
      ).attr("opacity", (s2) => s2[n2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.bar").transition("legend-mouseout-bar").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-bar"
        })
      ).attr("opacity", 1);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2) {
    const t2 = this.model.getDisplayData(this.configs.groups), n2 = this.getOptions(), { groupMapsTo: s2 } = n2.data;
    this.setGroupScale();
    const a2 = this.getComponentContainer({ withinChartClip: true }), i2 = bl$1(
      t2.map((h2) => {
        const u2 = this.services.cartesianScales.getDomainIdentifier(h2);
        return h2[u2] && typeof h2[u2].toString == "function" ? h2[u2].toString() : h2[u2];
      })
    ), r$12 = a2.selectAll("g.bars").data(i2, (h2) => h2);
    r$12.exit().attr("opacity", 0).remove();
    const c2 = r$12.enter().append("g").classed("bars", true).attr("role", r.GROUP).attr("data-name", "bars").merge(r$12);
    c2.transition().call(
      (h2) => this.services.transitions.setupTransition({
        transition: h2,
        name: "bar-group-update-enter",
        animate: e2
      })
    ).attr("transform", (h2) => {
      const g2 = this.services.cartesianScales.getDomainValue(h2) - this.getGroupWidth() / 2;
      return this.services.cartesianScales.getOrientation() === F$2.VERTICAL ? `translate(${g2}, 0)` : `translate(0, ${g2})`;
    });
    const d2 = c2.selectAll("path.bar").data(
      (h2) => this.getDataCorrespondingToLabel(h2),
      (h2) => h2[s2]
    );
    d2.exit().attr("opacity", 0).remove(), d2.enter().append("path").attr("opacity", 0).merge(d2).classed("bar", true).transition().call(
      (h2) => this.services.transitions.setupTransition({
        transition: h2,
        name: "bar-update-enter",
        animate: e2
      })
    ).attr(
      "class",
      (h2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: h2[s2],
        originalClassName: "bar"
      })
    ).style("fill", (h2) => {
      const u2 = this.services.cartesianScales.getDomainIdentifier(h2);
      return this.model.getFillColor(h2[s2], h2[u2], h2);
    }).attr("d", (h2) => {
      const u2 = this.groupScale(h2[s2]), g2 = this.getBarWidth(), m2 = u2, E2 = u2 + g2, O2 = this.services.cartesianScales.getRangeAxisPosition({ datum: h2 }), x2 = this.services.cartesianScales.getDomainLowerBound(O2), y2 = this.services.cartesianScales.getValueThroughAxisPosition(O2, x2), w2 = this.services.cartesianScales.getRangeValue(h2), A2 = this.services.cartesianScales.getDomainValue(h2) - g2 / 2, L2 = A2 + g2;
      if (!this.isOutsideZoomedDomain(A2, L2))
        return Pl(
          { x0: m2, x1: E2, y0: y2, y1: w2 },
          this.services.cartesianScales.getOrientation()
        );
    }).attr("opacity", 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "bar").attr("aria-label", (h2) => h2.value), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this;
    this.parent.selectAll("path.bar").on("mouseover", function(t2, n2) {
      const s2 = select(this);
      s2.classed("hovered", true), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOVER, {
        event: t2,
        element: s2,
        datum: n2
      }), e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: t2,
        hoveredElement: s2,
        data: [n2]
      });
    }).on("mousemove", function(t2, n2) {
      const s2 = select(this);
      e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEMOVE, {
        event: t2,
        element: s2,
        datum: n2
      }), e2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: t2
      });
    }).on("click", function(t2, n2) {
      e2.services.events.dispatchEvent(oE.Bar.BAR_CLICK, {
        event: t2,
        element: select(this),
        datum: n2
      });
    }).on("mouseout", function(t2, n2) {
      const s2 = select(this);
      s2.classed("hovered", false), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOUT, {
        event: t2,
        element: s2,
        datum: n2
      }), e2.services.events.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: s2
      });
    });
  }
  destroy() {
    this.parent.selectAll("path.bar").on("mouseover", null).on("mousemove", null).on("mouseout", null);
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  getDataCorrespondingToLabel(e2) {
    return this.model.getDisplayData(this.configs.groups).filter((n2) => {
      const s2 = this.services.cartesianScales.getDomainIdentifier(n2);
      return n2[s2].toString() === e2;
    });
  }
  getGroupWidth() {
    const e2 = this.model.getGroupedData(this.configs.groups), t2 = this.getTotalGroupPadding();
    return this.getBarWidth() * e2.length + t2;
  }
  getDomainScaleStep() {
    const e2 = this.services.cartesianScales.getDomainScale(), t2 = this.model.getGroupedData(this.configs.groups);
    let n2 = this.defaultStepFactor;
    if (typeof e2.step == "function")
      n2 = e2.step();
    else if (t2.length > 0) {
      const s2 = t2.find((a2) => {
        var i2;
        return ((i2 = a2.data) == null ? void 0 : i2.length) > 1;
      });
      if (s2) {
        const a2 = this.services.cartesianScales.getDomainIdentifier(s2.data[0]);
        n2 = Math.abs(
          e2(s2.data[1][a2]) - e2(s2.data[0][a2])
        );
      }
    }
    return n2;
  }
  getTotalGroupPadding() {
    const e2 = this.model.getGroupedData(this.configs.groups);
    return e2.length === 1 ? 0 : Math.min(5, 5 * (this.getDomainScaleStep() / this.defaultStepFactor)) * (e2.length - 1);
  }
  // Gets the correct width for bars based on options & configurations
  getBarWidth() {
    const e2 = this.getOptions(), t2 = G$1(e2, "bars", "width"), n2 = G$1(e2, "bars", "maxWidth");
    if (t2 !== null && (n2 === null || t2 <= n2))
      return t2;
    const a2 = this.model.getGroupedData(this.configs.groups).length, i2 = this.getTotalGroupPadding();
    return Math.min(
      n2,
      (this.getDomainScaleStep() - i2) / a2
    );
  }
  setGroupScale() {
    const e2 = this.model.getActiveDataGroupNames(this.configs.groups);
    this.groupScale = scaleBand().domain(e2).rangeRound([0, this.getGroupWidth()]);
  }
}
class Qh extends jn {
  constructor() {
    super(...arguments), this.type = "simple-bar", this.renderType = D$3.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: n2 } = this.getOptions().data;
      this.parent.selectAll("path.bar").transition("legend-hover-simple-bar").call(
        (s2) => this.services.transitions.setupTransition({
          transition: s2,
          name: "legend-hover-simple-bar"
        })
      ).attr("opacity", (s2) => s2[n2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.bar").transition("legend-mouseout-simple-bar").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-simple-bar"
        })
      ).attr("opacity", 1);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2) {
    const t2 = this.getOptions(), { groupMapsTo: n2 } = t2.data, s2 = this.getComponentContainer({ withinChartClip: true }), a2 = this.model.getDisplayData(this.configs.groups), i2 = this.services.cartesianScales.getOrientation(), r$12 = s2.selectAll("path.bar").data(a2, (c2) => c2[n2]);
    r$12.exit().attr("opacity", 0).remove(), r$12.enter().append("path").attr("opacity", 0).merge(r$12).classed("bar", true).attr("width", this.getBarWidth.bind(this)).transition().call(
      (c2) => this.services.transitions.setupTransition({
        transition: c2,
        name: "bar-update-enter",
        animate: e2
      })
    ).attr(
      "class",
      (c2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: c2[n2],
        originalClassName: "bar"
      })
    ).style("fill", (c2) => {
      const d2 = this.services.cartesianScales.getDomainIdentifier(c2);
      return this.model.getFillColor(c2[n2], c2[d2], c2);
    }).attr("d", (c2) => {
      const d2 = this.services.cartesianScales.getRangeIdentifier(), p2 = this.getBarWidth(), h2 = c2[d2], u2 = this.services.cartesianScales.getDomainValue(c2) - p2 / 2, g2 = u2 + p2;
      let m2, E2;
      if (Array.isArray(h2) && h2.length === 2)
        m2 = this.services.cartesianScales.getRangeValue(h2[0]), E2 = this.services.cartesianScales.getRangeValue(h2[1]);
      else {
        const y2 = this.services.cartesianScales.getRangeScale().domain()[0];
        m2 = this.services.cartesianScales.getRangeValue(Math.max(0, y2)), E2 = this.services.cartesianScales.getRangeValue(c2);
      }
      const O2 = Math.abs(E2 - m2);
      if (O2 !== 0 && O2 < 2 && (h2 > 0 && i2 === F$2.VERTICAL || h2 < 0 && i2 === F$2.HORIZONTAL ? E2 = m2 - 2 : E2 = m2 + 2), !this.isOutsideZoomedDomain(u2, g2))
        return Pl({ x0: u2, x1: g2, y0: m2, y1: E2 }, i2);
    }).attr("opacity", 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "bar").attr("aria-label", (c2) => c2.value), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this;
    this.parent.selectAll("path.bar").on("mouseover", function(t2, n2) {
      const s2 = select(this);
      s2.classed("hovered", true), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOVER, {
        event: t2,
        element: s2,
        datum: n2
      }), e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: t2,
        hoveredElement: s2,
        data: [n2]
      });
    }).on("mousemove", function(t2, n2) {
      e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEMOVE, {
        event: t2,
        element: select(this),
        datum: n2
      }), e2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: t2
      });
    }).on("click", function(t2, n2) {
      e2.services.events.dispatchEvent(oE.Bar.BAR_CLICK, {
        event: t2,
        element: select(this),
        datum: n2
      });
    }).on("mouseout", function(t2, n2) {
      const s2 = select(this);
      s2.classed("hovered", false), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOUT, {
        event: t2,
        element: s2,
        datum: n2
      }), e2.services.events.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: s2
      });
    });
  }
  destroy() {
    this.parent.selectAll("path.bar").on("mouseover", null).on("mousemove", null).on("mouseout", null);
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
class tu extends Y {
  constructor() {
    super(...arguments), this.type = "area-stacked", this.renderType = D$3.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, n2 = this.getOptions(), { groupMapsTo: s2 } = n2.data;
      this.parent.selectAll("path.area").transition("legend-hover-area").call(
        (a2) => this.services.transitions.setupTransition({
          transition: a2,
          name: "legend-hover-area"
        })
      ).attr("opacity", (a2) => G$1(a2, 0, s2) !== t2.datum().name ? Zu.opacity.unselected : Zu.opacity.selected);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.area").transition("legend-mouseout-area").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-area"
        })
      ).attr("opacity", Zu.opacity.selected);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2 = true) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), n2 = this, s2 = this.getOptions(), { groupMapsTo: a2 } = s2.data, i2 = Object.keys(s2.axes).some((g2) => s2.axes[g2].percentage), r$12 = this.model.getStackedData({
      percentage: i2,
      groups: this.configs.groups
    }), l2 = G$1(r$12, 0, 0), c2 = this.services.cartesianScales.getDomainAxisPosition({ datum: l2 }), d2 = this.services.cartesianScales.getRangeAxisPosition({ datum: l2 }), p2 = this.services.cartesianScales.getScaleByPosition(d2), h2 = t2.selectAll("path.area").data(r$12, (g2) => G$1(g2, 0, a2));
    this.areaGenerator = area().x(
      (g2) => this.services.cartesianScales.getValueThroughAxisPosition(
        c2,
        g2.data.sharedStackKey
      )
    ).y0((g2) => p2(g2[0])).y1((g2) => p2(g2[1])).curve(this.services.curves.getD3Curve()), h2.exit().attr("opacity", 0).remove(), h2.enter().append("path").attr("opacity", 0).merge(h2).data(r$12, (g2) => G$1(g2, 0, a2)).attr("class", "area").attr(
      "class",
      (g2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: G$1(g2, 0, a2),
        originalClassName: "area"
      })
    ).style("fill", (g2) => n2.model.getFillColor(G$1(g2, 0, a2), null, g2)).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "area").attr("aria-label", (g2) => G$1(g2, 0, a2)).transition().call(
      (g2) => this.services.transitions.setupTransition({
        transition: g2,
        name: "area-update-enter",
        animate: e2
      })
    ).attr("opacity", Zu.opacity.selected).attr("d", this.areaGenerator);
  }
}
class nu extends jn {
  constructor() {
    super(...arguments), this.type = "stacked-bar", this.renderType = D$3.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: n2 } = this.model.getOptions().data;
      this.parent.selectAll("path.bar").transition("legend-hover-bar").call(
        (s2) => this.services.transitions.setupTransition({
          transition: s2,
          name: "legend-hover-bar"
        })
      ).attr("opacity", (s2) => s2[n2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.bar").transition("legend-mouseout-bar").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-bar"
        })
      ).attr("opacity", 1);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), n2 = this.getOptions(), { groupMapsTo: s2 } = n2.data, a2 = this.model.getStackedData({
      groups: this.configs.groups,
      divergent: true
    }), i2 = this.model.getActiveDataGroupNames(), r$12 = t2.selectAll("g.bars").data(a2, (c2) => G$1(c2, 0, s2));
    r$12.exit().attr("opacity", 0).remove(), r$12.enter().append("g").classed("bars", true).attr("role", r.GROUP).attr("data-name", "bars");
    const l2 = t2.selectAll("g.bars").selectAll("path.bar").data(
      (c2) => c2,
      (c2) => c2.data.sharedStackKey
    );
    l2.exit().remove(), l2.enter().append("path").merge(l2).classed("bar", true).transition().call(
      (c2) => this.services.transitions.setupTransition({
        transition: c2,
        name: "bar-update-enter",
        animate: e2
      })
    ).attr(
      "class",
      (c2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: c2[s2],
        originalClassName: "bar"
      })
    ).style(
      "fill",
      (c2) => this.model.getFillColor(c2[s2], c2.data.sharedStackKey, c2.data)
    ).attr("d", (c2) => {
      const d2 = c2.data.sharedStackKey, p2 = this.getBarWidth(), h2 = this.services.cartesianScales.getDomainValue(d2) - p2 / 2, u2 = h2 + p2, g2 = this.services.cartesianScales.getRangeValue(c2[0]);
      let m2 = this.services.cartesianScales.getRangeValue(c2[1]);
      if (!this.isOutsideZoomedDomain(h2, u2)) {
        if (Math.abs(m2 - g2) > 0 && Math.abs(m2 - g2) > n2.bars.dividerSize) {
          const E2 = c2[0] < 0 && c2[1] <= 0;
          E2 && i2.length > 1 ? this.services.cartesianScales.getOrientation() === F$2.VERTICAL ? m2 += c2[1] === 0 ? 2 : 1 : m2 -= 1 : E2 || (this.services.cartesianScales.getOrientation() === F$2.VERTICAL ? m2 += 1 : m2 -= 1);
        }
        return Pl(
          { x0: h2, x1: u2, y0: g2, y1: m2 },
          this.services.cartesianScales.getOrientation()
        );
      }
    }).attr("opacity", 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "bar").attr("aria-label", (c2) => c2[1] - c2[0]), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this.getOptions(), { groupMapsTo: t2 } = e2.data, n2 = this;
    this.parent.selectAll("path.bar").on("mouseover", function(s2, a2) {
      const i2 = select(this);
      i2.classed("hovered", true), n2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOVER, {
        event: s2,
        element: i2,
        datum: a2
      });
      let l2 = n2.model.getDisplayData(n2.configs.groups).find((c2) => {
        const d2 = n2.services.cartesianScales.getDomainIdentifier(c2), p2 = n2.services.cartesianScales.getRangeIdentifier(c2);
        return c2[p2] === a2.data[a2[t2]] && c2[d2].toString() === a2.data.sharedStackKey && c2[t2] === a2[t2];
      });
      if (l2 === void 0) {
        const c2 = n2.services.cartesianScales.getDomainIdentifier(), d2 = n2.services.cartesianScales.getRangeIdentifier();
        l2 = {
          [c2]: a2.data.sharedStackKey,
          [d2]: a2.data[a2[t2]],
          [t2]: a2[t2]
        };
      }
      n2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: s2,
        hoveredElement: i2,
        data: [l2]
      });
    }).on("mousemove", function(s2, a2) {
      const i2 = select(this);
      n2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEMOVE, {
        event: s2,
        element: i2,
        datum: a2
      }), n2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: s2
      });
    }).on("click", function(s2, a2) {
      n2.services.events.dispatchEvent(oE.Bar.BAR_CLICK, {
        event: s2,
        element: select(this),
        datum: a2
      });
    }).on("mouseout", function(s2, a2) {
      const i2 = select(this);
      i2.classed("hovered", false), n2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOUT, {
        event: s2,
        element: i2,
        datum: a2
      }), n2.services.events.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: i2
      });
    });
  }
  getBarWidth() {
    const e2 = this.getOptions();
    if (G$1(e2, "bars", "width"))
      return e2.bars.width;
    const t2 = this.services.cartesianScales.getMainXScale(), n2 = k$1.getSVGElementSize(this.parent, {
      useAttrs: true
    }).width, s2 = this.model.getStackKeys().length, a2 = G$1(e2, "bars", "spacingFactor");
    return t2.step ? Math.min(e2.bars.maxWidth, t2.step() / 2) : Math.min(e2.bars.maxWidth, n2 * a2 / s2);
  }
  destroy() {
    this.parent.selectAll("path.bar").on("mouseover", null).on("mousemove", null).on("mouseout", null);
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
class su extends zn {
  constructor() {
    super(...arguments), this.type = "scatter-stacked", this.renderType = D$3.SVG;
  }
  render(e2) {
    if (!G$1(this.getOptions(), "points", "enabled"))
      return;
    const n2 = this.getComponentContainer({ withinChartClip: true }), s2 = this.getOptions(), { groupMapsTo: a2 } = s2.data, i2 = Object.keys(s2.axes).some((u2) => s2.axes[u2].percentage), r$12 = this.model.getStackedData({
      groups: this.configs.groups,
      percentage: i2
    }), l2 = n2.selectAll("g.dots").data(r$12, (u2) => G$1(u2, 0, a2));
    l2.exit().attr("opacity", 0).remove();
    const d2 = l2.enter().append("g").classed("dots", true).attr("role", r.GROUP).merge(l2).selectAll("circle.dot").data((u2) => u2);
    d2.exit().attr("opacity", 0).remove();
    const h2 = d2.enter().append("circle").classed("dot", true).attr("opacity", 0).merge(d2).datum((u2) => {
      const g2 = u2[a2], m2 = this.services.cartesianScales.getDomainIdentifier(u2), E2 = this.services.cartesianScales.getRangeIdentifier(u2);
      return {
        [a2]: g2,
        [m2]: u2.data.sharedStackKey,
        [E2]: u2[1]
      };
    });
    this.styleCircles(h2, e2), this.addEventListeners();
  }
  getTooltipData(e2, t2) {
    const n2 = this.getOptions(), { groupMapsTo: s2 } = n2.data, a2 = Object.keys(n2.axes).some((l2) => n2.axes[l2].percentage), i2 = this.model.getStackedData({
      groups: this.configs.groups,
      percentage: a2
    }), r2 = [];
    return i2.forEach((l2, c2) => {
      l2.forEach((d2, p2) => {
        const h2 = d2[s2], u2 = d2.data.sharedStackKey;
        let g2 = d2.data[h2];
        const m2 = d2[1], E2 = this.services.cartesianScales.getDomainIdentifier(d2), O2 = this.services.cartesianScales.getRangeIdentifier(d2);
        g2 != null && e2 === this.services.cartesianScales.getDomainValue(u2) && t2 === this.services.cartesianScales.getRangeValue(m2) && (a2 && (g2 = this.model.getStackedData({
          groups: this.configs.groups
        })[c2][p2].data[h2]), g2 !== null && r2.push({
          [s2]: h2,
          [E2]: u2,
          [O2]: g2
        }));
      });
    }), this.model.getDisplayData(this.configs.groups).filter((l2) => {
      const c2 = this.services.cartesianScales.getDomainIdentifier(l2), d2 = this.services.cartesianScales.getRangeIdentifier(l2);
      return r2.find((p2) => p2[s2] == l2[s2] && p2[c2] == l2[c2] && p2[d2] == l2[d2]) !== void 0;
    });
  }
}
function Ee(i2) {
  var e2 = i2 == null ? 0 : i2.length;
  return e2 ? cn(i2, 1) : [];
}
class We extends oe {
  /**
   * focal:  object to zoom into
   * canvasElements: all the elements to translate and zoom on the chart area
   * zoomSettings: object containing duration, easing and zoomlevel for the zoom behaviours
   *  */
  zoomIn(e2, t2, n2) {
    let s2, o2, a2;
    const r2 = n2 || Ju;
    e2 && (s2 = e2.x, o2 = e2.y, a2 = 2);
    const { width: u2, height: h2 } = k$1.getSVGElementSize(this.services.domUtils.getHolder(), {
      useClientDimensions: true
    });
    t2.transition().duration(r2.duration).ease(r2.ease).attr(
      "transform",
      `translate(${u2 / 2}, ${h2 / 2}) scale(${a2}) translate(${-s2},${-o2})`
    ), this.services.events.dispatchEvent(oE.CanvasZoom.CANVAS_ZOOM_IN, {
      element: select(e2)
    });
  }
  zoomOut(e2, t2) {
    const n2 = t2 || Ju;
    e2.transition().duration(n2.duration).ease(n2.ease).attr("transform", ""), this.services.events.dispatchEvent(oE.CanvasZoom.CANVAS_ZOOM_OUT);
  }
}
class qe extends oe {
  init() {
    this.documentFragment = document.createDocumentFragment();
  }
  addEventListener(e2, t2) {
    this.documentFragment.addEventListener(e2, t2);
  }
  removeEventListener(e2, t2) {
    this.documentFragment.removeEventListener(e2, t2);
  }
  dispatchEvent(e2, t2) {
    let n2;
    t2 ? n2 = new CustomEvent(e2, {
      detail: t2
    }) : (n2 = document.createEvent("Event"), n2.initEvent(e2, false, true)), this.documentFragment.dispatchEvent(n2);
  }
}
class Je extends oe {
  constructor(e2, t2) {
    super(e2, t2);
  }
  downloadCSV(e2, t2) {
    const n2 = document.createElement("a"), s2 = "text/csv;encoding:utf-8";
    if (navigator.msSaveBlob)
      navigator.msSaveBlob(
        new Blob([e2], {
          type: s2
        }),
        t2
      );
    else if (URL && "download" in n2) {
      const o2 = URL.createObjectURL(
        new Blob([e2], {
          type: s2
        })
      );
      n2.href = o2, n2.setAttribute("download", t2), document.body.appendChild(n2), n2.click(), document.body.removeChild(n2), URL.revokeObjectURL(o2);
    } else
      location.href = `data:application/octet-stream,${encodeURIComponent(e2)}`;
  }
  downloadImage(e2, t2) {
    const n2 = document.createElement("a");
    n2.download = t2, n2.href = e2, document.body.appendChild(n2), n2.click(), document.body.removeChild(n2);
  }
}
class Qe extends oe {
  constructor() {
    super(...arguments), this.pendingTransitions = {};
  }
  init() {
    var e2;
    (e2 = this.services.events) == null || e2.addEventListener(oE.Model.UPDATE, () => {
      this.pendingTransitions = {};
    });
  }
  setupTransition({ transition: e2, name: t2, animate: n2 }) {
    return this.pendingTransitions[e2._id] = e2, e2.on("end interrupt cancel", () => {
      delete this.pendingTransitions[e2._id];
    }), this.model.getOptions().animations === false || n2 === false ? e2.duration(0) : e2.duration(
      G$1(dc, t2, "duration") || dc.default.duration
    );
  }
  getPendingTransitions() {
    return this.pendingTransitions;
  }
}
function v(i2, e2) {
  const t2 = A$1(i2), n2 = A$1(e2), s2 = t2.getTime() - n2.getTime();
  return s2 < 0 ? -1 : s2 > 0 ? 1 : s2;
}
function Ie(i2, e2) {
  const t2 = A$1(i2), n2 = A$1(e2);
  return t2.getFullYear() - n2.getFullYear();
}
function be(i2, e2) {
  const t2 = A$1(i2), n2 = A$1(e2), s2 = v(t2, n2), o2 = Math.abs(Ie(t2, n2));
  t2.setFullYear(1584), n2.setFullYear(1584);
  const a2 = v(t2, n2) === -s2, r2 = s2 * (o2 - +a2);
  return r2 === 0 ? 0 : r2;
}
function b(i2, e2) {
  const t2 = A$1(i2);
  if (isNaN(e2))
    return q$2(i2, NaN);
  if (!e2)
    return t2;
  const n2 = t2.getDate(), s2 = q$2(i2, t2.getTime());
  s2.setMonth(t2.getMonth() + e2 + 1, 0);
  const o2 = s2.getDate();
  return n2 >= o2 ? s2 : (t2.setFullYear(
    s2.getFullYear(),
    s2.getMonth(),
    n2
  ), t2);
}
function W(i2, e2) {
  return b(i2, e2 * 12);
}
function Ce(i2, e2) {
  return W(i2, -e2);
}
function Ze(i2, e2) {
  const t2 = A$1(i2), n2 = A$1(e2), s2 = t2.getFullYear() - n2.getFullYear(), o2 = t2.getMonth() - n2.getMonth();
  return s2 * 12 + o2;
}
function we(i2) {
  const e2 = A$1(i2);
  return e2.setHours(23, 59, 59, 999), e2;
}
function Fe(i2) {
  const e2 = A$1(i2), t2 = e2.getMonth();
  return e2.setFullYear(e2.getFullYear(), t2 + 1, 0), e2.setHours(23, 59, 59, 999), e2;
}
function Ve(i2) {
  const e2 = A$1(i2);
  return +we(e2) == +Fe(e2);
}
function Ne(i2, e2) {
  const t2 = A$1(i2), n2 = A$1(e2), s2 = v(t2, n2), o2 = Math.abs(
    Ze(t2, n2)
  );
  let a2;
  if (o2 < 1)
    a2 = 0;
  else {
    t2.getMonth() === 1 && t2.getDate() > 27 && t2.setDate(30), t2.setMonth(t2.getMonth() - s2 * o2);
    let r2 = v(t2, n2) === -s2;
    Ve(A$1(i2)) && o2 === 1 && v(i2, n2) === 1 && (r2 = false), a2 = s2 * (o2 - Number(r2));
  }
  return a2 === 0 ? 0 : a2;
}
function He(i2, e2) {
  return b(i2, -e2);
}
function _e(i2, e2) {
  const t2 = A$1(i2), n2 = A$1(e2), s2 = z(t2, n2), o2 = Math.abs(Bc(t2, n2));
  t2.setDate(t2.getDate() - s2 * o2);
  const a2 = +(z(t2, n2) === -s2), r2 = s2 * (o2 - a2);
  return r2 === 0 ? 0 : r2;
}
function z(i2, e2) {
  const t2 = i2.getFullYear() - e2.getFullYear() || i2.getMonth() - e2.getMonth() || i2.getDate() - e2.getDate() || i2.getHours() - e2.getHours() || i2.getMinutes() - e2.getMinutes() || i2.getSeconds() - e2.getSeconds() || i2.getMilliseconds() - e2.getMilliseconds();
  return t2 < 0 ? -1 : t2 > 0 ? 1 : t2;
}
function q(i2, e2) {
  const t2 = A$1(i2);
  return isNaN(e2) ? q$2(i2, NaN) : (e2 && t2.setDate(t2.getDate() + e2), t2);
}
function Ye(i2, e2) {
  return q(i2, -e2);
}
function C(i2) {
  return (e2) => {
    const n2 = (i2 ? Math[i2] : Math.trunc)(e2);
    return n2 === 0 ? 0 : n2;
  };
}
function Z(i2, e2) {
  return +A$1(i2) - +A$1(e2);
}
function ze(i2, e2, t2) {
  const n2 = Z(i2, e2) / El$1;
  return C(t2 == null ? void 0 : t2.roundingMethod)(n2);
}
function w(i2, e2) {
  const t2 = +A$1(i2);
  return q$2(i2, t2 + e2);
}
function J(i2, e2) {
  return w(i2, e2 * El$1);
}
function Xe(i2, e2) {
  return J(i2, -e2);
}
function X(i2, e2, t2) {
  const n2 = Z(i2, e2) / Al;
  return C(t2 == null ? void 0 : t2.roundingMethod)(n2);
}
function E(i2, e2) {
  return w(i2, e2 * Al);
}
function G(i2, e2) {
  return E(i2, -e2);
}
function k2(i2, e2, t2) {
  const n2 = Z(i2, e2) / 1e3;
  return C(t2 == null ? void 0 : t2.roundingMethod)(n2);
}
function I(i2, e2) {
  return w(i2, e2 * 1e3);
}
function U(i2, e2) {
  return I(i2, -e2);
}
class et extends oe {
  constructor() {
    super(...arguments), this.scaleTypes = {
      top: null,
      right: null,
      bottom: null,
      left: null
    }, this.scales = {
      // null or function
      top: null,
      right: null,
      bottom: null,
      left: null
    };
  }
  getDomainAxisPosition({ datum: e2 = null } = {}) {
    if (this.dualAxes && e2) {
      const t2 = this.model.getOptions(), { groupMapsTo: n2 } = t2.data, s2 = G$1(t2, "axes", this.secondaryDomainAxisPosition), o2 = e2[n2];
      if (s2 != null && s2.correspondingDatasets && s2.correspondingDatasets.includes(o2))
        return this.secondaryDomainAxisPosition;
    }
    return this.domainAxisPosition;
  }
  getRangeAxisPosition({ datum: e2 = null, groups: t2 = null } = {}) {
    if (this.dualAxes) {
      const n2 = this.model.getOptions(), { groupMapsTo: s2 } = n2.data, o2 = G$1(n2, "axes", this.secondaryRangeAxisPosition);
      let a2;
      if (e2 !== null ? a2 = e2[s2] : t2 && t2.length > 0 && (a2 = t2[0]), o2 != null && o2.correspondingDatasets && o2.correspondingDatasets.includes(a2))
        return this.secondaryRangeAxisPosition;
    }
    return this.rangeAxisPosition;
  }
  getAxisOptions(e2) {
    return G$1(this.model.getOptions(), "axes", e2);
  }
  getDomainAxisOptions() {
    const e2 = this.getDomainAxisPosition();
    return this.getAxisOptions(e2);
  }
  getRangeAxisOptions() {
    const e2 = this.getRangeAxisPosition();
    return this.getAxisOptions(e2);
  }
  getScaleLabel(e2) {
    const n2 = this.getAxisOptions(e2).title;
    return n2 || (e2 === f.BOTTOM || e2 === f.TOP ? "x-value" : "y-value");
  }
  getDomainLabel() {
    return this.getScaleLabel(this.getDomainAxisPosition());
  }
  getRangeLabel() {
    return this.getScaleLabel(this.getRangeAxisPosition());
  }
  update() {
    this.determineAxisDuality(), this.findDomainAndRangeAxes(), this.determineOrientation(), Object.keys(f).map(
      (t2) => f[t2]
    ).forEach((t2) => {
      this.scales[t2] = this.createScale(t2);
    });
  }
  findDomainAndRangeAxes() {
    const e2 = this.findVerticalAxesPositions(), t2 = this.findHorizontalAxesPositions(), n2 = this.findDomainAndRangeAxesPositions(
      e2,
      t2
    );
    this.domainAxisPosition = n2.primaryDomainAxisPosition, this.rangeAxisPosition = n2.primaryRangeAxisPosition, this.isDualAxes() && (this.secondaryDomainAxisPosition = n2.secondaryDomainAxisPosition, this.secondaryRangeAxisPosition = n2.secondaryRangeAxisPosition);
  }
  determineOrientation() {
    (this.rangeAxisPosition === f.LEFT || this.rangeAxisPosition === f.RIGHT) && (this.domainAxisPosition === f.BOTTOM || this.domainAxisPosition === f.TOP) ? this.orientation = F$2.VERTICAL : this.orientation = F$2.HORIZONTAL;
  }
  isDualAxes() {
    return this.dualAxes;
  }
  // if any of the axes objects have correspondingDatasets [] asserted we flag the chart as dual axes
  // it does not count as dual axes if it just has another axis turned on but is not actually using it to map a dataset
  determineAxisDuality() {
    var n2, s2, o2, a2;
    const e2 = this.model.getOptions(), t2 = G$1(e2, "axes");
    ((n2 = t2[f.LEFT]) != null && n2.correspondingDatasets && t2[f.RIGHT] || (s2 = t2[f.RIGHT]) != null && s2.correspondingDatasets && t2[f.LEFT] || (o2 = t2[f.TOP]) != null && o2.correspondingDatasets && t2[f.BOTTOM] || (a2 = t2[f.BOTTOM]) != null && a2.correspondingDatasets && t2[f.TOP]) && (this.dualAxes = true);
  }
  getCustomDomainValuesByposition(e2) {
    const t2 = G$1(this.model.getOptions(), "axes", e2, "domain");
    if (t2 && !Array.isArray(t2))
      throw new Error(`Domain in ${e2} axis is not a valid array`);
    if (Array.isArray(t2) && (this.scaleTypes[e2] === P$1.LINEAR || this.scaleTypes[e2] === P$1.TIME) && t2.length !== 2)
      throw new Error(
        `There can only be 2 elements in domain for scale type: ${this.scaleTypes[e2]}`
      );
    return t2;
  }
  getOrientation() {
    return this.orientation;
  }
  getScaleByPosition(e2) {
    return this.scales[e2];
  }
  getScaleTypeByPosition(e2) {
    return this.scaleTypes[e2];
  }
  getDomainAxisScaleType() {
    const e2 = this.getDomainAxisPosition();
    return this.getScaleTypeByPosition(e2);
  }
  getRangeAxisScaleType() {
    const e2 = this.getRangeAxisPosition();
    return this.getScaleTypeByPosition(e2);
  }
  getDomainScale() {
    return this.scales[this.domainAxisPosition];
  }
  getRangeScale() {
    return this.scales[this.rangeAxisPosition];
  }
  // Find the main x-axis out of the 2 x-axis on the chart (when 2D axis is used)
  getMainXAxisPosition() {
    const e2 = [f.BOTTOM, f.TOP];
    return [this.domainAxisPosition, this.rangeAxisPosition].find(
      (t2) => e2.indexOf(t2) > -1
    );
  }
  // Find the main y-axis out of the 2 y-axis on the chart (when 2D axis is used)
  getMainYAxisPosition() {
    const e2 = [f.LEFT, f.RIGHT];
    return [this.domainAxisPosition, this.rangeAxisPosition].find(
      (t2) => e2.indexOf(t2) > -1
    );
  }
  getMainXScale() {
    return this.scales[this.getMainXAxisPosition()];
  }
  getMainYScale() {
    return this.scales[this.getMainYAxisPosition()];
  }
  getValueFromScale(e2, t2, n2, s2) {
    const o2 = this.model.getOptions(), r2 = G$1(o2, "axes")[n2], { mapsTo: u2 } = r2, h2 = G$1(s2, u2) !== null ? s2[u2] : s2;
    let p2;
    switch (t2) {
      case P$1.LABELS:
        p2 = e2(h2) + e2.step() / 2;
        break;
      case P$1.TIME:
        p2 = e2(new Date(h2));
        break;
      default:
        p2 = e2(h2);
    }
    return p2;
  }
  getBoundedScaledValues(e2) {
    const { bounds: t2 } = this.model.getOptions(), n2 = this.getRangeAxisPosition({ datum: e2 }), s2 = this.scales[n2], o2 = this.model.getOptions(), r2 = G$1(o2, "axes")[n2], { mapsTo: u2 } = r2, h2 = e2[u2] !== void 0 ? e2[u2] : e2;
    return [
      s2(
        G$1(e2, t2.upperBoundMapsTo) !== null ? e2[t2.upperBoundMapsTo] : h2
      ),
      s2(
        G$1(e2, t2.lowerBoundMapsTo) !== null ? e2[t2.lowerBoundMapsTo] : h2
      )
    ];
  }
  getValueThroughAxisPosition(e2, t2) {
    const n2 = this.scaleTypes[e2], s2 = this.scales[e2];
    return this.getValueFromScale(s2, n2, e2, t2);
  }
  getDomainValue(e2) {
    const t2 = this.getDomainAxisPosition({ datum: e2 });
    return this.getValueThroughAxisPosition(t2, e2);
  }
  getRangeValue(e2) {
    const t2 = this.getRangeAxisPosition({ datum: e2 });
    return this.getValueThroughAxisPosition(t2, e2);
  }
  getMainXScaleType() {
    return this.getScaleTypeByPosition(this.getMainXAxisPosition());
  }
  getMainYScaleType() {
    return this.getScaleTypeByPosition(this.getMainYAxisPosition());
  }
  getDomainIdentifier(e2) {
    const t2 = this.model.getOptions();
    return G$1(t2, "axes", this.getDomainAxisPosition({ datum: e2 }), "mapsTo");
  }
  getRangeIdentifier(e2) {
    const t2 = this.model.getOptions();
    return G$1(t2, "axes", this.getRangeAxisPosition({ datum: e2 }), "mapsTo");
  }
  extendsDomain(e2, t2) {
    const n2 = this.model.getOptions(), s2 = G$1(n2, "axes", e2);
    if (s2.scaleType === P$1.TIME) {
      const o2 = G$1(n2, "timeScale", "addSpaceOnEdges");
      return Ge(t2, o2);
    } else
      return ke(t2, Ku.paddingRatio, s2.scaleType);
  }
  findVerticalAxesPositions() {
    const e2 = this.model.getOptions(), t2 = G$1(e2, "axes"), n2 = this.isDualAxes();
    return G$1(t2, f.LEFT) === null && G$1(t2, f.RIGHT) !== null || G$1(t2, f.RIGHT, "main") === true || n2 && G$1(t2, f.LEFT, "correspondingDatasets") ? {
      primary: f.RIGHT,
      secondary: f.LEFT
    } : { primary: f.LEFT, secondary: f.RIGHT };
  }
  findHorizontalAxesPositions() {
    const e2 = this.model.getOptions(), t2 = G$1(e2, "axes"), n2 = this.isDualAxes();
    return G$1(t2, f.BOTTOM) === null && G$1(t2, f.TOP) !== null || G$1(t2, f.TOP, "main") === true || n2 && G$1(t2, f.BOTTOM, "correspondingDatasets") ? {
      primary: f.TOP,
      secondary: f.BOTTOM
    } : { primary: f.BOTTOM, secondary: f.TOP };
  }
  findDomainAndRangeAxesPositions(e2, t2) {
    const n2 = this.model.getOptions(), s2 = G$1(n2, "axes", e2.primary), o2 = G$1(n2, "axes", t2.primary), a2 = s2.scaleType || P$1.LINEAR, r2 = o2.scaleType || P$1.LINEAR, u2 = {
      primaryDomainAxisPosition: null,
      secondaryDomainAxisPosition: null,
      primaryRangeAxisPosition: null,
      secondaryRangeAxisPosition: null
    };
    return u2.primaryDomainAxisPosition = t2.primary, u2.primaryRangeAxisPosition = e2.primary, u2.secondaryDomainAxisPosition = t2.secondary, u2.secondaryRangeAxisPosition = e2.secondary, (!(r2 === P$1.LABELS || r2 === P$1.TIME) && a2 === P$1.LABELS || a2 === P$1.TIME) && (u2.primaryDomainAxisPosition = e2.primary, u2.primaryRangeAxisPosition = t2.primary, u2.secondaryDomainAxisPosition = e2.secondary, u2.secondaryRangeAxisPosition = t2.secondary), u2;
  }
  getScaleDomain(e2) {
    const t2 = this.model.getOptions(), n2 = G$1(t2, "axes", e2), s2 = G$1(t2, "bounds"), { includeZero: o2 } = n2, a2 = G$1(n2, "scaleType") || P$1.LINEAR;
    if (this.model.isDataEmpty())
      return [];
    if (n2.binned) {
      const { bins: m2 } = this.model.getBinConfigurations();
      return [0, max(m2, (f2) => f2.length)];
    } else if (n2.limitDomainToBins) {
      const { bins: m2 } = this.model.getBinConfigurations(), f2 = this.model.getStackKeys({ bins: m2 });
      return [f2[0].split(":")[0], f2[f2.length - 1].split(":")[1]];
    }
    const r2 = this.model.getDisplayData(), { extendLinearDomainBy: u2, mapsTo: h2, percentage: p2, thresholds: D3 } = n2, { reference: A2, compareTo: T3 } = Ku.ratio;
    if (n2.domain)
      return a2 === P$1.LABELS ? n2.domain : (a2 === P$1.TIME && (n2.domain = n2.domain.map(
        (m2) => m2.getTime === void 0 ? new Date(m2) : m2
      )), this.extendsDomain(e2, n2.domain));
    if (p2)
      return [0, 100];
    if (n2 && a2 === P$1.LABELS)
      return bl$1(r2.map((m2) => m2[h2]));
    let M2, x2;
    const R2 = this.model.getDataGroupNames();
    if (a2 === P$1.LABELS_RATIO)
      return r2.map((m2) => `${m2[A2]}/${m2[T3]}`);
    if (a2 === P$1.TIME)
      x2 = r2.map((m2) => +new Date(m2[h2]));
    else if (s2 && t2.axes)
      x2 = [], r2.forEach((m2) => {
        x2.push(m2[h2]), m2[s2.upperBoundMapsTo] && x2.push(m2[s2.upperBoundMapsTo]), m2[s2.lowerBoundMapsTo] && x2.push(m2[s2.lowerBoundMapsTo]);
      });
    else if (n2.stacked === true && R2 && e2 === this.getRangeAxisPosition()) {
      const { groupMapsTo: m2 } = t2.data, f2 = this.model.getDataValuesGroupedByKeys({
        groups: R2
      }), Q2 = r2.filter(
        (O2) => !R2.includes(O2[m2])
      ), F2 = [];
      f2.forEach((O2) => {
        const { ...ee2 } = O2;
        let V2 = 0, N2 = 0;
        Object.values(ee2).forEach((P2) => {
          isNaN(P2) || (P2 < 0 ? N2 += P2 : V2 += P2);
        }), F2.push([N2, V2]);
      }), x2 = [
        ...Ee(F2),
        ...Q2.map((O2) => O2[h2])
      ];
    } else
      x2 = [], r2.forEach((m2) => {
        const f2 = m2[h2];
        Array.isArray(f2) && f2.length === 2 ? (x2.push(f2[0]), x2.push(f2[1])) : (u2 && x2.push(Math.max(m2[h2], m2[u2])), x2.push(f2));
      });
    return a2 !== P$1.TIME && a2 !== P$1.LOG && o2 && x2.push(0), D3 && D3.length > 0 && D3.forEach((m2) => {
      const f2 = G$1(m2, "value");
      f2 !== null && x2.push(f2);
    }), M2 = extent(x2), M2 = this.extendsDomain(e2, M2), M2;
  }
  createScale(e2) {
    const t2 = this.model.getOptions(), n2 = G$1(t2, "axes", e2);
    if (!n2)
      return null;
    const s2 = G$1(n2, "scaleType") || P$1.LINEAR;
    this.scaleTypes[e2] = s2;
    let o2;
    return s2 === P$1.TIME ? o2 = scaleTime() : s2 === P$1.LOG ? o2 = scaleLog().base(n2.base || 10) : s2 === P$1.LABELS || s2 === P$1.LABELS_RATIO ? o2 = scaleBand() : o2 = scaleLinear(), o2.domain(this.getScaleDomain(e2)), o2;
  }
  getDomainLowerBound(e2) {
    let t2, n2 = 0;
    return this.getOrientation() === F$2.VERTICAL ? t2 = this.getMainYScale().domain() : t2 = this.getMainXScale().domain(), G$1(this.model.getOptions(), "axes", e2, "includeZero") === false && t2[0] > 0 && t2[1] > 0 && (n2 = t2[0]), n2;
  }
  getHighestDomainThreshold() {
    const e2 = G$1(this.model.getOptions(), "axes"), t2 = this.getDomainAxisPosition(), { thresholds: n2 } = e2[t2];
    if (!Array.isArray(n2) || Array.isArray(n2) && !n2.length)
      return null;
    const s2 = this.getDomainScale(), o2 = n2.sort((r2, u2) => u2.value - r2.value)[0];
    return this.getScaleTypeByPosition(t2) === P$1.TIME && (typeof o2.value == "string" || o2.value.getTime === void 0) && (o2.value = new Date(o2.value)), {
      threshold: o2,
      scaleValue: s2(o2.value)
    };
  }
  getHighestRangeThreshold() {
    const e2 = G$1(this.model.getOptions(), "axes"), t2 = this.getRangeAxisPosition(), { thresholds: n2 } = e2[t2];
    if (!Array.isArray(n2) || Array.isArray(n2) && !n2.length)
      return null;
    const s2 = this.getRangeScale(), o2 = n2.sort((a2, r2) => r2.value - a2.value)[0];
    return {
      threshold: o2,
      scaleValue: s2(o2.value)
    };
  }
}
function Ge(i2, e2) {
  const t2 = new Date(i2[0]), n2 = new Date(i2[1]);
  return be(n2, t2) > 1 ? [Ce(t2, e2), W(n2, e2)] : Ne(n2, t2) > 1 ? [He(t2, e2), b(n2, e2)] : _e(n2, t2) > 1 ? [Ye(t2, e2), q(n2, e2)] : ze(n2, t2) > 1 ? [Xe(t2, e2), J(n2, e2)] : X(n2, t2) > 30 ? [
    G(t2, e2 * 30),
    E(n2, e2 * 30)
  ] : X(n2, t2) > 1 ? [G(t2, e2), E(n2, e2)] : k2(n2, t2) > 15 ? [
    U(t2, e2 * 15),
    I(n2, e2 * 15)
  ] : k2(n2, t2) > 1 ? [U(t2, e2), I(n2, e2)] : [t2, n2];
}
function ke([i2, e2], t2, n2) {
  const o2 = (e2 - i2) * t2, a2 = e2 <= 0 && e2 + o2 > 0 ? 0 : e2 + o2;
  let r2 = i2 >= 0 && i2 - o2 < 0 ? 0 : i2 - o2;
  if (n2 === P$1.LOG && r2 <= 0) {
    if (i2 <= 0)
      throw Error("Data must have values greater than 0 if log scale type is used.");
    r2 = i2;
  }
  return [r2, a2];
}
class tt extends oe {
  constructor() {
    super(...arguments), this.curveTypes = {
      curveLinear,
      curveLinearClosed,
      curveBasis,
      curveBasisClosed,
      curveBasisOpen,
      curveBundle,
      curveCardinal,
      curveCardinalClosed,
      curveCardinalOpen,
      curveCatmullRom,
      curveCatmullRomClosed,
      curveCatmullRomOpen,
      curveMonotoneX,
      curveMonotoneY,
      curveNatural,
      curveStep,
      curveStepAfter,
      curveStepBefore
    };
  }
  getD3Curve() {
    let e2 = "curveLinear";
    const t2 = this.model.getOptions().curve;
    if (t2 && (typeof t2 == "string" ? e2 = t2 : e2 = t2.name), this.curveTypes[e2]) {
      let n2 = this.curveTypes[e2];
      return t2 && Object.keys(t2).forEach((s2) => {
        n2[s2] && (n2 = n2[s2](t2[s2]));
      }), n2;
    }
    return console.warn(`The curve type '${e2}' is invalid, using 'curveLinear' instead`), this.curveTypes.curveLinear;
  }
}
class nt extends oe {
  isZoomBarEnabled() {
    if (!this.services.cartesianScales || !G$1(this.model.getOptions(), "zoomBar", "top", "enabled"))
      return false;
    this.services.cartesianScales.findDomainAndRangeAxes();
    const e2 = this.services.cartesianScales.getMainXAxisPosition(), t2 = G$1(
      this.model.getOptions(),
      "axes",
      e2,
      "scaleType"
    );
    return e2 === f.BOTTOM && t2 === P$1.TIME;
  }
  // get display data for zoom bar
  // basically it's sum of value grouped by time
  getZoomBarData() {
    const e2 = this.model.getZoomBarData();
    return e2 && e2.length > 1 ? e2 : this.model.getDisplayData();
  }
  getDefaultZoomBarDomain(e2) {
    if (!this.services.zoom)
      throw new Error("Services zoom not defined");
    const t2 = e2 || this.services.zoom.getZoomBarData(), { cartesianScales: n2 } = this.services;
    if (!n2)
      throw new Error("Services cartesianScales undefined");
    const s2 = n2.getMainXAxisPosition(), o2 = n2.getDomainIdentifier(), a2 = G$1(this.model.getOptions(), "axes", s2, "domain");
    if (Array.isArray(a2) && a2.length === 2)
      return a2;
    if (!s2)
      throw new Error("Not defined: mainXAxisPosition");
    return n2.extendsDomain(
      s2,
      extent(t2, (r2) => r2[o2])
    );
  }
  handleDomainChange(e2, t2 = { dispatchEvent: true }) {
    var n2;
    this.model.set({ zoomDomain: e2 }, { animate: false }), t2.dispatchEvent && ((n2 = this.services.events) == null || n2.dispatchEvent(oE.ZoomDomain.CHANGE, {
      newDomain: e2
    }));
  }
  getZoomRatio() {
    return G$1(this.model.getOptions(), "zoomBar", "zoomRatio");
  }
  // filter out data not inside zoom domain
  // to get better range value for axis label
  filterDataForRangeAxis(e2, t2) {
    var a2;
    const n2 = this.model.get("zoomDomain"), s2 = Object.assign(
      { stacked: false },
      // default configs
      t2
    ), o2 = G$1(this.model.getOptions(), "zoomBar", "updateRangeAxis");
    if (this.isZoomBarEnabled() && o2 && n2) {
      const r2 = s2.stacked ? "sharedStackKey" : (a2 = this.services.cartesianScales) == null ? void 0 : a2.getDomainIdentifier(), u2 = e2.filter(
        (h2) => new Date(h2[r2]) >= n2[0] && new Date(h2[r2]) <= n2[1]
      );
      if (u2.length > 0)
        return u2;
    }
    return e2;
  }
  zoomIn(e2 = this.getZoomRatio()) {
    var T3;
    const t2 = this.model.get("zoomDomain"), n2 = gc.handleWidth, s2 = (T3 = this.services.cartesianScales) == null ? void 0 : T3.getMainXScale().copy();
    s2.domain(this.getDefaultZoomBarDomain());
    const o2 = s2(t2[0]), a2 = s2(t2[1]);
    if (a2 - o2 < n2 + 1)
      return;
    const r2 = s2.range(), u2 = a2 - o2, h2 = Math.min((r2[1] - r2[0]) / 2 * (e2 / 2), u2 / 2);
    let p2 = o2 + h2, D3 = a2 - h2;
    p2 >= D3 && (p2 = o2 + u2 / 2 - n2 / 2, D3 = a2 - u2 / 2 + n2 / 2);
    const A2 = [s2.invert(p2), s2.invert(D3)];
    (t2[0].valueOf() !== A2[0].valueOf() || t2[1].valueOf() !== A2[1].valueOf()) && this.handleDomainChange(A2);
  }
  zoomOut(e2 = this.getZoomRatio()) {
    const t2 = this.model.get("zoomDomain");
    if (!this.services.cartesianScales)
      throw new Error("Services cartesianScales undefined");
    const n2 = this.services.cartesianScales.getMainXScale().copy();
    n2.domain(this.getDefaultZoomBarDomain());
    const s2 = n2(t2[0]), o2 = n2(t2[1]), a2 = n2.range(), r2 = (a2[1] - a2[0]) / 2 * (e2 / 2), u2 = Math.max(s2 - r2, a2[0]), h2 = Math.min(o2 + r2, a2[1]), p2 = [n2.invert(u2), n2.invert(h2)];
    (t2[0].valueOf() !== p2[0].valueOf() || t2[1].valueOf() !== p2[1].valueOf()) && this.handleDomainChange(p2);
  }
  resetZoomDomain() {
    const e2 = this.model.get("zoomDomain"), t2 = this.getDefaultZoomBarDomain();
    (e2[0].valueOf() !== t2[0].valueOf() || e2[1].valueOf() !== t2[1].valueOf()) && this.handleDomainChange(t2);
  }
  // check if current zoom domain is already the min zoom domain
  // when toolbar is rendered, we don't render chart yet
  // don't depend on scale range
  isMinZoomDomain() {
    const e2 = this.model.get("zoomDomain"), t2 = this.getDefaultZoomBarDomain();
    if (!e2 || !t2)
      return false;
    const n2 = e2[1].valueOf() - e2[0].valueOf(), s2 = t2[1].valueOf() - t2[0].valueOf(), o2 = G$1(this.model.getOptions(), "zoomBar", "minZoomRatio");
    return n2 / s2 < o2;
  }
  // check if current zoom domain is already the max zoom domain
  isMaxZoomDomain() {
    const e2 = this.model.get("zoomDomain"), t2 = this.getDefaultZoomBarDomain();
    return !!(e2 && t2 && e2[0].valueOf() === t2[0].valueOf() && e2[1].valueOf() === t2[1].valueOf());
  }
  isEmptyState() {
    return this.getZoomBarData().length === 0;
  }
  isZoomBarLoading(e2) {
    return G$1(this.model.getOptions(), "zoomBar", e2, "loading");
  }
  isZoomBarLocked(e2) {
    return G$1(this.model.getOptions(), "zoomBar", e2, "locked");
  }
}
class T2 {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(e2, s2) {
    this.components = [], this.services = {
      canvasZoom: We,
      domUtils: k$1,
      events: qe,
      files: Je,
      gradientUtils: le,
      transitions: Qe
    }, this.model = new D$1(this.services);
  }
  // Contains the code that uses properties that are overridable by the super-class
  init(e2, s2) {
    this.model.set({ holder: e2 }, { skipUpdate: true }), Object.keys(this.services).forEach((n2) => {
      const t2 = this.services[n2];
      this.services[n2] = new t2(this.model, this.services);
    }), this.services.events.addEventListener(oE.Model.UPDATE, (n2) => {
      const t2 = !!G$1(n2, "detail", "animate");
      this.update(t2);
    }), this.model.setData(s2.data), this.services.events.addEventListener(oE.Chart.RESIZE, () => {
      this.update(false);
    }), this.components = this.getComponents(), this.update();
  }
  getComponents() {
    return console.error("getComponents() method is not implemented"), [];
  }
  update(e2 = true) {
    if (!this.components)
      return;
    Object.keys(this.services).forEach((t2) => {
      this.services[t2].update();
    }), this.components.forEach((t2) => t2.render(e2));
    const s2 = this.services.transitions.getPendingTransitions(), n2 = Object.keys(s2).map((t2) => s2[t2].end().catch((m2) => m2));
    Promise.all(n2).then(
      () => this.services.events.dispatchEvent(oE.Chart.RENDER_FINISHED)
    );
  }
  destroy() {
    this.components.forEach((e2) => e2.destroy()), this.services.domUtils.getHolder().remove(), this.model.set({ destroyed: true }, { skipUpdate: true });
  }
  getChartComponents(e2, s2) {
    const n2 = this.model.getOptions(), t2 = G$1(n2, "toolbar", "enabled"), h2 = {
      id: "legend",
      components: [new fl(this.model, this.services)],
      growth: z$2.PREFERRED
    }, m2 = G$1(n2, "canvasZoom", "enabled");
    m2 && m2 === true && e2.push(new vh(this.model, this.services));
    const b2 = !!this.model.getOptions().title, O2 = {
      id: "title",
      components: [new ml(this.model, this.services)],
      growth: z$2.STRETCH
    }, x2 = {
      id: "toolbar",
      components: [new Rs(this.model, this.services)],
      growth: z$2.PREFERRED
    }, F2 = {
      id: "header",
      components: [
        new ks(
          this.model,
          this.services,
          [
            // always add title to keep layout correct
            O2,
            ...t2 ? [x2] : []
          ],
          {
            direction: W$3.ROW,
            alignItems: B$2.CENTER
          }
        )
      ],
      growth: z$2.PREFERRED
    }, y2 = {
      id: "graph-frame",
      components: e2,
      growth: z$2.STRETCH,
      renderType: G$1(s2, "graphFrameRenderType") || D$3.SVG
    }, D3 = G$1(s2, "excludeLegend") !== true && n2.legend.enabled !== false;
    let f2 = W$3.COLUMN;
    if (D3) {
      const S2 = G$1(n2, "legend", "position");
      S2 === "left" ? (f2 = W$3.ROW, n2.legend.orientation || (n2.legend.orientation = G$2.VERTICAL)) : S2 === "right" ? (f2 = W$3.ROW_REVERSE, n2.legend.orientation || (n2.legend.orientation = G$2.VERTICAL)) : S2 === "bottom" && (f2 = W$3.COLUMN_REVERSE);
    }
    const P2 = {
      id: "spacer",
      components: [new mh(this.model, this.services)],
      growth: z$2.PREFERRED
    }, v2 = {
      id: "full-frame",
      components: [
        new ks(
          this.model,
          this.services,
          [
            ...D3 ? [h2] : [],
            ...D3 ? [P2] : [],
            y2
          ],
          {
            direction: f2
          }
        )
      ],
      growth: z$2.STRETCH
    }, E2 = [];
    if (b2 || t2) {
      E2.push(F2);
      const S2 = {
        id: "spacer",
        components: [
          new mh(this.model, this.services, t2 ? { size: 15 } : void 0)
        ],
        growth: z$2.PREFERRED
      };
      E2.push(S2);
    }
    return E2.push(v2), [
      new yl(this.model, this.services),
      new fh(this.model, this.services),
      new ks(this.model, this.services, E2, {
        direction: W$3.COLUMN
      })
    ];
  }
}
class u extends T2 {
  constructor(e2, s2) {
    super(e2, s2), this.services = Object.assign(this.services, {
      cartesianScales: et,
      curves: tt,
      zoom: nt
    }), this.model = new T$1(this.services);
  }
  getAxisChartComponents(e2, s2) {
    const n2 = this.model.getOptions(), t2 = G$1(n2, "zoomBar", f.TOP, "enabled"), h2 = G$1(n2, "toolbar", "enabled");
    this.services.cartesianScales.determineAxisDuality(), this.services.cartesianScales.findDomainAndRangeAxes(), this.services.cartesianScales.determineOrientation();
    const m2 = this.services.cartesianScales.getMainXAxisPosition(), b2 = G$1(n2, "axes", m2, "scaleType"), O2 = t2 && m2 === f.BOTTOM && b2 === P$1.TIME, x2 = this.services.zoom.isZoomBarLocked(f.TOP), F2 = !!this.model.getOptions().title, y2 = {
      id: "title",
      components: [new ml(this.model, this.services)],
      growth: z$2.STRETCH
    }, D3 = {
      id: "toolbar",
      components: [new Rs(this.model, this.services)],
      growth: z$2.PREFERRED
    }, f$1 = {
      id: "header",
      components: [
        new ks(
          this.model,
          this.services,
          [
            // always add title to keep layout correct
            y2,
            ...h2 ? [D3] : []
          ],
          {
            direction: W$3.ROW,
            alignItems: B$2.CENTER
          }
        )
      ],
      growth: z$2.PREFERRED
    }, P2 = {
      id: "legend",
      components: [new fl(this.model, this.services)],
      growth: z$2.PREFERRED
    };
    O2 && !x2 && e2.push(
      new vl(this.model, this.services),
      new zs(this.model, this.services)
    ), e2.push(new Eh(this.model, this.services)), e2.push(new bh(this.model, this.services));
    const v2 = {
      id: "graph-frame",
      components: e2,
      growth: z$2.STRETCH,
      renderType: D$3.SVG
    }, E2 = G$1(s2, "legend", "enabled") !== false && this.model.getOptions().legend.enabled !== false;
    let S2 = W$3.COLUMN;
    if (E2) {
      const G2 = G$1(this.model.getOptions(), "legend", "position");
      G2 === w$1.LEFT ? (S2 = W$3.ROW, this.model.getOptions().legend.orientation || (this.model.getOptions().legend.orientation = G$2.VERTICAL)) : G2 === w$1.RIGHT ? (S2 = W$3.ROW_REVERSE, this.model.getOptions().legend.orientation || (this.model.getOptions().legend.orientation = G$2.VERTICAL)) : G2 === w$1.BOTTOM && (S2 = W$3.COLUMN_REVERSE);
    }
    const ge2 = {
      id: "spacer",
      components: [new mh(this.model, this.services)],
      growth: z$2.PREFERRED
    }, we2 = {
      id: "full-frame",
      components: [
        new ks(
          this.model,
          this.services,
          [
            ...E2 ? [P2] : [],
            ...E2 ? [ge2] : [],
            v2
          ],
          {
            direction: S2
          }
        )
      ],
      growth: z$2.STRETCH
    }, Ee2 = {
      id: "zoom-bar",
      components: [new yh(this.model, this.services)],
      growth: z$2.PREFERRED,
      renderType: D$3.SVG
    }, H2 = [];
    if (F2 || h2) {
      H2.push(f$1);
      const G2 = {
        id: "spacer",
        components: [
          new mh(this.model, this.services, h2 ? { size: 15 } : void 0)
        ],
        growth: z$2.PREFERRED
      };
      H2.push(G2);
    }
    return O2 && H2.push(Ee2), H2.push(we2), [
      new Sh(this.model, this.services),
      new fh(this.model, this.services),
      new ks(this.model, this.services, H2, {
        direction: W$3.COLUMN
      })
    ];
  }
}
({
  [p$2.LINE]: [Lh, zn],
  [p$2.SCATTER]: [zn],
  [p$2.AREA]: [xh, Lh, zn],
  [p$2.STACKED_AREA]: [tu, Lh, su, Rh],
  [p$2.SIMPLE_BAR]: [Qh],
  [p$2.GROUPED_BAR]: [Xh, Mh],
  [p$2.STACKED_BAR]: [nu, Rh]
});
class ft extends u {
  constructor(e2, s2) {
    super(e2, s2), this.model.setOptions(vl$1(Nc.stackedBarChart, s2.options)), this.init(e2, s2);
  }
  getComponents() {
    const e2 = [
      new Ah(this.model, this.services),
      new Th(this.model, this.services),
      new Rh(this.model, this.services),
      new nu(this.model, this.services),
      new Sl(this.model, this.services, {
        skeleton: Z$4.VERT_OR_HORIZ
      }),
      new Mh(this.model, this.services)
    ];
    return this.getAxisChartComponents(e2);
  }
}
const chartHolderCssClass = "cds--chart-holder";
const BaseChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["data", "options", "Chart", "chart", "ref", "id"]);
  let { data: data2 = [] } = $$props;
  let { options: options2 = {} } = $$props;
  let { Chart = void 0 } = $$props;
  let { chart = null } = $$props;
  let { ref = null } = $$props;
  let { id = `chart-${Math.random().toString(36)}` } = $$props;
  const dispatch = createEventDispatcher();
  onDestroy(() => {
    if (chart) {
      dispatch("destroy");
      chart.components.forEach((component) => component.destroy());
      chart.model.set({ destroyed: true }, { skipUpdate: true });
      chart = null;
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.options === void 0 && $$bindings.options && options2 !== void 0)
    $$bindings.options(options2);
  if ($$props.Chart === void 0 && $$bindings.Chart && Chart !== void 0)
    $$bindings.Chart(Chart);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${spread(
    [
      { id: escape_attribute_value(id) },
      {
        class: escape_attribute_value(chartHolderCssClass)
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", ref, 0)}></div>`;
});
const BarChartStacked = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["options", "data", "chart", "ref"]);
  let { options: options2 } = $$props;
  let { data: data2 } = $$props;
  let { chart = null } = $$props;
  let { ref = null } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options2 !== void 0)
    $$bindings.options(options2);
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(BaseChart, "BaseChart").$$render(
      $$result,
      Object.assign({}, $$restProps, { Chart: ft }, { options: options2 }, { data: data2 }, { ref }, { chart }),
      {
        ref: ($$value) => {
          ref = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  title: "Distribution of data",
  animations: true,
  axes: {
    left: {
      mapsTo: "value"
    },
    bottom: {
      mapsTo: "group",
      scaleType: "labels"
    }
  },
  height: "400px",
  legend: {
    enabled: false,
    alignment: "center"
  },
  color: {
    pairing: {
      option: 2
    },
    scale: {
      2022: "#ff9b70",
      2023: "#de6f57",
      2024: "#e35619"
    }
  },
  bars: {
    width: 50,
    maxWidth: 50
  },
  theme: "g10"
};
const data = [
  {
    group: "2022",
    value: 264
  },
  {
    group: "2023",
    value: 835
  },
  {
    group: "2024",
    value: 877
  }
];
const Collect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const up_right_arrow = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>`;
  return `<div class="flex flex-col w-full justify-between gap-[1.5rem] items-center">${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      title: "DESCRIBING THE DATA",
      desc: `
            <p class ="w-full"> 
                We want to gather the data we need using <a href="https://praw.readthedocs.io/en/stable/" target="_blank" class ="inline_a">Python Reddit API Wrapper (PRAW)</a>. According to its documentation, we can access any subreddit, its list of submissions, and useful metadata for each submission. For this project, we specifically gathered the following metadata:
            </p>
            <div class = "w-full flex flex-col gap-8 py-4 pl-[1rem]">
                <div class = "w-full flex flex-row gap-4">
                    <p class = "lg:w-[20%] w-[30%] font-['JetBrains_Mono']"> 
                        String
                    </p>
                    <div class ="w-full flex flex-row flex-wrap gap-4">
                        <p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Timestamp</p>
                        <p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Content Type (Text, video, image)</p>
                        <p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Title</p>
                        <p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Content (Caption if media content)</p>
                        <p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Flair</p>
                        <p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Submission ID</p>
                    </div>	
                </div>
                <div class = "w-full flex flex-row gap-4">
                    <p class = "lg:w-[20%] w-[30%] font-['JetBrains_Mono']"> 
                        Integer
                    </p>
                    <div class ="w-full flex flex-row flex-wrap gap-4">
                        <p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Upvotes Count</p>
                        <p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Comments Count</p>
                    </div>
                </div>
                <div class = "w-full flex flex-row gap-4">
                    <p class = "lg:w-[20%] w-[30%] font-['JetBrains_Mono']"> 
                        Float
                    </p>
                    <div class ="w-full flex flex-row flex-wrap gap-4">
                        <p class ="py-1 px-4 bg-[#d1d4d7af] w-fit rounded-full code">Upvote:downvote Ratio</p>
                    </div>	
                </div>
            </div>
            <p class ="w-full"> 
                We kept track of the submission content type so that we may manually extract their transcripts. 
            </p>
        `
    },
    {},
    {}
  )} ${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      title: "SCRAPING THE DATA: LIMITATIONS",
      desc: `
            <p class ="w-full"> 
                In using PRAW, there are a couple of limitations to note: 
            </p>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">1.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    <span class ="font-[500]">Mining Limit</span> &ndash; PRAW only allows us to collect up to 1000 submissions for each request. This means that we don't have much control on the data we get as it will always return relatively the same 1000, implying that we can't consistently scrape unique submissions per request.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">2.</p> 
                <p class = "w-full pl-[0.5rem] ">
                </span><span class ="font-[500]">No Time Customizations</span> &ndash; We can't filter submissions based on specfic posting times and time intervals. This is quite unfortunate as it would be difficult to minimize the time bias. 
                </p>
            </div>
        `
    },
    {},
    {}
  )} ${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      title: "SCRAPING THE DATA: THE GAMEPLAN",
      desc: `
            <p class ="w-full"> 
                Now, here's the plan:
            </p>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">1.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    To sample the subreddit, we want to scrape 1000 submissions per category. The categories are: Hot, New, Rising, Controversial, and Top. Upon scraping, we found out that Rising is a subset of Hot, and hence would left us with Hot, Top, New, and Controversial. For Top, we picked All Time as it would give us submissions older than last year, i.e. April 2023. 
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    We opted not to use the search function since one of the objectives of our project is to find those relevant keywords themselves. 
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    We also opted not to scrape the comments as they are naturally highly contextualized to the main post. Text with little to no context may only cause the model to overfit.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Note that due to the mining limitation, we are not able to fully reach 1000 submissions per category as submissions are not unique to one category. 
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">2.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    To avoid duplicates, we want to use the <span class="code font-bold">Save</span> function and mark the submission we've already scraped.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">3.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    To save time, we want to skip non-text-only submissions that have less than 10 upvotes since transcribing them may be counterproductive.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">4.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Then as much as possible, we need to minimize time bias. Hence, we won't scrape submissions that are 10 days old or younger as they may have yet to peak in engagements. 
                </p>
            </div>
        `
    },
    {},
    {}
  )} <div class="flex flex-col items-center my-[2rem]" data-svelte-h="svelte-8ruglg"><p class="text-center">Executing the gameplan gave us...</p> <h3 class="text-center my-[1rem]">2541 scraped submissions</h3> <p class="w-full text-center">But now comes the hard part—cleaning the data.</p></div></div> <div class="flex flex-col w-full justify-between gap-[1.5rem] items-center">${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      title: "CLEANING THE DATA",
      desc: `
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">1.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Using 
                    <a class = "inline_a" href="https://pandas.pydata.org/docs/" target="_blank"> 
                        Pandas</a>, 
                    <a class = "inline_a" href="https://docs.python.org/3/library/re.html" target="_blank"> 
                        RegEx</a>, and 
                    <a class = "inline_a" href="https://beautiful-soup-4.readthedocs.io/en/latest/" target="_blank"> 
                        BeautifulSoup4</a> on 
                    <a class = "inline_a" href="https://docs.jupyter.org/en/latest/" target="_blank"> 
                        Jupyter Notebook</a>, we want to:
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Remove URLs, duplicates, emojis, and submissions with empty cells except <span class ="code">Content</span> (to be transcribed later on) and <span class ="code">Flair</span>.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Convert <span class ="code">Content</span> to plaintext as it is retrieved as markdown. This also includes replacing newlines and <span class ="code">NaN</span>s  with a single whitespace. 
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Contextualize Filipino slangs, text abbreviations, and corporate jargons such as converting "WFH" to "Work from home" or "Charot" to "Just kidding". However, it is to note that we can only cater a handful list of them (available on the GitHub repository). This would also raise the possibility of incorrectly defining an acronym, but doing this may be more beneficial as it heavily contextualizes the text.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Concatenate <span class ="code">Title</span> and <span class ="code">Content</span> of every submission into one cell under a new column <span class ="code">Title+Content</span>.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit pl-[1rem]">•</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Add another column that converts Timestamp into a Unix timestamp (the number of seconds that have elapsed since January 1, 1970) for ease when we do a timeseries later on. Only the day, month, and year are converted for the plot.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">2.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Using spaCy's English transformer pipline <a class = "inline_a" href="https://spacy.io/models/en#en_core_web_trf" target="_blank"> 
                         <span class ="code">en_core_web_trf</span></a> and its power to recognize named entities, we remove the names in the dataset to avoid possible doxxing. 
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">3.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    We then want to manually transcribe the image and video content. We shortlist the 100 most engaged submissions from each category to save time as effort to value ratio may be low.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">4.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Translate <span class ="code">Title+Content</span> to English using the
                    <a class = "inline_a" href="https://deep-translator.readthedocs.io/en/latest/usage.html" target="_blank"> 
                        Google Translator of deep_translator API</a>.
                </p>
            </div>
            <div class ="flex flex-row gap-[0.2rem]">
                <p class ="font-[500] w-fit">5.</p> 
                <p class = "w-full pl-[0.5rem] ">
                    Lastly, remove punctuations, numbers, and stop words of <span class ="code">Title+Content</span> then convert it to lowercase using 
                    <a class = "inline_a" href="https://www.nltk.org" target="_blank"> 
                        Natural Language Toolkit (NLTK)</a> and Pandas. We chose not to lemmatize the words as we plan to identify topics through clouds of words (which we will see later on) where we want to keep the context as much as possible.  
                </p>
            </div>
            
        `
    },
    {},
    {}
  )}</div> <div class="flex flex-col items-center mt-[2rem]" data-svelte-h="svelte-vez1eo"><p class="text-center">We then finally get...</p> <h3 class="text-center my-[1rem]">1976 preprocessed submissions!</h3> </div> <div class="lg:w-[80%] w-full border-t border-b border-white backdrop-blur-lg bg-[#ffffff29] rounded-lg py-5 px-10">${validate_component(BarChartStacked, "BarChartStacked").$$render($$result, { data, options }, {}, {})}</div> <div class="w-full flex sm:flex-row flex-col sm:gap-[1rem] gap-[0.3rem] items-center justify-center">${validate_component(Button2, "Button2").$$render(
    $$result,
    {
      label: "View data processing on GitHub",
      href: "https://github.com/ark1tech/CS132-Preprocessing",
      icon: up_right_arrow
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "View dataset",
      href: "https://docs.google.com/spreadsheets/d/1lmhzWPGKuykna-nOAT6i9ry_-330GrGRh_M5wN73qEE/edit?usp=sharing",
      icon: up_right_arrow,
      target: "blank_"
    },
    {},
    {}
  )}</div>`;
});
const Explore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col w-full justify-between gap-[1.5rem] items-center"><p data-svelte-h="svelte-1xz0ek8">Now that our data has been processed, the next step would be to solve the research questions
		posed at the start of the study. To do this, we would need to focus on how to define and
		identify posts on unfair contracts and job offerings as hypothesized.</p> ${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      title: "MANUAL TOPIC TAGGING",
      desc: `
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
        `
    },
    {},
    {}
  )} ${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      title: "LDA TOPIC MODELING",
      desc: `
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

            `
    },
    {},
    {}
  )} <div class="flex flex-col items-center my-[2rem] relative" data-svelte-h="svelte-lxbhs0"><p class="text-center">Research Question #1</p> <h3 class="text-center my-[1rem]">What are the prevalent topics about labor struggles submitted on r/AntiworkPH?</h3></div> ${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      title: "EXPLORATORY DATA ANALYSIS",
      desc: `
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
            `
    },
    {},
    {}
  )} <div class="flex flex-col items-center my-[2rem] relative" data-svelte-h="svelte-15yeu5z"><h3 class="text-center my-[1rem]">Recalling our hypothesis...</h3> <div class="w-full flex lg:flex-row flex-col justify-between gap-6"><div class="w-full p-[2rem] pb-[0rem] flex flex-col gap-3"><p class="font-[500]">Null Hypothesis</p> <p class="text-left">The prevalent topics among the subreddit users centered around unfair contracts and job
					offerings in the Philippines.</p></div> <div class="w-full p-[2rem] pb-[0rem] flex flex-col gap-3"><p class="font-[500]">Alternative Hypothesis</p> <p class="text-left">The prevalent topics among the subreddit users did not center around unfair contracts and
					job offerings in the Philippines.</p></div></div></div> ${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      title: "HYPOTHESIS TESTING",
      desc: `
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
            `
    },
    {},
    {}
  )} <div class="flex flex-col items-center my-[2rem] relative" data-svelte-h="svelte-18yg67c"><p class="text-center">Research Question #2</p> <h3 class="text-center my-[1rem]">Which of these topics receive the most Reddit engagements?</h3></div> ${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      title: "EXPLORATORY DATA ANALYSIS",
      desc: `
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
            `
    },
    {},
    {}
  )} <div class="flex flex-col items-center my-[2rem] relative" data-svelte-h="svelte-dv2lwq"><h3 class="text-center my-[1rem]">Recalling our hypothesis...</h3> <div class="w-full flex lg:flex-row flex-col justify-between gap-6"><div class="w-full p-[2rem] pb-[0rem] flex flex-col gap-3"><p class="font-[500]">Null Hypothesis</p> <p class="text-left">The topic with the most engagements based on upvotes and comments is the same as the most
					prevalent topic.</p></div> <div class="w-full p-[2rem] pb-[0rem] flex flex-col gap-3"><p class="font-[500]">Alternative Hypothesis</p> <p class="text-left">The topic with the most engagements based on upvotes and comments is different from the
					most prevalent topic.</p></div></div></div> ${validate_component(TextCard, "TextCard").$$render(
    $$result,
    {
      title: "HYPOTHESIS TESTING",
      desc: `
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
            `
    },
    {},
    {}
  )}</div> `;
});
const Reddit = "/_app/immutable/assets/reddit_bg.DncP5ONG.webp";
const Line = "data:image/svg+xml,%3csvg%20width='500'%20height='15'%20viewBox='0%200%20500%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M252.445%207.2H500V8H252.489C252.362%209.40163%20251.185%2010.5%20249.75%2010.5C248.315%2010.5%20247.138%209.40163%20247.011%208H0V7.2H247.055C247.31%205.94477%20248.42%205%20249.75%205C251.08%205%20252.19%205.94477%20252.445%207.2Z'%20fill='url(%23paint0_radial_403_11)'/%3e%3cg%20filter='url(%23filter0_d_403_11)'%3e%3ccircle%20cx='249.75'%20cy='7.75'%20r='2.75'%20fill='%23FF6C16'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_403_11'%20x='242.7'%20y='0.7'%20width='14.1'%20height='14.1'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='2.15'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%200.368627%200%200%200%200%200.00392157%200%200%200%201%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_403_11'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_403_11'%20result='shape'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_403_11'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(250%207.75)%20scale(250%2065.5065)'%3e%3cstop%20stop-color='%23FF5E01'%20stop-opacity='0.5'/%3e%3cstop%20offset='0.53'%20stop-color='%23E5E5E5'/%3e%3cstop%20offset='1'%20stop-color='%23E5E5E5'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const down_arrow = `<svg
			xmlns="http://www.w3.org/2000/svg"
			width="19"
			height="19"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2.2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-down"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path
				d="M16 15l-4 4"
			/><path d="M8 15l4 4" />
		</svg>`;
  const caution = `<?xml version="1.0" encoding="utf-8"?>
		<svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
		<path d="M12 7V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4A5464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<circle cx="12" cy="16.5" r="0.9" fill="#4A5464"/>
		</svg>`;
  return `${$$result.head += `<!-- HEAD_svelte-1iqf0rf_START -->${$$result.title = `<title>pocarí</title>`, ""}<meta name="description" content="CS 132 Pocari"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"><!-- HEAD_svelte-1iqf0rf_END -->`, ""} <section class="w-full min-h-[100dvh] flex flex-col items-center relative gap-4 sm:justify-start justify-center"> <div class="absolute z-0 gradient-mask-t-70 w-screen h-full" data-svelte-h="svelte-ukx2hg"><div class="absolute z-0 gradient-mask-b-70 w-screen h-full"><div class="w-full h-full bg-[url('$lib/images/grid.svg')] bg-repeat"></div></div></div> <div class="relative z-1 sm:pt-[7rem] w-full flex flex-col items-center gap-[1.5rem]"><div class="flex flex-row gap-[0.5rem] items-center justify-center"><!-- HTML_TAG_START -->${caution}<!-- HTML_TAG_END --> <p class="font-['JetBrains_Mono'] text-sm w-fit opacity-50" data-svelte-h="svelte-h6eatu">Project still in progress</p></div> <h1 class="text-[#0E0F11] lg:w-[60%] text-center" data-svelte-h="svelte-6jflzc">Through the lens of Filipino workers</h1> <p class="text-center lg:w-[60%]" data-svelte-h="svelte-1hmmm67">A data science project that delves into the issue of labor struggles in the Philippines
			through exploratory analysis and natural language processing (NLP) of data sourced from the
			subreddit
			<a href="https://www.reddit.com/r/AntiworkPH/" target="_blank" class="inline_a">r/AntiworkPH</a>.</p> ${validate_component(Button1, "Button1").$$render(
    $$result,
    {
      label: "Learn more",
      href: "#overview",
      icon: down_arrow,
      target: "_self"
    },
    {},
    {}
  )}</div> <div class="w-full h-full mt-[2rem]" data-svelte-h="svelte-jgmrgi"><div class="w-full h-full gradient-mask-b-50 drop-shadow-xl sm:block hidden"><img alt=""${add_attribute("src", Reddit, 0)} class="h-auto w-full relative z-1"></div></div></section> <section id="overview" class="pt-[4rem] lg:w-[80%] w-full min-h-[100dvh] flex flex-col items-center gap-[3rem] justify-center">${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}</section> <section id="collection" class="relative pt-[4rem] w-full min-h-[100dvh] flex flex-col items-center gap-4 justify-start"><div class="absolute z-1 w-screen h-full gradient-mask-t-80" data-svelte-h="svelte-ddy5k8"><div class="h-full w-full gradient-mask-b-80"><div class="z-1 h-full w-full datacollect"></div></div></div> <div class="absolute z-1 w-screen h-full gradient-mask-t-80" data-svelte-h="svelte-1ex962q"><div class="h-full w-full gradient-mask-b-80"><div class="z-0 h-full w-full bg-[url('$lib/images/hex.svg')] bg-repeat"></div></div></div> <img${add_attribute("src", Line, 0)} alt="l" class="lg:w-[60%] w-full h-auto"> <div class="relative z-1 lg:w-[80%] w-full flex flex-col items-center gap-[2rem]"><div class="flex flex-col w-full h-full items-center gap-[0.8rem] my-[2rem]" data-svelte-h="svelte-1dm7ezi"><h4 class="sub">PART I</h4> <h2 class="text-[#0E0F11] text-center">Data Collection</h2></div> ${validate_component(Collect, "Collecting").$$render($$result, {}, {}, {})}</div></section> <section id="exploration" class="relative pt-[4rem] w-full h-fit flex flex-col items-center gap-4 justify-start"><div class="absolute z-1 w-screen h-full gradient-mask-t-80" data-svelte-h="svelte-1u6y1qa"><div class="datacollect2 h-full w-full gradient-mask-b-80"><div class="z-1 h-full w-full "></div></div></div> <div class="absolute z-1 w-screen h-full gradient-mask-t-80" data-svelte-h="svelte-1ex962q"><div class="h-full w-full gradient-mask-b-80"><div class="z-0 h-full w-full bg-[url('$lib/images/hex.svg')] bg-repeat"></div></div></div> <img${add_attribute("src", Line, 0)} alt="l" class="lg:w-[60%] w-full h-auto"> <div class="relative z-1 lg:w-[80%] w-full flex flex-col items-center gap-[2rem]"><div class="flex flex-col w-full h-full items-center gap-[0.8rem] my-[2rem]" data-svelte-h="svelte-10822o0"><h4 class="sub">PART II</h4> <h2 class="text-[#0E0F11] text-center">Data Exploration</h2></div> ${validate_component(Explore, "Explore").$$render($$result, {}, {}, {})}</div></section> <section id="aboutus" class="w-full mt-[10rem] flex flex-col items-center relative gap-4 justify-start" data-svelte-h="svelte-5pndqd"><div class="relative w-screen h-full bg-[#ffffff]"><div class="absolute z-0 gradient-mask-l-30 w-full h-full"><div class="h-full w-full gradient-mask-r-30"><div class="h-full w-full bg-[url('$lib/images/hex.svg')] border-t-[0.5px] border-[#e7e7e767]"></div></div></div> <footer class="relative z-1 w-full h-full py-[2rem] border-t-[0.7px] border-[#0d121c3d] flex flex-col items-center gap-5"><div class="w-full flex md:flex-row flex-col items-center justify-evenly gap-5 px-[4rem]"><div class="flex-grow flex flex-col gap-2 items-center z-2 px-[1.5rem]"><div class="flex flex-col items-center justify-center"><h5 class="w-full text-center">Seth Eliserio</h5> <a class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out" href="https://www.linkedin.com/in/seth-eliserio-655b28225/" target="__blank">@setheliserio</a> <p class="text-sm text-justify mt-[1rem]">Hello! I am Annika, a BS Computer Science student, currently interested in the marriages of Computer Science to other subjects, mainly BioInformatics. I also enjoy writing and discussing stories and literary concepts.</p></div></div> <div class="flex-grow flex flex-col gap-2 items-center z-2 px-[1.5rem]"><div class="flex flex-col items-center justify-center"><h5 class="w-full text-center">Arki Mañago</h5> <a class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out" href="https://www.linkedin.com/in/ark1tech" target="__blank">@ark1tech</a> <p class="text-sm text-justify mt-[1rem]">Hello! I am Annika, a BS Computer Science student, currently interested in the marriages of Computer Science to other subjects, mainly BioInformatics. I also enjoy writing and discussing stories and literary concepts.</p></div></div> <div class="flex-grow flex flex-col gap-2 items-center z-2 px-[1.5rem]"> <div class="flex flex-col items-center justify-center"><h5 class="w-full text-center">Annika Domondon</h5> <a class="w-full text-center font-normal text-[#acacac] hover:text-[#6a6868] transition-all ease-in-out" href="/" target="__blank">@maridapottedcat</a> <p class="text-sm text-justify mt-[1rem]">Hello! I am Annika, a BS Computer Science student, currently interested in the marriages of Computer Science to other subjects, mainly BioInformatics. I also enjoy writing and discussing stories and literary concepts.</p></div></div></div></footer></div> </section>`;
});
export {
  Page as default
};
