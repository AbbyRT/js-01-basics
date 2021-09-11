//ejercicio 1
// alert('condicionales');
// para comprobar que archivo sea correcto
/*
var edad = 20;
if(edad >= 18) {
    console.log ('eres mayor de edad');

}*/

// ejercicio 2
//var edad = prompt('¿Cual es tu edad?');

/*if(edad >= 18) {
    console.log ('eres mayor de edad');

} else{
    console.log ('eres menor de edad');
}*/

//ejercicio 3
/*if(edad >= 18) {
    document.write ('eres mayor de edad'); // aparece en la pagina principal

} else{
    document.write ('eres menor de edad');
}*/

// ejercicio 4
/* Preguntarle al usuario su edad por promt. Despues hacer una condicional if 
con las siguientes situaciones, si el usuario es mayor o igual a  18 y menor o igual a 29 años
mostrar mensaje: Felicidades has sido aceptado en el bootcamp de generation, 
en caso contrariomostrar mensaje: No cumples con los requisitos del programa. */
var edad = prompt('¿Cual es tu edad?');
if(edad>=18 && edad<=29 ){
    document.write ('Felicidades has sido aceptado en el bootcamp de generation'); 
}else{
    document.write ('No cumples con los requisitos del programa'); 

}


