<style lang="scss">
    .header {
        display: flex;
        flex-direction: row;
        
        > .header-content {
            flex: 1;
        }
    }
</style>

<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import IconButton from '@smui/icon-button';

    const dispatch = createEventDispatcher();

    const onClicked = () => dispatch('click');
</script>

<div class="header">
    <div class="header-content">
        <slot></slot>
    </div>

    <IconButton class="material-icons" on:click={onClicked}>close</IconButton>
</div>