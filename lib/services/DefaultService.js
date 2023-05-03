"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultService = void 0;
class DefaultService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Create command to open robot's lid
     * @param deliveryJobUuid
     * @param requestBody
     * @returns any Command was accepted.
     * @throws ApiError
     */
    createOpenRobotLidCommand(deliveryJobUuid, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/delivery-jobs/{delivery_job_uuid}/couriers/current/open-lid',
            path: {
                'delivery_job_uuid': deliveryJobUuid,
            },
            body: requestBody,
            errors: {
                400: `Command was rejected`,
            },
        });
    }
    /**
     * Fetch current courier of delivery job
     * @param deliveryJobUuid
     * @returns Courier Current courier for delivery job
     * @throws ApiError
     */
    getDeliveryJobCurrentCourier(deliveryJobUuid) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/delivery-jobs/{delivery_job_uuid}/couriers/current',
            path: {
                'delivery_job_uuid': deliveryJobUuid,
            },
        });
    }
    /**
     * Notify that order was handed to courier.
     * @param deliveryJobUuid
     * @param requestBody
     * @returns any Event received. If a robot is doing the delivery, this will also notify it to close the lid.
     * @throws ApiError
     */
    postOrderPickedUp(deliveryJobUuid, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/delivery-jobs/{delivery_job_uuid}/events/order-picked-up',
            path: {
                'delivery_job_uuid': deliveryJobUuid,
            },
            body: requestBody,
            errors: {
                400: `Event was rejected`,
            },
        });
    }
    /**
     * Notify that order was completed.
     * @param deliveryJobUuid
     * @param requestBody
     * @returns any Event received. If a robot is doing the delivery, this will also notify it to close the lid.
     * @throws ApiError
     */
    postOrderDroppedOff(deliveryJobUuid, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/delivery-jobs/{delivery_job_uuid}/events/order-dropped-off',
            path: {
                'delivery_job_uuid': deliveryJobUuid,
            },
            body: requestBody,
            errors: {
                400: `Event was rejected`,
            },
        });
    }
    /**
     * Cancel an existing delivery job
     * @param deliveryJobUuid
     * @param requestBody
     * @returns any Cancellation request received.
     * @throws ApiError
     */
    postJobCancelled(deliveryJobUuid, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/delivery-jobs/{delivery_job_uuid}/commands/cancel',
            path: {
                'delivery_job_uuid': deliveryJobUuid,
            },
            body: requestBody,
            errors: {
                400: `Cancellation request was rejected.`,
            },
        });
    }
    /**
     * Fetch delivery job
     * @param deliveryJobUuid
     * @returns DeliveryJob Delivery job
     * @throws ApiError
     */
    getDeliveryJob(deliveryJobUuid) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/delivery-jobs/{delivery_job_uuid}',
            path: {
                'delivery_job_uuid': deliveryJobUuid,
            },
        });
    }
    /**
     * Fetch delivery jobs of order
     * @param orderUuid
     * @returns DeliveryJob Delivery jobs associated with order
     * @throws ApiError
     */
    getJobsForOrder(orderUuid) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/orders/{order_uuid}/delivery-jobs',
            path: {
                'order_uuid': orderUuid,
            },
        });
    }
    /**
     * Fetch a delivery order by its UUID
     * @param orderUuid
     * @returns DeliveryOrder Order information
     * @throws ApiError
     */
    getOrder(orderUuid) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/orders/{order_uuid}',
            path: {
                'order_uuid': orderUuid,
            },
        });
    }
    /**
     * Create an order
     * @param requestBody
     * @returns DeliveryOrder Order was created
     * @throws ApiError
     */
    createOrder(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Order was rejected`,
                409: `An order with the same ID already exists`,
                429: `Too many requests`,
            },
        });
    }
    /**
     * Fetch a delivery order using ID provided by client upon order creation
     * @param externalId
     * @returns DeliveryOrder Delivery Order information
     * @throws ApiError
     */
    getOrderByExternalId(externalId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/external-ids/{external_id}/order',
            path: {
                'external_id': externalId,
            },
        });
    }
    /**
     * Request a quote for an order
     * @param requestBody
     * @returns DeliveryOrderQuote Quote was created
     * @throws ApiError
     */
    requestQuote(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/quotes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Quote was rejected`,
                429: `Too many requests`,
            },
        });
    }
    /**
     * Configure webhooks
     * @param requestBody
     * @returns Webhooks webhooks set successfully
     * @throws ApiError
     */
    setWebhooks(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/webhooks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Can't set webhooks`,
            },
        });
    }
}
exports.DefaultService = DefaultService;
