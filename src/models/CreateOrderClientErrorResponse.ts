/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeliveryOrderRejection } from './DeliveryOrderRejection';
import type { InvalidClientActionError } from './InvalidClientActionError';

export type CreateOrderClientErrorResponse = (DeliveryOrderRejection | InvalidClientActionError);

