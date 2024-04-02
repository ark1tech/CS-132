import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const logo = "/_app/immutable/assets/Logo.BGD9fciM.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="flex flex-row justify-between items-center" data-svelte-h="svelte-1qtlzwr"><div class="flex-none"><a href="/"><img${add_attribute("src", logo, 0)} alt="Pocari!"></a></div> <nav class="w-fit border-[1px] py-3 px-8 rounded-full border-[#5664803d] bg-[#21273915]"><ul class="flex flex-row justify-between font-light text-sm gap-[3rem]"><li><a href="/">Overview</a></li> <li><a href="/">Collection</a></li> <li><a href="/">Exploration</a></li> <li><a href="/">Modelling</a></li> <li><a href="/">Results</a></li> <li><a href="/">Conclusion</a></li> <li><a href="/">About Us</a></li></ul></nav> </header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen flex flex-col"><div class="px-[7rem] py-[1.5rem] backdrop-blur-md fixed left-0 w-full border-b-[0.5px] border-[#5664803d]">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div> <main class="px-[7rem] py-[10vh] mt-[1.5rem]">${slots.default ? slots.default({}) : ``}</main> <footer></footer> </div>`;
});
export {
  Layout as default
};
