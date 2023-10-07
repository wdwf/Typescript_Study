/*TEORIA:

Classe abstrata: São as que não permitem qualquer tipo de instancia.
São classes feitas especialmente para serem modelos para suas classes 
derivadas. As classes derivadas, via de regra, deverão sobrescrever 
os métodos para realizar a implementação dos mesmos.

abstract class Animal {
  abstract getHabitat();

  public getRace(): string {
    return "Race undefined"
  }
}

class dog extends Animal {
  public getHabitat():string {
    return "house"
  }
}

*/
