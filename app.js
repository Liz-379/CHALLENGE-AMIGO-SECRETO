// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');
    let amigoNombre = amigoInput.value.trim();

    if (amigoNombre === '' || / [^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(amigoNombre)) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    if (amigos.includes(amigoNombre)) {
        alert ('Este nombre ya fue ingresado.');
        return;
    }
    amigos.push(amigoNombre);
    let li = document.createElement('li');
    li.textContent = amigoNombre;
    listaAmigos.appendChild(li);
    amigoInput.value = ''; 
}
    function sortearAmigo(){
        let resultadoUl = document.getElementById('resultado');
        resultadoUl.innerHTML = '';
    
        if (amigos.length === 0) {
            alert ('Por favor, ingrese nombres ');
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const nombreAleatorio = amigos[indiceAleatorio];


        let li = document.createElement('li');
        li.textContent = `Quien te ha tocado es: ${nombreAleatorio}!`;
        resultadoUl.appendChild(li);
    }