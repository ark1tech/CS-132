

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D9idoGPV.js","_app/immutable/chunks/scheduler.D3hV8Tfu.js","_app/immutable/chunks/index.C40e2whc.js"];
export const stylesheets = ["_app/immutable/assets/0.CXGrgdlj.css"];
export const fonts = [];
