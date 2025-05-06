const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarTentativa() {
  const input = document.getElementById('tentativa');
  const mensagem = document.getElementById('mensagem');
  const tentativa = parseInt(input.value);

  if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
    mensagem.textContent = 'Digite um número válido entre 1 e 10.';
    return;
  }

  if (tentativa === numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou o número secreto (${numeroSecreto})!`;
  } else if (tentativa < numeroSecreto) {
    mensagem.textContent = 'Tente um número maior.';
  } else {
    mensagem.textContent = 'Tente um número menor.';
  }
}