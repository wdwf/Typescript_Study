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

  * Alem disso o typescript avisa sobre possiveis erros.
    
  //### DESVANTAGENS ###//

  * Necessita ser compilado
  * Aprendizado inicial dos tipos e boas praticas
  * Erros nem sempre muito claros ou então muito grandes
  

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
//Definição dos tipos primitivos

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

//Outra forma de assimilar o tipo é pela notação generic:
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

// any (booleano, string, number ...) NÃO É LEGAL USAR ELE
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
  determinad type.
*/

// type alias -> vem a ser um atalho,para definir o tipo suportado pela varaivel
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

  Ao estendermos os types aliases seria como se unissemos os types 
  com todos os atributos que estão presentes nos mesmos.

  INTERSECTION - seria a implementação dos atibutos necessarios a um terceiro. 
  exemplo: os atributos de A e B são necessarios para criar o elemento C 
*/

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
  getInfo?: (name: string) => void 
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

// Intersection - união dos tipos
type PlayerInfo = AccountInfo & CharInfo

const player:PlayerInfo = {
  id: 123,
  name: 'Josh',
  nickname: 'Liomon',
  level: 100
}







//### CLASSES ###//

/*

  modifiers são as declarações que definem o modo de leitura da determinada classe

  Modifiers - (Public, Private, Protected, Readonly)
    Public: Metodo implicito, fornece acesso completo ao elemento
    Private: Não permite acesso direto ao elemento
    Protected: Só pode ser acessado pela classe q o criou
              - permite passar a outras classes porem não ser editavem igual private
    Readonly: Só pode ter seu valor lido 
  

  Accessor - get, set


  Abstract class -  classe abstrata é a que NÃO possibilita criar objetos a partir dela 
                    porem permite herda-lá/extende-la. Servem como modelos, para outras classes
                    mas não se quer criar nada apartir dela.

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

  Diferente o type aliases que tambem poderia descrever um objeto mas tb um conjunto de
  tipos primitivos a interface trabalha exlusivamente para objetos.

  No type interface podemos:
   - utilizar o modifier readonly para que não seja possivel altera-lo.
   - estender com outras interfaces com extends
   - implementar uma classe com interface 
*/

interface Game {
  id?: string | number;
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

//fazendo um type-guard pra se certificar q o metodo existe
if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title)
}


//Extends
interface DLC extends Game {
  originalGame: Game; //Terá todo o conteudo do game original
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
  Implements seria utilizar uma interface em uma classe

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

//Type aliases usa INTERSECTION (&) / interface usa EXTENDS

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

/*
  Type é recomendado na maioria das vezes

  Interface tem mais vantagem, quando se tem que criar libs pois assim 
  elas são mais extensiveis, alem de serem recomendadas para criar objetos e
  classes (POO)

  O MAIS IMPORTANTE É A CONSISTENCIA!!!
*/






// ### GENERICS ### //

/*
  Seria o modo se tornar um metodo generico onde o mesmo possa ser usado
  em outras partes sem problemas mesmo com passagems de parametro diferentes
  tendo seu retorno definido.

  O generic veio para que dentro da linguagem tipada ainda tenhamos uma flexibilidade.

  - O exemplo do codigo abaixo se dá pela seguinte linha de traciocinio: É uma função 
  de estado que determina seu tipo assim que é atribuido um valor pela primeira vez.

  As definição das letras temos como um padrão sendo:
  S => States
  T => Type
  K => Key
  V => Value
  E => Element

*/
//Definido o <S> essa função vai poder trabalhar com
//alguma coisa do tipo S
function useState<S extends number | string = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState };
}

const newState = useState();
// const newState = useState<number>(); //-> Como foi definido o tipo padrão
// é necessario passar o outro tipo para uso.

newState.setState("foo"); //Determina como uma string
console.log(newState.getState());

// newState.setState(123)    //Dá erro ja foi definido como uma string
// console.log(newState.getState());






//  ### TYPES UTILITIES ### //
/*
  São utilitarios para se trabalhar com os type seja ele aliases ou interface

  usado para que depois da criação do objeto  mesmo não seja modificavel 

  - Readonly deixa os campos apenas para leitura
  - Partial deixa o preenchimento dos campos opcional só naquele momento(local onde foi definido).
  - Pick vai pegar um conjunto de chaves definidas
  - Omit baseado no tipo definido ele vai omitir o que se informar
*/

type TODO = {
  title: string;
  description: string;
  completed: boolean;
}

const todo1: Readonly<TODO> = {
  title: "Assistir Brooklin 99",
  description: "Anotar as palavras diferentes em ingles",
  completed: false,
}

console.log(todo1);

// todo1.completed = true; //erro

//Função que retorna um objeto novo possibilitando alter o campo desejado
//Partial<TODO> define os campos de modo opcional
function updateTodo(todo: TODO, fieldsToUpdate: Partial<TODO>) {
  return { ...todo, ...fieldsToUpdate }
}


//Teremos uma variavel do tipo Todo que será uma copia de 'todo' 
//e nesta variavel atualizaremos o campo copia do todo1 onde será feito uma 
const todo2: TODO = updateTodo(todo1, { completed: true });
console.log(todo2);

////pick
type TodoPreview = Pick<TODO, "title" | "completed">

const todo3: TodoPreview = {
  title: "Fechar Ghost of Tsushima",
  completed: false
}

type TodoPreview2 = Omit<TODO, "description">

const todo4: TodoPreview = {
  title: "Fechar God of War",
  completed: false
}





//  ### DECORATORS ### //

