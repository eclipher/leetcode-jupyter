<script lang="ts" module>
    export const getTitle = async () =>
        (await findElement(".text-title-large")).textContent ?? "";
</script>

<script lang="ts">
    import "./app.css";
    import Button from "./lib/components/Button.svelte";
    import { findElement } from "./lib/utils/elementFinder";
    import { copy } from "./lib/utils/copy.svelte";
    import { state } from "./lib/utils/state.svelte";

    async function copyTitle() {
        copy(await getTitle());
    }
</script>

<Button onclick={copyTitle}>
    {state.site === "cn" ? "复制标题" : "Copy Title"}
</Button>
