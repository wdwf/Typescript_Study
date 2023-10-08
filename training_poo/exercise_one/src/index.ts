/*TEORIA:

Programação orientada a objetofoi criada com o intuito de aproximar o mundo real

  Programação Funcional
  |
  Programação orientada a objeto -> Criador: Alan Kay
  |
  Programaçao modular
  |
  Programação estruturada
  |
  Programação linear
  |
  Programação baixo nivel

  Programação orientada traz:
    C - confiavel
    O - oportuno - dividir
    M - manutenive -
    E - extensivel - pode adicionar novas funcuionalidade
    R - reutilizavel
    N - natural

  O que é um objeto?
    Coisa material ou abstrata que pode receber pelos sentidos e descrita por
    meio de caracteristicas comportamentos e estado atual

    Os objetos seguem a mesma classificação

    molde -> classe
    objeto -> derivado da classe ou instancia

    Exemplo seguindo a UML
    ----------
    | caneta     |
    ----------
    - Atributo
    | Modelo     |
    | Cor        |
    ----------
    - Metodo
    | Escrever()  |
    | Tampar()    |
    | Destampar() |
    ----------
    - Estado
    | Destampada |
    | Sem carga  |
    ----------

    Como criar um objeto?
      - se cria um molde e depois se instancia/gera um objeto
      Ex: novaCaneta = new Caneta()

    Classe Caneta {
      modelo: Caracteres
      cor: Caracteres
      ponta: Real
      carga: Interiro
      tampada: Logico


      Metodo rabiscar() {
          se (tampada) então
              escreva("Erro")
          senão
              escreva("rabiscando")
      }


      Metodo tampar()
    }

    * Classe - Define os atributo e metodos comuns que serão compartilhados por um objeto
    * Objeto - Um elemento instanciado pela classe
    * Abstração - Seria o ato de criar uma classe ou metodo abstrato.
      Classe Abstrata ->  quando uma classe é abstrata ela não deve ser instanciada
                          uma vez que seus metodos estão incompletos
      Metodo abstrato ->  é a definição de metodos que serão implementados por subclasses


      exemplo de objeto da vida real
            - BATOM
            - Atributo
                > Cor
                > Tamanho
                > Textura
            - Metodo
                > Passar
                > Abrir
            - Estado
                > Aberto
                > Usado
                > Vencido
           --------------------------
           exemplo de objeto abstrato da vida real
            - ALMOÇO
            - Atributos
                > Horario
                > Local
                > Data
                > Valor
            - Metodo
                > Realizar Almoço
                > Finalizar almoço
                > Pagar a conta
                > Reservar
            - Estado
                > Adiar
                > Iniciado
                > Finalizado
                > Reservado


** UML -> Linguagem de modelagem unificada
    - Conceitos:
        Diagrama de classes
        Corpo de um objeto seguindo a uml seria seguindo o exemplo ja citado acima.

Mudando a visibilidade
        - O que é visivilidade: Indicam o nivel de acesso aos componentes (atributos/metodos) internos
        de uma classe.

        Seguinda a UML podemos definir 3 simbologias
        + -> Público (public)
            Possibilidade de utilizar em qualquer lugar que o mesmo esteja disponivel
            - QUEM TEM ACESSO: A classe atual e todas as outras classes.
        - -> Privado (private)
            Apenas O criador do componente pode utilizar
            - QUEM TEM ACESSO: apenas a classe atual
        # -> Protegido (protected)
            Apenas disponivel para quem tem autorização (para os decendentes de uma classe)
            - QUEM TEM ACESSO: a classe atual e todas as suas sub-classes

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
