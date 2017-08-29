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
class Analytics {
    constructor(optionsArg) {
        this.secretKey = '';
        this.projectId = optionsArg.projectId;
        this.appName = optionsArg.appName;
        this.apiEndPoint = optionsArg.apiEndPoint;
        if (optionsArg.secretKey) {
            this.secretKey = optionsArg.secretKey;
        }
    }
    recordEvent(eventIdArg, analyticsDataArg) {
        return __awaiter(this, void 0, void 0, function* () {
            let dataToSend = {
                projectId: this.projectId,
                appName: this.appName,
                eventId: eventIdArg,
                analyticsData: analyticsDataArg
            };
            yield plugins.smartrequest.post(this.apiEndPoint, {
                headers: {
                    'authenticate': this.secretKey,
                    'Content-Type': 'application/json'
                },
                requestBody: dataToSend
            }).catch(err => {
                console.log(err);
            });
        });
    }
}
exports.Analytics = Analytics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhbmFseXRpY3MuY2xhc3Nlcy5hbmFseXRpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGFuYWx5dGljcy5jbGFzc2VzLmFuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBRW5EO0lBS0UsWUFBYSxVQUtaO1FBTkQsY0FBUyxHQUFXLEVBQUUsQ0FBQTtRQU9wQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUE7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQTtRQUN6QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUE7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFSyxXQUFXLENBQUUsVUFBa0IsRUFBRSxnQkFBcUI7O1lBQzFELElBQUksVUFBVSxHQUFHO2dCQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsYUFBYSxFQUFFLGdCQUFnQjthQUNoQyxDQUFBO1lBQ0QsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoRCxPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTO29CQUM5QixjQUFjLEVBQUUsa0JBQWtCO2lCQUNuQztnQkFDRCxXQUFXLEVBQUUsVUFBVTthQUN4QixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtDQUNGO0FBcENELDhCQW9DQyJ9