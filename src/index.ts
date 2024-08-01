import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { ApiaryService } from "./pb/apiary/v1/service_connect";

export type ClientConfig = {
    baseUrl: string;
};

export const getClient = (config: ClientConfig) => {
    const transport = createGrpcTransport({
        baseUrl: config.baseUrl,
        httpVersion: "2",
    });
    return createPromiseClient(ApiaryService, transport);
};

