/*
  ---TypeScript é um verificador de tipo estatico

  De modo geral é feito uma detecção de erro no codigo sem
  executa-lo, este metodo é conhecido como verificação estatica.
  Determinar o que é um erro e o que não é baseado nos tipos de valores
  que estão sendo operados.

  TypeScript é uma linguagem que é um superconjunto de Javascript. Este
  superconjunto é tipado, o que significa que adiciona regras sobre como
  diferentes tipos de valores podem ser usados.

  Permite atuação gradual (arquivos .ts convivem com .js)


  --POR QUE USAR TypeScript?

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
    
  --DESVANTAGENS

  * Necessita ser compilado
  * Aprendizado inicial dos tipos e boas praticas
  * Erros nem sempre muito claros ou então muti grandes
  

  --INICIANDO
  >npm install -g typescript

  --COMPILANDO
  tsc [nome do arquivo] --watch

  -> O --watch é para ficar acompanhando as mudanças
*/