

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Xu5-HmQX.js","_app/immutable/chunks/scheduler.D3hV8Tfu.js","_app/immutable/chunks/index.C40e2whc.js","_app/immutable/chunks/entry.DtCZ-AVF.js"];
export const stylesheets = [];
export const fonts = [];
