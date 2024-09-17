const quizData = [
  {
      question: "Dans quel jeu apparait pour la première fois Mario ?",
      a: "Pong",
      b: "Tennis",
      c: "Donkey Kong",
      d: "Pac-Man",
      correct: "c",
  },
  {
      question: "En quelle année est sorti le premier Super Smash Bros ?",
      a: "1999",
      b: "2000",
      c: "2001",
      d: "2002",
      correct: "a",
  },
  {
      question: "Quel personnage est introduit dans le jeu Mario Tennis sur Nintendo 64 ?",
      a: "Princesse Daisy",
      b: "Maskass",
      c: "Donkey Kong Jr.",
      d: "Waluigi",
      correct: "d",
  },
  {
      question: "Dans quel jeu peut-t-on incarner Toad pour la prèmiere fois ?",
      a: "Captain Toad : Treasure Tracker",
      b: "Wario's Woods",
      c: "Mario Tennis 64",
      d: "Mario Party",
      correct: "b",
  },
  {
      question: "Quelle est la console de Nintendo la plus vendue sur le marché (en 2024) ?",
      a: "La DS",
      b: "La Wii",
      c: "La Game Boy",
      d: "La Switch",
      correct: "a",
  },
  {
    question: "Quel est le dernier jeu de la licence StarFox ?",
    a: "StarFox Legends",
    b: "StarFox Adventure",
    c: "StarFox Zero",
    d: "StarFox 2",
    correct: "d",
  },
  {
    question: "Dans quel jeu de carte Nintendo s'est-il spécialisé avant le jeu vidéo ?",
    a: "Le poker",
    b: "La manille",
    c: "Le hanafuda",
    d: "Le tarot",
    correct: "c",
  },
  {
    question: "Combien de Pokémons sont disponibles dans l'application Pokémon GO (en 2024) ?",
    a: "628",
    b: "692",
    c: "507",
    d: "590",
    correct: "b",
  },
  {
    question: "Quelle combinaison est nécessaire pour faire le Konami Code sur Nes ?",
    a: "Haut, Gauche, Bas, Haut, Gauche, Bas, Droite, Droite, B, A",
    b: "Haut, Bas, Droite, Gauche, Haut, Bas, Droite, Gauche, B, A",
    c: "Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A",
    d: "Haut, Droite, Haut, Droite, Bas, Gauche, Bas, Gauche, B, A",
    correct: "c",
  },
  {
    question: "Dans Banjo-Kazooie, quelle est la particularité du Stop 'n' Swop ?",
    a: "Elle permet de gagner de l'énergie dès que l'on appuie sur Start",
    b: "Elle permet de stopper les ennemis instantanément",
    c: "Elle permet de localiser les pièces de puzzle du niveau",
    d: "Sa fonctionnalité est inconnue",
    correct: "d",
  },

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>Felicitations, vous avez répondu à ${score} question(s) sur ${quizData.length}</h2>
         <button onclick="location.reload()">Refaire le quiz</button>
         `
     }
  }
})