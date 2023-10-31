export class Personagem {
  constructor(
    private _nome: string,
    private _energia: number,
    private _vida: number,
    private _ataque: number,
    private _defesa: number
  ) {}

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public status(): string {
    return `Guerreiro: 
      Nome: ${this._nome}
      Energia: ${this._energia.toFixed(1)}
      Ataque: ${this._ataque.toFixed(1)}
      Defesa: ${this._defesa.toFixed(1)}
    `;
  }
  public treinarAtaque(): void {
    this._ataque += this.randomizar(7);
    this._energia -= this.randomizar(10);
    if (this._ataque > 100) {
      this._ataque = 100;
    }
    console.log('|treino de _ataque realizado|');
  }
  public treinarDefesa(): void {
    this._defesa += this.randomizar(5);
    this._energia -= this.randomizar(10);
    if (this._defesa > 100) {
      this._defesa = 100;
    }
    console.log('|treino de _defesa realizado|');
  }
  public descansar(horas: number): void {
    this._energia += horas * this.randomizar(10);
    if (this._energia > 100) {
      this._energia = 100;
    }
    console.log('|descanso realizado|');
  }
  public atacar(): number {
    console.log('BATALHA');
    let desgate: number = this.randomizar(100);
    this._energia -= desgate;
    return desgate;
  }
  public isDead(): boolean {
    return this._energia < 0;
  }

  private randomizar(fator: number): number {
    return Math.random() * fator;
  }
}
