"use strict";
var observable_1 = require('data/observable');
var nsPlugin = require('nativescript-yourplugin');
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.Click = nsPlugin.Click;
        this.yourPlugin = new nsPlugin.YourPlugin();
        this.message = this.yourPlugin.message;
        this.Click = this.yourPlugin.Click;
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=main-view-model.js.map