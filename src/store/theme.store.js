import { browser } from "$app/environment";
import { writable } from "svelte/store";

const toBoolean = (value) => value === "true";
export let isLightMode = writable(
  browser ? toBoolean(localStorage.getItem("isLightMode")) ?? true : true
);

isLightMode.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("isLightMode", value);
  }
});
