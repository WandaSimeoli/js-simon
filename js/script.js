
  const randomNumber = [];
  console.log(randomNumber);

  for (let i = 0; i < 5; i++) {

    const singleNumber = getRndInteger(1, 10);
    console.log(randomNumber, typeof randomNumber);
    randomNumber.push(singleNumber); 
  }

  setTimeout (myFunction, 5 * 1000);

  
// Functions

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function myFunction() {
    numbers.classList.add('d-none');

    const userNumbers = [];

    for (let i = 0; i < 5; i++) {

        const element = parseInt(prompt('Inserisci un numero'));
        console.log(element);

        userNumbers.push(element);
        
    }

    for (let i = 0; i < userNumbers.length; i++) {
       
        if (randomNumber[i] === userNumbers[i]) {
            console.log('Hai indovinato il numero', userNumbers[i], 'in posizione',  [i]);
        }
        
    }
}
