function validarCPF() {
    const cpf = document.getElementById('cpf').value;
    const resultado = document.getElementById('resultado');

    if (!/^\d{11}$/.test(cpf)) {
        resultado.textContent = 'CPF inválido: deve conter exatamente 11 dígitos numéricos.';
        resultado.style.color = 'red';
        return;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        resultado.textContent = 'CPF inválido: todos os dígitos iguais.';
        resultado.style.color = 'red';
        return;
    }

    const cpfArray = cpf.split('').map(Number);

    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += cpfArray[i] * (10 - i);
    }
    let digito1 = (soma * 10) % 11;
    if (digito1 === 10 || digito1 === 11) digito1 = 0;

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpfArray[i] * (11 - i);
    }
    let digito2 = (soma * 10) % 11;
    if (digito2 === 10 || digito2 === 11) digito2 = 0;

    if (digito1 === cpfArray[9] && digito2 === cpfArray[10]) {
        resultado.textContent = 'CPF válido!';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'CPF inválido!';
        resultado.style.color = 'red';
    }
}
