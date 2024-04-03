import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CCYxdy4J.js","_app/immutable/chunks/scheduler.Dcu0g0pW.js","_app/immutable/chunks/index.vpYndAI0.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
export const stylesheets = ["_app/immutable/assets/2.DjpZ9fYx.css"];
export const fonts = [];
