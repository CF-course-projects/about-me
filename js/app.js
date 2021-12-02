'use strict';
let userName = prompt("Hi reader! What should I call you?");
alert(`Thanks for taking the time to get to know me ${userName}, we'll play a quiz game and see how well you know me!`)
let counter = 0;

function questionOne() {
  let question1 = prompt("I grew up in New York City.")
  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
    //console.log(`right`)
    alert(`That's right ${userName}!`);
    counter++;
  } else {
    alert("Nope, I grew up in New York City.");
    //console.log('wrong')
  }
}
questionOne();

function questionTwo(){
  let question2 = prompt("I've lived on two different continents.")
if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
  //console.log(`right`)
  alert(`False, I've lived on three continents`);
  counter++;
} else {
  alert("Not quite right, I've lived on three continents!");
  //console.log('wrong')
}
}
questionTwo();


function questionThree(){
  let question3 = prompt(`I speak five langauges`)
  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
    //console.log(`right`)
    alert(`Correct ${userName}, I speak English, Italian, Spanish, French and Thai.`);
    counter++;
  } else {
    alert(`Wrong, I speak five languages to varying proficiencies.`);
  }
}
questionThree();


function questionFour(){
  let question4 = prompt("I went to college for something non-tech related")
  if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
    //console.log(`right`)
    alert(`Correct, I studied corporate communication in college.`);
    counter++;
  } else {
    alert(`Incorrect, I studied corporate communication in college.`);
    //console.log('wrong')
  }
}
questionFour();


function questionFive(){
  let question5 = prompt("I currently live in Seattle")
  if (question5.toLowerCase() === 'no' || question5.toLowerCase() === 'n') {
    //console.log(`right`)
    alert("You got it! I currently live in New York City.")
    counter++;
  } else {
    alert("Oops! I currently live in New York City.");
    //console.log('wrong')
  }
}
questionFive();

function questionSix(){
  let question6Right = false;
  let question6Attempts = 4;
  let min = Math.ceil(1);
  let max = Math.floor(10);
  let question6Answer = Math.floor(Math.random() * (max - min) + min);
  console.log(`question6Num = ${question6Answer}`)
  let question6Input = prompt("Now guess a number from 1-10");
  for (let i = 0; i < 3; i++) {
    if (question6Input == question6Answer) {
      alert(`You got it ${userName}`);
      counter++;
      question6Right = true;
      question6Attempts--;
      break;
    }
    else if (question6Input < question6Answer) {
      question6Input = prompt(`Too low ${userName}!`);
      question6Attempts--;
    }
    else if (question6Input > question6Answer) {
      question6Input = prompt(`Too high ${userName}!`);
      question6Attempts--;
    }
  }
  if (question6Right === true) {
    alert(`Congrats ${userName}! You got it right with ${question6Attempts} guesses left!`)
  } else {
    alert(`Tough luck ${userName}, maybe next time!`)
  }
  alert('Now guess what my favorite foods are!');
}
questionSix();

let question7Attempts = 6;
let favFoodsGuessed = 0;
const favFoods = ['pizza', 'tacos', 'pasta', 'ramen', 'burgers', 'steak']
const favFoodsNoRepeats = favFoods.slice();
while (question7Attempts > 0) {
  let correct = false;
  let question7 = prompt("What's one of my favorite foods?")
  console.log(favFoodsNoRepeats)
  for (let i = 0; i < favFoodsNoRepeats.length; i++) {
    let currEl = favFoodsNoRepeats[i];
    if (question7.toLowerCase() === currEl) {
      alert(`Nice job ${userName}, how'd you know?`)
      favFoodsGuessed++;
      correct = true;
      favFoodsNoRepeats.splice(i, 1);
      break;
    }
  }
  if (correct === false) {
    alert('Nope!');
  }
  question7Attempts--;
}

alert(`You guessed ${favFoodsGuessed} of my favorite foods correctly, if you're wondering what they are voila: ${favFoods}`)
alert(`Thanks for learning about me ${userName} and taking the quiz! You got ${counter}/6 questions right and guessed ${favFoodsGuessed}/6 of my favorite foods.`)
