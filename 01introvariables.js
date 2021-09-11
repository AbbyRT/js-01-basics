//alert('Hola mundo'); //asi se comenta comentario 1 linea
/*Este es mi primer programa en 
java script comentario multilinea*/

//variables: antes se declaraban asi
var nombre = 'Aby';
var apellidos = 'Romero Trejo';
var edad = 25;
edad = 30;

let colorFavorito = 'Negro';
let comidaFavorita = 'Tacos';
let telefono;

telefono= 123456;

//constantes
//su valor no puede cambiar
const gravedad = 9.8;
// gravedad = 0;
const estudiantes = 20;

//diferencias entre let y var
var numero = 40;

if (true){
    var numero = 50;
    console.log(numero);
}

console.log(numero); //resulta 50

var numero2 = 100;
console.log(numero2);


if(true){
    let numero2= 5;
    console.log(numero2); //5
    let numero3= 27;// variable scope, solo existe dentro del if
    console.log(numero3);
}
console.log(numero2); //resulto 100 ._.
//console.log(numero3); //error, variable no definida (con let)

let aby = 1;
aby=5;
console.log(aby); //ok, puede cambiar de valor
//alert(nombre);
//console.log(typeof(nombre)); //similar al print, 
//no le aparece al usuario, aparece al inspeccionar, en consola
//console.log(nombre);
//console.log(typeof(edad));

//typeof(nombre); //para saber el tipo de dato
//alert(nombre+" "+apellidos+" Tiene "+edad+" años."); //para concatenar
