import type { GeocodedAddress } from './GeocodedAddress';
export declare type DeliveryOrderQuoteRequest = {
    pickUpAddress: GeocodedAddress;
    dropOffAddress: GeocodedAddress;
    isMock?: boolean;
};
