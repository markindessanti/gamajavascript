let nome = 'Markin';
let sobrenome = 'Dessanti';
let minhaProfissao = 'Desenvolvedor Fullstack';

// Sem template-string
console.log('Olá! Meu nome é ' + nome + ' ' + sobrenome + ' e minha profissão é ' + minhaProfissao);

// Com template-string
console.log(`Olá! Meu nome é ${nome} ${sobrenome} e minha profissão é ${minhaProfissao}`);

// E podemos realizar operações dentro do template
console.log(`O resultado da soma 1 + 1 = ${1 + 1}`);
