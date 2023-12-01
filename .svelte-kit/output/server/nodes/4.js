import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/4.141938eb.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.d82ffc0f.js"];
export const stylesheets = [];
export const fonts = [];
