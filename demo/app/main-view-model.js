"use strict";
var observable_1 = require('data/observable');
var nsPlugin = require('nativescript-azure');
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.Click = nsPlugin.Click;
        this.azurePlugin = new nsPlugin.AzurePlugin();
        this.message = this.azurePlugin.message;
        this.Click = this.azurePlugin.Click;
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=main-view-model.js.map