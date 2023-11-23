const num= 4556.58;
const option={
    style: 'currency',
    currency:'EUR'
}

console.log(new Intl.NumberFormat('en-US',option).format(num));