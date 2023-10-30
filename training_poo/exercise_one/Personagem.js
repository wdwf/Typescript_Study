"use strict";
// Classe nome {}
class Personagem {
    constructor() {
        //Atributos
        this.nome = '';
        this.energia = 0;
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
    }
}
//Estanciando classe (criando um objeto)
let person;
person = new Personagem();
console.log(person);
let personTwo = new Personagem();
personTwo.nome = 'Bob';
personTwo.energia = 90;
personTwo.ataque = 80;
personTwo.defesa = 70;
personTwo.vida = 40;
