export declare type InvalidClientActionError = {
    reason: InvalidClientActionError.reason;
    message: string;
};
export declare namespace InvalidClientActionError {
    enum reason {
        DEACTIVATED_CLIENT = "deactivated-client",
        INVALID_ARGUMENT = "invalid-argument",
        SELF_SERVICE_UNAVAILABLE = "self-service-unavailable"
    }
}
