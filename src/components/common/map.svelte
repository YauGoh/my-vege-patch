<style lang="scss">
    .map-container {
        flex: 1;
        min-height: 200px;
    }
</style>

<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import { GeoLocation, getCurrentLocation } from './queries/getCurrentLocation';

    let apiKey: string = "AIzaSyCQZBNNHjkw15jg_wI5_5QKXsarSMCRqVg";

    let mapTarget: HTMLElement;
    let map: google.maps.Map;
    let marker: google.maps.Marker;

    const dispatcher = createEventDispatcher();

    const onClicked = (event: google.maps.MapMouseEvent) => {
        const location: GeoLocation = { lat: event.latLng.lat(), lng: event.latLng.lng() }

        marker.setPosition(location);

        dispatcher("locationChanged", location);
    }

    onMount(async () => {

        try {
            const center = await getCurrentLocation();

            map = new google.maps.Map(mapTarget, {
                center,
                zoom: 8,
                disableDefaultUI: true
            });

            marker = new google.maps.Marker({ position: center, map });

            map.addListener("click", onClicked);
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