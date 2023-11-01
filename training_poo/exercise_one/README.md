# Programação orientada a objetos

### O que é POO?

Este tipo de paradigma (normas orientadoras) se concentra na modelagem de objetos da vida real em codigo.

### Por que programar com esse paradigma?

Pois ele vai nos trazer diversos beneficios, como legibilidade do codigo ou manutenção do codigo.

🚧Nota: Esse paradigma não é facil de se entender ou de se desenvolver no começo pois terá que ter mais organização, tera trabalho com mais arquivos, tera conversação entre objetos, então leia bastante e se possivel mais de uma vez.

Programação orientada traz:

    C - confiavel
    O - oportuno - dividir
    M - manutenive
    E - extensivel - pode adicionar novas funcuionalidade
    R - reutilizavel
    N - natural

### O que é um objeto?

Combina a estrutura de dados (atributos) e o comportamento dos dados (operação/metodos) em uma unica entidade.

Um objeto pode ser definido como um conceito, uma abstração, algo com limites nitidos e significado em relação ao mundo. Logo um objeto deriva de uma classe (é criado apartir de uma classe).

ex: temos a classe LIVRO que é abrangente e 'generica'. Ao instanciarmos/criarmos um objeto especifico com base nessa classe poderiamos ter um livro especifico com titulo definido, numero de paginas definida, cor do livro, tema ...

### Mas o que é classe?

Classes são os modelos ou moldes nos quais surgirão os objetos. As classes definem algumas propriedades e métodos que deverão fazer parte do objeto que derivar dela ou então, como dizemos, os objetos que serão instanciados a partir dela. Logo classe é uma abstração do que há em comum (em termos de caracteristicas e comportamentos) a um conjunto de objetos.

Exemplo de classe:

Exemplo seguindo a UML

    ----------
    - Identificador
    | Mamifero |
    ----------
    - Atributo
    | Nome     |
    | Energia  |
    ----------
    - Metodo
    | Comer()  |
    | Mover()  |
    ----------
    - Estado
    | Vivo     |
    ----------

---

    - Identificador
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

```
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

    Como criar um objeto?
      - se cria um molde e depois se instancia/gera um objeto
      Ex: novaCaneta = new Caneta()
```

🚧 Nota de resumo:

- Classe - Define os atributo e metodos comuns que serão compartilhados por um objeto.
- Objeto - Um elemento criado a partir da classe.
- Classes estão para objetos assim como as plantas arquitetonicas estção para as casas.

### Divição

- Dividida em 4 pilares

## <strong>Abstração:</strong>

Abstração - Seria o ato de criar uma classe ou metodo abstrato.

Classe Abstrata -> quando uma classe é abstrata, ela não deve ser instanciada uma vez que seus metodos estão incompletos ela só servira para efeitos de herança

Metodo abstrato -> é apenas a definição de metodos que serão implementados por subclasses

❗Exemplo de classe abstrata:
-> Classe abstrata são as que não permitem qualquer tipo de instancia.
São classes feitas especialmente para serem modelos para suas classes
derivadas. As classes derivadas, via de regra, deverão sobrescrever
os métodos para realizar a implementação dos mesmos.
Logo é feito a entensão da classe com 'extends'.

```
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
```

## Exemplo de abstração de uma classe na vida real

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

### Setup inicial

### Criando uma instancia de uma classe

### Acessando propriedades do objeto

### Construtor

### Construtor com parametros

### Definindo atributos no construtor

### ts-node

### Metodos

### Metodos com retorno

### Metodos com parametros

## <strong>Encapsulamento:</strong>

São capsulas que seguem padroes e servem para proteger a aplicação, isolando o maximo possivel as nossas classes, visa aumentar a flexibilidade melhorar a manutenção e aumentar a extensibilidade do software.

### Modificadores de acesso

- O que é visivilidade: Indicam o nivel de acesso aos componentes (atributos/metodos) internos de uma classe.

- Um bom objeto encapsulado possui uma interface bem definida

- Interface é a lista de serviços fornecidos por um componente. É o contato com o mundo exterior, que define o que pode ser feito com um objeto dessa classe.

- É como se fosse a capa do controle remoto onde especifica as funçoes do controle

```
    - UML
    <<interface>>
    Controlador
    --------------
    + ligar()
    ...


    - Defindo uma interface
    export interface Controlador {
      public ligar(): void
    }
```

- Na interface os metodos são todos publicos e seguindo o padrao UML é definido apenas os metodos e não seus funcionamentos.

- Uma classe implementa uma interface

- E ao utilizar a interface devemos deixar os atributos do objeto por definição todos privados

