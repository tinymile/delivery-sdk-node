/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeliveryCharges } from './DeliveryCharges';
import type { DeliveryOrderParty } from './DeliveryOrderParty';
import type { DeliveryService } from './DeliveryService';

export type DeliveryOrder = {
    uuid: string;
    externalID: string;
    status: DeliveryOrder.status;
    receivedAt: string;
    shipper: DeliveryOrderParty;
    receiver: DeliveryOrderParty;
    pickUp: DeliveryService;
    dropOff: DeliveryService;
    deliveryCharges: DeliveryCharges;
    isMock: boolean;
};

export namespace DeliveryOrder {

    export enum status {
        ORDER_RECEIVED = 'order-received',
        ORDER_ACCEPTED = 'order-accepted',
        ORDER_REJECTED = 'order-rejected',
        ORDER_CANCELED = 'order-canceled',
    }


}

