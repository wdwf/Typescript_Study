import Item from "./Item";

export default abstract class TaxItem extends Item {
  calcaulateTax() {
    return (this.price * this.getTax()) / 100;
  }

  abstract getTax(): number;
}
