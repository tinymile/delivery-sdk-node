/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompleteAddress } from './CompleteAddress';
import type { DeliveryServiceNotifyParty } from './DeliveryServiceNotifyParty';

export type DeliveryService = {
    address: CompleteAddress;
    serviceAfter: string;
    deadlineAt: string;
    notes: string;
    isSelfServiceAvailable: boolean;
    notifyParty: DeliveryServiceNotifyParty;
};

