const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
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
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
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
    question: "Which color flag during an F1 race indicates that normal racing conditions are being applied?",
    answers: [
      { text: "White", correct: false },
      { text: "Green", correct: true },
      { text: "Yellow", correct: false },
      { text: "Yellow and red striped", correct: false }
    ]
  },
  {
    question: "What is the highest speed of an F1 car ever recorded?",
    answers: [
      { text: "351.6 km/h (218.47m/h)", correct: false },
      { text: "423.3 km/h (263.02 m/h)", correct: false },
      { text: "400 km/h (248.5 m/h)", correct: false },
      { text: "372.6 km/h (231.5m/h)", correct: true }
    ]
  },
  {
    question: "How much weight does a car tire lose in one Formula 1 race?",
    answers: [
      { text: "2kg (4.4lb)", correct: false },
      { text: "1kg (2.2 lb)", correct: false },
      { text:  "500g (1.1 lb)", correct: true },
      { text: "250g (0.55 lb)", correct: false }
    ]
  },
  {
    question: "How many points are earned by the driver who wins a Formula 1 race?",
    answers: [
        { text:  "25", correct: true },
        { text: "18", correct: false },
        { text: "20", correct: false },
        { text: "22", correct: false }
    ]
  },
  {
    question: "Which color flag during the F1 race indicates a slippery track?",
    answers: [
      { text: "White", correct: false },
      { text: "Yellow and red striped", correct: true },
      { text: "Orange", correct: false },
      { text: "Black", correct: false }
    ]
  },
  {
    question: "How many separate components is a Formula 1 racing car made of?",
    answers: [
      { text: "200,00", correct: false },
      { text: "3,500", correct: false },
      { text: "80,000", correct: true },
      { text: "40,000", correct: false }
    ]
  },
  {
    question: "What is the maximum time taken in a modern pit stop with no errors?",
    answers: [
      { text:  "30 sec", correct: false },
      { text: "3 sec", correct: true },
      { text: "20 sec", correct: false },
      { text: "10 sec", correct: false }
    ]
  },
  {
    question: "Who is the oldest racer to have won the F1 race?",
    answers: [
      { text: "Lewis Hamilton", correct: false },
      { text: "Jim Clark", correct: false },
      { text: "Alain Prost", correct: false },
      { text: "Juan Fangio", correct: true }
    ]
  },
  {
    question: "What is the average water loss from the body of a driver in one race?",
    answers: [
      { text:  "2 liters (0.52 gallons)", correct: false },
      { text:  "3 liters (0.79 gallons)", correct: true },
      { text: "500 ml (0.13 gallons)", correct: false },
      { text: "4 liters (1.05 gallons)", correct: false }
    ]
  },
]