const a = +prompt('Please enter length a');
const b = +prompt('Please enter length b');
const angle = +prompt('Please enter angle');
const radianHelper = 180;
const c = +Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angle * (Math.PI / radianHelper))).toFixed(2);
const P = a + b + c;
const S = parseFloat((a * b * Math.sin(angle * (Math.PI / radianHelper))/2).toFixed(0));
console.log(a > 0 && b > 0 && angle > 0 && angle < radianHelper ? 
	'c length: ' + c + '\nTriangle square: ' + S + '\nTriangle perimeter: ' + P 
	: 'Invalid data');