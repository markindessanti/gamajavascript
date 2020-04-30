console.log('Javascript carregado!');

function validacao() {
	cpf = document.getElementById('txtCpf').value;
	console.log('Iniciando validação CPF: ' + cpf);
	resultadoValidacao = validaCPF(cpf);

	if (resultadoValidacao) {
		document.getElementById('success').style.display = 'block';
	} else {
		document.getElementById('error').style.display = 'block';
	}
}

function validaCPF(cpf) {
	return false;
}