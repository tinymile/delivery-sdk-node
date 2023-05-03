import type { CompleteAddress } from './CompleteAddress';
import type { DeliveryOrderParty } from './DeliveryOrderParty';
import type { DeliveryServiceNotifyParty } from './DeliveryServiceNotifyParty';
export declare type DeliveryOrderCreationRequest = {
    externalID: string;
    shipper: DeliveryOrderParty;
    receiver: DeliveryOrderParty;
    pickUpAddress: CompleteAddress;
    pickUpNotifyParty?: DeliveryServiceNotifyParty;
    pickUpDeadlineAt?: string;
    pickUpNotes?: string;
    pickUpAfter?: string;
    dropOffAddress: CompleteAddress;
    dropOffNotifyParty?: DeliveryServiceNotifyParty;
    dropOffDeadlineAt?: string;
    dropOffNotes?: string;
    isMock?: boolean;
};
