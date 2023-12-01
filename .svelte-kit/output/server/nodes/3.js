

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/a-frame/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.561e9996.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.d82ffc0f.js"];
export const stylesheets = ["_app/immutable/assets/3.a5fa63d3.css"];
export const fonts = [];
