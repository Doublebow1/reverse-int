module.exports = function reverse (n) {
	let n1 = Math.abs(n)
	let n2 = n1.toString();
	let n3 = n2.split('').reverse().join('');
	if(n === 0) {
		return 0
	} else {
		return n3
	}
}
