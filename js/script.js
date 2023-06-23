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





