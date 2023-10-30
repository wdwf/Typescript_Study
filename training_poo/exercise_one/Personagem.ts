// Classe nome {}
class Personagem {
  //Atributos
  nome: string = '';
  energia: number = 0;
  vida: number = 0;
  ataque: number = 0;
  defesa: number = 0;
}

//Estanciando classe (criando um objeto)
let person: Personagem;
person = new Personagem();
console.log(person);

let personTwo: Personagem = new Personagem();
personTwo.nome = 'Bob';
personTwo.energia = 90;
personTwo.ataque = 80;
personTwo.defesa = 70;
personTwo.vida = 40;
