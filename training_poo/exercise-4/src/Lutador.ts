import { Categoria } from "./Categoria";
import { Participantes } from "./Participantes";

export class Lutador implements Participantes {
  private nome: string;
  private nacionalidade: string;
  private idade: number;
  private altura: number;
  private peso: number;
  private categoria: Categoria;
  private vitorias: number;
  private derrotas: number;
  private empates: number;

  constructor(
    nome: string,
    nacionalidade: string,
    idade: number,
    altura: number,
    peso: number,
    vitorias: number,
    derrotas: number,
    empates: number
  ) {
    this.nome = nome;
    this.nacionalidade = nacionalidade;
    this.idade = idade;
    this.altura = altura;
    this.setPeso(peso);
    this.vitorias = vitorias;
    this.derrotas = derrotas;
    this.empates = empates;
  }

  getNome(): string {
    return this.nome;
  }
  setNome(nome: string): void {
    this.nome = nome;
  }

  getNacionalidade(): string {
    return this.nacionalidade;
  }
  setNacionalidade(nacionalidade: string): void {
    this.nacionalidade = nacionalidade;
  }

  getIdade(): number {
    return this.idade;
  }
  setIdade(idade: number): void {
    this.idade = idade;
  }

  getAltura(): number {
    return this.altura;
  }
  setAltura(altura: number): void {
    this.altura = altura;
  }

  getPeso(): number {
    return this.peso;
  }
  setPeso(peso: number): void {
    this.peso = peso;
    this.setCategoria();
  }

  getCategoria(): Categoria {
    return this.categoria;
  }
  private setCategoria(): void {
    if (this.getPeso() < 52.2) {
      this.categoria = Categoria.invalido;
    } else if (this.getPeso() <= 70.3) {
      this.categoria = Categoria.leve;
    } else if (this.getPeso() <= 83.9) {
      this.categoria = Categoria.medio;
    } else if (this.getPeso() <= 120.2) {
      this.categoria = Categoria.pesado;
    } else {
      this.categoria = Categoria.invalido;
    }
  }

  getVitorias(): number {
    return this.vitorias;
  }
  setVitorias(vitorias: number): void {
    this.vitorias = vitorias;
  }

  getDerrotas(): number {
    return this.derrotas;
  }
  setDerrotas(derrotas: number): void {
    this.derrotas = derrotas;
  }

  getEmpates(): number {
    return this.empates;
  }
  setEmpates(empates: number): void {
    this.empates = empates;
  }

  apresentar(): void {
    console.log("APRESENTANDO LUTADOR...");
    console.log("Lutador: " + this.getNome());
    console.log("Origem: " + this.getNacionalidade());
    console.log("Idade: " + this.getIdade() + " anos");
    console.log("Altura: " + this.getAltura() + " m de altura");
    console.log("Peso: " + this.getPeso() + "Kg");
    console.log("Vitorias: " + this.getVitorias());
    console.log("Derrotas: " + this.getDerrotas());
    console.log("Empates: " + this.getEmpates());
  }
  status(): void {
    console.log("----" + this.getNome() + "----");
    console.log("| Categoria: " + this.getCategoria() + "|");
    console.log("| Vitorias: " + this.getVitorias() + "|");
    console.log("| Derrotas: " + this.getDerrotas() + "|");
    console.log("| Empates: " + this.getEmpates() + "|");
    console.log("-----------------------");
  }
  ganharLuta(): void {
    this.setVitorias(this.getVitorias() + 1);
  }
  perderLuta(): void {
    this.setDerrotas(this.getDerrotas() + 1);
  }
  empatarLuta(): void {
    this.setEmpates(this.getEmpates() + 1);
  }
}
