import { createPromiseClient, PromiseClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { ApiaryService } from "./pb/apiary/v1/service_connect";

/**
 * This module provides a client for the ApiaryService.
 * @module
 */

/**
 * Configuration for the client.
 */
export type ClientConfig = {
    baseUrl: string;
};

/**
 * Create a client for the ApiaryService.
 * @param config
 * @returns A client for the ApiaryService.
 */
export const getClient = (config: ClientConfig): PromiseClient<typeof ApiaryService> => {
    const transport = createGrpcTransport({
        baseUrl: config.baseUrl,
        httpVersion: "2",
    });
    return createPromiseClient(ApiaryService, transport);
};

export * from "./pb/apiary/v1/models_pb";
export * from "./pb/apiary/v1/responses_pb";
export * from "./pb/apiary/v1/requests_pb";
export * from "./pb/apiary/v1/service_connect";