```
class ControleRemoto implements Controlador {
  privated Ligado: boolean;
  ...
  //-> Estamos fazendo como se fosse uma sobre escrita no metodo (@Overwrite)
  ligar():void {
    this.setLigado(true)
  }
}
```

- Domínio: refere-se ao conjunto de objetos, classes, métodos e conceitos que representam uma área específica de conhecimento ou funcionalidade dentro de um sistema de software. O domínio é essencialmente a representação das entidades e regras que são relevantes para um determinado problema ou contexto.

  - Exemplo: Sistema de Biblioteca

    - Imagine que você está desenvolvendo um sistema de gerenciamento de biblioteca. Nesse caso, o "domínio" seria o mundo das bibliotecas, com todos os elementos associados a ele:

    > Livros, Leitores, Emprestimos, Bibliotecarios, Regras da Biblioteca

    - No contexto do desenvolvimento do sistema de biblioteca, você estaria modelando essas entidades, seus relacionamentos e as operações que podem ser realizadas, como emprestar um livro, devolvê-lo ou adicionar um novo livro ao acervo. Esse conjunto de conceitos e regras que fazem parte do sistema de biblioteca constitui o "domínio" desse software.

O sentido de usarmos modificadores de acesso, é para que possamos proteger nosso codigo e consequentemente o usuario. Fazendo um paralelo com a vida real seria proteger o usuario dos componentes quimicos da pilha onde ele pode acessar o funcionamento da pilha mas não o que há dentro dela.

Seguinda a UML podemos definir 3 simbologias

\*\* UML -> Linguagem de modelagem unificada

    + -> Público (public)
        Possibilidade de utilizar em qualquer lugar que o mesmo esteja disponivel
        - QUEM TEM ACESSO: A classe atual e todas as outras classes.

    - -> Privado (private)
        Apenas O criador do componente pode utilizar
        - QUEM TEM ACESSO: apenas a classe atual
        - Atributos normalmente são privados
        - Metodos quem implementam rotinas internas (metodos auxiliares devem ser privados)

    # -> Protegido (protected)
        Apenas disponivel para quem tem autorização (para os decendentes de uma classe)
        - QUEM TEM ACESSO: a classe atual e todas as suas sub-classes

❗Nota: Quando temos um componente com a visibilidade private temos que usar metodos
acessores (get/set) e este elemento só estara disponivel dentro da classe

❗Nota: Quando temos um comp. com a visibilidade protected apenas a classe Pai (onde esta esta sendo criado o componente) e os filhos que vem de herança poderam acessar esse elemento

### METODOS ACESSORES (get, set)

São metodos que dão acesso a uma determinada coisa

- Getters -> Pega/Acessa algo
  - Possui retorno
- Setters -> Modifica/Atribui algo
  - Não possui retorno
  - Recebe por parametro o valor a ser inserido no atributo

Nota: Voce tambem pode optar por deixar esses metodos privados para executar algo especifico dentro da propria classe.

**Definindo Get e Set**

```
class Pessoa {
  constructor(
    private _nome: string,
        |-> é uma convensão no javascript utilizar "_" para definir variavels privadas
  ) {}

  public get nome(): string {
    return this._nome;
  }
  //or
  public getNome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }
  //or
  public setNome(nome: string) {
    this._nome = nome;
  }
}
```

```
estante = new estante()

meusDocs = e.getTotalDocs()
    |-> O metodo get acessa o valor do atributo e retorna o mesmo dando assim segurança

e.setTotalDocs(doc)
    |-> O metodo set Define um novo valor pelo parametro
```

## <strong>Herança:</strong>

**Herança:** A herança é um relacionamento onde uma classe (subclasse ou classe derivada) herda atributos e métodos de outra classe (superclasse ou classe base). Por exemplo, uma classe Cachorro pode herdar de uma classe Animal. Isso permite a reutilização de código e a modelagem de hierarquias de classes.

**Quando devo usar Herança**
Segue a regra do "é um ou tem um"

- Se é um -> tem herança
- Se tem um -> tem composição

Tendo o pensamento de:

- Cachoro é um Animal -> Sim é um Animal (ambas são classes)
- Cachorro é uma raça -> Não cachorro tem uma raça logo é feito a composição

```
class Cachorro extende de Animal { //-> O uso do extends siguinifica que esta herdando
    private _nome: string
    private _raca: Raca  //-> isso seria a composição ter o tipo definido como 'Raca'
}
```

Podemos não permitir que uma classe seja herdada

- Basta definirmos o construtor da classe como privado

### RELACIONAMENTO ENTRE CLASSES

O relacionamento entre objetos define como eles vão interagir ou colaborar para executar uma
operação em uma aplicação.

