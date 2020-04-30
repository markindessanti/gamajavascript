var numeroSorteado = Math.floor(Math.random() * 10) + 1;
var probabilidade = prompt('Digite a propobalidade do evento:');
var sorteios = 1;

while (probabilidade / 10 < numeroSorteado) {
	if (probabilidade / 10 < numeroSorteado) {
		alert('O número sorteado ' + numeroSorteado + ' está fora da nossa probalidade de ' + probabilidade + '%.\nJá foram realizados ' + sorteios + ' sorteios.')
	};
	sorteios++;
	numeroSorteado = Math.floor(Math.random() * 10) + 1;
}

alert('O número sorteado ' + numeroSorteado + ' finalmente está dentro da nossa probalidade de ' + probabilidade + '%.\nForam realizados ' + sorteios + ' sorteios.')