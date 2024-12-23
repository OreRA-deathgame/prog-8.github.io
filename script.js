const textElement = document.getElementById("text");
const okomeSpeech = document.getElementById("okome-speech");
const okome = document.getElementById("okome");
const incorrectImage = document.getElementById("incorrect-image");
const gunAudio = document.getElementById("gun-audio");
const hijiki = document.getElementById("hijiki");
const jay = document.getElementById("jay");
const selectionButtons = document.getElementById("selection-buttons");
const nosu = document.getElementById("nosu");
const correctImage = document.getElementById("correct-image");
const redScreen = document.getElementById("red-screen");

function displayMessage(messages, callback) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < messages.length) {
            textElement.innerHTML = messages[index];
            index++;
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 5000);
}

function showQ3() {
    textElement.innerHTML = "Q3. このゲームは4人でクリアすることができる";

    setTimeout(() => {
        okomeSpeech.innerHTML = "おこめ「こんなの…わかるはずがない」<br>おこめ「だって、この中には黒幕が…」";

        setTimeout(() => {
            displayMessage(
                ["おや、気づいていたのかい？", "そうだよ、この問題は黒幕の動き次第で答えが変わってしまう"],
                showQ4Prompt
            );
        }, 5000);
    }, 5000);
}

function showQ4Prompt() {
    textElement.innerHTML = "では、サービスだ<br>問題を変えてあげるよ";

    setTimeout(() => {
        textElement.innerHTML = "Q4. ここで「おこめ」は死ぬ";

        setTimeout(() => {
            okomeSpeech.innerHTML = "おこめ「なっ…」<br>Jay「こんなのって…！」";

            setTimeout(() => {
                okomeSpeech.innerHTML = "おこめ「…分かった、僕はもう×に賭けるしかない」";
                setTimeout(() => {
                    animateOkome();
                }, 1000);
            }, 5000);
        }, 5000);
    }, 5000);
}

function animateOkome() {
    okome.style.transition = "transform 1s ease";
    okome.style.transform = "translate(-75px, -240px)";

    setTimeout(() => {
        okome.style.transition = "none";
        okome.style.transform = "translate(50px, -50px)";
        setTimeout(() => {
            okome.style.opacity = "0"; // 画像を非表示にする
            incorrectImage.src = "incorrect_open.png";

            setTimeout(() => {
                okomeSpeech.innerHTML = "おこめ「…何も…起こらない…？」";

                setTimeout(() => {
                    playGunAudio();
                }, 1000);
            }, 5000);
        }, 100);
    }, 1000);
}

function playGunAudio() {
    gunAudio.play();
    nosu.src = "nosu_dot_gun.png"; // gun音を鳴らして同時に画像を変更
    setTimeout(() => {
        nosu.style.transition = "opacity 1s ease";
        nosu.style.opacity = "1"; // 消えないように
        incorrectImage.src = "incorrect_open.png";

        setTimeout(() => {
            gunAudio.pause();
            gunAudio.currentTime = 0;
            okomeSpeech.innerHTML = "しゅんのすけ「いいや、答えは⚪︎だよ」";
            showNextScene();
        }, 2000);
    }, 1000);
}

function showNextScene() {
    hijiki.style.transition = "transform 1s ease";
    jay.style.transition = "transform 1s ease";

    hijiki.style.transform = "translateY(-200px)";
    jay.style.transform = "translateY(-200px)";

    setTimeout(() => {
        okomeSpeech.innerHTML = "しゅんのすけ「…全部思い出したんだよ」";
        setTimeout(() => {
            okomeSpeech.innerHTML += "<br>「僕が黒幕だってことも」";
            setTimeout(() => {
                okomeSpeech.innerHTML += "<br>「誰もクリアなんてさせない」";
                showSelection();
            }, 3000);
        }, 3000);
    }, 2000);
}

function showSelection() {
    selectionButtons.style.display = "flex";
}

function selectOption(option) {
    if (option === 1) {
        window.location.href = "special9-4.html";
    } else if (option === 2) {
        window.location.href = "special9-4-2.html";
    }
}

displayMessage(
    ["さすがだね", "ちょっと簡単すぎたかな？", "じゃあ　最後の問題だよ"],
    showQ3
);
