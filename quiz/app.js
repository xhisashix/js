const quiz = [
  {
    question: '質問１',
    answers: ['はい', 'いいえ'],
  },
  {
    question: '質問2',
    answers: ['はい', 'いいえ'],
  },
  {
    question: '質問3',
    answers: ['Yes', 'No'],
  },
  {
    question: '質問１',
    answers: ['Yes', 'No'],
  },
  {
    question: '質問１',
    answers: ['Yes', 'No'],
  },
  {
    question: '質問１',
    answers: ['Yes', 'No'],
  },
  {
    question: '質問１',
    answers: ['Yes', 'No'],
  },
  {
    question: '質問１',
    answers: ['Yes', 'No'],
  },
  {
    question: '質問１',
    answers: ['Yes', 'No'],
  },
  {
    question: '質問１',
    answers: ['Yes', 'No'],
  },
  {
    question: '質問１',
    answers: ['Yes', 'No'],
  },
]

const $window = window
const $doc = document
const $question = $doc.getElementById('js-question')
const $buttons = $doc.querySelectorAll('.btn')

const quizLen = quiz.length
let quizCount = 0
let score = []

const init = () => {
  $question.textContent = quiz[quizCount].question

  const buttonLen = $buttons.length
  let btnIndex = 0

  while (btnIndex < buttonLen) {
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex]
    btnIndex++
  }
}

const goToNext = () => {
  quizCount++
  if (quizCount < quizLen) {
    init(quizCount)
  } else {
    // $window.alert('クイズ終了！');
    showEnd()
  }
}

const judge = (elm) => {
  if (elm.textContent === "Yes") {
    score.push(0)
  } else {
    score.push(1)
  }
  console.log(score)
  goToNext()
}
const showEnd = () => {
  $question.textContent =
    '終了！あなたのスコアは' + score + '/' + quizLen + 'です'
  const $items = $doc.getElementById('js-items')
  $items.style.visibility = 'hidden'
}
init()
let answersIndex = 0
let answersLen = quiz[quizCount].answers.length
while (answersIndex < answersLen) {
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target)
  })
  answersIndex++
}
