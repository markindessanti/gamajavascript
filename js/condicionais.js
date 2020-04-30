var nome = 'Markin';
var nomeDigitado = prompt('Digite seu nome:');

if (nome === nomeDigitado) {
	alert('Opa! Acertô, mizerávi!!! Seu nome é esse mesmo!!!')
} else if (nomeDigitado === "Dessanti") {
	alert('Tá valendo... Mas esse é seu sobrenome, né?')
} else {
	alert('Você é burro? Nasceu no Alabama? Seu sobrenome é Bolsonaro ou o quê?')
}

alert('Agora vamos brincar com o switch!');

switch (nomeDigitado) {
	case 'Markin':
		alert('Opa! Acertô, mizerávi!!! Seu nome é esse mesmo!!!')
		break;

	case 'Dessanti':
		alert('Tá valendo... Mas esse é seu sobrenome, né?')
		break;

	default:
		alert('Você é burro? Nasceu no Alabama? Seu sobrenome é Bolsonaro ou o quê?');
		break;
}