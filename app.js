const subjects = [
  {
    id: "math",
    icon: "∑",
    name: "Mathematics",
    chapters: "15 Chapters",
    progress: 72
  },
  {
    id: "science",
    icon: "⚛",
    name: "Science",
    chapters: "18 Chapters",
    progress: 48
  },
  {
    id: "english",
    icon: "A",
    name: "English",
    chapters: "12 Chapters",
    progress: 64
  },
  {
    id: "social",
    icon: "🌍",
    name: "Social Science",
    chapters: "16 Chapters",
    progress: 31
  },
  {
    id: "computer",
    icon: "</>",
    name: "Computer",
    chapters: "10 Chapters",
    progress: 55
  },
  {
    id: "hindi",
    icon: "अ",
    name: "Hindi",
    chapters: "14 Chapters",
    progress: 82
  }
];

const app = document.getElementById("app");

function progress(value) {
  return `
    <div class="progress">
      <i style="width:${value}%"></i>
    </div>
  `;
}

function bottomNav() {
  return `
    <nav class="bottom">

      <button class="active" onclick="home()">
        ⌂
        <br>
        Home
      </button>

      <button onclick="subjectsPage()">
        ▣
        <br>
        Subjects
      </button>

      <button onclick="quiz()">
        ?
        <br>
        Quiz
      </button>

      <button>
        ◒
        <br>
        Progress
      </button>

      <button>
        ●
        <br>
        Profile
      </button>

    </nav>
  `;
}

/* =========================
   HOME
========================= */

function home() {

  app.innerHTML = `

    <main class="app">

      <header class="top">

        <div>
          <div class="eyebrow">
            GOOD MORNING
          </div>

          <div class="title">
            Student
          </div>
        </div>

        <div class="avatar">
          S
        </div>

      </header>


      <section class="hero">

        <div>

          <h2>
            Ready to learn?
          </h2>

          <div class="muted">
            Keep your momentum going.
          </div>

        </div>

        <div class="q">
          Q
        </div>

      </section>


      <section class="stats">

        <div class="card stat">
          🔥
          <b>7</b>
          <span class="muted">
            Day Streak
          </span>
        </div>

        <div class="card stat">
          ⚡
          <b>1,240</b>
          <span class="muted">
            XP Points
          </span>
        </div>

        <div class="card stat">
          ◷
          <b>2h 35m</b>
          <span class="muted">
            Study Time
          </span>
        </div>

      </section>


      <div class="section">

        <h3>
          Continue Learning
        </h3>

        <span class="link">
          See all
        </span>

      </div>


      <section class="card learning">

        <div class="icon">
          M
        </div>

        <div class="grow">

          <b>
            Mathematics
          </b>

          <div class="muted">
            Chapter 04 • Algebra
          </div>

          ${progress(72)}

          <small class="muted">
            72% completed
          </small>

        </div>

        <span class="arrow">
          →
        </span>

      </section>


      <div class="section">

        <h3>
          Quick Access
        </h3>

      </div>


      <section class="grid quick">

        <button onclick="subjectsPage()">
          📚
          <strong>
            Subjects
          </strong>
        </button>

        <button onclick="quiz()">
          🧠
          <strong>
            Quiz
          </strong>
        </button>

        <button>
          📝
          <strong>
            Notes
          </strong>
        </button>

        <button>
          ⏱
          <strong>
            Timer
          </strong>
        </button>

      </section>


      <div class="section">

        <h3>
          Today's Goal
        </h3>

      </div>


      <section class="card goal">

        <b>
          Complete 3 study sessions
        </b>

        <div class="muted">
          2 of 3 sessions completed
        </div>

        ${progress(80)}

      </section>


      <section class="quiz">

        <div class="eyebrow">
          DAILY QUIZ
        </div>

        <h2>
          Test your knowledge
        </h2>

        <div class="muted">
          5 questions • Medium difficulty
        </div>

        <button
          class="primary"
          onclick="quiz()"
        >
          Start Quiz
        </button>

      </section>

    </main>

    ${bottomNav()}
  `;
}


/* =========================
   SUBJECTS
========================= */

function subjectsPage() {

  app.innerHTML = `

    <main class="app">

      <button
        class="back"
        onclick="home()"
      >
        ‹ Back
      </button>


      <div class="eyebrow">
        QUANTUM LEARNING
      </div>

      <div class="title">
        Your Subjects
      </div>

      <div class="muted">
        Choose a subject and continue learning.
      </div>


      <div class="classbar">

        <div>

          <small class="muted">
            CURRENT CLASS
          </small>

          <br>

          <b>
            Class 10
          </b>

        </div>

        <button class="change">
          Change
        </button>

      </div>


      <div class="section">

        <h3>
          All Subjects
        </h3>

        <span class="muted">
          ${subjects.length} Subjects
        </span>

      </div>


      <div class="subjects">

        ${subjects.map(subject => `

          <button
            class="subject"
            onclick="chapters('${subject.id}')"
          >

            <div class="icon">
              ${subject.icon}
            </div>


            <div class="grow">

              <div class="subject-name">
                ${subject.name}
              </div>

              <div class="muted">
                ${subject.chapters}
              </div>

              ${progress(subject.progress)}

              <small class="muted">
                ${subject.progress}% completed
              </small>

            </div>


            <span class="arrow">
              →
            </span>

          </button>

        `).join("")}

      </div>

    </main>

    ${bottomNav()}
  `;
}


