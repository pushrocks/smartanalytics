"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartanalytics.plugins");
exports.event = (trackingIdArg, appNameArg, eventCategoryArg, eventActionArg, eventLabelArg = 'null') => {
    let payload = 'v=1' +
        `&tid=${trackingIdArg}` +
        '&cid=555' +
        '&aip=1' +
        '&t=event' +
        `&ec=${eventCategoryArg}` +
        `&ea=${eventActionArg}` +
        `&el=${eventLabelArg}` +
        '&ev=300' +
        `&an=${appNameArg}`;
    send(payload);
};
let send = (requestBodyArg) => __awaiter(this, void 0, void 0, function* () {
    yield plugins.smartrequest.post('https://www.google-analytics.com/collect', {
        requestBody: requestBodyArg
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhbmFseXRpY3Muc2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0YW5hbHl0aWNzLnNlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUV4QyxRQUFBLEtBQUssR0FBRyxDQUFDLGFBQXFCLEVBQUUsVUFBa0IsRUFBRSxnQkFBd0IsRUFBRSxjQUFjLEVBQUUsZ0JBQXdCLE1BQU07SUFDckksSUFBSSxPQUFPLEdBQVcsS0FBSztRQUN6QixRQUFRLGFBQWEsRUFBRTtRQUN2QixVQUFVO1FBQ1YsUUFBUTtRQUNSLFVBQVU7UUFDVixPQUFPLGdCQUFnQixFQUFFO1FBQ3pCLE9BQU8sY0FBYyxFQUFFO1FBQ3ZCLE9BQU8sYUFBYSxFQUFFO1FBQ3RCLFNBQVM7UUFDVCxPQUFPLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNmLENBQUMsQ0FBQTtBQUdELElBQUksSUFBSSxHQUFHLENBQU8sY0FBc0I7SUFDdEMsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywwQ0FBMEMsRUFBRTtRQUMxRSxXQUFXLEVBQUUsY0FBYztLQUM1QixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEsQ0FBQSJ9