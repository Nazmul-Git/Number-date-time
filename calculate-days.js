const calcDaysPassed=(date1, date2)=>Math.abs(date2-date1)/(1000*60*60*24);

const days=calcDaysPassed(new Date(2021,11,12), new Date(2023,11,23));
console.log(days); //11  