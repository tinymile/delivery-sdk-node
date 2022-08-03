/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetWebhookError = {
    message: string;
    reason: SetWebhookError.reason;
};

export namespace SetWebhookError {

    export enum reason {
        INVALID_URL = 'invalid-url',
    }


}

