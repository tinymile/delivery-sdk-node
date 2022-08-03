/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressDescription } from './AddressDescription';
import type { GeocodedAddress } from './GeocodedAddress';

export type CompleteAddress = {
    geocodedAddress: GeocodedAddress;
    addressDescription: AddressDescription;
};

