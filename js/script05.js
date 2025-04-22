function converterHoras() {
    const horas = parseFloat(document.getElementById('horas').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(horas) || horas < 0) {
        resultado.textContent = "Por favor, digite um valor válido e positivo para horas.";
        resultado.style.color = "red";
        return;
    }

    const minutos = horas * 60;
    const segundos = horas * 3600;

    resultado.textContent = `${horas} hora(s) equivalem a ${minutos.toFixed(2)} minutos ou ${segundos.toFixed(2)} segundos.`;
    resultado.style.color = "black";
}
