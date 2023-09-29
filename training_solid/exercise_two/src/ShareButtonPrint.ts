import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonPrint extends AbstractShareButton {
  constructor(eventHandler: EventHandler, classname: string) {
    super(eventHandler, classname);
  }

  createAction() {
    return () => window.print();
  }
}
