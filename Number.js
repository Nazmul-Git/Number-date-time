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

// MAX
console.log(Math.max(35,25,1,45,3,16,20,45)); //45
console.log(Math.max(35,25,1,'45',3,16,20,45)); //45
console.log(Math.max(35,25,1,'45px',3,16,20,45)); //NaN

// MIN
console.log(Math.min(35,25,1,45,3,16,20,45)); //1
console.log(Math.min(35,25,'1','45',3,16,20,45)); //1
console.log(Math.min(35,25,'1px','45px',3,16,20,45)); //NaN

//  PI
console.log(Math.PI + Number.parseFloat('10px') ** 2); // 3.1416+100 = 103.1415926535898

// RANDOM , TRUNC
console.log(Math.random()*6 +1); //random number up to 6
console.log(Math.floor(Math.random()*6 +1)); //random integer number up to 6

//when get user input
const randomInt=(min, max)=>Math.floor(Math.random()*(max-min) + 1) + min;
console.log(randomInt(10,20));

// ROUNDING INTEGER

// round()
console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

//  ceil()
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil('23.9')); //24

// floor()
console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23

// trunc()
console.log(Math.trunc(23.3)); //23
console.log(Math.trunc(23.9)); //23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.9)); // -24  //floor better than trunc


