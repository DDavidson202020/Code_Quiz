let timer = document.getElementById("timer");
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
button.setAttribute("style", "background-color:purple; color: white; padding: 10px;");
//An array of all the object questions, answer choices and the correct answer 
let questions = [
    {
      title: "What does HTML stand for?",
      choices: ["1. Home Tool Markup Language", "2. Hyperlinks and Text Markup Language", "3. Hyper Text Markup Language", "4. Hyper Text Marketing Language"],
      answer: "3. Hyper Text Markup Language"
    },
    {
      title: "A Syntax Error is ? ",
      choices: ["1. An error you will never find", "2. An error you find at the end when the program gives out a wrong value due to logic error", "3. An error caused by language rules being broken.", "4. An error due to user error"],
      answer: "3. An error caused by language rules being broken."
    },
    {
      title: "One loop inside the body of another loop is called ",
      choices: ["1. Loop in loop", "2. Nested", "3. Double loops", "4. Loops"],
      answer: "2. Nested"
    },
    {
      title: "A short sections of code written to complete a task.",
      choices: ["1. Buffer", "2. Array", "3. Section", "4. Function"],
      answer: "4. Function"
    },
    {
      title: "Who is making the Web standards?",
      choices: ["1. The World Wide Web Consortium", "2. Mozilla", "3. Google", "4. Microsoft"],
      answer: "1. The World Wide Web Consortium"
    },
  ];

  //Create all the elements and hook into javascript for questions and answers
  
  
  let score = 0;
  let index = 0;
  let secondsLeft = 60;
  

  function generateQuiz() {
    event.preventDefault();
    setTimer();
    h1.textContent = "";
    p.textContent = "";
    divTag.textContent = "";
    button.textContent="";
   

    let divContainer = document.createElement("div");
    let divQuestion = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    let button4 = document.createElement("button");
    let hrtag = document.createElement("hr");
    let resultText = document.createElement("div");
    // Set atttribute to style these questions and answer options
    divContainer.setAttribute("style", "width: 800px; max-width: 80%;  margin-left: 30%;");
    divQuestion.setAttribute("style", "font-size:30px; font-weight: bold;");
    button1.setAttribute("style", "display: flex; padding: 5px; margin: 5px; background-color: purple; color: white; border-radius: 6px;");
    button2.setAttribute("style", "display: flex; padding: 5px; margin: 5px; background-color: purple; color: white; border-radius: 6px;");
    button3.setAttribute("style", "display: flex; padding: 5px; margin: 5px; background-color: purple; color: white; border-radius: 6px;");
    button4.setAttribute("style", "display: flex; padding: 5px; margin: 5px; background-color: purple; color: white; border-radius: 6px;");
    
    button1.classList = "choiceBtn"
    button2.classList = "choiceBtn"
    button3.classList = "choiceBtn"
    button4.classList = "choiceBtn"
    let choiceBtn = document.querySelector(".choiceBtn");

    
        divQuestion.textContent = questions[index].title;
        button1.textContent = questions[index].choices[0];
        button2.textContent = questions[index].choices[1];
        button3.textContent = questions[index].choices[2];
        button4.textContent = questions[index].choices[3];
        
        document.body.appendChild(divContainer);
        document.body.appendChild(resultText);
        divContainer.appendChild(divQuestion);
        divContainer.appendChild(button1);
        divContainer.appendChild(button2);
        divContainer.appendChild(button3);
        divContainer.appendChild(button4);
        


  
    document.addEventListener("click", function (event) {
        //Don't refresh the page
        event.preventDefault();
        
        //if matching a button then create a element on the page that say Wrong or Correct 
        if (event.target.matches(".choiceBtn")) {
          let answerValue = event.target.value;
          if (answerValue === questions[index].answer) {
            resultText.textContent = "Correct";
            index++;
            generateQuiz()
            divContainer.textContent = "";
          } else {
            resultText.textContent = "Wrong";
            index++;
            secondsLeft -= 10;
            generateQuiz();
            divContainer.textContent = "";
    
          }
        }
    })

  }

  function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft < 0) {
          clearInterval(timerInterval);
        }
    
      }, 1000);
   
} 
    
button.addEventListener("click",generateQuiz);