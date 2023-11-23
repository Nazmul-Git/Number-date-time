
const ingredients=['olives'];
const pizzTimer=setTimeout((ing1,ing2) => 
    console.log(`Here is your pizza with ${ing1} and ${ing2}`),
 3000, 
 ...ingredients
 );
console.log('Waiting...');

if(ingredients.includes('spinach')) clearTimeout(pizzTimer);

/**
 *Waiting...
 *Here is your pizza with olives and undefined
 */