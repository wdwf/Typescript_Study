import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
  url: string;

  constructor(eventHandler: EventHandler, classname: string, url: string) {
    super(eventHandler, classname);
    this.url = url;
  }

  abstract createLink(): string;

  createAction(): any {
    const link = this.createLink();
    return () => window.open(link);
  }
}
