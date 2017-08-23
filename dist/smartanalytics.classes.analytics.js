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
        this.project = optionsArg.projectArg;
        this.appName = optionsArg.appNameArg;
        this.apiEndPoint = optionsArg.apiEndPointArg;
        if (optionsArg.secretKeyArg) {
            this.secretKey = optionsArg.secretKeyArg;
        }
    }
    recordEvent(identifierArg, analyticsDataArg) {
        return __awaiter(this, void 0, void 0, function* () {
            let dataToSend = {
                project: this.project,
                appName: this.appName,
                identifier: identifierArg,
                analyticsData: analyticsDataArg
            };
            let dataToSendJson = JSON.stringify(dataToSend);
            yield plugins.smartrequest.post(this.apiEndPoint, {
                headers: {
                    'authenticate': this.secretKey
                },
                requestBody: dataToSendJson
            });
        });
    }
}
exports.Analytics = Analytics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhbmFseXRpY3MuY2xhc3Nlcy5hbmFseXRpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGFuYWx5dGljcy5jbGFzc2VzLmFuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBRW5EO0lBS0UsWUFBYSxVQUtaO1FBTkQsY0FBUyxHQUFXLEVBQUUsQ0FBQTtRQU9wQixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUE7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQTtRQUM1QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUE7UUFDMUMsQ0FBQztJQUNILENBQUM7SUFFSyxXQUFXLENBQUUsYUFBcUIsRUFBRSxnQkFBcUI7O1lBQzdELElBQUksVUFBVSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixVQUFVLEVBQUUsYUFBYTtnQkFDekIsYUFBYSxFQUFFLGdCQUFnQjthQUNoQyxDQUFBO1lBQ0QsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMvQyxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hELE9BQU8sRUFBRTtvQkFDUCxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVM7aUJBQy9CO2dCQUNELFdBQVcsRUFBRSxjQUFjO2FBQzVCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtDQUNGO0FBbENELDhCQWtDQyJ9