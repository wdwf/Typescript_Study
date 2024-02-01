import { Util } from './Util';

export abstract class Personagem {
  protected _nome: string;
  protected _armadura: number;
  protected _vidaMaxima: number;
  protected _vidaAtual: number;

  constructor(nome: string) {
    this._nome = nome;
    this._armadura = Util.randomizar(1_000, 10_000);
    this._vidaMaxima = Util.randomizar(200, 10_000);
    this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
  }

  public abstract atacar(): string;

  public abstract defender(atacante: Personagem): number;
}
