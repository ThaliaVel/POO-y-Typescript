//CREAR TIPO DE DATO
//Con palabras reservadas

type alfanumerico = string | number; 
let alfa: alfanumerico = "Thalia";

//String
//Se puede definir una variable con diferentes tipos de dato, string y number
let cadena: string | number= "thalia.com";
cadena = 44;

//number
let numero: number = 12;

//Bool
let verdadero_falso: boolean = true;

//Any-cualquier cosa
let cualquiera: any = "hola";

//Array
var lenguajes: Array<string> = ["Php","Html","js"];

//otra forma de definir un array
let years: number[] = [12,13,14];

//Let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1,numero2);
}

console.log(numero1,numero2);

console.log(alfa, cadena, numero, verdadero_falso,cualquiera,lenguajes,years);

