import type { IQueryHandler } from './query';

export interface Location {
	lat: number;
	lng: number;
}

export const getCurrentLocation: IQueryHandler<void, Location> = () => {
	const promise = new Promise<Location>((resolve, reject) => {
		window.navigator.geolocation.getCurrentPosition((location: GeolocationPosition) =>
			resolve({ lat: location.coords.latitude, lng: location.coords.longitude })
		),
			(error: GeolocationPositionError) => reject(error.message);
	});

	return promise;
};
