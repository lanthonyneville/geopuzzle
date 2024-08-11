const questions = [
    "What is your name?",
    "What is your quest?",
    "What is your favorite color?",
];

let currentQuestion = 0;
const questionElement = document.getElementById("question");

function askNextQuestion() {
    if (currentQuestion < questions.length) {
        questionElement.innerHTML = questions[currentQuestion];
        currentQuestion++;
        setTimeout(askNextQuestion, 3000); // Change question every 3 seconds
    }
}

setTimeout(askNextQuestion, 5000); // Start asking questions after 5 seconds
