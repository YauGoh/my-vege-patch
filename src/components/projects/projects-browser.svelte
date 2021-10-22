<style lang="scss">
    @import "../../scss/_variables.scss";

    h1 {
        color: pink;
    }

    .start-panel {
        padding: $padding;

        position:fixed;
        right: 0;
        bottom: 0;
    }
</style>

<script lang="ts">
    import { Anchor } from "../common";
    import FloatingPanel from "../common/floating-panel.svelte";
    import FloatingPanelHeader from "../common/floating-panel-header.svelte";
    import AddProjectForm from "../projects/add-project-form.svelte";

    import Fab, { Icon } from '@smui/fab';

    let isAddPanelVisible: boolean = false;

    const showAdd = () => isAddPanelVisible = true;
</script>

<div>Huh??</div>

<FloatingPanel anchor="{Anchor.Left}" show="{false}">
    <h1 slot="header">Left</h1>
    This is anchored Left
</FloatingPanel>

<div class="start-panel">
    <Fab>
        <Icon class="material-icons" on:click={showAdd}>add</Icon>
    </Fab>
</div>

<FloatingPanel 
    anchor={Anchor.Right}
    show={isAddPanelVisible}>
    <FloatingPanelHeader slot="header" on:click={() => isAddPanelVisible = false}><h1>New Project</h1></FloatingPanelHeader>
    <AddProjectForm />
</FloatingPanel>