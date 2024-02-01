import { Personagem } from './Personagem';
import { Util } from './Util';

export class Priest extends Personagem {
  private _espirito: number;
  private _versatilidade: number;
  constructor(nome: string) {
    super(nome);
    this._espirito = Util.randomizar(100, 1_000);
    this._versatilidade = Util.randomizar(100, 1_000);
  }

  public atacar(): string {
    throw new Error('Method not implemented.');
  }
  public defender(atacante: Personagem): number {
    throw new Error('Method not implemented.');
  }
}
