"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOrder = void 0;
var DeliveryOrder;
(function (DeliveryOrder) {
    let status;
    (function (status) {
        status["ORDER_RECEIVED"] = "order-received";
        status["ORDER_ACCEPTED"] = "order-accepted";
        status["ORDER_REJECTED"] = "order-rejected";
        status["ORDER_CANCELED"] = "order-canceled";
    })(status = DeliveryOrder.status || (DeliveryOrder.status = {}));
})(DeliveryOrder = exports.DeliveryOrder || (exports.DeliveryOrder = {}));
