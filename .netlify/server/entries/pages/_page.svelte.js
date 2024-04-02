import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute } from "../../chunks/ssr.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { icon } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return `<div class="w-fit border border-[#24478c] shadow-[0_0_5px_0_#19346a] rounded-lg overflow-clip "><button class="text-white flex flex-row items-center py-2 px-[0.9rem] gap-[0.6rem] bg-[#091742] shadow-[inset_0_-8px_20px_#19346a] "><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --> ${escape(label)}</button></div> <div class="border-[#19346a]"></div>`;
});
const reddit = "/_app/immutable/assets/Reddit.CMn5GrPN.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${$$result.head += `<!-- HEAD_svelte-gbdeqf_START -->${$$result.title = `<title>pocarí</title>`, ""}<meta name="description" content="CS 132 Pocari"><!-- HEAD_svelte-gbdeqf_END -->`, ""} <section class="h-auto pt-[3rem] w-full flex flex-col items-center gap-[2rem]"><div class="w-fit" data-svelte-h="svelte-1g54e0i"><h1 class="bg-gradient-to-tr from-[#565656] to-[#ffffff] text-transparent bg-clip-text"><span class="font-[100] text-inherit">ANTI</span>WORK</h1></div> <div class="w-1/2" data-svelte-h="svelte-1neoxkj"><p class="font-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis leo vel.
			Nulla pharetra diam sit amet nisl suscipit. Diam sit amet nisl suscipit adipiscing bibendum
			est. Odio facilisis mauris sit amet massa. Vel facilisis volutpat est velit. Tristique nulla
			aliquet enim tortor at auctor. Morbi tristique senectus et netus et malesuada fames ac.</p></div> ${validate_component(Button, "Button").$$render($$result, { icon: down_arrow, label: "Learn more" }, {}, {})} <img${add_attribute("src", reddit, 0)} alt="reddit" class="w-[100%] h-auto gradient-mask-b-0"> </section>`;
});
export {
  Page as default
};
