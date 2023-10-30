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

<strong>Abstração:</strong> seria transformar o problema do mundo real o mais proximo possivel para analise e desenvolvimento na programação.

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

<strong>Encapsulamento:</strong> Serve para proteger a aplicação

<strong>Herança:</strong> Condiz na reutilização de codigo

<strong>Polimorfismo:</strong> Mostra como ter dinamismo para trabalhar chamadas com comportamentos diferentes por debaixo dos panos.
