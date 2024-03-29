import { Personagem } from './Personagem';
import { Util } from './Util';

export class Mage extends Personagem {
  private _intelecto: number;
  private _velocidade: number;
  constructor(nome: string) {
    super(nome);
    this._intelecto = Util.randomizar(1_000, 10_000);
    this._velocidade = Util.randomizar(100, 1_000);
    this._armadura = Util.randomizar(500, 10_000);
    this._vidaMaxima = Util.randomizar(1_000, 10_000);
    this._vidaAtual = Util.randomizar(500, this._vidaMaxima);
  }
}
