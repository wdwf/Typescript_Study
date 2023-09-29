import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
  constructor(eventHandler: EventHandler, classname: string, url: string) {
    super(eventHandler, classname, url);
  }

  createLink(): string {
    return `https://www.linkedin.com/shareArticle?url=${this.url}`;
  }
}
