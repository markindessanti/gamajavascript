function soma(operadorA, operadorB) {
	return parseInt(operadorA) + parseInt(operadorB);
}

var operadorA, operadorB;

while (operadorA != 'sair') {
	operadorA = prompt('Digite o primeiro número:')

	if(operadorA == 'sair') {
		break;
	}

	operadorB = prompt('Digite o segundo número:');

	alert('O resultado da soma ' + operadorA + ' + ' + operadorB + ' = ' + soma(operadorA, operadorB));
}