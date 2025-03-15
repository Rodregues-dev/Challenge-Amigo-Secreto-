//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        let listaAmigos = document.getElementById('listaAmigos');
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = nomeAmigo;
        listaAmigos.appendChild(novoAmigo);
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O amigo sorteado foi: ${amigoSorteado}</p>`;
}