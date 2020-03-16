//Hook and create all the html elements for the Start Quiz page
let timer = document.getElementById("#timer");
let divTag = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let button = document.createElement("button");
//Add text content to all the elements we just created
h1.textContent = "Code Quiz Challenge";
p.textContent = "Try to answer these coding questions within 70 seconds, you lose 10 seconds for every wrong answer you have, click on the Start button when you're ready";
button.textContent = "Start Quiz";
//Put them on the page
document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(divTag);
divTag.appendChild(button);
//Style the page
h1.setAttribute("style", "text-align: center; margin-top: 100px;");
p.setAttribute("style", "font-size: 20px; text-align: center;");
divTag.setAttribute("style", "text-align:center;");
button.setAttribute("style", "background-color:purple; color: white; padding: 10px;;");
//An array of all the object questions, answer choices and the correct answer 
let questions = [
    {
        title: "What does HTML stand for?",
        choices: ["1. Home Tool Markup Language", "2. Hyperlinks and Text Markup Language", "3. Hyper Text Markup Language", "4. Hyper Text Marketing Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        title: "A Syntax Error is ? ",
        choices: ["1. An error you will never find", "2. An error you find at the end when the program gives out a wrong value due to logic error", "3. An error caused by language rules being broken.", "4. An error due to user error"],
        answer: "An error caused by language rules being broken."
    },
    {
        title: "One loop inside the body of another loop is called ",
        choices: ["1. Loop in loop", "2. Nested", "3. Double loops", "4. Loops"],
        answer: "Nested"
    },
    {
        title: "A short sections of code written to complete a task.",
        choices: ["1. Buffer", "2. Array", "3. Section", "4. Function"],
        answer: "Function"
    },
    {
        title: "Who is making the Web standards?",
        choices: ["1. The World Wide Web Consortium", "2. Mozilla", "3. Google", "4. Microsoft"],
        answer: "The World Wide Web Consortium"
    },
];
//Create all the elements and hook into javascript for questions and answers
    let divContainer = document.createElement("div");
    let divQuestion = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    let button4 = document.createElement("button");
    let hrtag = document.createElement("hr");
// Set atttribute to style these questions and answer options
    divContainer.setAttribute("style", "width: 800px; max-width: 80%;  margin-left: 30%;");
    divQuestion.setAttribute("style", "font-size:30px; font-weight: bold;");
    button1.setAttribute("style", "display: flex; padding: 5px; margin: 5px; background-color: purple; color: white; border-radius: 6px;");
    button2.setAttribute("style", "display: flex; padding: 5px; margin: 5px; background-color: purple; color: white; border-radius: 6px;");
    button3.setAttribute("style", "display: flex; padding: 5px; margin: 5px; background-color: purple; color: white; border-radius: 6px;");
    button4.setAttribute("style", "display: flex; padding: 5px; margin: 5px; background-color: purple; color: white; border-radius: 6px;");
    
    let score = 0;
    
//  a function that starts the first question
function generateQuiz() {
    event.preventDefault();
    //setTimer(); somehow it doesn't work so I commented the setTimer function below and the function call here
    //when we start to generate the first question and answer choices, empty the text content of the current page
    h1.textContent = "";
    p.textContent = "";
    divTag.textContent = "";
    // Assign text contents to the first question and answer choices
    divQuestion.textContent = questions[0].title;
    button1.textContent = questions[0].choices[0];
    button2.textContent = questions[0].choices[1];
    button3.textContent = questions[0].choices[2];
    button4.textContent = questions[0].choices[3];
    // Put them on the page
    document.body.appendChild(divContainer);
    divContainer.appendChild(divQuestion);
    divContainer.appendChild(button1);
    divContainer.appendChild(button2);
    divContainer.appendChild(button3);
    divContainer.appendChild(button4);
    divContainer.appendChild(hrtag);
    // Listen to a click that matches a button for all these button variables that was set up above
    button1.addEventListener("click", function(event) {
      //Don't refresh the page
        event.preventDefault();
        //if matching a button then create a element on the page that say Wrong or Correct 
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            //also generate the next question 
            nextQuestion2();
            //subtract 10 seconds from timer but timer doesn't work right now
        }
      });
      button2.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion2();
            //subtract 10 seconds from timer
        }
      });
      button3.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Correct";
            divContainer.appendChild(item);
            nextQuestion2();
            score++;
        }
      });
      button4.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion2();
            //subtract 10 seconds from timer
        }
      });
} //the end of function generateQuiz
//function that starts the sesond question
function nextQuestion2() {
    event.preventDefault();
    divContainer.textContent = "";
    divQuestion.textContent = questions[1].title;
    button1.textContent = questions[1].choices[0];
    button2.textContent = questions[1].choices[1];
    button3.textContent = questions[1].choices[2];
    button4.textContent = questions[1].choices[3];

    document.body.appendChild(divContainer);
    divContainer.appendChild(divQuestion);
    divContainer.appendChild(button1);
    divContainer.appendChild(button2);
    divContainer.appendChild(button3);
    divContainer.appendChild(button4);
    divContainer.appendChild(hrtag);

    button1.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion3();
            //subtract 10 seconds from timer
        }
      });
      button2.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion3();
            //subtract 10 seconds from timer
        }
      });
      button3.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Correct";
            divContainer.appendChild(item);
            nextQuestion3();
            score++;
        }
      });
      button4.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion3();
            //subtract 10 seconds from timer
        }
      });
 //function that starts the third question   
}
function nextQuestion3() {
    event.preventDefault();
    divContainer.textContent = "";
    divQuestion.textContent = questions[2].title;
    button1.textContent = questions[2].choices[0];
    button2.textContent = questions[2].choices[1];
    button3.textContent = questions[2].choices[2];
    button4.textContent = questions[2].choices[3];

    document.body.appendChild(divContainer);
    divContainer.appendChild(divQuestion);
    divContainer.appendChild(button1);
    divContainer.appendChild(button2);
    divContainer.appendChild(button3);
    divContainer.appendChild(button4);
    divContainer.appendChild(hrtag);
    button1.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion4();
            //subtract 10 seconds from timer
        }
      });
      button2.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Correct";
            divContainer.appendChild(item);
            nextQuestion4();
            score++;
        }
      });
      button3.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion4();
        }
      });
      button4.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion4();
            //subtract 10 seconds from timer
        }
      });
}
function nextQuestion4() {
    event.preventDefault();
    divContainer.textContent = "";
    divQuestion.textContent = questions[3].title;
    button1.textContent = questions[3].choices[0];
    button2.textContent = questions[3].choices[1];
    button3.textContent = questions[3].choices[2];
    button4.textContent = questions[3].choices[3];

    document.body.appendChild(divContainer);
    divContainer.appendChild(divQuestion);
    divContainer.appendChild(button1);
    divContainer.appendChild(button2);
    divContainer.appendChild(button3);
    divContainer.appendChild(button4);
    divContainer.appendChild(hrtag);
    button1.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion5();
            //subtract 10 seconds from timer
        }
      });
      button2.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion5();
            //subtract 10 seconds from timer
        }
      });
      button3.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            nextQuestion5();
        }
      });
      button4.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Correct";
            divContainer.appendChild(item);
            nextQuestion5();
            score++;
        }
      });
}
function nextQuestion5() {
    event.preventDefault();
    divContainer.textContent = "";
    divQuestion.textContent = questions[4].title;
    button1.textContent = questions[4].choices[0];
    button2.textContent = questions[4].choices[1];
    button3.textContent = questions[4].choices[2];
    button4.textContent = questions[4].choices[3];

    document.body.appendChild(divContainer);
    divContainer.appendChild(divQuestion);
    divContainer.appendChild(button1);
    divContainer.appendChild(button2);
    divContainer.appendChild(button3);
    divContainer.appendChild(button4);
    divContainer.appendChild(hrtag);
    button1.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Correct";
            divContainer.appendChild(item);
            allDone();
            score++;
        }
      });
      button2.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            allDone();
            //subtract 10 seconds from timer
        }
      });
      button3.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            allDone();
        }
      });
      button4.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            var item = document.createElement("div");
            item.textContent ="Wrong";
            divContainer.appendChild(item);
            allDone();
            //subtract 10 seconds from timer
        }
      });
}

 function allDone() {
    event.preventDefault();
    divContainer.textContent = "";
    let allDoneTag = document.createElement("h2");
    let finalScore = document.createElement("p");
    let name = document.createElement("label");
    let form = document.createElement("input")
    let submit = document.createElement("button");
    allDoneTag.textContent = "All Done!";
    finalScore.textContent = "Your final score is: " + score;
    name.textContent =" Your name";
    submit.textContent = "Submit";
    divContainer.appendChild(allDoneTag);
    divContainer.appendChild(finalScore);
    divContainer.appendChild(name);
    divContainer.appendChild(form);
    divContainer.appendChild(submit);
    localStorage.setItem("score", score);
    finalScore.setAttribute("style", "font-size: 20px;");
    name.setAttribute("style", "font-size: 20px; margin-right: 10px;");
    form.setAttribute("style", "margin-right: 10px;")
    submit.setAttribute("style", "background-color: purple; color: white; border-radius: 5px;");
    submit.addEventListener("click", highScore);
 }

 function highScore() {
     event.preventDefault();
     divContainer.textContent = "";
     let hscore = document.createElement("h2");
  //What element shoud I create to put stored score on it that looks like the demo.
   // And the go back button , if I create it, it should take user back to the first page where it says start quiz again but how I do that? because I don't have the hard coded page of that.
     hscore.textContent = "High Scores";
     divContainer.appendChild(hscore);
 }
/*function setTimer() {
    var secondsLeft = 60;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
        }
    
      }, 1000);
   
} */



button.addEventListener("click", generateQuiz);