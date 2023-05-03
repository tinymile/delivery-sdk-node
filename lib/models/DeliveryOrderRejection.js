"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOrderRejection = void 0;
var DeliveryOrderRejection;
(function (DeliveryOrderRejection) {
    let reason;
    (function (reason) {
        reason["OUTSIDE_DELIVERY_AREA"] = "outside-delivery-area";
        reason["PICK_UP_OUTSIDE_DELIVERY_AREA"] = "pick-up-outside-delivery-area";
        reason["DROP_OFF_OUTSIDE_DELIVERY_AREA"] = "drop-off-outside-delivery-area";
        reason["DELIVERY_DISTANCE_TOO_LARGE"] = "delivery-distance-too-large";
        reason["NO_CAPACITY"] = "no-capacity";
        reason["SCHEDULED_DELIVERY_NOT_SUPPORTED"] = "scheduled-delivery-not-supported";
    })(reason = DeliveryOrderRejection.reason || (DeliveryOrderRejection.reason = {}));
})(DeliveryOrderRejection = exports.DeliveryOrderRejection || (exports.DeliveryOrderRejection = {}));
