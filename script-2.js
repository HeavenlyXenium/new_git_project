/*
function test(callback) {
	setTimeout(function(){
		console.log('1111111');
	}, 2000);
	callback();
}

function meCallback() {
	console.log('2222222');
}

test(*/

let autoBrands = {
	Sweden: "Volvo",
	Deutch: {
		first: "BMW",
		second: "Audi",
		thirth: "Mercedes-benz",
		fourth: "Mini" 
	},
	Russia: "Lada",
	America: "Chrysler",
	Italy: "Fiat",
	France: "Citroen"
};

//const myArr = ['apple', 'banana', 'orange', 'lemon', 'cherry'];

let newBrand = {
	Sweden: "...",
	China: "Chery"
};

Object.setPrototypeOf(newBrand, autoBrands);

console.log(newBrand);