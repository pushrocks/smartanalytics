"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require("typings-test");
const smartanalytics = require("../dist/index");
let testAccount;
describe('smartanalytics', function () {
    it('should create a valid AnalyticsAccount', function () {
        testAccount = new smartanalytics.AnalyticsAccount('smartanalytics', 'UA-92592300-1');
    });
    it('should send a request to Google Analytics', function () {
        let doit = () => __awaiter(this, void 0, void 0, function* () {
            yield testAccount.sendEvent('npmtool', 'install', 'pushrocks/smartq');
            yield testAccount.sendEvent('npmtool', 'started', 'pushrocks/smartanalytics');
            yield testAccount.sendEvent('npmtool', 'install', 'pushrocks/smartq');
            yield testAccount.sendEvent('npmtool', 'started', 'pushrocks/smartanalytics');
            yield testAccount.sendEvent('npmtool', 'install', 'pushrocks/smartq');
            yield testAccount.sendEvent('npmtool', 'started', 'pushrocks/smartanalytics');
            yield testAccount.sendEvent('npmtool', 'install', 'pushrocks/smartq');
            yield testAccount.sendEvent('npmtool', 'started', 'pushrocks/smartanalytics');
        });
        doit();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0JBQXFCO0FBSXJCLGdEQUErQztBQUUvQyxJQUFJLFdBQTRDLENBQUE7QUFFaEQsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3pCLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTtRQUMzQyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDdEYsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMkNBQTJDLEVBQUU7UUFDOUMsSUFBSSxJQUFJLEdBQUc7WUFDVCxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO1lBQ3JFLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixDQUFDLENBQUE7WUFDN0UsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtZQUNyRSxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFBO1lBQzdFLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUE7WUFDckUsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLENBQUMsQ0FBQTtZQUM3RSxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO1lBQ3JFLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixDQUFDLENBQUE7UUFDL0UsQ0FBQyxDQUFBLENBQUE7UUFDRCxJQUFJLEVBQUUsQ0FBQTtJQUNSLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==