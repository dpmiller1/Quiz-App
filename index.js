//create variables for each question and answer set
var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2');
var question3 = document.getElementById('question3');
//create variables for buttons
var button = document.getElementsByClassName('next-btn');
var previous = document.getElementById('previous');
var resultButton = document.getElementById('submit');

var counter = 0;
var next = 0;

//if question answered, activates next button
function answered() {
  var checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
  if(checkedRadios){
  button[next].removeAttribute('disabled');
  button[next].classList.add('active')
  }
};

//loop through questions and answers
function getNewQuestion() {
  previous.classList.remove('hide');
  previous.classList.add('active');
  if (next === 0) {
    question1.classList.remove('active');
    question2.classList.add('active');
    next++; 
  }
  else if (next === 1) {
    question2.classList.remove('active');
    question3.classList.add('active');
    document.getElementById('submit').classList.remove('hide');
    document.getElementById('next').classList.remove('active');
    document.getElementById('next').classList.add('hide');
    next++;
  }
}

//go back to previous question
function getPrevious() {
  if(next === 2){
    question3.classList.remove('active');
    question2.classList.add('active');
    document.getElementById('submit').classList.add('hide');
    document.getElementById('next').classList.remove('hide');
    document.getElementById('next').classList.add('active');
    next--
  } 
  else if (next === 1) {
    question2.classList.remove('active');
    question1.classList.add('active');
    previous.classList.remove('active');
    previous.classList.add('hide');
    document.getElementById('next').classList.remove('hide');
    document.getElementById('next').classList.add('active');
    next--
  }
}

//scoring quiz
function getScore() {
  var answer = document.getElementsByTagName('input');
  for (var i = 0; i < answer.length; i++) {
    if (answer[i].type = "radio" && answer[i].checked && answer[i].value === 'correct') {
      counter += 1;
    }
  }
}


resultButton.addEventListener("click", function () {
  document.getElementById('quiz-body').classList.add('hide');
  getScore();
  var scorePage = document.getElementById('score-page');
  var score = document.getElementById('score')
  var myNewP = document.createElement('p');
  myNewP.textContent= counter + ' out of 3';
  scorePage.classList.remove('hide');
  score.appendChild(myNewP);
});  
 
