export declare class Analytics {
    projectId: string;
    appName: string;
    apiEndPoint: string;
    secretKey: string;
    constructor(optionsArg: {
        projectIdArg: string;
        appNameArg: string;
        apiEndPointArg: string;
        secretKeyArg?: string;
    });
    recordEvent(eventIdentifierArg: string, analyticsDataArg: any): Promise<void>;
}
