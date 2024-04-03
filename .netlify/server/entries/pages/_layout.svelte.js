import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const logo = "/_app/immutable/assets/Logo.BGD9fciM.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const hamburger_menu = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>`;
  return `<div class="w-full flex flex-col items-center"><header class="flex flex-row justify-between items-center min-w-full max-w-[1500px]"><div class="flex-none" data-svelte-h="svelte-1cazwm4"><a href="/"><img${add_attribute("src", logo, 0)} alt="Pocari!"></a></div> <nav class=""><ul class="flex-row justify-between font-light text-sm gap-[2.6rem] lg:flex hidden"><li><a href="#overview" data-svelte-h="svelte-wwkfu">Overview</a></li> <li><a href="#collection" data-svelte-h="svelte-4cgfsi">Collection</a></li> <li data-svelte-h="svelte-19t2om7"><a href="/">Exploration</a></li> <li data-svelte-h="svelte-1xbr363"><a href="/">Modelling</a></li> <li data-svelte-h="svelte-2i5rmi"><a href="/">Results</a></li> <li data-svelte-h="svelte-gkbfed"><a href="/">Conclusion</a></li> <li data-svelte-h="svelte-13pguhh"><a href="/">About Us</a></li></ul> <div class="lg:hidden block text-white"><!-- HTML_TAG_START -->${hamburger_menu}<!-- HTML_TAG_END --></div></nav></header> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full flex flex-col items-center"><div class="px-[7vw] pb-[10vh] min-h-screen flex flex-col max-w-[1500px] items-center"><div class="z-50 px-[7vw] py-[2vh] backdrop-blur-[10px] fixed left-0 w-full border-b-[0.5px] border-[#5664803d]">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div> <main class="mt-[5rem] max-w-[80vw]">${slots.default ? slots.default({}) : ``}</main> <footer></footer></div> </div>`;
});
export {
  Layout as default
};
