// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    //para ver el nombre ingressado en consola
    console.log(nombre);
    //validacion a ue no este vacia
    if (nombre === ""){
        alert('Ingresa un nombre');
    }
    //agrega el nombre a la lista
    amigos.push(nombre);
    //borra el nombre del campo para escribir el nuevo
    document.getElementById('amigo').value = "";
    //para dar seguimiento en consola
    console.log(amigos)
    actualizarAmigos();
    return;
   
}

function actualizarAmigos(){
    //obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    //limpiar la lista existente
    lista.innerHTML = "";
    //iterar sobre el arreglo
    for(let i = 0; i<amigos.length;i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        //agregar los elementos a la lista
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    //validar qu no este vacia
    if(amigos.length==0){
        alert('La lista esta vacia')
    }
    //nombre aleatorio
    let indiceAleatoreo =  Math.floor(Math.random()*amigos.length);
  
    let resultado = amigos[indiceAleatoreo];
    //para ver que todo este bien
    console.log(resultado);
    //para crear el elemento y verlo en la pagina
    let li = document.createElement('li');
    li.textContent = `El ganador es: ${resultado}`
    document.getElementById('resultado').appendChild(li);
   

}