function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function mostrarPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (isNaN(inicio) || isNaN(fim)) {
        resultado.innerHTML = '<li>Por favor, insira valores válidos.</li>';
        return;
    }

    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            const item = document.createElement('li');
            item.textContent = i;
            resultado.appendChild(item);
        }
    }

    if (resultado.innerHTML === '') {
        resultado.innerHTML = '<li>Nenhum número primo encontrado no intervalo.</li>';
    }
}