"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourierEvent = void 0;
var CourierEvent;
(function (CourierEvent) {
    let kind;
    (function (kind) {
        kind["COURIER_RECEIVED_DELIVERY_OFFER"] = "courier-received-delivery-offer";
        kind["COURIER_ACCEPTED_DELIVERY_OFFER"] = "courier-accepted-delivery-offer";
        kind["COURIER_REJECTED_DELIVERY_OFFER"] = "courier-rejected-delivery-offer";
        kind["COURIER_LEFT_FOR_PICK_UP"] = "courier-left-for-pick-up";
        kind["COURIER_ARRIVED_AT_PICK_UP"] = "courier-arrived-at-pick-up";
        kind["COURIER_PICKED_UP_PACKAGE"] = "courier-picked-up-package";
        kind["COURIER_LEFT_FOR_DROP_OFF"] = "courier-left-for-drop-off";
        kind["COURIER_ARRIVED_AT_DROP_OFF"] = "courier-arrived-at-drop-off";
        kind["COURIER_DROPPED_OFF_PACKAGE"] = "courier-dropped-off-package";
        kind["COURIER_ABORTED_DELIVERY"] = "courier-aborted-delivery";
        kind["COURIER_POSITION_CHANGED"] = "courier-position-changed";
        kind["COURIER_STARTED_ACCEPTING_DELIVERIES"] = "courier-started-accepting-deliveries";
        kind["COURIER_STOPPED_ACCEPTING_DELIVERIES"] = "courier-stopped-accepting-deliveries";
        kind["COURIER_DELEGATED_ACTIVE_DELIVERY"] = "courier-delegated-active-delivery";
        kind["COURIER_PREPARED_TO_HAND_OVER"] = "courier-prepared-to-hand-over";
        kind["COURIER_HANDED_OVER_PACKAGE"] = "courier-handed-over-package";
    })(kind = CourierEvent.kind || (CourierEvent.kind = {}));
})(CourierEvent = exports.CourierEvent || (exports.CourierEvent = {}));
