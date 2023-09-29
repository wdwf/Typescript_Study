import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonTwitter extends AbstractLinkShareButton {
  constructor(eventHandler: EventHandler, classname: string, url: string) {
    super(eventHandler, classname, url);
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`;
  }
}
