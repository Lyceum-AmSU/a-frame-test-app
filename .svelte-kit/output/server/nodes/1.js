

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.85712f9e.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.d82ffc0f.js","_app/immutable/chunks/stores.4ada7090.js","_app/immutable/chunks/singletons.88ad2f00.js","_app/immutable/chunks/index.14349a18.js"];
export const stylesheets = [];
export const fonts = [];
