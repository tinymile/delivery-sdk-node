"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidClientActionError = void 0;
var InvalidClientActionError;
(function (InvalidClientActionError) {
    let reason;
    (function (reason) {
        reason["DEACTIVATED_CLIENT"] = "deactivated-client";
        reason["INVALID_ARGUMENT"] = "invalid-argument";
    })(reason = InvalidClientActionError.reason || (InvalidClientActionError.reason = {}));
})(InvalidClientActionError = exports.InvalidClientActionError || (exports.InvalidClientActionError = {}));
