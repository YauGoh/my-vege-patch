<style lang="scss">
    video {
        flex: 1;
    }
</style>

<script lang="ts">
    import { onMount } from 'svelte';
    import { getCameraStream } from './queries/getCameraStream';

    let video: HTMLVideoElement;

    onMount(async () => {
        try {
            video.srcObject = await getCameraStream();
        }
        catch(error) {
            console.error("Error with camera");
            console.error(error);
        }
    });

</script>

<video bind:this={video} autoplay={true}>
    <track kind="captions" />
</video>