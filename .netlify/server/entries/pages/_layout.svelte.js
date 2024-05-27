import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const logo = "/_app/immutable/assets/Logo.CMp_UEwa.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const hamburger_menu = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.3"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>`;
  return `<div class="z-10 flex flex-col items-center px-[7dvw] fixed left-0 w-full bg-[#ffffff] backdrop-blur-xl border-b-[0.7px] border-[#0d121c3d]"> <header class="flex flex-row justify-between items-center min-w-full max-w-[1500px] px-[3dvw] py-[2dvh]"><div class="flex-none" data-svelte-h="svelte-1cazwm4"><a href="/"><img${add_attribute("src", logo, 0)} alt="Pocari!"></a></div> <nav class="text-[#505050]"><ul class="flex-row justify-between font-light text-sm gap-[2.3rem] lg:flex hidden"><li><a href="#overview" class="hover:font-bold duration-300 ease-in-out transition-all" data-svelte-h="svelte-1ntff1k">Overview</a></li> <li><a href="#collection" class="hover:font-bold duration-300 ease-in-out transition-all" data-svelte-h="svelte-1shcby8">Collection</a></li> <li data-svelte-h="svelte-1pin7wd"><a href="/" class="hover:font-bold duration-300 ease-in-out transition-all">Exploration</a></li> <li data-svelte-h="svelte-akgvkx"><a href="/" class="hover:font-bold duration-300 ease-in-out transition-all">Modelling</a></li> <li data-svelte-h="svelte-1g1uheo"><a href="/" class="hover:font-bold duration-300 ease-in-out transition-all">Results</a></li> <li data-svelte-h="svelte-1hu74hf"><a href="/" class="hover:font-bold duration-300 ease-in-out transition-all">Conclusion</a></li> <li><a href="#aboutus" class="hover:font-bold duration-300 ease-in-out transition-all" data-svelte-h="svelte-15njp0g">About Us</a></li></ul> <div class="lg:hidden block"><!-- HTML_TAG_START -->${hamburger_menu}<!-- HTML_TAG_END --></div></nav></header> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full flex flex-col items-center"><div class="px-[10dvw] min-h-screen flex flex-col w-full max-w-[1500px] items-center">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="w-full flex flex-col items-center">${slots.default ? slots.default({}) : ``}</main></div> </div>`;
});
export {
  Layout as default
};
