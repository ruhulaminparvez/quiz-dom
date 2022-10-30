const startingMinutes = 10;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('timer');
const submitBtn = document.getElementById('submit-btn');

setInterval (updateCountdown, 1000);

// Countdown timer
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time === 0) {
        window.location.href = 'timeout.html';
    }
}

// Quiz questions and answers Array
const quizArray = [
    {
      "id": 1,
      "title": "What is the past form of 'eat'?",
      "options": ["eat", "ate", "eaten", "have ate"],
      "answer": "ate"
    },
    {  
      "id": 2,
      "title": "Which sentence is present continuous tense?",
      "options": [
        "I eat rice",
        "I am eating rice",
        "I have eaten rice",
        "I have been eating rice for 1 year"
      ],
      "answer": "I am eating rice"
    },
    {
      "id": 3,
      "title": "Which sentence is present perfect tense?",
      "options": [
        "I eat rice",
        "I am eating rice",
        "I have eaten rice",
        "I have been eating rice for 1 year"
      ],
      "answer": "I have eaten rice"
    },
    {
      "id": 4,
      "title": "Which sentence is present perfect continuous tense?",
      "options": [
        "I eat rice",
        "I am eating rice",
        "I have eaten rice",
        "I have been eating rice for 1 year"
      ],
      "answer": "I have been eating rice for 1 year"
    },
    { 
      "id": 5,
      "title": "Which sentence is past continuous tense?",
      "options": [
        "I eat rice",
        "I was eating rice",
        "I have eaten rice",
        "I have been eating rice for 1 year"
      ],
      "answer": "I was eating rice"
    },
    {
      "id": 6,
      "title": "Which sentence is past perfect tense?",
      "options": [
        "I eat rice",
        "I was eating rice",
        "I have eaten rice",
        "I have been eating rice for 1 year"
      ],
      "answer": "I have eaten rice"
    },
    {
      "id": 7,
      "title": "Which sentence is past perfect continuous tense?",
      "options": [
        "I eat rice",
        "I was eating rice",
        "I have eaten rice",
        "I have been eating rice for 1 year"
      ],
      "answer": "I have been eating rice for 1 year"
    },
    { 
      "id": 8,
      "title": "Which sentence is future continuous tense?",
      "options": [
        "I eat rice",
        "I will be eating rice",
        "I have eaten rice",
        "I have been eating rice for 1 year"
      ],
      "answer": "I will be eating rice"
    },
    {
      "id": 9,
      "title": "Which sentence is future perfect tense?",
      "options": [
        "I eat rice",
        "I will be eating rice",
        "I will have eaten rice",
        "I have been eating rice for 1 year"
      ],
      "answer": "I will have eaten rice"
    },
    {
      "id": 10,
      "title": "Which sentence is future perfect continuous tense?",
      "options": [
        "I eat rice",
        "I will be eating rice",
        "I will have eaten rice",
        "I will have been eating rice for 1 year"
      ],
      "answer": "I will have been eating rice for 1 year"
    }
];


const quizCard = (quizArray) => {
    const quizCard = document.getElementById('quiz-card');
    
    quizArray.forEach((quiz) => {
        parentDiv = document.createElement('div');
        parentDiv.innerHTML = `
        <div class="quiz-container">    
            <div class="quiz-sub-container">
                <h2>${quiz.title}</h2>
                <div>
                    <form class="options">
                        ${quiz.options.map((option) => {
                            return `
                                <div class="option">
                                    <input type="radio" name="option" id="${option}" value="${option}" onclick="getSelected()">
                                    <label for="${option}">${option}</label>
                                </div>
                            `;
                        }).join('')}
                    </form>
                </div>
            </div>
        </div>
        `;
        quizCard.appendChild(parentDiv);
    });
}

function getSelected() {
    let score = 0;
    let answers = document.querySelectorAll('input[name="option"]');
    answers.forEach((answer) => {
        if (answer.checked) {
            answer = answer.value;
            console.log('getSelected: ',answer);
            
            // Compare answer with quizArray id wise
            quizArray.forEach((quiz) => {
                if (answer === quiz.answer && quiz.id === quiz.id) {
                    score++;
                }   
            });

        }
    });
    console.log('score: ',score);
    return score;
}


submitBtn.addEventListener('click', function() {
    let score = getSelected();
    console.log('submitBtn: ',score);
    window.location.href = 'result.html';
});


quizCard(quizArray);