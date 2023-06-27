
  const randomNumber = [];
  console.log(randomNumber);

  const numbers = document.getElementById('numbers');

  for (let i = 0; i < 5; i++) {

    const singleNumber = getRndInteger(1, 10);
    console.log(randomNumber, typeof randomNumber);
    randomNumber.push(singleNumber); 
    numbers.innerHTML = randomNumber; 
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

    const rightNumbers = [];

    const result = document.getElementById('result');

    for (let i = 0; i < userNumbers.length; i++) {
       
        if (randomNumber[i] === userNumbers[i]) {
            rightNumbers.push(userNumbers[i]);
            console.log('Hai indovinato il numero', userNumbers[i], 'in posizione',  [i]);
        }

        switch (rightNumbers.length) {
            case 0 :
                result.innerHTML = ('Peccato! Non hai indovinato nessun numero');
                break;

            case 1 : 
            result.innerHTML = (`Hai indovinato un solo numero: ${rightNumbers}`);
            break;

            case 5 : 
            result.innerHTML = ('Complimenti! Hai indovinato tutti i numeri');
            break;

            default : 
            result.innerHTML = (`Hai indovinato: ${rightNumbers}`)
            break
                
        }  
    }
}
