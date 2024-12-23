document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    const hoverImage = document.getElementById('hover-image');
    const goImage = document.getElementById('go-image'); // go.png
    const buttonContainer = document.getElementById('button-container');
    const messageElement = document.getElementById('message');
    const timerElement = document.getElementById('timer');
    const gotoDot = document.getElementById('goto-dot');

    const message = [
        "さあ　第二の課題といこう",
        "今回の課題は簡単だよ",
        "このボタンを押せば、次の課題へと進める",
        "あと、今から2分後　ここには毒ガスが流される",
        "早く次に進みなよ　じゃあね"
    ];

    let currentMessageIndex = 0;
    let countdownTimer;
    let timeLeft = 120; // カウントダウンは120秒（2分）

    function displayMessage() {
        if (currentMessageIndex < message.length) {
            messageElement.innerHTML += message[currentMessageIndex] + "<br>";
            currentMessageIndex++;
            setTimeout(displayMessage, 2000); // 次のメッセージを2秒後に表示
        } else {
            // 最後のメッセージが表示された後にボタンを表示
            buttonContainer.style.display = "block";
            timerElement.style.display = "block"; // カウントダウンを表示
            startCountdown(); // カウントダウンを開始
        }
    }

    function startCountdown() {
        countdownTimer = setInterval(function () {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            if (timeLeft === 60) {
                gotoDot.style.display = "block"; // goto_dot.pngを表示
            }

            // カウントダウンが1:59のときにgo.pngを非表示にする
            if (timeLeft === 119) {
                goImage.style.display = "none"; // go.pngを非表示にする
            }

            // カウントダウンが0:58になったときにgo.pngを表示
            if (timeLeft === 58) {
                goImage.style.display = "block"; // go.pngを表示
            }

            if (timeLeft <= 0) {
                clearInterval(countdownTimer); // カウントダウン停止
            }

            timeLeft--;
        }, 1000); // 1秒ごとに更新
    }

    // ボタンにカーソルを合わせたときに go2.png を表示
    button.addEventListener('mouseenter', function () {
        hoverImage.style.display = 'block';  // go2.pngを表示
    });

    // ボタンからカーソルが外れたときに go2.png を非表示
    button.addEventListener('mouseleave', function () {
        hoverImage.style.display = 'none';  // go2.pngを非表示
    });

    // goto_dot.pngのアニメーションが終わった後に go.png を表示
    gotoDot.addEventListener('animationend', function() {
        // go.pngは表示されない
    });

    // ページがロードされた3秒後に文字表示開始
    setTimeout(displayMessage, 3000);
});
