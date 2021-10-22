<style lang="scss">
    @import "../../scss/_variables";

    .floating-panel-container {
        position: fixed;
        top: 0;
        padding: $padding;

        transition: left 0.5s ease-in;
        transition: right 0.5s ease-in;

        &.left {
            left: -100%; 
        }

        &.right {
            right: -100%;
        }

        &.show {
            &.left {
                left: 0; 
            }

            &.right {
                right: 0;
            }
        }

        > .floating-panel {
            padding: $padding;
            border-radius: $border-radius;
            background: gray;

            display: flex;
            flex-direction: column;

            > .floating-panel-content {
                flex: 1;
                overflow-x: hidden;
                overflow-y: auto;
            }
        }
    }
</style> 

<script lang="ts">
    import { Anchor } from "./anchor";
    
    export let anchor: Anchor = Anchor.Left;
    export let show: boolean = false;
</script>

<div class="floating-panel-container {anchor === Anchor.Left ? 'left' : 'right'}"
     class:show={show}>
    <div class="floating-panel">
        <header>
            <slot name="header"></slot>
        </header>
        <div class="floating-panel-content">
            <slot></slot>
        </div>
    </div>
</div>