- Associação: Falamos sobre associação entre dois objetos quando cada um deles pode usar o outro, mas também cada um deles pode existir sem o outro. Não há dependência entre eles.

- Associação simples: Uma classe usa outra classe como parte de suas operações, mas não há uma dependência forte. Por exemplo, uma classe Carro pode ter uma associação com uma classe Motor, onde o motor é parte do carro.

- Colaboração: A colaboração declara que dois objetos estão colaborando quando um objeto faz uso de outro objeto para completar uma operação.

Um exemplo seria para salvar e recuperar os detalhes dos clientes, a classe ClienteRepository usa um objeto Cliente para salvar e recuperar os dados.

Agregação: é um tipo especial de associação onde as informações de um objeto (chamado objeto-todo) precisam ser complementados pelas informações contidas em um ou mais objetos de outra classe (chamados objetos-parte)

- Por exemplo, uma classe Universidade pode ter uma agregação com a classe Aluno, indicando que uma universidade contém vários alunos. A diferença chave é que os objetos "parte" podem existir independentemente do objeto "todo".

Composição: A composição também é uma relação todo-parte, mas os objetos "parte" são criados e destruídos junto com o objeto "todo". Por exemplo, uma classe Casa pode ter uma composição com a classe Quarto, indicando que a casa é composta por vários quartos. Quando a casa é destruída, os quartos também são destruídos.

**Um pouco mais sobre herança:**

Navegaçao pela herança (arvore de herança):

- Raiz -> superClasse
- Ancestral -> subClasse

Se essa arvore é lida de cima para baixo é especilização

Se ela é lida de baixo para cima é generalização

Tipos de herança

- Herança de implementação:

Na herança de implementação, também conhecida como herança por inclusão ou herança de interface, uma classe derivada herda os atributos e métodos da classe base (ou classe pai) e pode adicionar novos atributos e métodos ou modificar os existentes. Basicamente, a classe derivada estende a funcionalidade da classe base sem alterar sua estrutura fundamental.

```
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

  let doguinho: Dog = new Dog()
  doguinho.eat()  //-> Isso funcionará
```

- Herança para diferença:

A herança para diferença, também conhecida como herança por substituição ou herança por modificação,envolve criar uma nova classe derivada que substitui ou modifica o comportamento de métodos da classe base. Nesse caso, a classe derivada é uma especialização da classe base, refinando ou personalizando seu comportamento.

```
Exemplo usado no java:
class Shape {
    void draw() {
        System.out.println("Drawing a shape.");
    }
}

class Circle extends Shape {
    @Override //-> sobreescrita
    void draw() {
        System.out.println("Drawing a circle.");
    }
}
```

## <strong>Polimorfismo:</strong>

Mostra como ter dinamismo para trabalhar chamadas com comportamentos diferentes por debaixo dos panos.

Polimorfismo vem de poli -> muitas, morfismo -> formas

O conceito principal do polimorfismo é a capacidade de tratar objetos de diferentes classes de maneira uniforme, desde que esses objetos implementem uma mesma interface ou herdem de uma mesma classe base. Em outras palavras, o polimorfismo permite que você acesse métodos ou atributos de objetos de diferentes classes sem se preocupar com os detalhes específicos da implementação de cada classe.

Todo metodo tem uma assinatura e você deve diferenciar assinatura igual e diferentes.

A assinatura do metodo consistes em:

- Quantidade e os tipos dos parametros

```
-- Estes metodos tem a mesma assinatura --
public calcMedia(n1: number, n2: number): number {}
public calcMedia(v1: number, v2: number): string {}

-- Este tem uma assinatura diferente
public calcMedia(bim: number, v1: number, v2: number): number {}
public calcMedia(n1: number, n2: number, n3: number, n4: number): number {}
```

### Tipos de polimorfismos

- Sobreposição: @Overwrite
- Sobrecarga:

Exemplo:
Suponha que temos um conjunto de formas geométricas, como círculos e quadrados. Cada forma tem um método calcularArea() que retorna a área da forma. Em vez de lidar com cada forma separadamente, podemos usar o polimorfismo para tratá-las de forma uniforme:

```
interface Forma {
    double calcularArea();
}

class Circulo implements Forma {
    private raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    public calcularArea(): number {
        return Math.PI * raio * raio;
    }
}

class Quadrado implements Forma {
    private lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    public calcularArea(): number {
        return lado * lado;
    }
}

arquivo main:

  forma1: Forma = new Circulo(5.0);
  forma2: Forma = new Quadrado(4.0);

  console.log("Área do círculo: " + forma1.calcularArea()); // Polimorfismo em ação
  console.log("Área do quadrado: " + forma2.calcularArea()); // Polimorfismo em ação

```
