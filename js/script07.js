function somarPares() {
    const limiteInput = document.getElementById('limite');
    const resultado = document.getElementById('resultado');
    const limite = parseInt(limiteInput.value);
  
    if (isNaN(limite) || limite < 1) {
      resultado.textContent = 'Por favor, insira um número válido (maior que 0).';
      return;
    }
  
    let soma = 0;
  
    for (let i = 2; i <= limite; i += 2) {
      soma += i;
    }
  
    resultado.textContent = `A soma dos números pares de 1 até ${limite} é ${soma}.`;
  }
  