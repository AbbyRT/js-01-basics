//alert('holi'); //para comprobar que hice el enlace correcto
//clase que me perdi T_T Arreglos
//definir un array
let bim = ['Aby', 'Estu']; //string
document.write('Hola ' + bim[0] + ' y ' + bim[1]); //localizacion comienza en 0

let tam = bim.length;
document.write(" longitud de array "+ tam); // para saber la longitud del arreglo

//for each : para cada elemento del array hacer 
bim.forEach(function(elemento, indice){ //el ultimo es, arreglo al que pertenece, es opcional
    console.log(elemento, indice); //hacer
}) //poner atención donde va el último parentesis

//Push añade un elemento al final de un array
let newlength = bim.push('michi'); //agrega elemento al final del array
//en la nueva variable se guarda la nueva longitud del array
document.write(" El nuevo integrante es "+ bim[2]); 
document.write(" la nueva longitud es "+ newlength); 

//Pop: elimina el último elemento de un array
let last = bim.pop(); //elimina michi, y se guarda en variable last
document.write(" Variable eliminada del arreglo "+ last); 
document.write(" Nueva longitud "+ bim.length);
bim.forEach(function(elemento, indice){ //para comprobar
    console.log(elemento, indice);
}) 
//conclusion last= michi, bim = [aby, estu]

//Encontrar un indice
let pos = bim.indexOf('Aby');
document.write('Aby esta en la posicion ' + pos );

/*Borrar elementos especificos del array
se coloca la posicion del primer elemento que se desea borrar 
y cuantos elementos se quieren eliminar, en la variable se guardan
los elementos borrados */
bim.push('michi', 'canela'); 
bim.forEach(function(elemento, indice){ //para comprobar
    console.log(elemento, indice);
}) 
//nuevo bim= [aby, estuardo, michi, canela]
let eliminados = bim.splice(1, 2); //empieza en estuardo y se detiene en michi
//nuevo array
bim.forEach(function(elemento, indice){ //para comprobar
    console.log(elemento, indice);
}) 

//para invertir el orden de un array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
fruits.forEach(function(elemento, indice){ //para comprobar
    console.log(elemento, indice);
}) 
// fruits = mango, apple, orange, banana

//Para ordenar 
fruits.sort();
fruits.forEach(function(elemento, indice){ //para comprobar
    console.log(elemento, indice);
}) 
//fruits = apple, banana, mango, orange

//Los numeros son casos especiales, pero estan como STRINGS
let numeros = ['22', '5000', '1', '125', '489'];
//de menor a mayor
numeros.sort(function(a, b){return a - b});//ordenar de menor a mayor (los numeros estan en string)
numeros.forEach(function(elemento, indice){ //para comprobar
    console.log(elemento, indice);
}) // numeros: 1, 22, 125, 489, 5000

//de mayor a menor
numeros.sort(function(a, b){return b - a});//ordenar de mayor a menor (los numeros estan en string)
numeros.forEach(function(elemento, indice){ //para comprobar
    console.log(elemento, indice);
}) // numeros 5000, 489 , 125, 22, 1
