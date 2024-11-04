document.addEventListener("DOMContentLoaded",() =>{

    const startbtn = document.querySelector('#start-btn')
    const restartbtn = document.querySelector('#restart-btn')
    const nextbtn = document.querySelector('#next-btn')
    const questioncontainer = document.querySelector('#question-container')
    const questiontext = document.querySelector('#question-text')
    const choiceslist= document.querySelector('#choices-list')
    const resultcontainer = document.querySelector('#result-container')
    const scoreDisplay = document.querySelector('#score')

    const questions = [
        {
          question: "What is the capital of France?",
          choices: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          question: "Which planet is known as the Red Planet?",
          choices: ["Mars", "Venus", "Jupiter", "Saturn"],
          answer: "Mars",
        },
        {
          question: "Who wrote 'Hamlet'?",
          choices: [
            "Charles Dickens",
            "Jane Austen",
            "William Shakespeare",
            "Mark Twain",
          ],
          answer: "William Shakespeare",
        },
      ];
    
    let currentQuestionIndex = 0
    let score = 0

    startbtn.addEventListener("click",startQuiz)

    nextbtn.addEventListener("click",() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
         showQuestion()
        }
         else {
         showResult()
        }
     });

     restartbtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultcontainer.classList.add("hidden");
        startQuiz();
      });

    function startQuiz()
    {
        startbtn.classList.add("hidden")
        resultcontainer.classList.add("hidden")
        questioncontainer.classList.remove("hidden")
        showQuestion()
    }

    function showQuestion()
    {
        nextbtn.classList.add("hidden")
        questiontext.textContent = questions[currentQuestionIndex].question
        choiceslist.innerHTML = "" // clears the previous options
         questions[currentQuestionIndex].choices.forEach((choise) => {
            const li = document.createElement("li")
            li.textContent = choise
            li.addEventListener("click",() => selectAnswer(choise))
            choiceslist.appendChild(li)
            
         });

    }

    function selectAnswer(choise)
    {
         const correctAnswers = questions[currentQuestionIndex].answer
         if (choise === correctAnswers) {
            score++;
         }

         nextbtn.classList.remove("hidden")
    }



function showResult()
{
    questioncontainer.classList.add("hidden")
    resultcontainer.classList.remove("hidden")
    scoreDisplay.textContent = `${score} out of ${questions.length }`
}

});