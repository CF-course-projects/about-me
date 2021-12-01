'use strict';
let name = prompt(`Hi reader! What should I call you?`);
alert(`Thanks for taking the time to get to know me ${name}, we'll play a quiz game and see how well you know me!`)
let readBio = prompt(`Have you read my bio yet?`);
let startQuiz = false;
if (readBio.toLowerCase() === 'yes' || readBio.toLowerCase() === 'y') {
  startQuiz = true;
}
function quizGame() {
    let counter = 0;
    let question1 = prompt(`I grew up in New York City.`)
    if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
      //console.log(`right`)
      alert(`That's right ${name}!`);
      counter++;
    } else {
      alert(`Nope, I grew up in New York City.`);
      //console.log('wrong')
    }

    let question2 = prompt(`I've lived on two different continents.`)
    if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
      //console.log(`right`)
      alert(`False, I've lived on three continents`);
      counter++;
    } else {
      alert(`Not quite right, I've lived on three continents!`);
      //console.log('wrong')
    }

    let question3 = prompt(`I speak five langauges`)
    if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
      //console.log(`right`)
      alert(`Correct ${name}, I speak English, Italian, Spanish, French and Thai.`);
      counter++;
    } else {
      alert(`Wrong, I speak five languages to varying proficiencies.`);
    }

    let question4 = prompt(`I went to college for something non-tech related`)
    if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
      //console.log(`right`)
      alert(`Correct, I studied corporate communication in college.`);
      counter++;
    } else {
      alert(`Incorrect, I studied corporate communication in college.`);
      //console.log('wrong')
    }
    
    let question5 = prompt(`I currently live in Seattle`)
    if (question5.toLowerCase() === 'no' || question5.toLowerCase() === 'n') {
      //console.log(`right`)
      alert(`You got it! I currently live in New York City.`)
      counter++;
    } else {
      alert(`Oops! I currently live in New York City.`);
      //console.log('wrong')
    }
    alert(`Thanks for learning about me ${name} and taking the quiz! You got ${counter}/5 questions right.`)
}
if (startQuiz === true) {
  alert(`Great! Now that you've read my bio we'll play a quick yes or no quiz.`)
  quizGame();
}
