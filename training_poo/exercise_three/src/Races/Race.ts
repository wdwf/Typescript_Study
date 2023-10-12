export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  abstract getName(): string;
  abstract getDexterity(): number;

  static createdRacesInstances(): number {
    throw new Error("Not implemented");
  }

  abstract maxLifePoints(): number;
}
