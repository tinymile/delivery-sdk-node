"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryJob = void 0;
var DeliveryJob;
(function (DeliveryJob) {
    let stage;
    (function (stage) {
        stage["COURIER_ASSIGNMENT"] = "courier-assignment";
        stage["PICK_UP"] = "pick-up";
        stage["DROP_OFF"] = "drop-off";
        stage["DELIVERY_COMPLETED"] = "delivery-completed";
        stage["DELIVERY_CANCELED"] = "delivery-canceled";
    })(stage = DeliveryJob.stage || (DeliveryJob.stage = {}));
    let packageHolder;
    (function (packageHolder) {
        packageHolder["SHIPPER"] = "shipper";
        packageHolder["RECEIVER"] = "receiver";
        packageHolder["COURIER"] = "courier";
        packageHolder["UNKNOWN"] = "unknown";
    })(packageHolder = DeliveryJob.packageHolder || (DeliveryJob.packageHolder = {}));
})(DeliveryJob = exports.DeliveryJob || (exports.DeliveryJob = {}));
