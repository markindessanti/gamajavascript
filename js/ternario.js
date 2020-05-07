let invalid = true;

// Sem ternário
function verify(invalid) {
	if (invalid) {
		return true;
	} else {
		return false;
	}
}

console.log(verify(invalid));

// Com ternário
console.log(invalid ? true : false);

let zero = 0;

console.log(zero > 0 ? 0 : -1);