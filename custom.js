
// スムーズスクロール
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// メインビジュアルテキストのフェードイン
window.addEventListener('DOMContentLoaded', () => {
    const visualText = document.querySelector('.main-visual p');
    if (visualText) {
        setTimeout(() => {
            visualText.style.opacity = 1;
        }, 500);
    }
});

// 時間によってメッセージ表示変更
window.addEventListener('DOMContentLoaded', () => {
    const greeting = document.createElement('div');
    greeting.classList.add('greeting-message');
    const hour = new Date().getHours();
    let message = 'いらっしゃいませ！';

    if (hour < 11) {
        message = 'おはようございます！コーヒーはいかがですか？';
    } else if (hour < 17) {
        message = 'こんにちは！ゆっくりしていってくださいね。';
    } else {
        message = 'こんばんは！今日もお疲れさまです。';
    }

    greeting.textContent = message;
    const firstContainer = document.querySelector('.container');
    if (firstContainer) {
        firstContainer.before(greeting);
    }
});

window.addEventListener('load', () => {
    const myLatLng = { lat: 35.6811673, lng: 139.7670516 };// 東京駅の緯度経度
    const options = {
        zoom: 15,
        center: myLatLng,
        mapTypeId: 'roadmap'
    };

    const map = new google.maps.Map(document.getElementById('map'), options);
    new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '東京駅'
    });
    showMenu('drink');
});



//メニューをボタンで切り替えるようにする
// メニューを表示する関数
function showMenu(menuId) {
    // すべてのメニューセクションを非表示にする
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });


    // 指定されたIDのメニューセクションを表示する
    const target = document.getElementById(menuId);
    if (target) {
        target.style.display = 'block';
        setTimeout(() => {
            target.classList.add('active');
        }, 10); // CSSのトランジションを考慮して少し遅延させる
    }
}

