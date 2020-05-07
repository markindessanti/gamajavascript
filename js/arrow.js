// Sem arrow functions
function soma(x, y) {
	return x + y;
}

console.log(soma(3, 4));

const multiplicacao = function (x, y) {
	return x * y;
}

console.log(multiplicacao(3, 4));

// Com arrow functions
const dividir = (x , y) => {
	return x / y;
}

console.log(dividir(3, 4));

const objeto = () => (
	{nome: 'Markin', sobrenome: 'Dessanti'}
)

console.log(objeto);
console.log(objeto().nome);
console.log(objeto().sobrenome);
