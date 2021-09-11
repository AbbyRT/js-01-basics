/*Camila acaba de comenzar su nuevo rol como Desarrolladora Java Junior 
en un banco. Ella está trabajando en cuentas de clientes para una nueva
 aplicación de banca móvil. Se le pide que implemente una función que 
 muestre la cantidad mayor de tres cantidades en la pantalla de inicio.*/

 //opcion 1 
function mayor (num1, num2, num3){
    if (num1>=num2 && num1>=num3){ //compara numeros
        document.write("El número mayor es " + num1);
        return may=num1;
    }else if (num2>=num1 && num2>=num3){
        document.write("El número mayor es " + num2);
        return may=num2;
    }else if (num3>=num2 && num3>=num1){
        document.write("El número mayor es " + num3);
        return may=num3;
    }
console.log(may);
}

let var1 = parseInt(prompt('introduce el número 1')); //le pregunta al usuario el numero, pasa de string a numero
let var2 = parseInt(prompt('introduce el número 2'));
let var3 = parseInt(prompt('introduce el número 3'));
//document.write("El número mayor es " + mayor(var1,var2,var3));
//document.write("tipo de variable var1 " + typeof var1);
mayor(var1,var2,var3); // llamo a la funcion y listo :)
//buscar comando que ordena numeros
//comandos pendientes: reverse, 
//creo que vieron arreglos
//sort ordena los elementos
//aplicar reverse
//.push?
//math.max?
//no funciona mi codigo con 5000, 617 y 20 :(
    //document.write("<br>El tipo de boleano es: " + typeof boleano)
    //comvertir de letras a numeros parseInt 
//exactamente investigar lo siguiente: arreglos, funciones push, pop, sort y reverse

