//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

//Clase (molde del objeto)
//Export es para poder utilizar el código en otro archivo
@estampar('Gucci')
class Camiseta implements CamisetaBase{
    //Propiedades (caracteristicas del objeto)
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    //Métodos (funciones o acicones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color:string){
        this.color = color;
    }

    public getColor():string{
        return this.color;
    }

}

//Clase hija
//Con extendes estoy heredando lo de la clase Camiseta
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("rojo","manga larga","nike","L",14);
//camiseta.setColor("Rojo");
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera("rosa","manga larga","adidas","S",1);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris");
console.log(sudadera_nike);