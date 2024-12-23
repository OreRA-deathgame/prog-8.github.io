window.onload = function() {
    setTimeout(function() {
        // logo.jpg をフェードアウト
        const logo = document.getElementById('logo');
        logo.style.opacity = 0;

        // フェードアウト後にメインコンテンツを表示
        setTimeout(function() {
            // スプラッシュスクリーンを非表示にしてメインコンテンツを表示
            document.getElementById('splash').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 1000); // 1秒後にメインページを表示
    }, 2000); // 2秒後にフェードアウト開始

    // Menuボタンがクリックされたときの動作
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', function() {
        // メニューの表示・非表示を切り替え
        menu.classList.toggle('hidden');  // "hidden"クラスを切り替えることで表示・非表示
    });
};
