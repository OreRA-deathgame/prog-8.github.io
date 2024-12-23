let dialogueText = document.getElementById("dialogueText");
let choicesDiv = document.getElementById("choices");
let gunSound = document.getElementById("gunSound");

let currentScene = 1;
let dialogueQueue = [];

function showDialogue(text) {
  dialogueQueue.push(text);
  displayNextDialogue();
}

function displayNextDialogue() {
  if (dialogueQueue.length > 0) {
    let text = dialogueQueue.shift();
    let i = 0;
    dialogueText.innerHTML = "";
    let interval = setInterval(() => {
      dialogueText.innerHTML += text[i];
      i++;
      if (i === text.length) {
        clearInterval(interval);
        if (currentScene === 4 || currentScene === 6 || currentScene === 8) {
          showChoices();
        } else {
          setTimeout(nextScene, 5000); // 次のシーンへ
        }
      }
    }, 100); // 100msごとに1文字表示
  }
}

function showChoices() {
  choicesDiv.style.display = "block";
  document.getElementById("right").onclick = () => { nextScene(); };
  document.getElementById("left").onclick = () => { nextScene(); };
}

function nextScene() {
  choicesDiv.style.display = "none";
  switch (currentScene) {
    case 1:
      showDialogue("hijiki「行け！⚪︎の部屋には何かあるはずだ！」");
      currentScene = 2;
      break;
    case 2:
      moveJay();
      currentScene = 3;
      break;
    case 3:
      showDialogue("しゅんのすけ「まだ何かできると思ってるの？」");
      currentScene = 4;
      break;
    case 5:
      showDialogue("しゅんのすけ「…くそっ　運のいいやつめ」");
      currentScene = 6;
      break;
    case 7:
      showDialogue("しゅんのすけ「…手こずらせてくれるね」");
      currentScene = 8;
      break;
    case 9:
      playGunSound();
      setRedBackground();
      showDialogue("しゅんのすけ「…本当によくやったよ」");
      currentScene = 10;
      break;
    case 10:
      window.location.href = "special9-4.html";
      break;
  }
}

function moveJay() {
  let jay = document.getElementById("jay");
  let topPosition = -100; // 画面外
  let interval = setInterval(() => {
    if (topPosition < -500) { // 上部の画面外に移動
      clearInterval(interval);
      nextScene();
    }
    jay.style.top = topPosition + "px";
    topPosition -= 10; // 1秒で移動
  }, 20);
}

function playGunSound() {
  gunSound.play();
}

function setRedBackground() {
  let background = document.getElementById("background");
  let opacity = 0;
  let interval = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(interval);
    }
    background.style.backgroundColor = `rgba(255, 0, 0, ${opacity})`;
    opacity += 0.1;
  }, 100); // 10秒かけて赤くする
}

window.onload = function() {
  nextScene();
};
