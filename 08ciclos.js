//alert('ciclos'); //para comprobar enlace
//ciclo for
for (let i = 0; i<5; i++){ //i se declara en el mismo for ya que solo se usa ahí
    console.log('holi desde for. Vuelta: '+ i); //se ejecuta 5 veces en total porque comienza en 0

}

const frutas = ['Manzana', 'Mango', 'Pera', 'Piña', 'Sandia', 'Melon'];
//opcion 1, en caso de que se tenga un ARREGLO GUARDADO
for (let i = 0; i<frutas.length; i++){
    console.log(frutas[i]);

}

//opcion 2
frutas.forEach(function(elemento, indice){
    console.log(elemento); 
}
)