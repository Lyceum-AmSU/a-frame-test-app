import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import "aframe";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".controls.svelte-z4zfsv{position:absolute;top:1em;left:1em;z-index:2}input.svelte-z4zfsv{height:2em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let box = "#4CC3D9";
  let sphere = "#EF2D5E";
  let cylinder = "#FFC65D";
  $$result.css.add(css);
  return `<div class="controls svelte-z4zfsv"><label><input type="color" class="svelte-z4zfsv"${add_attribute("value", box, 0)}>	
		box</label> <label><input type="color" class="svelte-z4zfsv"${add_attribute("value", sphere, 0)}>	
		sphere</label> <label><input type="color" class="svelte-z4zfsv"${add_attribute("value", cylinder, 0)}>	
		cylinder</label></div> <a-scene background="color: #FAFAFA"><a-box position="-1 0.5 -3" rotation="0 45 0"${add_attribute("color", box, 0)} shadow></a-box> <a-sphere position="0 1.25 -5" radius="1.25"${add_attribute("color", sphere, 0)} shadow></a-sphere> <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5"${add_attribute("color", cylinder, 0)} shadow></a-cylinder> <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane> </a-scene>`;
});
export {
  Page as default
};
