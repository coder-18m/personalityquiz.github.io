/*Add your JavaScript here*/
var morningScore = 0;
var nightScore = 0;

var questionCount = 0;

//store html elements
var restart = document.getElementById('restart');

var displayResults = document.getElementById("displayResults");

var q1a1 = document.getElementById('q1a1');
var q1a2 = document.getElementById('q1a2');

var q2a1 = document.getElementById('q2a1');
var q2a2 = document.getElementById('q2a2');

var q3a1 = document.getElementById('q3a1');
var q3a2 = document.getElementById('q3a2');

var q4a1 = document.getElementById('q4a1');
var q4a2 = document.getElementById('q4a2');

var q5a1 = document.getElementById('q5a1');
var q5q1 = document.getElementById('q5a2');

//listen for event
q1a1.addEventListener('click', morning);
q1a2.addEventListener('click', night);

q2a1.addEventListener('click', morning);
q2a2.addEventListener('click', night);

q3a1.addEventListener('click', morning);
q3a2.addEventListener('click', night);

q4a1.addEventListener('click', night);
q4a2.addEventListener('click', morning);

q5a1.addEventListener('click', night)
q5a2.addEventListener('click', morning);
//disable button listeners
restart.addEventListener('click', restartFunc);
//functions
function morning(){
morningScore += 1;
questionCount +=1;

console.log('questionCount = ' + questionCount + ' morningScore = ' + morningScore);

if (questionCount == 5){
  console.log('The quiz is done!');
  updateResults();
}
}

function night(){
  nightScore += 1;
  questionCount += 1;

  console.log('questionCount = ' + questionCount + ' nightScore = ' + nightScore);

  if (questionCount == 5){
    console.log('The quiz is done!');
    updateResults();
}
}
//disable buttons and enable
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);

function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
}

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
}

function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
}

function disableQ5() {
  q5a1.disabled = true;
  q5a2.disabled = true;
}

function enableQuestions(){
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
}



//update results function;
function updateResults() {
  displayResults.addEventListener("click", display);
}

function display() {
    if (nightScore >= 3) {
      result.innerHTML = 'You are a night owl!'
      console.log('You are a night owl!');
    } else if (morningScore >= 3) {
      result.innerHTML = 'You are a morning person!'
      console.log('You are a morning person!');
    }
}

//restart
function restartFunc() {
  result.innerHTML = 'Your result is...'
  console.log(result.innerHTML);
  morningScore = 0;
  console.log(morningScore);
  nightScore = 0;
  console.log(nightScore);
  questionCount = 0;
  console.log(questionCount);
  enableQuestions();
}
