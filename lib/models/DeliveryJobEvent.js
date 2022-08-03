"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryJobEvent = void 0;
var DeliveryJobEvent;
(function (DeliveryJobEvent) {
    let kind;
    (function (kind) {
        kind["DELIVERY_JOB_CREATED"] = "delivery-job-created";
        kind["DELIVERY_JOB_OFFERED_TO_COURIER"] = "delivery-job-offered-to-courier";
        kind["DELIVERY_JOB_REJECTED_BY_COURIER"] = "delivery-job-rejected-by-courier";
        kind["DELIVERY_JOB_ASSIGNED"] = "delivery-job-assigned";
        kind["DELIVERY_JOB_UNASSIGNED"] = "delivery-job-unassigned";
        kind["DELIVERY_PICKED_UP"] = "delivery-picked-up";
        kind["DELIVERY_COMPLETED"] = "delivery-completed";
        kind["DELIVERY_CANCELED"] = "delivery-canceled";
        kind["RECEIVED_NEW_COURIER_POSITION"] = "received-new-courier-position";
        kind["DELIVERY_JOB_OFFERED_TO_NEXT_COURIER"] = "delivery-job-offered-to-next-courier";
        kind["DELIVERY_JOB_REJECTED_BY_NEXT_COURIER"] = "delivery-job-rejected-by-next-courier";
        kind["DELIVERY_JOB_ACCEPTED_BY_NEXT_COURIER"] = "delivery-job-accepted-by-next-courier";
        kind["DELIVERY_HANDED_OVER"] = "delivery-handed-over";
        kind["UNASSIGNED_NEXT_COURIER"] = "unassigned-next-courier";
        kind["DELIVERY_JOB_DELEGATED_TO_NEXT_COURIER"] = "delivery-job-delegated-to-next-courier";
    })(kind = DeliveryJobEvent.kind || (DeliveryJobEvent.kind = {}));
})(DeliveryJobEvent = exports.DeliveryJobEvent || (exports.DeliveryJobEvent = {}));
