import type { IQueryHandler } from "./query";

export const getCameraStream: IQueryHandler<void, MediaStream> = () => window.navigator.mediaDevices.getUserMedia({ video: true });
