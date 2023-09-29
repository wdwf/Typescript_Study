import MessageData from "./MessageData";
import fs from "fs/promises";

export default class MessageDataFile implements MessageData {
  async read(language: string): Promise<string> {
    return await fs.readFile(`./message/${language}.txt`, "utf-8");
  }
}
