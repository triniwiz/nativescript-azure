/// <reference path="./androidSDK.d.ts"/>
import {Common, Client} from './azure.common';
import * as app from 'application';

global.moduleMerge(Common, exports);

export class AzurePlugin extends Common {
     constructor(){ super();}
    mClient(url) {
        console.log("Before call");
        var mClient = new com.microsoft.windowsazure.mobileservices.MobileServiceClient(url,  app.android.context);
        console.log("android - mClient");
    }
}