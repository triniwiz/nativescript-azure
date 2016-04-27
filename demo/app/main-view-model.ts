import {Observable} from 'data/observable';
import * as nsPlugin from 'nativescript-yourplugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private yourPlugin: nsPlugin.YourPlugin;

  public Click = nsPlugin.Click;

  constructor() {
    super();

    this.yourPlugin = new nsPlugin.YourPlugin();
    this.message = this.yourPlugin.message;
    this.Click = this.yourPlugin.Click;
  }
}