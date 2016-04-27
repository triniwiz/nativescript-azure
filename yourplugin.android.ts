import {Common} from './yourplugin.common';

global.moduleMerge(Common, exports);

export class YourPlugin extends Common {

}