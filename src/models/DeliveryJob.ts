/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompleteAddress } from './CompleteAddress';
import type { DeliveryCharges } from './DeliveryCharges';

export type DeliveryJob = {
    uuid: string;
    stage: DeliveryJob.stage;
    deliveryOrderUUID: string;
    pickUpAddress: CompleteAddress;
    pickUpEstimatedAt: string;
    dropOffAddress: CompleteAddress;
    dropOffEstimatedAt: string;
    currentCourierUUID?: string;
    nextCourierUUID?: string;
    completedAt?: string;
    deliveryCharges: DeliveryCharges;
    packageHolder: DeliveryJob.packageHolder;
};

export namespace DeliveryJob {

    export enum stage {
        COURIER_ASSIGNMENT = 'courier-assignment',
        PICK_UP = 'pick-up',
        DROP_OFF = 'drop-off',
        DELIVERY_COMPLETED = 'delivery-completed',
        DELIVERY_CANCELED = 'delivery-canceled',
    }

    export enum packageHolder {
        SHIPPER = 'shipper',
        RECEIVER = 'receiver',
        COURIER = 'courier',
        UNKNOWN = 'unknown',
    }


}

