import { Mage } from './Mage';
import { Personagem } from './Personagem';
import { Priest } from './Priest';
import { Warrior } from './Warrior';

let mage: Personagem = new Mage('Maguinho');
let warrior: Personagem = new Warrior('Barbado');
let priest: Personagem = new Priest('Bob');

console.log('mage: ', mage);
console.log('mage atack: ', mage.atacar());
console.log('warrior: ', warrior);
console.log('priest: ', priest);
