/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvalidClientActionError = {
    reason: InvalidClientActionError.reason;
    message: string;
};

export namespace InvalidClientActionError {

    export enum reason {
        DEACTIVATED_CLIENT = 'deactivated-client',
        INVALID_ARGUMENT = 'invalid-argument',
        SELF_SERVICE_UNAVAILABLE = 'self-service-unavailable',
    }


}

