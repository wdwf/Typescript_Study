import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonFacebook extends AbstractLinkShareButton {
  constructor(eventHandler: EventHandler, classname: string, url: string) {
    super(eventHandler, classname, url);
  }

  createLink(): string {
    return `https://www.facebook.com/share.php?u=${this.url}`;
  }
}