/* =========================
   CHAPTERS
========================= */

function chapters(id) {

  const subject = subjects.find(
    item => item.id === id
  );

  const chapterList = [
    "Introduction",
    "Basic Concepts",
    "Important Formulas",
    "Practice Problems",
    "Revision"
  ];


  app.innerHTML = `

    <main class="app">

      <button
        class="back"
        onclick="subjectsPage()"
      >
        ‹ Subjects
      </button>


      <div class="eyebrow">
        SUBJECT
      </div>

      <div class="title">
        ${subject.name}
      </div>

      <div class="muted">
        Select a chapter to start learning.
      </div>


      <section
        class="card learning"
        style="margin-top:20px"
      >

        <div class="icon">
          ${subject.icon}
        </div>


        <div class="grow">

          <b>
            ${subject.name}
          </b>

          <div class="muted">
            ${subject.progress}% overall progress
          </div>

          ${progress(subject.progress)}

        </div>

      </section>


      <div class="section">

        <h3>
          Chapters
        </h3>

      </div>


      <div class="chapters">

        ${chapterList.map(
          (chapter, index) => `

          <button
            class="chapter"
            onclick="quiz()"
          >

            <div class="num">
              ${String(index + 1).padStart(2, "0")}
            </div>


            <div class="grow">

              <b>
                ${chapter}
              </b>

              <div class="muted">
                Lesson • Quiz • Practice
              </div>

            </div>


            <span class="arrow">
              →
            </span>

          </button>

        `
        ).join("")}

      </div>


      <button
        class="primary"
        onclick="quiz()"
      >
        Start Learning
      </button>

    </main>

    ${bottomNav()}
  `;
}


/* =========================
   QUIZ
========================= */

const quizQuestions = [

  {
    question:
      "Which gas is most abundant in Earth's atmosphere?",

    options: [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Hydrogen"
    ],

    answer: 0
  },

  {
    question:
      "What is the basic unit of life?",

    options: [
      "Tissue",
      "Cell",
      "Organ",
      "Atom"
    ],

    answer: 1
  },

  {
    question:
      "Which planet is known as the Red Planet?",

    options: [
      "Venus",
      "Jupiter",
      "Mars",
      "Saturn"
    ],

    answer: 2
  },

  {
    question:
      "What force pulls objects toward Earth?",

    options: [
      "Magnetism",
      "Friction",
      "Gravity",
      "Pressure"
    ],

    answer: 2
  },

  {
    question:
      "Which organ pumps blood through the human body?",

    options: [
      "Lungs",
      "Brain",
      "Kidney",
      "Heart"
    ],

    answer: 3
  }

];


let currentQuestion = 0;
let quizScore = 0;


function quiz() {

  currentQuestion = 0;
  quizScore = 0;

  showQuestion();
}


function showQuestion() {

  const question =
    quizQuestions[currentQuestion];


  app.innerHTML = `

    <main class="app">

      <button
        class="back"
        onclick="home()"
      >
        ‹ Back
      </button>


      <div class="eyebrow">
        QUANTUM QUIZ
      </div>


      <div class="title">
        General Science
      </div>


      <div class="muted">
        Question
        ${currentQuestion + 1}
        of
        ${quizQuestions.length}
        • Medium
      </div>


      <section class="quiz">

        <h2>
          ${question.question}
        </h2>


        <div class="subjects">

          ${question.options.map(
            (option, index) => `

            <button
              class="subject"
              onclick="answerQuestion(${index})"
            >

              <div class="grow">

                <b>
                  ${String.fromCharCode(
                    65 + index
                  )}.
                </b>

                ${option}

              </div>

              <span class="arrow">
                →
              </span>

            </button>

          `
          ).join("")}

        </div>

      </section>

    </main>
  `;
}


/* =========================
   ANSWER
========================= */

function answerQuestion(selectedAnswer) {

  const question =
    quizQuestions[currentQuestion];


  if (
    selectedAnswer === question.answer
  ) {
    quizScore++;
  }


  currentQuestion++;


  if (
    currentQuestion <
    quizQuestions.length
  ) {

    showQuestion();

  } else {

    showResult();

  }
}


/* =========================
   RESULT
========================= */

function showResult() {

  const total =
    quizQuestions.length;


  const percentage =
    Math.round(
      (quizScore / total) * 100
    );


  app.innerHTML = `

    <main class="app">

      <section
        class="quiz"
        style="
          margin-top:60px;
          text-align:center;
        "
      >

        <div class="eyebrow">
          QUIZ COMPLETE
        </div>


        <h1>
          ${quizScore}/${total}
        </h1>


        <h2>
          ${percentage}%
        </h2>


        <div class="muted">

          ${
            percentage >= 80
              ? "Excellent work!"
              : percentage >= 50
              ? "Good job! Keep practicing."
              : "Keep learning and try again."
          }

        </div>


        <button
          class="primary"
          onclick="quiz()"
        >
          Try Again
        </button>


        <br>


        <button
          class="back"
          style="margin-top:12px"
          onclick="home()"
        >
          Dashboard
        </button>

      </section>

    </main>

  `;
}


/* =========================
   GLOBAL FUNCTIONS
========================= */

window.home = home;
window.subjectsPage = subjectsPage;
window.chapters = chapters;
window.quiz = quiz;
window.answerQuestion = answerQuestion;


/* =========================
   START APP
========================= */

home();
