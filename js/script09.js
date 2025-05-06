function calcularFatorial() {
    const input = document.getElementById('numero');
    const resultado = document.getElementById('resultado');
    const numero = parseInt(input.value);
  
    if (isNaN(numero) || numero < 0) {
      resultado.textContent = 'Por favor, insira um número válido (0 ou maior).';
      return;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    resultado.textContent = `O fatorial de ${numero} é ${fatorial}.`;
  }