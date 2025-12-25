// CONFIGURATION: Add your 4 image paths here
const myImages = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg'
];

const wishes = {
    heartfelt: "May your home be filled with the warmth of family and the glow of happiness. You deserve a season that is as beautiful and kind as your soul.",
    anime: "Power up your holiday spirit! May your Christmas have more 'Nakama' vibes than Luffy’s crew and more success than a Saitama punch. Believe it!",
    witty: "I was going to get you a massive gift, but then I remembered you already have the pleasure of knowing me. Best gift ever, right? Ho Ho Ho!",
    inspirational: "As the year closes, look back with pride and forward with courage. May 2026 be the chapter where all your biggest dreams finally come true.",
    classic: "Wishing you a traditional Christmas filled with cookies, carols, and cheer. May the magic of the season stay in your heart all year long."
};

let currentImgIdx = 0;
const splashImg = document.getElementById('carousel-img');
const mainImg = document.getElementById('main-carousel-img');

// 1. Carousel Logic
function rotateImages() {
    currentImgIdx = (currentImgIdx + 1) % myImages.length;
    splashImg.style.opacity = 0;
    mainImg.style.opacity = 0;
    
    setTimeout(() => {
        splashImg.src = myImages[currentImgIdx];
        mainImg.src = myImages[currentImgIdx];
        splashImg.style.opacity = 1;
        mainImg.style.opacity = 1;
    }, 500);
}

// Rotate every 2.5s for splash (total 4 images in 10s)
setInterval(rotateImages, 2500);

// 2. Snow Logic
function createSnow(containerId) {
    const container = document.getElementById(containerId);
    setInterval(() => {
        const snow = document.createElement('div');
        snow.className = 'snowflake';
        snow.innerHTML = '❄';
        snow.style.left = Math.random() * 100 + 'vw';
        snow.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snow.style.opacity = Math.random();
        snow.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(snow);
        setTimeout(() => snow.remove(), 5000);
    }, 150);
}
createSnow('snow-splash');
createSnow('snow-main');

// 3. Audio Hack
function playMusic() {
    const music = document.getElementById('bg-music');
    music.play().catch(() => {});
}

// 4. Page Transition (10 Seconds)
setTimeout(() => {
    document.getElementById('splash').style.transform = 'translateY(-100%)';
    setTimeout(() => {
        document.getElementById('splash').classList.add('hidden');
        document.getElementById('main-site').classList.remove('hidden');
    }, 1000);
}, 10000);

// 5. Greeting Logic
function showGreeting() {
    const name = document.getElementById('userName').value;
    const type = document.getElementById('wishType').value;

    if (!name) return alert("Tell me your name first!");

    document.getElementById('input-ui').classList.add('hidden');
    document.getElementById('result-ui').classList.remove('hidden');
    
    document.getElementById('user-title').innerText = `Merry Christmas, ${name}!`;
    document.getElementById('user-msg').innerText = wishes[type];
}

function resetForm() {
    document.getElementById('result-ui').classList.add('hidden');
    document.getElementById('input-ui').classList.remove('hidden');
}