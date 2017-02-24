"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        `&an=${eventLabelArg}`;
    send(payload);
};
let send = (requestBodyArg) => __awaiter(this, void 0, void 0, function* () {
    yield plugins.smartrequest.post('http://www.google-analytics.com/collect', {
        requestBody: requestBodyArg
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhbmFseXRpY3Muc2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0YW5hbHl0aWNzLnNlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBRXhDLFFBQUEsS0FBSyxHQUFHLENBQUMsYUFBcUIsRUFBRSxVQUFrQixFQUFFLGdCQUF3QixFQUFFLGNBQWMsRUFBRSxnQkFBd0IsTUFBTTtJQUNuSSxJQUFJLE9BQU8sR0FBVyxLQUFLO1FBQ3ZCLFFBQVEsYUFBYSxFQUFFO1FBQ3ZCLFVBQVU7UUFDVixRQUFRO1FBQ1IsVUFBVTtRQUNWLE9BQU8sZ0JBQWdCLEVBQUU7UUFDekIsT0FBTyxjQUFjLEVBQUU7UUFDdkIsT0FBTyxhQUFhLEVBQUU7UUFDdEIsU0FBUztRQUNULE9BQU8sYUFBYSxFQUFFLENBQUE7SUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ2pCLENBQUMsQ0FBQTtBQUdELElBQUksSUFBSSxHQUFHLENBQU8sY0FBc0I7SUFDcEMsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsRUFBRTtRQUN2RSxXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDLENBQUE7QUFDTixDQUFDLENBQUEsQ0FBQSJ9