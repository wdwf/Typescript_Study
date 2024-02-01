# Princípios SOLID

SOLID são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender. Esses princípios podem ser aplicados a qualquer linguagem de POO.

Esses cinco princípios nos ajudam a entender a necessidade de determinados padrões de projetos e arquitetura de software em geral.

Criado com o proposito:

> _“Criar código compreensivel, legivel e testavel no qual diversos desenvolvedores possam trabalhar de modo colaborativo.”_

Vamos examinar cada princípio, um por um. Seguindo a sequência da abreviação SOLID, temos:

- O **S**ingle Responsibility Principle (Princípio da responsabilidade única)
- O **O**pen-Closed Principle (Princípio aberto/fechado)
- O **L**iskov Substitution Principle (Princípio da substituição de Liskov)
- O **I**nterface Segregation Principle (Princípio da segregação da interface)
- O **D**ependency Inversion Principle (Princípio da inversão da dependência)

---

# Princípio da responsabilidade única

O princípio da responsabilidade única declara que **uma classe deve fazer apenas uma coisa e, portanto, deve ter apenas uma razão para ser modificada**.

Isso significa que, se uma classe for um contêiner de dados, como uma classe Livro ou uma classe Estudante, e se ela tiver campos relativos àquela entidade, ela deve ser alterada apenas quando alterarmos o modelo de dados.

Seguir o princípio da responsabilidade única é importante. Para começar, porque muitas equipes diferentes podem trabalhar no mesmo projeto e editar a mesma classe por motivos diferentes, o que poderia ocasionar incompatibilidade entre os módulos.

**Objetivo**

Esse princípio visa separar comportamentos para que, se surgirem erros como resultado de sua alteração, não afetem outros comportamentos não relacionados.

<aside>
💡 Seria como uma classe que tem varias responsabilidades e quando passa a usar o principio são separadas essas responsabilidades em pequenas classes unicas. Porem é mantido nessa classe original a funcionalidade na questão de logica ne negocio.

</aside>

---

# Princípio aberto/fechado

O princípio de aberto/fechado diz que as **classes devem estar abertas para extensão, mas fechadas para modificação**.

Modificação significa alterar o código de uma classe existente, enquanto extensão significa adicionar novas funcionalidades.

O que esse princípio representa, portanto é que: devemos poder adicionar novas funcionalidades sem tocar no código existente para a classe. Isso se dá porque, sempre que modificamos o código existente, estamos nos arriscando a criar bugs em potencial. Assim, devemos evitar de tocar em código em produção testado e confiável (em grande parte), se possível.

No entanto, como podemos adicionar novas funcionalidades sem tocar na classe? Geralmente, isso é feito com o auxílio de interfaces e classes abstratas.

**Objetivo**

Este princípio visa estender o comportamento de uma classe sem alterar o comportamento existente. Isso serve para evitar erros quando a classe estiver sendo usada.

---

# Princípio da substituição de Liskov

O princípio da substituição de Liskov declara que as subclasses devem ser substituíveis por suas classes de base.

Isso quer dizer que, Se S é um subtipo de T, os objetos do tipo T em um programa podem ser substituídos por objetos do tipo S sem alterar nenhuma das propriedades desejáveis desse programa.

A classe **filho** deve ser capaz de processar as mesmas solicitações e entregar o mesmo resultado que a classe **pai**, ou pode entregar um resultado do mesmo tipo.

Esse é o comportamento esperado, pois, quando usamos a herança, levamos em conta que a classe filha herda tudo o que a superclasse tem. A classe filha estende o comportamento, mas nunca o reduz.

**Objetivo**

Esse princípio visa impor consistência para que a classe pai ou sua classe filho possa ser usada da mesma maneira sem erros.

<aside>
💡 Seria uma classe e uma subclasse que podem reproduzir as mesmas funcionalidades.

</aside>

---

# Princípio da segregação de interfaces

Reforça a ideia de se programar orientadoa objeto

Uma classe não devem ser forçada a depender de metodos que não utiliza. Em vez disso, deve ter acesso apenas aos métodos que são relevantes para sua funcionalidade. Isso é alcançado dividindo as interfaces em partes menores e mais específicas, em vez de ter uma única interface grande e genérica.

_nota: Este principio visa dividir um conjunto de açoes em conjunto menores para que uma classe execute APENAS o conjunto de açoes de que necessita._

quebre as interfaces em pequenos casos!
