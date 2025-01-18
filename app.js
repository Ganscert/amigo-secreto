

const listaAmigos = document.getElementById('listaAmigos');
const amigo = document.getElementById('amigo');
const amigosEnLaLista = [];

function agregarAmigo() {
  if (amigo.value === '') {
    alert('ingrese un nombre valido')
  } else {
    amigosEnLaLista.push(amigo.value);
    listaAmigos.innerHTML = '';
    for (let index = 0; index < amigosEnLaLista.length; index++) {
      listaAmigos.innerHTML += `<li>${amigosEnLaLista[index]}</li>`;
    }
    amigo.value = ''
  }
}

const resultado = document.getElementById('resultado')


function sortearAmigo() {
  const index = Math.floor(Math.random() * amigosEnLaLista.length)
  if (amigosEnLaLista[index] === undefined) {
    alert('la lista de amigos esta vacia')
  } else {
    resultado.innerHTML = `<li> tu amigo secreto es: ${amigosEnLaLista[index]}</li>`
    amigosEnLaLista.length=0
    listaAmigos.innerHTML = `${amigosEnLaLista}`
  }
}