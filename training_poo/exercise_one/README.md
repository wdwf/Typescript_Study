# Programação orientada a objetos

### O que é?

Este tipo de paradigma (normas orientadoras) se concentra na modelagem de objetos da vida real em codigo.

### Por que programar com esse paradgigma?

Pois ele vai nos trazer diversos beneficios, como legibilidade do codigo ou manutenção do codigo.

🚧Nota: Esse paradigma não é facil de se entender ou de se desenvolver no começo pois terá que ter mais organização, tera trabalho com mais arquivos, tera conversação entre objetos, então leia bastante e se possivel mais de uma vez.

Programação orientada traz:

    C - confiavel
    O - oportuno - dividir
    M - manutenive -
    E - extensivel - pode adicionar novas funcuionalidade
    R - reutilizavel
    N - natural

### Divição

- Dividida em 4 pilares

## <strong>Abstração:</strong>

Seria transformar o problema do mundo real o mais proximo possivel para analise e desenvolvimento na programação.

Exemplo: Um CLIENTE que trabalha com PRODUTOS esses produtos são comprados por CLIENTES

Ao analisar essas informaçoes sera feito a criação dos arquivos das entidades que serão 'Cliente', 'Produto' e outros. Assim tendo uma representação desses objetos dentro do sistema que normalmente tera uma endentidade que é um nome de classe. Essa classe tera alguns atributos que representarão as caracteristicas desse objeto. Alem desses, tambem haverão metodos ou açoes que esse entidade pode operar dentro da aplicação.

<strong>Mas o que é classe?</strong>

Classes são os modelos ou moldes nos quais surgirão os objetos. As classes definem algumas propriedades e métodos que deverão fazer parte do objeto que derivar dela ou então, como dizemos, os objetos que serão instanciados a partir dela. Logo classe é uma abstração do que há em comum (em termos de caracteristicas e comportamentos) a um conjunto de objetos.

Exemplo:
PRODUTO
Atributos: nome, quantidade em estoque...
Metodos: dar baixa no estoque, adquirir novo lote...

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

<strong>O que é objeto?</strong>

Combina a estrutura de dados (atributos) e o comportamento dos dados (operação/metodos) em uma unica entidade.

Um objeto pode ser definido como um conceito, uma abstração, algo com limites nitidos e significado em relação ao mundo. Logo um objeto deriva de uma classe

ex: temos a classe LIVRO que é abrangente e 'generica'. Ao instanciarmos/criarmos um objeto especifico com base nessa classe poderiamos ter um livro especifico com titulo definido, numero de paginas definida, cor do livro, tema ...

🚧 Nota de resumo:

- Classe - Define os atributo e metodos comuns que serão compartilhados por um objeto.
- Objeto - Um elemento criado a partir da classe.
- Classea estão para objetos assim como as plantas arquitetonicas estção para as casas.
- Abstração - Seria o ato de criar uma classe ou metodo abstrato.

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

Serve para proteger a aplicação, isolando o maximo possivel as nossas classes, visa aumentar a flexibilidade melhorar a manutenção e aumentar a extensibilidade do software.

### Modificadores de acesso

- O que é visivilidade: Indicam o nivel de acesso aos componentes (atributos/metodos) internos de uma classe.

O sentido de usarmos modificadores de acesso e para que possamos proteger nosso codigo e consequentemente o usuario. Fazendo um paralelo com a vida real seria proteger o usuario dos componentes quimicos da pilha onde ele pode acessar o funcionamento da pilha mas não o uqe há dentro dela.

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

Nota: Voce tambem pode optar por deixar esses metodos privados

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

**Como definir a visibilidade?**

**Encapsulamento**

- São capsulas que seguem padroes por exemplo uma pilha, existem pilhas diferentes mas todas seguem um padrão de uso.

- Por seguir um padrão torna mudanças invisiveis

- Um software encapsulado ele tem um mesmo padrão, protegendo o usuario do codigo e inverso tambem.

- Encapsular seria ocultar partes independentes da implementação, permitindo construir partes invisiveis ao mundo exterior.

- Um bom objeto encapsulado possui uma interface bem definida

  - Interface é a lista de serviços fornecidos por um componente. É o contato com o mundo exterior, que define o que pode ser feito com um objeto dessa classe.

  - É como se fosse a capa do controle remoto onde especifica as funçoes do controle

          - UML
          <<interface>>
          Controlador
          --------------
          + ligar()
          ...

Na interface os metodos são todos publicos e seguindo o padrao UML é definido apenas os metodos e não seus funcionamentos.

- Uma classe implementa uma interface

E ao utilizar a interface devemos deixar os atributos do objeto por definição todos privados

- Domínio: refere-se ao conjunto de objetos, classes, métodos e conceitos que representam uma área específica de conhecimento ou funcionalidade dentro de um sistema de software. O domínio é essencialmente a representação das entidades e regras que são relevantes para um determinado problema ou contexto.

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
class Cachorro extende de Animal {
    private _nome: string
    private _raca: Raca
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

## <strong>Polimorfismo:</strong>

Mostra como ter dinamismo para trabalhar chamadas com comportamentos diferentes por debaixo dos panos.

Polimorfismo vem de poli -> muitas, morfismo -> formas
