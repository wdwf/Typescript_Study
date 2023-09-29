import { Lutador } from "./Lutador";

export class Luta {
  private desafiado: Lutador;
  private desafiante: Lutador;
  private rounds: number;
  private aprovada: boolean;

  public getDesafiado(): Lutador {
    return this.desafiado;
  }

  public setDesafiado(desafiado: Lutador): void {
    this.desafiado = desafiado;
  }

  public getDesafiante(): Lutador {
    return this.desafiante;
  }

  public setDesafiante(desafiante: Lutador): void {
    this.desafiante = desafiante;
  }

  public getRounds(): number {
    return this.rounds;
  }
  public setRounds(value: number) {
    this.rounds = value;
  }

  public getAprovada(): boolean {
    return this.aprovada;
  }
  public setAprovada(value: boolean) {
    this.aprovada = value;
  }

  marcarLuta(l1: Lutador, l2: Lutador) {
    if (l1 != l2 && l1.getCategoria() == l2.getCategoria()) {
      this.setAprovada(true);
      this.setDesafiado(l1);
      this.setDesafiante(l2);
      console.log("Luta marcada 💪");
      return;
    } else {
      console.log("Luta Reprovada 👎");
      this.setAprovada(false);
    }
  }

  lutar() {
    if (this.getAprovada()) {
      this.getDesafiado().apresentar();
      this.getDesafiante().apresentar();
      let vencedor = Math.round(Math.random() * 2);

      switch (vencedor) {
        case 0:
          this.getDesafiado().empatarLuta();
          this.getDesafiante().empatarLuta();
          console.log("Empateeee brutalllll: 🔥");
          break;
        case 1:
          this.getDesafiado().ganharLuta();
          this.getDesafiante().perderLuta();
          console.log("Ganhador: " + this.getDesafiado().getNome() + "🏆");
          break;
        case 2:
          this.getDesafiado().perderLuta();
          this.getDesafiante().ganharLuta();
          console.log("Ganhador: " + this.getDesafiante().getNome() + "🏆");
          break;
      }
    } else {
      console.log("A Luta não pode acontecer");
    }
  }
}
