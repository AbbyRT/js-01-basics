/* Crear un programa que solicite 2 números por prompt. 
Mandar esos dos valores a una función por 
parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división),
 y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.

*/
alert('calculadora');
let x1 = parseInt(prompt('introduce el número 1'));
let x2 = parseInt(prompt('introduce el número 2'));

function cal (x1, x2){
    document.write(x1 + '+' + x2 + '='+ (x1+x2)+ '<br>'); 
    document.write(x1 + '-' + x2 + '='+ (x1-x2) + '<br>');
    document.write(x1 + '*' + x2 + '='+ (x1*x2) + '<br>');
    if(x2==0){
        document.write('error, el segundo número no puede ser cero en una divisón <br>');

    }else{
        document.write(x1 + '/' + x2 + '='+ (x1/x2) + '<br>');
    }

}

cal(x1,x2);

//no olvidar las validaciones para que no salga error

