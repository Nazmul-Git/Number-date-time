 console.log(2 ** 57 - 1); //144115188075855870
 console.log(2 ** 57 + 2); //144115188075855870
 console.log(2 ** 57 + 3); //144115188075855870

 console.log(BigInt(5678686655861)); //5678686655861n
 console.log(1000n + 1000n); //2000n

 const huge=5454456454245445414n;
 const num=26;
//  console.log(huge+num); //TypeError: Cannot mix BigInt and other types
console.log(huge+BigInt(num)); //5454456454245445440n

// Expression
console.log(20n > 15); //true
console.log(20n === 20n); //true
console.log(typeof 20n); // bigint
console.log(20n > '20'); // false
