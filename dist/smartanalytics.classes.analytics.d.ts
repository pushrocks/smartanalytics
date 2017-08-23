export declare class Analytics {
    project: string;
    appName: string;
    apiEndPoint: string;
    secretKey: string;
    constructor(optionsArg: {
        projectArg: string;
        appNameArg: string;
        apiEndPointArg: string;
        secretKeyArg?: string;
    });
    recordEvent(identifierArg: string, analyticsDataArg: any): Promise<void>;
}
