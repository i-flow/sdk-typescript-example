export interface IAnyConnectServiceResponse {
    services: IAnyConnectServiceDefinitions[];
}

export interface IAnyConnectServiceDefinitions {
    name: string;
    description: string;
    url: string;
    method: string;
    query: IAnyConnectServiceParameter[];
    body: IAnyConnectServiceParameter[];
}

export interface IAnyConnectServiceParameter {
    name: string;
    type: string;
    description: string;
    example: string;
}
