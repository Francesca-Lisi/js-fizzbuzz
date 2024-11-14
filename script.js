//DATI RICAVATI DALLA TRACCIA
let multipliTre = 'Fizz';
let multipliCinque = 'Buzz';
let output;

//LOGICA
for (let i = 1; i <= 100; i++) {

  if((i % 3 === 0) && (i % 5 === 0)){
    output = `${multipliTre}${multipliCinque}`;
  } else if (i % 5 === 0){
    output = multipliCinque;
  } else if (i % 3 === 0){
    output= multipliTre;
  } else {
    output = i;
  }

//STAMPO IL MIO OUTPUT
console.log(output)
}

