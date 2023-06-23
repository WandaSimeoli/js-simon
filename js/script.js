function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const numbers = document.getElementById('numbers');
 
  const randomNumber = [];

  for (let i = 0; i < 5; i++) {

    const singleNumber = getRndInteger(1, 10);
    console.log(randomNumber, typeof randomNumber);
    randomNumber.push(singleNumber);
    numbers.innerHTML = randomNumber; 

  }

  setTimeout (myFunction, 5 * 1000);

  function myFunction() {
    numbers.classList.add('d-none');
 
    const numberOne = parseInt(prompt('Inserisci il primo numero '));
    const numberTwo= parseInt(prompt('Inserisci il secondo numero '));
    const numberThree = parseInt(prompt('Inserisci il terzo numero '));
    const numberFour = parseInt(prompt('Inserisci il quarto numero '));
    const numberFive = parseInt(prompt('Inserisci il quinto numero '));
    console.log(numberOne, numberTwo, numberThree, numberFour, numberFive);
    
 
  }





