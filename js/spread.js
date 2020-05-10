let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log('lista: ', lista);

console.log('listaIncluir', listaIncluir);

for (let i = 0; i < listaIncluir.length; i++) {
	for (let j = 0; j < lista.length; j++) {
		if (lista[j] >= listaIncluir[i]) {
			lista.splice(j, 0, listaIncluir[i]);
			i++;
		}
	}
}

console.log('lista após inclusão: ', lista);

const listResult = [...listaIncluir];

console.log('listaResult criada com spread operator: ', listResult);

let arr = [...listResult];
arr.push(6);

console.log('listaResult: ', listResult);
console.log('arr: ', arr);

