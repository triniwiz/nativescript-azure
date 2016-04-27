"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var azure_common_1 = require('./azure.common');
var app = require('application');
global.moduleMerge(azure_common_1.Common, exports);
var AzurePlugin = (function (_super) {
    __extends(AzurePlugin, _super);
    function AzurePlugin() {
        _super.call(this);
    }
    AzurePlugin.prototype.mClient = function (url) {
        console.log("Before call");
        var mClient = new com.microsoft.windowsazure.mobileservices.MobileServiceClient(url, app.android.context);
        console.log("android - mClient");
    };
    return AzurePlugin;
}(azure_common_1.Common));
exports.AzurePlugin = AzurePlugin;
//# sourceMappingURL=azure.android.js.map