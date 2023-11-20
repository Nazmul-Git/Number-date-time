console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false


// Conversion
console.log(Number('23')); // 23
console.log( +'23' ); //23

// Parsing
console.log(Number.parseInt('30px', 2)); // NaN
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e303', 10));  // NaN

console.log(Number.parseInt('20 $')); // 20
console.log(Number.parseInt('20.7 $')); // 20
console.log(Number.parseFloat('20.7 $')); // 20.7

// checking if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite(20.01)); //true
console.log(Number.isFinite(23/0)); //false      //infinity



////////////////// Math /////////////////////
console.log(Math.sqrt(25)); // 5
console.log( 25 ** (1/2) ); // 5
console.log( 8 ** (1/3) ); // 2

console.log(Math.max())
