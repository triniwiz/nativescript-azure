import {Observable} from 'data/observable';
import * as nsPlugin from 'nativescript-azure';

export class HelloWorldModel extends Observable {
  public message: string;
  private azurePlugin: nsPlugin.azure;

  public Click = nsPlugin.Click;

  constructor() {
    super();

    this.azurePlugin = new nsPlugin.AzurePlugin();
    this.message = this.azurePlugin.message;
    this.Click = this.azurePlugin.Click;
  }
}