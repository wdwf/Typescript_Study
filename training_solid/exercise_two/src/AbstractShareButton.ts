import EventHandler from "./EventHandler";
import DomEventHandler from "./DOMEventHandler";

export default abstract class AbstractShareButton {
  eventHandler: EventHandler;
  classname: string;
  url: string;

  constructor(eventHandler: EventHandler, classname: string) {
    this.classname = classname;
    this.eventHandler = eventHandler;
  }

  abstract createAction();

  bind() {
    const action = this.createAction();
    this.eventHandler.addEventListenerToClass(this.classname, "click", action);
  }
}
