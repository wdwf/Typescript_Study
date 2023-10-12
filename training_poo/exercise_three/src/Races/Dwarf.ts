import Race from "./Race";

export default class Dwarf extends Race  {

  constructor() {
    super()
    this.maxLifePoints = 80
  }

  getName(): string {
    throw new Error("Method not implemented.");
  }
  getDexterity(): number {
    throw new Error("Method not implemented.");
  }
  maxLifePoints(): number {
    throw new Error("Method not implemented.");
  }
  
}