"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultService = exports.SetWebhookError = exports.InvalidClientActionError = exports.DeliveryOrderRejection = exports.DeliveryOrder = exports.DeliveryJobEvent = exports.DeliveryJob = exports.CourierEvent = exports.Courier = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.BaseHttpRequest = exports.ApiError = exports.Client = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
var Client_1 = require("./Client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return Client_1.Client; } });
var ApiError_1 = require("./core/ApiError");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return ApiError_1.ApiError; } });
var BaseHttpRequest_1 = require("./core/BaseHttpRequest");
Object.defineProperty(exports, "BaseHttpRequest", { enumerable: true, get: function () { return BaseHttpRequest_1.BaseHttpRequest; } });
var CancelablePromise_1 = require("./core/CancelablePromise");
Object.defineProperty(exports, "CancelablePromise", { enumerable: true, get: function () { return CancelablePromise_1.CancelablePromise; } });
Object.defineProperty(exports, "CancelError", { enumerable: true, get: function () { return CancelablePromise_1.CancelError; } });
var OpenAPI_1 = require("./core/OpenAPI");
Object.defineProperty(exports, "OpenAPI", { enumerable: true, get: function () { return OpenAPI_1.OpenAPI; } });
var Courier_1 = require("./models/Courier");
Object.defineProperty(exports, "Courier", { enumerable: true, get: function () { return Courier_1.Courier; } });
var CourierEvent_1 = require("./models/CourierEvent");
Object.defineProperty(exports, "CourierEvent", { enumerable: true, get: function () { return CourierEvent_1.CourierEvent; } });
var DeliveryJob_1 = require("./models/DeliveryJob");
Object.defineProperty(exports, "DeliveryJob", { enumerable: true, get: function () { return DeliveryJob_1.DeliveryJob; } });
var DeliveryJobEvent_1 = require("./models/DeliveryJobEvent");
Object.defineProperty(exports, "DeliveryJobEvent", { enumerable: true, get: function () { return DeliveryJobEvent_1.DeliveryJobEvent; } });
var DeliveryOrder_1 = require("./models/DeliveryOrder");
Object.defineProperty(exports, "DeliveryOrder", { enumerable: true, get: function () { return DeliveryOrder_1.DeliveryOrder; } });
var DeliveryOrderRejection_1 = require("./models/DeliveryOrderRejection");
Object.defineProperty(exports, "DeliveryOrderRejection", { enumerable: true, get: function () { return DeliveryOrderRejection_1.DeliveryOrderRejection; } });
var InvalidClientActionError_1 = require("./models/InvalidClientActionError");
Object.defineProperty(exports, "InvalidClientActionError", { enumerable: true, get: function () { return InvalidClientActionError_1.InvalidClientActionError; } });
var SetWebhookError_1 = require("./models/SetWebhookError");
Object.defineProperty(exports, "SetWebhookError", { enumerable: true, get: function () { return SetWebhookError_1.SetWebhookError; } });
var DefaultService_1 = require("./services/DefaultService");
Object.defineProperty(exports, "DefaultService", { enumerable: true, get: function () { return DefaultService_1.DefaultService; } });
