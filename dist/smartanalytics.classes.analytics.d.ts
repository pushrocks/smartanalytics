export declare class Analytics {
    projectId: string;
    appName: string;
    apiEndPoint: string;
    secretKey: string;
    constructor(optionsArg: {
        projectId: string;
        appName: string;
        apiEndPoint: string;
        secretKey?: string;
    });
    recordEvent(eventIdArg: string, analyticsDataArg: any): Promise<void>;
}
