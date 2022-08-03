"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courier = void 0;
var Courier;
(function (Courier) {
    let type;
    (function (type) {
        type["ROBOT"] = "robot";
        type["CONVENTIONAL"] = "conventional";
    })(type = Courier.type || (Courier.type = {}));
    let state;
    (function (state) {
        state["UNSPECIFIED"] = "unspecified";
        state["ANALYZING_DELIVERY_OFFER"] = "analyzing-delivery-offer";
        state["PLANNING_PICK_UP_ROUTE"] = "planning-pick-up-route";
        state["EN_ROUTE_TO_PICK_UP"] = "en-route-to-pick-up";
        state["WAITING_FOR_PICK_UP"] = "waiting-for-pick-up";
        state["PLANNING_DROP_OFF_ROUTE"] = "planning-drop-off-route";
        state["EN_ROUTE_TO_DROP_OFF"] = "en-route-to-drop-off";
        state["WAITING_FOR_DROP_OFF"] = "waiting-for-drop-off";
        state["WAITING_TO_HAND_OVER"] = "waiting-to-hand-over";
    })(state = Courier.state || (Courier.state = {}));
})(Courier = exports.Courier || (exports.Courier = {}));
