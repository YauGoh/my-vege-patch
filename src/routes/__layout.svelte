<style lang="scss">
    @import "material-design-icons/iconfont/material-icons.css";
    @import "svelte-material-ui/bare.css";
    @import "../scss/variables";
    @import "../scss/popups";
    @import "../scss/anchor";

    .main-menu {
        @extend .popup;
        @extend .popup--anchor-bottom;
        @extend .popup--anchor-left;

        transition: left 0.5s ease-in;

        &__link {
            font-weight: normal;
            display: block;

            &:hover {
                font-weight: bold;
            }
        }

        &--hidden {
            left: -100%;
        }
    }

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
    import Fab, { Icon } from '@smui/fab';
    import { onMount } from 'svelte';
    import { projectStore } from '../components/projects/stores/projectStore';

    let showMenu: boolean = false;
    const projects = projectStore.projects;

    const toggleMenu = (value: boolean) => showMenu = value;

    onMount(async () => {
        await projectStore.initialise();
    });
</script>

<div class="app-container">
    <slot></slot>
</div>

<div class="main-menu {!showMenu ? 'main-menu--hidden' : ''}" on:click={() => toggleMenu(false)}>
    <nav class="main-menu__nav">
        {#if ($projects.length === 0)}
            <span>No projects found</span>
        {/if}

        {#each $projects as project}
            <a class="main-menu__link" href="/projects/{project.name}">{project.name}</a>
        {/each}

        <a class="main-menu__link" href="/projects">Test VR</a>

        <button on:click={() => toggleMenu(false)}>Dismiss</button>
    </nav>
</div>

{#if (!showMenu)}
<div class="anchor anchor--bottom anchor--left">
    <Fab on:click={() => toggleMenu(true)}><Icon class="material-icons">menu</Icon></Fab>
</div>
{/if}
