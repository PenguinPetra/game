window.onload = function() {
    // タイトルの1文字ずつアニメーションさせる処理
    const titleElement = document.getElementById('main-title');
    const text = titleElement.innerText;
    titleElement.innerText = ''; 

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.className = 'char';
        // ふりがなの表示時間に合わせる
        span.style.animationDelay = (0.6 + (index * 0.2)) + 's';
        titleElement.appendChild(span);
    });

    // 「クリックしてスタート」を遅れて表示
    setTimeout(() => { 
        document.getElementById('start-msg').style.opacity = '1'; 
    }, 1800);
};

// タイトル画面からメニューへ
function showMenu() {
    document.getElementById('bg-img').classList.add('bg-dimmed');
    document.getElementById('title-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'flex';
}

// モーダルを表示する関数
function showModal(panelId) {
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById(panelId).classList.remove('hidden');
}

// 全てのモーダルを閉じる関数
function closeAllModals() {
    document.getElementById('overlay').classList.add('hidden');
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.add('hidden');
    });
}