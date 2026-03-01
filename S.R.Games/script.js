const quizData = [
  { image: "images/阿佐さん.png", choices: [
    { text: "阿佐さん", correct: true },
    { text: "柚葉さん", correct: false },
    { text: "ヤバさん", correct: false }
  ]},
  { image: "images/YASさん.png", choices: [
    { text: "YASさん", correct: true },
    { text: "はやちねさん", correct: false },
    { text: "こここさん", correct: false }
  ]},
  { image: "images/ちぃさん.png", choices: [
    { text: "ちぃさん", correct: true },
    { text: "まっちゃさん", correct: false },
    { text: "エドワードさん", correct: false }
  ]},
  { image: "images/虚無さん.png", choices: [
    { text: "虚無さん", correct: true },
    { text: "エドワードさん", correct: false },
    { text: "守谷さん", correct: false }
  ]},
  { image: "images/あっくんさん.png", choices: [
    { text: "あっくんさん", correct: true },
    { text: "ばれいさん", correct: false },
    { text: "げんそーさん", correct: false }
  ]},
  { image: "images/りどるさん.png", choices: [
    { text: "りどるさん", correct: true },
    { text: "きまりさん", correct: false },
    { text: "はやちねさん", correct: false }
  ]},
  { image: "images/ばれいさん.png", choices: [
    { text: "ばれいさん", correct: true },
    { text: "あっくんさん", correct: false },
    { text: "むんちゃん", correct: false }
  ]},
  { image: "images/モノクマさん.png", choices: [
    { text: "モノクマさん", correct: true },
    { text: "たぬポンさん", correct: false },
    { text: "らっこさん", correct: false }
  ]},
  { image: "images/たぬポンさん.png", choices: [
    { text: "たぬポンさん", correct: true },
    { text: "モノクマさん", correct: false },
    { text: "らっこさん", correct: false }
  ]},
  { image: "images/ｆｆさん.png", choices: [
    { text: "ｆｆさん", correct: true },
    { text: "カスヤさん", correct: false },
    { text: "苔さん", correct: false }
  ]},
  { image: "images/ケンジさん.png", choices: [
    { text: "ケンジさん", correct: true },
    { text: "YASさん", correct: false },
    { text: "ヨッシーさん", correct: false }
  ]},
  { image: "images/らむちゃん.png", choices: [
    { text: "らむちゃん", correct: true },
    { text: "ショーンさん", correct: false },
    { text: "カブ頭さん", correct: false }
  ]},
  { image: "images/無糖さん.png", choices: [
    { text: "無糖さん", correct: true },
    { text: "ことねちゃん", correct: false },
    { text: "ゆんなのさん", correct: false }
  ]},
  { image: "images/苔さん.png", choices: [
    { text: "苔さん", correct: true },
    { text: "カスヤさん", correct: false },
    { text: "ｆｆさん", correct: false }
  ]},
  { image: "images/ことねちゃん.png", choices: [
    { text: "ことねちゃん", correct: true },
    { text: "無糖さん", correct: false },
    { text: "ゆんなのさん", correct: false }
  ]},
  { image: "images/こここさん.png", choices: [
    { text: "こここさん", correct: true },
    { text: "きまりさん", correct: false },
    { text: "てんぷれーるさん", correct: false }
  ]},
  { image: "images/守谷さん.png", choices: [
    { text: "守谷さん", correct: true },
    { text: "てんぷれーるさん", correct: false },
    { text: "虚無さん", correct: false }
  ]},
  { image: "images/まっちゃさん.png", choices: [
    { text: "まっちゃさん", correct: true },
    { text: "ヨッシーさん", correct: false },
    { text: "光國公", correct: false }
  ]},
  { image: "images/らっこさん.png", choices: [
    { text: "らっこさん", correct: true },
    { text: "モノクマさん", correct: false },
    { text: "たぬポンさん", correct: false }
  ]},
  { image: "images/ショーンさん.png", choices: [
    { text: "ショーンさん", correct: true },
    { text: "らむちゃん", correct: false },
    { text: "カブ頭さん", correct: false }
  ]},
  { image: "images/エドワードさん.png", choices: [
    { text: "エドワードさん", correct: true },
    { text: "虚無さん", correct: false },
    { text: "まっちゃさん", correct: false }
  ]},
  { image: "images/はやちねさん.png", choices: [
    { text: "はやちねさん", correct: true },
    { text: "YASさん", correct: false },
    { text: "光國公", correct: false }
  ]},
  { image: "images/ゆきさん.png", choices: [
    { text: "ゆきさん", correct: true },
    { text: "しゅね～さん", correct: false },
    { text: "ちぃさん", correct: false }
  ]},
  { image: "images/柚葉さん.png", choices: [
    { text: "柚葉さん", correct: true },
    { text: "阿佐さん", correct: false },
    { text: "ヤバさん", correct: false }
  ]},
  { image: "images/むんちゃん.png", choices: [
    { text: "むんちゃん", correct: true },
    { text: "げんそーさん", correct: false },
    { text: "ケンジさん", correct: false }
  ]},
  { image: "images/カブ頭さん.png", choices: [
    { text: "カブ頭さん", correct: true },
    { text: "ショーンさん", correct: false },
    { text: "らむちゃん", correct: false }
  ]},
  { image: "images/ゆんなのさん.png", choices: [
    { text: "ゆんなのさん", correct: true },
    { text: "ことねちゃん", correct: false },
    { text: "無糖さん", correct: false }
  ]},
  { image: "images/光國公.png", choices: [
    { text: "光國公", correct: true },
    { text: "しゅね～さん", correct: false },
    { text: "ゆきさん", correct: false }
  ]},
  { image: "images/げんそーさん.png", choices: [
    { text: "げんそーさん", correct: true },
    { text: "むんちゃん", correct: false },
    { text: "ケンジさん", correct: false }
  ]},
  { image: "images/ヤバさん.png", choices: [
    { text: "ヤバさん", correct: true },
    { text: "阿佐さん", correct: false },
    { text: "柚葉さん", correct: false }
  ]},
  { image: "images/しゅね～さん.png", choices: [
    { text: "しゅね～さん", correct: true },
    { text: "ゆきさん", correct: false },
    { text: "ちぃさん", correct: false }
  ]},
  { image: "images/カスヤさん.png", choices: [
    { text: "カスヤさん", correct: true },
    { text: "苔さん", correct: false },
    { text: "ｆｆさん", correct: false }
  ]},
  { image: "images/ねこうささん.png", choices: [
    { text: "ねこうささん", correct: true },
    { text: "らとさん", correct: false },
    { text: "りとるさん", correct: false }
  ]},
  { image: "images/ヨッシーさん.png", choices: [
    { text: "ヨッシーさん", correct: true },
    { text: "あっくんさん", correct: false },
    { text: "ばれいさん", correct: false }
  ]},
  { image: "images/らとさん.png", choices: [
    { text: "らとさん", correct: true },
    { text: "ねこうささん", correct: false },
    { text: "りとるさん", correct: false }
  ]},
  { image: "images/きまりさん.png", choices: [
    { text: "きまりさん", correct: true },
    { text: "りどるさん", correct: false },
    { text: "こここさん", correct: false }
  ]},
  { image: "images/りとるさん.png", choices: [
    { text: "りとるさん", correct: true },
    { text: "ねこうささん", correct: false },
    { text: "らとさん", correct: false }
  ]},
  { image: "images/てんぷれーるさん.png", choices: [
    { text: "てんぷれーるさん", correct: true },
    { text: "守谷さん", correct: false },
    { text: "りどるさん", correct: false }
  ]}
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ★ 20問抽出
const QUESTION_COUNT = 20;
const POINT_PER_QUESTION = 5;

const selectedQuiz = shuffle([...quizData]).slice(0, QUESTION_COUNT);

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

  const quiz = selectedQuiz[currentQuestion];

  document.getElementById("question-number").textContent =
    `第${currentQuestion + 1}問`;

  const img = document.getElementById("quiz-image");
  const choicesDiv = document.getElementById("choices");

  choicesDiv.innerHTML = "読み込み中...";
  img.src = quiz.image;

  img.onload = () => {

    choicesDiv.innerHTML = "";
    isProcessing = false;

    const shuffledChoices = shuffle([...quiz.choices]);

    shuffledChoices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = () => checkAnswer(choice.correct);
      choicesDiv.appendChild(button);
    });
  };

  document.getElementById("progress").textContent =
    `現在のスコア: ${score} 点`;
}

