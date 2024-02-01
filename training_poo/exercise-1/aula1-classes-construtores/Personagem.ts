import prompt from 'prompt-sync';

// Classe nome {}
class Personagem {
  //Atributos
  // nome: string = '';
  // energia: number = 0;
  // vida: number = 0;
  // ataque: number = 0;
  // defesa: number = 0;

  /*
  Construtor -> É utilizado para ditar como o objeto sera inicializado
  É possivel especificar como os atributos serão inicializados e definir
  qual sera esse atributo por meio dos parametros, alem disso defindo o atributo
  juntamente com sua visualização não se faz necessario defini-lo ao iniciar a classe
  como feito nas linhas acima

  E ao fazer desse modo o typescript remove a necessidade de ao definir o parametro ter que
  definir o uso com this.variavel = valor,  
  */

  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {
    // this.energia = 50; -> ja foi definido nos parametros
    // this.ataque = 50;
    // this.nome = nome;
  }
}

//Estanciando classe (criando um objeto)
let person: Personagem;
person = new Personagem('Jon', 100, 40, 20, 20);
console.log(person);

let teclado = prompt();
let option: number = 0;

while (option != 9) {
  console.log('+=========================+');
  console.log('|1. Treinar ataque        |');
  console.log('|2. Treinar defesa        |');
  console.log('|3. Apresentar estatus    |');
  console.log('|9. Sair                  |');
  console.log('+=========================+');

  option = +teclado('Escolha uma ação: ');

  switch (option) {
    case 1:
      person.ataque += 2;
      break;
    case 2:
      person.defesa += 2;
      break;
    case 3:
      console.log('personagem :>> ', person);
      break;
    default:
      break;
  }
}

let personTwo: Personagem = new Personagem('Bob', 90, 80, 70, 40);
personTwo.nome = 'Bobb';
personTwo.energia = 90;
personTwo.ataque = 80;
personTwo.defesa = 70;
personTwo.vida = 40;

console.log(personTwo);
