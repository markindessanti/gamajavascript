console.log('Javascript carregado!');

function validacao() {
	cpf = document.getElementById('txtCpf').value;
	console.log('Iniciando validação CPF: ' + cpf);
	resultadoValidacao = validaCPF(cpf);

	if (resultadoValidacao) {
		document.getElementById('success').style.display = 'block';
		document.getElementById('error').style.display = 'none';
	} else {
		document.getElementById('success').style.display = 'none';
		document.getElementById('error').style.display = 'block';
	}
}

function validaCPF(cpf) {
	if (cpf.length != 11) {
		return false;
	} else {
		var numeros = cpf.substring(0, 9);
		var digitos = cpf.substring(9);
		var soma = 0
		
		for (let i = 10; i > 1; i--) {
			soma += numeros.charAt(10 - i) * i;
			// console.log(numeros.charAt(10 - i), i, numeros.charAt(10 - i) * i, soma);		
		}

		return true;
	}
}