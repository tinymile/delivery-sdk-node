/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeocodedAddress } from './GeocodedAddress';

export type DeliveryOrderQuoteRequest = {
    pickUpAddress: GeocodedAddress;
    dropOffAddress: GeocodedAddress;
    isMock?: boolean;
};

