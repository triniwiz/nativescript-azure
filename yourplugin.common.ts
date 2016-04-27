import * as app from 'application';
import * as dialogs from 'ui/dialogs';

export class Common {
  public message: string;
  //public click = new Utils.Click();
  
  constructor() {
    this.message = Utils.SUCCESS_MSG();
  }
  
  Click() {
      //var client = MSClient("whateverThisIs");
      //var table = client.tableWithName("TodoItem")
      console.log("Clicked");
  }

}

export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;
    
    setTimeout(() => {
      dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
    }, 2000);
    
    return msg;
  }
}