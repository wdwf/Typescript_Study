/*
conceito que descreve um conjunto de métodos que 
uma classe deve implementar. 
*/
export default interface Energy {
  type_: EnergyType;
  amount: number;
}

/* type é uma forma de criar tipos personalizados. 
Quando você usa type, está definindo um tipo 
personalizado, que pode ser uma combinação de 
outros tipos ou um tipo específico.*/
export type EnergyType = "mana" | "stamina"