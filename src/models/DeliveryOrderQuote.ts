/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompleteAddress } from './CompleteAddress';
import type { DeliveryCharges } from './DeliveryCharges';

export type DeliveryOrderQuote = {
    uuid: string;
    receivedAt: string;
    goodUntil: string;
    pickUpAddress: CompleteAddress;
    pickUpAfter: string;
    pickUpDeadlineAt: string;
    dropOffAddress: CompleteAddress;
    dropOffAfter: string;
    dropOffDeadlineAt: string;
    deliveryCharges: DeliveryCharges;
    isMock: boolean;
};

