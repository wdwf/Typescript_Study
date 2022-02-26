/*
  //### TypeScript é um verificador de tipo estatico ###//

  De modo geral é feito uma detecção de erro no codigo sem
  executa-lo, este metodo é conhecido como verificação estatica.
  Determinar o que é um erro e o que não é baseado nos tipos de valores
  que estão sendo operados.

  TypeScript é uma linguagem que é um superconjunto de Javascript. Este
  superconjunto é tipado, o que significa que adiciona regras sobre como
  diferentes tipos de valores podem ser usados.

  Permite atuação gradual (arquivos .ts convivem com .js)


  //### POR QUE USAR TypeScript? ###//

  * Com o seu uso é possivel evitar resultados inesperados
  pois no momento que se atribui um tipo a uma variavel
  aquela variavel só receberá aquele tipo de valor.
  ex: 
    function soma(a, b) {
      return a + b
    }

    soma(1, 2)//3
    soma('1', '2')//12 -> Opaaa!

  * Avisa sobre possiveis erros.
    
  //### DESVANTAGENS ###//

  * Necessita ser compilado
  * Aprendizado inicial dos tipos e boas praticas
  * Erros nem sempre muito claros ou então muti grandes
  

  //### INICIANDO ###//
  >npm install -g typescript

  //### COMPILANDO ###//
  tsc [nome do arquivo.ts] --watch

  -> O --watch é para ficar acompanhando as mudanças


//### CRIANDO E CONFIGURANDO TSconfig ###//

  --Definindo quantos arquivos serão compilados e onde seram 
  armazenas as compilaçoes

  * Para criar o TSconfig usamos o seguinte comando
  >tsc --init 

  -> "outDir" - define o local de armazenamento das compilaçoes

  * Comando para compilar tudo
  >tsc
*/


//### TYPES ###//

// boollean (true/false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xada

// array (type[]) - É necessario informar o que tem dentro do array
let items: number[] | string[]
items = ['a', 'b', 'c']

//Outra forma de assimilar o tipo:
let values: Array<number>
values = [1,2,3]

// tuple - 
// ->tupla nada mais é que um array porem que ja sabemos o numero de elementos desse
//   array e tambem o tipo dele
let title: [number, string]
title = [1, 'hello']

// enum
// ->É um enumerator que serve para criar um conjunto de chave valor
enum Colors {
  white = '#fff',
  black = '#000',
}

// any (booleano, string, number ...) NÃO É LEGAL
// -> Qualquer coisa

let coisa: any
coisa = [1, 'a', true];

// void (vazio)
// ->Não retorna nada
function logger(): void {
  console.log('foo');
}

// null | undefined
type Bla = string | undefined

// never
// ->Tipo que nunca vai retornar
function error(): never {
  throw new Error("error")
}

// object ()
// -> tudo aquilo que não é string, array, number ou bool
let carta: object

carta = {
  key: "fi"
}

//### TYPE INFERENCE ###//

/*
  Infere - Deduz que o tipo da variavel é referente ao tipo 
  do valor atribuido a ela.
*/

let messageTwo = "mensagem definida"