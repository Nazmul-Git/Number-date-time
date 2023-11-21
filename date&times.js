// create a date
const date=new Date(); 
console.log(date); //2023-11-21T21:21:54.985Z

console.log(new Date(0)); //1970-01-01T00:00:00.000Z
console.log(new Date(3*24*60*60*1000)); //1970-01-04T00:00:00.000Z

//  working with date
const future= new Date(2020,10,19,15,23,57,700);
console.log(future); //2020-11-19T09:23:00.000Z
console.log(future.getFullYear()); //2020
console.log(future.getMonth()); //10
console.log(future.getDate()); //19
console.log(future.getDay()); //4 tuesday
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //57
console.log(future.getMilliseconds()); //700
console.log(future.toISOString()); //2020-11-19T09:23:57.700Z

console.log(future.getTime()); //1605777837700
console.log(new Date(1605777837700)); //2020-11-19T09:23:57.700Z

console.log(Date.now()); //1700602774867

future.setFullYear(2023);
console.log(future); //2023-11-19T09:23:57.700Z