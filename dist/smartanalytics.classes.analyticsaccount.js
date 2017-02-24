"use strict";
const send = require("./smartanalytics.send");
class AnalyticsAccount {
    constructor(appNameArg, trackingIdArg) {
        this.appName = appNameArg;
        this.trackingId = trackingIdArg;
    }
    sendEvent(eventCategoryArg, eventActionArg, eventLabelArg) {
        send.event(this.trackingId, this.appName, eventCategoryArg, eventActionArg, eventLabelArg);
    }
}
exports.AnalyticsAccount = AnalyticsAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhbmFseXRpY3MuY2xhc3Nlcy5hbmFseXRpY3NhY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRhbmFseXRpY3MuY2xhc3Nlcy5hbmFseXRpY3NhY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw4Q0FBNkM7QUFFN0M7SUFHRSxZQUFZLFVBQWtCLEVBQUUsYUFBcUI7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUE7SUFDakMsQ0FBQztJQUVELFNBQVMsQ0FBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsYUFBcUI7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQzVGLENBQUM7Q0FDRjtBQVhELDRDQVdDIn0=