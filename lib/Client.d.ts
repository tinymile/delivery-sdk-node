import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { DefaultService } from './services/DefaultService';
declare type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class Client {
    readonly default: DefaultService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
