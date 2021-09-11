/*Camila acaba de comenzar su nuevo rol como Desarrolladora Java Junior 
en un banco. Ella está trabajando en cuentas de clientes para una nueva
 aplicación de banca móvil. Se le pide que implemente una función que 
 muestre la cantidad mayor de tres cantidades en la pantalla de inicio.*/

//opcion 2 
document.write('esta es la solucion 2'); //aparece en la pantalla principal
function mayor(){
    var numeros=[]; //declaro un array
    numeros[0]=prompt('Teclea un digito');// se guarda como string
    numeros[1]=prompt('Teclea un digito');
    numeros[2]=prompt('Teclea un digito');
    console.log(numeros); //solo muestra numeros en consola
    numeros.sort(function(a, b){return b - a});//ordenar de mayor a menor (los numeros estan en string)
    console.log(numeros); //muestra array en consola
    return may=numeros[0];
}
document.write('el número mayor es '+ mayor());
