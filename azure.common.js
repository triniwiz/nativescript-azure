"use strict";
var app = require('application');
var dialogs = require('ui/dialogs');
var Common = (function () {
    function Common() {
        this.message = Utils.SUCCESS_MSG();
    }
    Common.prototype.Click = function () {
        console.log("Clicked");
        Client("www.gas-sense-personal.azurewebsites.net");
    };
    return Common;
}());
exports.Common = Common;
function Client(url) {
    console.log("here");
    mClient(url);
    console.log("common - clinet()");
}
exports.Client = Client;
var Utils = (function () {
    function Utils() {
    }
    Utils.SUCCESS_MSG = function () {
        var msg = "Your plugin is working on " + (app.android ? 'Android' : 'iOS') + ".";
        setTimeout(function () {
            dialogs.alert(msg + " For real. It's really working :)").then(function () { return console.log("Dialog closed."); });
        }, 2000);
        return msg;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=azure.common.js.map