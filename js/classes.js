class Matematica {
	soma(num1,num2) {
		return parseInt(num1) + parseInt(num2);
	}

	subtracao(num1,num2) {
		return parseInt(num1) - parseInt(num2);
	}

	multiplicacao(num1,num2) {
		return parseInt(num1) * parseInt(num2);
	}

	divisao(num1,num2) {
		return parseInt(num1) / parseInt(num2);
	}
}

var instanciaMatematica = new Matematica;

var num1 = prompt('Digite o primeiro número:');
var num2 = prompt('Digite o segundo número:');

alert('A soma ' + num1 + ' + ' + num2 + ' = ' + instanciaMatematica.soma(num1, num2));
alert('A subtração ' + num1 + ' - ' + num2 + ' = ' + instanciaMatematica.subtracao(num1, num2));
alert('A multiplicação ' + num1 + ' x ' + num2 + ' = ' + instanciaMatematica.multiplicacao(num1, num2));
alert('A divisão ' + num1 + ' / ' + num2 + ' = ' + instanciaMatematica.divisao(num1, num2));