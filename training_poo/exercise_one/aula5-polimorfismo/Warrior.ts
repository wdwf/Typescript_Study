import { Personagem } from './Personagem';
import { Util } from './Util';

export class Warrior extends Personagem {
  private _forca: number;
  private _agilidade: number;

  /*Quando temos paramtros na classe Pai devemos obrigatoriamente especificar esses
    atributos nas subClasses por exemplo o nome e por consequencia podemos adicionar
    parametros a mais se desejado
  */
  constructor(nome: string) {
    /*
      Super seria o construtor da super classe (Classe pai)
      ustilizando ele temos acesso aos membros da classe pai
    */
    super(nome);
    this._forca = Util.randomizar(100, 1_000);
    this._agilidade = Util.randomizar(100, 1_000);
    /*
    Mesmo tendo os atributos herdados podemos substitui-los caso sua visualização seja protected
    assim teremos atributos especificos para essa classe mesmo ela sendo herdeira
    */
    this._armadura = Util.randomizar(2_000, 10_000);
    this._vidaMaxima = Util.randomizar(500, 10_000);
    this._vidaAtual = Util.randomizar(400, this._vidaMaxima);
  }

  public atacar(): string {
    throw new Error('Method not implemented.');
  }
  public defender(atacante: Personagem): number {
    throw new Error('Method not implemented.');
  }
}
