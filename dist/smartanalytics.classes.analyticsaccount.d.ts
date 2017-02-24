export declare class AnalyticsAccount {
    appName: string;
    trackingId: string;
    constructor(appNameArg: string, trackingIdArg: string);
    sendEvent(eventCategoryArg: any, eventActionArg: any, eventLabelArg: string): void;
}
