import type { IQueryHandler } from './query';

export interface GeoLocation {
	lat: number;
	lng: number;
}

export const getCurrentLocation: IQueryHandler<void, GeoLocation> = () => {
	const promise = new Promise<GeoLocation>((resolve, reject) => {
		window.navigator.geolocation.getCurrentPosition((location: GeolocationPosition) =>
			resolve({ lat: location.coords.latitude, lng: location.coords.longitude })
		),
			(error: GeolocationPositionError) => reject(error.message);
	});

	return promise;
};
