document.addEventListener("DOMContentLoaded", () => {
    const hiji = document.getElementById("hiji");
    const neko = document.getElementById("neko");
    const maru = document.getElementById("maru");
    const dialogue = document.getElementById("dialogue");
    const goButton = document.getElementById("go-button");

    // スライドインからスライドアウトまでの一連の処理
    function eventSequence() {
        // 1. maru_dot.png がスライドイン
        maru.classList.add("maru-slide-in");

        setTimeout(() => {
            // 2. 「まる。「…よこせ」」 を表示
            dialogue.textContent = "まる。「…よこせ」";

            setTimeout(() => {
                // 3. neko.jpeg をフェードアウト
                neko.classList.add("hidden");

                setTimeout(() => {
                    // 4. murabito.jpeg を表示
                    const murabito = document.createElement("img");
                    murabito.src = "murabito.png";
                    murabito.alt = "Murabito";
                    murabito.style.width = "100px";
                    murabito.style.height = "100px";
                    murabito.style.objectFit = "contain";
                    hiji.parentElement.appendChild(murabito);

                    setTimeout(() => {
                        // 5. maru_dot.png がスライドアウト
                        maru.classList.remove("maru-slide-in");
                        maru.classList.add("maru-slide-out");

                        setTimeout(() => {
                            // 6. go.png を表示
                            goButton.style.display = "block";

                            // 7. テキストを消して終了
                            dialogue.textContent = "";
                        }, 2000); // スライドアウト完了後
                    }, 2000); // murabito.jpeg 表示後
                }, 1000); // neko.jpeg 非表示後
            }, 2000); // テキスト表示後
        }, 2000); // スライドイン完了後
    }

    // イベントシーケンスを開始
    eventSequence();
});
