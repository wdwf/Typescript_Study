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
  do valor atribuido a ela. Logo não é necessario definir o tipo
  do elemento pois seria uma redundancia.  
*/

let messageTwo = "mensagem definida"

window.addEventListener("click", (e) => {
  e.target
})

//### TYPE ALIASE E UNION ###//

/*
  o UNION é o uso do pipe | para se referir que o elemento pode ser
  de um tipo ou de outro.

  o ALIASE é usado quando funçoes diferentes apresentam os mesmos 
  parametros com os mesmos tipos, assim é possivel definir e reutilizar
*/

// type alias
type Uid = number | string | undefined
type Platform = 'Windows' | 'Linux' | 'Mac os'

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has ${item}`);
}

function logUser(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`);
}

function renderPlatform(platform: Platform) {
  return platform
}

logDetails(123, "shoe");
logDetails("147", "short");

logUser(123, "Bob")
logUser("147", "Jom")

// renderPlatform('ios') -> erro


//### ESTENDENDO TYPE ALIASES COM INTERSECTION ###//

/*
  o uso do ? serve para indicar que a passagem de valor para
  determinado atributo seja opcional como se definissimos o type undefined

  INTERSECTION - seria a implementação dos atibutos necessarios a um terceiro, 
  exemplo: os atributos de A e B são necessarios para criar o elemento C 
*/

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
}

const accountOne: AccountInfo = {
  id: 123,
  name: "Rian",
  email: "ry@email.com"
}

const accountTwo: AccountInfo = {
  id: 123,
  name: "Emily",
}

type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  nickname: 'Lobomon',
  level: 10
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo

const player:PlayerInfo = {
  id: 123,
  name: 'Josh',
  nickname: 'Liomon',
  level: 100
}



//### CLASSES ###//

/*
  Modifiers - (Public, Private, Protected, Readonly)
    Public: Metodo implicito, fornece acesso completo ao elemento
    Private: Não permite acesso direto ao elemento
    Protected: Só pode ser acessado pela classe q o criou
    Readonly: Só pode ter seu valor lido 
  

  Accessor - get, set


  Abstract class - classe abstrata é a que não possibilita criar objetos a partir dela porem permite herda-lá/extende-la

    abstract class chassi {
      ...
    }
*/

class UserAccount {
  public name: string; //-> propriedade que vem por padrão(implicito) e possibilita alterar valor, ler tal valor... 
  protected age: number; //-> Só pode ser acessado dentro da classe userAccount ou das subClasses não sendo acessivel fora delas 

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

//Classe que se estende classe userAccount tendo acesso a atributos e metodos
class CharAccount extends UserAccount {
  private nickname: string; //-> torna o elemento inacessivel diretamente
  private level: number;   //-> disponibiliza apenas leitura do elemento
  readonly amulet?: string

  constructor(name: string, age: number, nickname: string, level: number, amulet: string) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
    this.amulet = amulet;
  }

  get getLevel() {
    return this.level
  }

  set setLevel(level: number) {
    this.level = level
  }

  logChar(): void {
    console.log(`The player ${this.name} is ${this.age} and has a char ${this.nickname} at level ${this.level}`);
  }
}


const bob = new UserAccount("Bob", 21);
console.log(bob);
// console.log(bob.age);
bob.logDetails();

const john = new CharAccount("John", 45, "JohnMaster", 80, 'Dragon Fire');
john.logDetails();
john.logChar();
// john.nickname -> error nickname é privado
console.log(john.amulet);
// john.level = 1000 -> error level é apenas para leitura
// john.age -> error acessivel apenas dentro da classe principal ou classe secundarias 

console.log(john.getLevel);
john.setLevel = 999;



//### INTERFACES ###//

/*
  É um conjunto de dados para descrever a estrutura de um objeto

  Nesta interface podemos utilizar o modifier readonly, estender com extendes
  e implementar uma classe com interface 
*/

interface Game {
  title : string;
  description?: string;
  readonly genre: string;
  platform: string[];
  getSimilars?: (title: string) => void
}


const tlou: Game = {
  title: "The last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tales, Metro`);
  }
}

console.log(tlou.title);
console.log(tlou.genre);// OK
// tlou.genre = "Drama" // ERROR



tlou.getSimilars(tlou.title)


interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: "The Last of US - Left Behind",
  description: "You play as Ellie before the original game",
  genre: "action",
  platform: ["PS4"],
  originalGame: tlou,
  newContent: ["3 hours story", "new characters"]
}

//Implementando uma classe com interface
/*
  Ao fazer isso se faz necessario ter todos os elementos
  presentes na interface, fazendo a interface assim servir como um padrão de config 
*/

class CreateGame implements Game {
  title: string;
  description?: string;
  genre: string;
  platform: string[];

  constructor(t: string, d: string, g: string, p: string[]) {
    this.title = t;
    this.description = d;
    this.genre = g;
    this.platform = p;
  }
}

//### TYPE ALIAS VC TYPE INTERFACE ###//

// DEFINIÇAO
type HistoryT = {
  title: string
}

type spinOffT = {
  extra: string
}

//----

interface IHistory {
  title: string
}

interface spinOff {
  extra: string
}

//INTERSECTION / EXTENDS

//Fazendo o intersection ao realizar a criação de um HistoryCollection do mesmo tipo
//será necessario ter o title e o extra
type HistoryCollectionT = HistoryT & spinOffT;

interface HistoryCollection extends IHistory, spinOff {}

//IMPLEMENTS

class CreateHistoryT implements HistoryCollectionT {
  title: string;
  extra: string;
}

class CreateHistory implements HistoryCollection {
  title: string;
  extra: string;
}

//DECLARAR FUNÇÃO

type getSimilarsT = (title: string) => void;

interface getSimilars {
  (title: string): void;
}

// ================== DIFERENÇAS ======================= //

//---TIPOS PRIMITIVOS
//Com type alias é possivel declarar tipos primitivos 
type IDT = string | number;

// O que ja não é permitido fazer com interface
// interface ID extends number {}

//---TUPLAS
// pode declarar tuplas normalmente
type TupleT = [number, number];

// [1,2,3] as TupleT -> error

// Não funciona definir tuplas na interface
interface Tuple {
  0: number;
  1: number;
}

// [1,2,3,4] as Tuple -> Não funciona

//-- DECLARAÇÃO POR ESCOPO
//Com Type Alias só se tem apenas uma declaração por escopo

type JQueryT = { a: string };
// type JQueryT = { b: string }; //erro
  
//Com interface é possivel logo possivel ter multiplas
//declaraçoes e ele une de mesmo nome.
//Ele faz um merge das interfaces.

interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: "bla",
  b: "foo"
}
