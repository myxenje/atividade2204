function classificarIdade() {
    const idadeInput = document.getElementById('idade');
    const resultado = document.getElementById('resultado');
    const idade = parseInt(idadeInput.value);
  
    if (isNaN(idade) || idade < 0) {
      resultado.textContent = 'Por favor, insira uma idade válida.';
      return;
    }
  
    let classificacao = '';
  
    if (idade < 12) {
      classificacao = 'Criança';
    } else if (idade < 18) {
      classificacao = 'Adolescente';
    } else if (idade < 60) {
      classificacao = 'Adulto';
    } else {
      classificacao = 'Idoso';
    }
  
    resultado.textContent = `Você é classificado como: ${classificacao}.`;
  }