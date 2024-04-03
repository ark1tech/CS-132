

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.qkYH41bP.js","_app/immutable/chunks/scheduler.Dcu0g0pW.js","_app/immutable/chunks/index.vpYndAI0.js"];
export const stylesheets = ["_app/immutable/assets/0.IiU0fcOC.css"];
export const fonts = [];
