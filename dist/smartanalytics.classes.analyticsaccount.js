"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhbmFseXRpY3MuY2xhc3Nlcy5hbmFseXRpY3NhY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRhbmFseXRpY3MuY2xhc3Nlcy5hbmFseXRpY3NhY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsOENBQTZDO0FBRTdDO0lBR0UsWUFBWSxVQUFrQixFQUFFLGFBQXFCO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFBO0lBQ2pDLENBQUM7SUFFRCxTQUFTLENBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGFBQXFCO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQTtJQUM1RixDQUFDO0NBQ0Y7QUFYRCw0Q0FXQyJ9