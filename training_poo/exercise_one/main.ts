import prompt from 'prompt-sync';
import { Personagem } from './aula2-metodos/Personagem';

let person: Personagem = new Personagem('Jon', 100, 40, 20, 20);
let teclado = prompt();
let option: number = 0;

while (option != 9 || person.isDead()) {
  console.log('+=========================+');
  console.log('|1. Treinar ataque        |');
  console.log('|2. Treinar defesa        |');
  console.log('|3. Apresentar estatus    |');
  console.log('|4. Descansar             |');
  console.log('|5. Entrar em Batalha     |');
  console.log('|9. Sair                  |');
  console.log('+=========================+');

  option = +teclado('Escolha uma ação: ');

  switch (option) {
    case 1:
      person.treinarAtaque();
      console.log(person.status());

      break;
    case 2:
      person.treinarDefesa();
      console.log(person.status());

      break;
    case 3:
      console.log(person.status());

      break;
    case 4:
      let horas: number = +teclado('Digite o numero de horas: ');
      person.descansar(horas);
      break;
    case 5:
      let rest: number = person.atacar();
      console.log(`Esta batalha custou ${rest}`);
      console.log(person.status());

      break;
    default:
      break;
  }
}
