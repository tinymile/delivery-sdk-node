/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CourierDestination } from './CourierDestination';
import type { GeocodeLogEntry } from './GeocodeLogEntry';

export type Courier = {
    uuid: string;
    type: Courier.type;
    name: string;
    state: Courier.state;
    isAcceptingDeliveries: boolean;
    lastKnownPosition?: GeocodeLogEntry;
    activeDeliveryUuid: string;
    destination?: CourierDestination;
};

export namespace Courier {

    export enum type {
        ROBOT = 'robot',
        CONVENTIONAL = 'conventional',
    }

    export enum state {
        UNSPECIFIED = 'unspecified',
        ANALYZING_DELIVERY_OFFER = 'analyzing-delivery-offer',
        PLANNING_PICK_UP_ROUTE = 'planning-pick-up-route',
        EN_ROUTE_TO_PICK_UP = 'en-route-to-pick-up',
        WAITING_FOR_PICK_UP = 'waiting-for-pick-up',
        PLANNING_DROP_OFF_ROUTE = 'planning-drop-off-route',
        EN_ROUTE_TO_DROP_OFF = 'en-route-to-drop-off',
        WAITING_FOR_DROP_OFF = 'waiting-for-drop-off',
        WAITING_TO_HAND_OVER = 'waiting-to-hand-over',
    }


}

