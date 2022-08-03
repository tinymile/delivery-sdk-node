export declare type SetWebhookError = {
    message: string;
    reason: SetWebhookError.reason;
};
export declare namespace SetWebhookError {
    enum reason {
        INVALID_URL = "invalid-url"
    }
}
