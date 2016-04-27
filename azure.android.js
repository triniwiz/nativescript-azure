"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var azure_common_1 = require('./azure.common');
global.moduleMerge(azure_common_1.Common, exports);
var AzurePlugin = (function (_super) {
    __extends(AzurePlugin, _super);
    function AzurePlugin() {
        _super.apply(this, arguments);
    }
    return AzurePlugin;
}(azure_common_1.Common));
exports.AzurePlugin = AzurePlugin;
//# sourceMappingURL=azure.android.js.map