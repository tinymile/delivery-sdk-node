/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeocodedAddress } from './GeocodedAddress';

export type CourierDestination = {
    geocodedAddress: GeocodedAddress;
    eta?: string;
};

