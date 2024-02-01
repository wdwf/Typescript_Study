export class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}

  //Toda vez que pensar em ler dados na classe use parametro
  //Toda voz que pensar em imprimir na classe, use retorno

  status(): string {
    return `Guerreiro: 
      Nome: ${this.nome}
      Energia: ${this.energia.toFixed(1)}
      Ataque: ${this.ataque.toFixed(1)}
      Defesa: ${this.defesa.toFixed(1)}
    `;
  }
  treinarAtaque(): void {
    this.ataque += Math.random() * 7;
    this.energia -= Math.random() * 10;
    if (this.ataque > 100) {
      this.ataque = 100;
    }
    console.log('|treino de ataque realizado|');
  }
  treinarDefesa(): void {
    this.defesa += Math.random() * 5;
    this.energia -= Math.random() * 10;
    if (this.defesa > 100) {
      this.defesa = 100;
    }
    console.log('|treino de defesa realizado|');
  }
  descansar(horas: number): void {
    this.energia += horas * Math.random() * 10;
    if (this.energia > 100) {
      this.energia = 100;
    }
    console.log('|descanso realizado|');
  }
  atacar(): number {
    console.log('BATALHA');
    let desgate: number = Math.random() * 100;
    this.energia -= desgate;
    return desgate;
  }
  isDead(): boolean {
    return this.energia < 0;
  }
}
