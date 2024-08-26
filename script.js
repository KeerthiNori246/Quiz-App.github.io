const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
const scoreButton = document.getElementById('score-btn')
const container = document.getElementById('container')

let score = 0

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
scoreButton.addEventListener('click', showScore)

function startGame() {
    answerButtonElement.classList.remove('hide')
    score = 0
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)    
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        scoreButton.classList.remove('hide')
    }   
}

function showScore() {
    scoreButton.classList.add('hide')
    answerButtonElement.classList.add('hide')
    questionElement.innerHTML = 
    "You got " + (score-11) + " questions out of 11 questions right!!"
    startButton.innerHTML = "Play Again"
    startButton.classList.remove('hide')
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        score++
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'In HTML, which attribute is used to specify that an input field must be filled out before submitting the form?',
        answers: [
            {text: 'placeholder', correct: false},
            {text: 'value', correct: false},
            {text: 'required', correct: true},
            {text: 'validate', correct: false}
        ]
    },
    {
        question: 'What are the attributes used to change the size of an image in CSS?',
        answers: [
            {text: 'Big and Small', correct: false},
            {text: 'Width and Height', correct: true},
            {text: 'Top and Bottom', correct: false}
        ]
    },
    {
        question: 'What are the types of lists available in HTML?',
        answers: [
            {text: 'Ordered, Unordered Lists', correct: true},
            {text: 'Bulleted, Numbered Lists', correct: false},
            {text: 'Named, Unnamed Lists', correct: false}
        ]
    },
    {
        question: 'Which attribute is used to provide a unique name to an HTML element?',
        answers: [
            {text: 'class', correct: false},
            {text: 'type', correct: false},
            {text: 'id', correct: true}
        ]
    },
    {
        question: 'Which of the following can read and render HTML web pages?',
        answers: [
            {text: 'head Tak', correct: false},
            {text: 'web browser', correct: true},
            {text: 'Server', correct: false}
        ]
    },
    {
        question: 'Which of the following is used to allocate and manage resources for a network?',
        answers: [
            {text: 'Bluetooth', correct: false},
            {text: 'Server', correct: true},
            {text: 'Node', correct: false}
        ]
    },
    {
        question: 'Which of the following is used to transmit information on the World Wide Web?',
        answers: [
            {text: 'HPPT', correct: false},
            {text: 'HTTP', correct: true},
            {text: 'HTTTP', correct: false},
            {text: 'HTPP', correct: false}
        ]
    },
    {
        question: 'What is the full form of HTML?',
        answers: [
            {text: 'HyperTool Markup Langauge', correct: false},
            {text:'HyperText Makeup Language', correct: false},
            {text: 'HyperText Markup Language', correct: true}
        ]
    },
    {
        question: 'What is the full form of CSS?',
        answers: [
            {text: 'Cascading Style Sheets', correct: true},
            {text: 'Complete Style Sheet', correct: false},
            {text: 'Cascading Short Sheets', correct: false},
            {text: 'Compliment Short Sheet', correct: false}
        ]
    },
    {
        question: 'When was JavaScript developed?',
        answers: [
            {text: '2001', correct: false},
            {text: '1995', correct: true},
            {text: '1987', correct: false},
            {text: '2012', correct: false}
        ]
    },
    {
        question: 'Which of the following programming languages is commonly used for server-side scripting in web development?',
        answers: [
            {text: 'HTML', correct: false},
            {text: 'CSS', correct: false},
            {text: 'JavaScript', correct: false},
            {text: 'PHP', correct: true}
        ]
    }
]