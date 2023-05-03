import type { Courier } from '../models/Courier';
import type { DeliveryJob } from '../models/DeliveryJob';
import type { DeliveryOrder } from '../models/DeliveryOrder';
import type { DeliveryOrderCreationRequest } from '../models/DeliveryOrderCreationRequest';
import type { DeliveryOrderQuote } from '../models/DeliveryOrderQuote';
import type { DeliveryOrderQuoteRequest } from '../models/DeliveryOrderQuoteRequest';
import type { Webhooks } from '../models/Webhooks';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DefaultService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Create command to open robot's lid
     * @param deliveryJobUuid
     * @param requestBody
     * @returns any Command was accepted.
     * @throws ApiError
     */
    createOpenRobotLidCommand(deliveryJobUuid: string, requestBody?: any): CancelablePromise<any>;
    /**
     * Fetch current courier of delivery job
     * @param deliveryJobUuid
     * @returns Courier Current courier for delivery job
     * @throws ApiError
     */
    getDeliveryJobCurrentCourier(deliveryJobUuid: string): CancelablePromise<Courier>;
    /**
     * Notify that order was handed to courier.
     * @param deliveryJobUuid
     * @param requestBody
     * @returns any Event received. If a robot is doing the delivery, this will also notify it to close the lid.
     * @throws ApiError
     */
    postOrderPickedUp(deliveryJobUuid: string, requestBody?: any): CancelablePromise<any>;
    /**
     * Notify that order was completed.
     * @param deliveryJobUuid
     * @param requestBody
     * @returns any Event received. If a robot is doing the delivery, this will also notify it to close the lid.
     * @throws ApiError
     */
    postOrderDroppedOff(deliveryJobUuid: string, requestBody?: any): CancelablePromise<any>;
    /**
     * Cancel an existing delivery job
     * @param deliveryJobUuid
     * @param requestBody
     * @returns any Cancellation request received.
     * @throws ApiError
     */
    postJobCancelled(deliveryJobUuid: string, requestBody?: any): CancelablePromise<any>;
    /**
     * Fetch delivery job
     * @param deliveryJobUuid
     * @returns DeliveryJob Delivery job
     * @throws ApiError
     */
    getDeliveryJob(deliveryJobUuid: string): CancelablePromise<DeliveryJob>;
    /**
     * Fetch delivery jobs of order
     * @param orderUuid
     * @returns DeliveryJob Delivery jobs associated with order
     * @throws ApiError
     */
    getJobsForOrder(orderUuid: string): CancelablePromise<Array<DeliveryJob>>;
    /**
     * Fetch a delivery order by its UUID
     * @param orderUuid
     * @returns DeliveryOrder Order information
     * @throws ApiError
     */
    getOrder(orderUuid: string): CancelablePromise<DeliveryOrder>;
    /**
     * Create an order
     * @param requestBody
     * @returns DeliveryOrder Order was created
     * @throws ApiError
     */
    createOrder(requestBody?: DeliveryOrderCreationRequest): CancelablePromise<DeliveryOrder>;
    /**
     * Fetch a delivery order using ID provided by client upon order creation
     * @param externalId
     * @returns DeliveryOrder Delivery Order information
     * @throws ApiError
     */
    getOrderByExternalId(externalId: string): CancelablePromise<DeliveryOrder>;
    /**
     * Request a quote for an order
     * @param requestBody
     * @returns DeliveryOrderQuote Quote was created
     * @throws ApiError
     */
    requestQuote(requestBody?: DeliveryOrderQuoteRequest): CancelablePromise<DeliveryOrderQuote>;
    /**
     * Configure webhooks
     * @param requestBody
     * @returns Webhooks webhooks set successfully
     * @throws ApiError
     */
    setWebhooks(requestBody?: Webhooks): CancelablePromise<Webhooks>;
}
