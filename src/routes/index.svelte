<style lang="scss">
    @import "material-design-icons/iconfont/material-icons.css";
    @import "svelte-material-ui/bare.css";

    .app-container {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        flex-direction: column;
    }
</style>

<script lang="ts">
    import ProjectBrowser from "../components/projects/projects-browser.svelte";
    import Map from "../components/common/map.svelte";
</script>

<div class="app-container">
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <Map></Map>
</div>

<ProjectBrowser></ProjectBrowser>