import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonPrint from "./ShareButtonPrint";
import DOMEventHandler from "./DOMEventHandler";

const eventHandler = new DOMEventHandler();

const twitter = new ShareButtonTwitter(
  eventHandler,
  ".btn-twitter",
  "http://www.youtube.com/rodrigobranas"
);

twitter.bind();

const facebook = new ShareButtonFacebook(
  eventHandler,
  ".btn-facebook",
  "http://www.youtube.com/rodrigobranas"
);

facebook.bind();

const linkedIn = new ShareButtonLinkedIn(
  eventHandler,
  ".btn-linkedin",
  "http://www.youtube.com/rodrigobranas"
);

linkedIn.bind();

const print = new ShareButtonPrint(eventHandler, ".btn-print");

print.bind();
