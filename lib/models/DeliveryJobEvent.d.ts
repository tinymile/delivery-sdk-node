import type { DeliveryJob } from './DeliveryJob';
export declare type DeliveryJobEvent = {
    uuid: string;
    kind: DeliveryJobEvent.kind;
    producedAt: string;
    deliveryJobBefore?: DeliveryJob;
    deliveryJob: DeliveryJob;
};
export declare namespace DeliveryJobEvent {
    enum kind {
        DELIVERY_JOB_CREATED = "delivery-job-created",
        DELIVERY_JOB_OFFERED_TO_COURIER = "delivery-job-offered-to-courier",
        DELIVERY_JOB_REJECTED_BY_COURIER = "delivery-job-rejected-by-courier",
        DELIVERY_JOB_ASSIGNED = "delivery-job-assigned",
        DELIVERY_JOB_UNASSIGNED = "delivery-job-unassigned",
        DELIVERY_PICKED_UP = "delivery-picked-up",
        DELIVERY_COMPLETED = "delivery-completed",
        DELIVERY_CANCELED = "delivery-canceled",
        RECEIVED_NEW_COURIER_POSITION = "received-new-courier-position",
        DELIVERY_JOB_OFFERED_TO_NEXT_COURIER = "delivery-job-offered-to-next-courier",
        DELIVERY_JOB_REJECTED_BY_NEXT_COURIER = "delivery-job-rejected-by-next-courier",
        DELIVERY_JOB_ACCEPTED_BY_NEXT_COURIER = "delivery-job-accepted-by-next-courier",
        DELIVERY_HANDED_OVER = "delivery-handed-over",
        UNASSIGNED_NEXT_COURIER = "unassigned-next-courier",
        DELIVERY_JOB_DELEGATED_TO_NEXT_COURIER = "delivery-job-delegated-to-next-courier"
    }
}
