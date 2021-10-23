<style lang="scss">
    .map-container {
        flex: 1;
        min-height: 200px;
    }
</style>

<script lang="ts">
    import { onMount } from 'svelte';
    import { getCurrentLocation } from './queries/getCurrentLocation';

    let apiKey: string = "AIzaSyCQZBNNHjkw15jg_wI5_5QKXsarSMCRqVg";

    let mapTarget: HTMLElement;
    let map: google.maps.Map;

    onMount(async () => {

        try {
            const center = await getCurrentLocation();

            map = new google.maps.Map(mapTarget, {
                center,
                zoom: 8,
                disableDefaultUI: true
            });

        }
        catch (e) {
            console.error(e);    
        }
    });
</script>

<svelte:head>
    <script src="https://maps.googleapis.com/maps/api/js?key={apiKey}&v=weekly"></script>
</svelte:head>

<div bind:this={mapTarget} class="map-container">
</div>