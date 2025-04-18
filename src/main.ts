import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";
import { findElement } from "./lib/utils/elementFinder";
import { CONFIG } from "./lib/utils/config";

import { toKebabCase } from "remeda";
import { state } from "./lib/utils/state.svelte";
import { Toaster } from "./lib/utils/toast";

mount(Toaster, {
    target: document.body,
    props: { richColors: true, position: "top-center" },
});

await state.init();

// waiting indefinitely until description tab is loaded AND not hidden
const descriptionTab = await findElement("[data-layout-path='/ts0/t0']", {
    timeout: 0,
    additionalRule: (el) => (el as HTMLElement).style.display !== "none",
});
console.log("description tab is active!");

const titleContainer = await findElement("div:has(> .text-title-large)", {
    parent: descriptionTab,
});
const app = document.createElement("div");
app.setAttribute("id", toKebabCase(CONFIG.APP_NAME));
app.style.cssText = "display: contents;";
titleContainer.parentElement?.before(app);

mount(App, {
    target: app,
});
