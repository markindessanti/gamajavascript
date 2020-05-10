const pessoa = {
	nome: 'Markin',
	sobrenome: 'Dessanti',
	idade: 40,
	profissao: 'Desenvolvedor Fullstack'
}

console.log(`Olá! Eu sou ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos e sou um ${pessoa.profissao}.`);

let { nome, sobrenome, idade, profissao } = pessoa;

console.log(`Olá! Eu sou ${nome} ${sobrenome}, tenho ${idade} anos e sou um ${profissao}.`);