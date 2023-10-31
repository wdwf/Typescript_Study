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
      Metodo abstrato ->  é apenas a definição de metodos que serão implementados por subclasses

      ❗Exemplo de classe abstrata: 
      -> Classe abstrata são as que não permitem qualquer tipo de instancia.
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



          

  ❗Nota: Quando temos um componente com a visibilidade private temos que usar metodos 
  acessores (get/set) e este elemento só estara disponivel dentro da classe

  ❗Nota: Quando temos um comp. com a visibilidade protected apenas a classe Pai (onde esta esta
  sendo criado o componente) e os filhos que vem de herança poderam acessar esse elemento

  ** METODOS ESPECIAIS - METODOS ACESSORES (get) - METODOS MODIFICADORES (set)
    São metodos que dão acesso a uma determinada coisa
    - Getters -> Pega/Acessa algo
    - Setters -> Modifica/Atribui algo


    estante = new estante()
    meusDocs = e.getTotalDocs()
        |-> O metodo get acessa o valor do atributo e retorna o mesmo dando assim segurança

    e.setTotalDocs(doc)

    --METODO CONSTRUCT
    construct(modelo, cor, ponta) {
      tampar()
      cor = "Azul"
    }

    ** Como definir a visibilidade?

    -- PILARES DA POO:
    - Encapsulamento
        > São capsulas que seguem padroes por exemplo uma pilha, existem pilhas diferentes mas todas seguem
        um padrão de uso.
        > Por seguir um padrão torna mudanças invisiveis
        > Um software encapsulado ele tem um mesmo padrão, protegendo o usuario do codigo e inverso tambem.
        > Encapsular seria ocultar partes independentes da implementação, permitindo construir partes invisiveis
        ao mundo exterior.
        Um bom objeto encapsulado possui uma interface bem definida
            - Interface é a lista de serviços fornecidos por um componente. É o contato com o mundo exterior,
            que define o que pode ser feito com um objeto dessa classe,
            - É como se fosse a capa do controle

            - UML
            <<interface>>
            Controlador
            --------------
            + ligar()
            ...

    Na interface os metodos são todos publicos e seguindo o padrao UML é definido apenas os metodos e não
    seus funcionamentos.
    -Uma classe implementa uma interface

    E ao utilizar a interface devemos deixar os atributos do objeto por definição todos privados

    - Domínio: refere-se ao conjunto de objetos, classes, métodos e conceitos que representam uma
    área específica de conhecimento ou funcionalidade dentro de um sistema de software. O domínio é
    essencialmente a representação das entidades e regras que são relevantes para um determinado
    problema ou contexto.

    ---------------------
    RELACIONAMENTO ENTRE CLASSES

    O relacionamento entre objetos define como eles vão interagir ou colaborar para executar uma 
    operação em uma aplicação.

    Associação: Falamos sobre associação entre dois objetos quando cada um deles pode usar o outro, 
    mas também cada um deles pode existir sem o outro. Não há dependência entre eles.
    > Associação simples: Uma classe usa outra classe como parte de suas operações, mas não há uma
     dependência forte. Por exemplo, uma classe Carro pode ter uma associação com uma classe Motor, 
     onde o motor é parte do carro.

    Colaboração: A colaboração declara que dois objetos estão colaborando quando um objeto faz 
    uso de outro objeto para completar uma operação.
    Um exemplo seria para salvar e recuperar os detalhes do clientes, a classe ClienteRepository 
    usa um objeto Cliente para salvar e recuperar os dados.


    Agregação: é um tipo especial de associação onde as informações de um objeto (chamado objeto-todo) 
    precisam ser complementados pelas informações contidas em um ou mais objetos de outra classe 
    (chamados objetos-parte)
      > Por exemplo, uma classe Universidade pode ter uma agregação com a classe Aluno, 
      indicando que uma universidade contém vários alunos. A diferença chave é que os 
      objetos "parte" podem existir independentemente do objeto "todo".


    Composição: 
    A composição também é uma relação todo-parte, mas os objetos "parte" são criados e destruídos 
    junto com o objeto "todo". Por exemplo, uma classe Casa pode ter uma composição com a classe 
    Quarto, indicando que a casa é composta por vários quartos. Quando a casa é destruída, 
    os quartos também são destruídos.

    Herança:
    A herança é um relacionamento onde uma classe (subclasse ou classe derivada) herda 
    atributos e métodos de outra classe (superclasse ou classe base). Por exemplo, uma 
    classe Cachorro pode herdar de uma classe Animal. Isso permite a reutilização de código 
    e a modelagem de hierarquias de classes.

    ---------------------

    - Abordando um pouco mais sobre Herança

    Navegaçao pela herança (arvore de herança):
          - Raiz -> superClasse
          - Ancestral -> subClasse

    Se essa arvore é lida de cima para baixo é especilização
    Se ela é lida de baixo para cima é generalização

    Tipos de herança
    - Herança de implementação:
      Na herança de implementação, também conhecida como herança por inclusão ou herança de interface, uma classe
        derivada herda os atributos e métodos da classe base (ou classe pai) e pode adicionar novos atributos
        e métodos ou modificar os existentes. Basicamente, a classe derivada estende a funcionalidade da
        classe base sem alterar sua estrutura fundamental.
        ex:
          class Animal {
              void eat() {
                  System.out.println("Animal is eating.");
              }
          }

          class Dog extends Animal {
              void bark() {
                  System.out.println("Dog is barking.");
              }
          }

    - Herança para diferença:
      A herança para diferença, também conhecida como herança por substituição ou herança por modificação,
      envolve criar uma nova classe derivada que substitui ou modifica o comportamento de métodos da classe
        base. Nesse caso, a classe derivada é uma especialização da classe base, refinando ou personalizando
        seu comportamento.

      class Shape {
          void draw() {
              System.out.println("Drawing a shape.");
          }
      }

      class Circle extends Shape {
          @Override
          void draw() {
              System.out.println("Drawing a circle.");
          }
      }

    Conceitos--
    Abstrato e final
    Podem ser classe(Abstrato e final) ou metodos(Abstrato e final)
    -Classe abstrata não pode ser instanciada (Não pode gerar objetos) só pode servir como progenitora (classe pai).
    -Metodo abstrato pode ser declarado mas não implementado na progenitora (classe pai).
    -Classe Final não pode ser herdada por outra classe. Obrigatoriamente folha.
    -Metodo Final não pode ser sobrescrito pelas sub-classes. Obrigatoriamente herdado

    ---------------------

    - Polimorfismo (Poli = muito, morfo = forma) muitas formas de fazer a mesma coisa

*/
