/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeliveryOrderRejection = {
    reason: DeliveryOrderRejection.reason;
    message: string;
};

export namespace DeliveryOrderRejection {

    export enum reason {
        OUTSIDE_DELIVERY_AREA = 'outside-delivery-area',
        PICK_UP_OUTSIDE_DELIVERY_AREA = 'pick-up-outside-delivery-area',
        DROP_OFF_OUTSIDE_DELIVERY_AREA = 'drop-off-outside-delivery-area',
        DELIVERY_DISTANCE_TOO_LARGE = 'delivery-distance-too-large',
        NO_CAPACITY = 'no-capacity',
        SCHEDULED_DELIVERY_NOT_SUPPORTED = 'scheduled-delivery-not-supported',
    }


}

