import EventHandler from "./EventHandler";

export default class DOMEventHandler implements EventHandler {
  addEventListenerToClass(classname: string, event: string, fn: any) {
    const elements: any = document.querySelectorAll(classname);
    for (const element of elements) {
      element.addEventListener(event, fn);
    }
  }
}
