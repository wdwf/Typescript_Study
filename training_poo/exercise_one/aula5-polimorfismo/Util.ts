export class Util {
  /*
    Metodos estaticos não necessitam da instancia para serem utilizados para serem envocados
    Este tipo de metodo são bem especificos, mas só são recomendados em casos de necessidade
    e eles não manipulão nada de atributos das classes
  */
  public static randomizar(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