function checkAnswer(isCorrect) {

  if (isCorrect) {
    score += POINT_PER_QUESTION;   // ★ 5点加算
  }

  currentQuestion++;

  if (currentQuestion < selectedQuiz.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {

  const maxScore = QUESTION_COUNT * POINT_PER_QUESTION;

  let message = "";
  let messageClass = "";   // ★ 必ず宣言する

  if (score === maxScore) {
    message = "満点！鈴ノ宮マスター！";
    messageClass = "result-message";
  } else if (score >= 75) {
    message = "すごい！ほぼ鈴ノ宮！";
    messageClass = "result-message";
  } else if (score >= 50) {
    message = "半分以上正解！がんばろう！";
    messageClass = "result-message";
  } else if (score >= 30) {
    message = "ﾔﾝﾅｯﾁｬｳﾜ!!このクイズ難しすぎ！";
    messageClass = "result-message";  
  } else if (score >= 0) {
    message = "ちょっと寝るね...(不貞寝)";
    messageClass = "result-message";
  } else {
    message = "もう一度挑戦してみましょう！";
  }

  console.log("score:", score);
  console.log("maxScore:", maxScore);
  console.log("message:", message);

  const container = document.querySelector(".quiz-container");

  container.innerHTML =
    `<h2>終了！</h2>
     <p>最終スコア: ${score} / ${maxScore} 点</p>
     <p class="${messageClass}">${message}</p>
     <button onclick="location.reload()">もう1回遊ぶ！</button>`;
}

function startQuiz() {

  // スタート画面を消す
  document.getElementById("start-screen").style.display = "none";

  // クイズ画面を表示
  document.getElementById("quiz-screen").style.display = "block";

  // 問題読み込み開始
  loadQuestion();
}
