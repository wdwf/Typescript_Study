export default interface EventHandler {
  addEventListenerToClass(classname: string, event: string, fn: any);
}
