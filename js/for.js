var numeroSorteado = Math.floor(Math.random() * 100) + 1;
var tabuada;

tabuada = 7;

for (let i = 0; i < 100; i++) {
	if (i == numeroSorteado) {
		alert('O número sorteado foi ' + i + ' e o laço de repetição já foi executado ' + i + ' vezes.')
		break; // Não é recomendada a utlização do break dessa forma.
	}
}

for (let i = 0; i <= 10; i++) {
	alert('O valor de ' + tabuada + ' x ' + i + ' = ' + (tabuada * i))
}