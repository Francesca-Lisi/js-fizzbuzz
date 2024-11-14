// Scrivi un programma che stampi i numeri da 1 a 100, 
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

let multipliTre = 'Fizz';
let multipliCinque = 'Buzz';

for (let i = 1; i <= 100; i++) {

  if((i % 3 === 0) && (i % 5 === 0)){
    console.log(`${multipliTre}${multipliCinque}`);
  } else if (i % 5 === 0){
    console.log(multipliCinque);
  } else if (i % 3 === 0){
    console.log(multipliTre);
  } else {
    console.log(i);
    
  }


  
}