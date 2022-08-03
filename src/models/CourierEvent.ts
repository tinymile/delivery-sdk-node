/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Courier } from './Courier';

export type CourierEvent = {
    uuid: string;
    kind: CourierEvent.kind;
    producedAt: string;
    courierBefore?: Courier;
    courier: Courier;
};

export namespace CourierEvent {

    export enum kind {
        COURIER_RECEIVED_DELIVERY_OFFER = 'courier-received-delivery-offer',
        COURIER_ACCEPTED_DELIVERY_OFFER = 'courier-accepted-delivery-offer',
        COURIER_REJECTED_DELIVERY_OFFER = 'courier-rejected-delivery-offer',
        COURIER_LEFT_FOR_PICK_UP = 'courier-left-for-pick-up',
        COURIER_ARRIVED_AT_PICK_UP = 'courier-arrived-at-pick-up',
        COURIER_PICKED_UP_PACKAGE = 'courier-picked-up-package',
        COURIER_LEFT_FOR_DROP_OFF = 'courier-left-for-drop-off',
        COURIER_ARRIVED_AT_DROP_OFF = 'courier-arrived-at-drop-off',
        COURIER_DROPPED_OFF_PACKAGE = 'courier-dropped-off-package',
        COURIER_ABORTED_DELIVERY = 'courier-aborted-delivery',
        COURIER_POSITION_CHANGED = 'courier-position-changed',
        COURIER_STARTED_ACCEPTING_DELIVERIES = 'courier-started-accepting-deliveries',
        COURIER_STOPPED_ACCEPTING_DELIVERIES = 'courier-stopped-accepting-deliveries',
        COURIER_DELEGATED_ACTIVE_DELIVERY = 'courier-delegated-active-delivery',
        COURIER_PREPARED_TO_HAND_OVER = 'courier-prepared-to-hand-over',
        COURIER_HANDED_OVER_PACKAGE = 'courier-handed-over-package',
    }


}

