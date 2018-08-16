const price = prompt('please enter the price');
const discount = prompt('please enter your discount');
const saved = price * (discount / 100).toFixed(2);
const withDiscount = price - saved.toFixed(2);
console.log(price > 0 && discount <= 100 ? 
	'Price without discount: ' + price + '\ndiscount: ' + discount + '%' + 
	'\nPrice with discount: ' + withDiscount + '\nSaved: ' + saved 
	: 'Invalid data');