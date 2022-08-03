/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Courier } from '../models/Courier';
import type { DeliveryJob } from '../models/DeliveryJob';
import type { DeliveryOrder } from '../models/DeliveryOrder';
import type { DeliveryOrderCreationRequest } from '../models/DeliveryOrderCreationRequest';
import type { DeliveryOrderQuote } from '../models/DeliveryOrderQuote';
import type { DeliveryOrderQuoteRequest } from '../models/DeliveryOrderQuoteRequest';
import type { Webhooks } from '../models/Webhooks';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Configure webhooks
     * @param requestBody
     * @returns Webhooks webhooks set successfully
     * @throws ApiError
     */
    public setWebhooks(
        requestBody?: Webhooks,
    ): CancelablePromise<Webhooks> {
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

    /**
     * Request a quote for an order
     * @param requestBody
     * @returns DeliveryOrderQuote Quote was created
     * @throws ApiError
     */
    public requestQuote(
        requestBody?: DeliveryOrderQuoteRequest,
    ): CancelablePromise<DeliveryOrderQuote> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/quotes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Quote was rejected`,
            },
        });
    }

    /**
     * Create an order
     * @param requestBody
     * @returns DeliveryOrder Order was created
     * @throws ApiError
     */
    public createOrder(
        requestBody?: DeliveryOrderCreationRequest,
    ): CancelablePromise<DeliveryOrder> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Order was rejected`,
                409: `An order with the same ID already exists`,
            },
        });
    }

    /**
     * Fetch delivery jobs of order
     * @param orderUuid
     * @returns DeliveryJob Delivery jobs associated with order
     * @throws ApiError
     */
    public getJobsForOrder(
        orderUuid: string,
    ): CancelablePromise<Array<DeliveryJob>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/orders/{order_uuid}/delivery-jobs',
            path: {
                'order_uuid': orderUuid,
            },
        });
    }

    /**
     * Create command to open robot's lid
     * @param deliveryJobUuid
     * @param requestBody
     * @returns any Command was accepted.
     * @throws ApiError
     */
    public createOpenRobotLidCommand(
        deliveryJobUuid: string,
        requestBody?: any,
    ): CancelablePromise<any> {
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
    public getDeliveryJobCurrentCourier(
        deliveryJobUuid: string,
    ): CancelablePromise<Courier> {
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
    public postOrderPickedUp(
        deliveryJobUuid: string,
        requestBody?: any,
    ): CancelablePromise<any> {
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
    public postOrderDroppedOff(
        deliveryJobUuid: string,
        requestBody?: any,
    ): CancelablePromise<any> {
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
     * Fetch delivery job
     * @param deliveryJobUuid
     * @returns DeliveryJob Delivery job
     * @throws ApiError
     */
    public getDeliveryJob(
        deliveryJobUuid: string,
    ): CancelablePromise<DeliveryJob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/delivery-jobs/{delivery_job_uuid}',
            path: {
                'delivery_job_uuid': deliveryJobUuid,
            },
        });
    }

}
