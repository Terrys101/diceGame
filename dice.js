const firstRandom = Math.floor(Math.random()
*6) +1



const firstDiceImage = 'images/dice' + firstRandom + 'png';

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage)


