const max = Math.floor(Math.random() * 30 + 20);
var speed = 300;
var count = 0;
var l = document.getElementById("left")
var m = document.getElementById("mid")
var r = document.getElementById("right")
var ball = document.getElementById("ball")
var isShuffled = false;

document.getElementById("start").onclick = function() {
    count = 0;

    document.getElementById("start").style.display = 'none';
    l.style.top = "150px";
    m.style.top = "150px";
    r.style.top = "150px";
    setTimeout(function() {
        ball.style.display = "none";
        setTimeout(() => shuffle(numbers), 500);
    }, 500);
};
window.onload = function() {
    l.onclick = open()
    m.onclick = open()
    r.onclick = open()
}

function open() {
    if (isShuffled) {
        ball.style.marginLeft = r.style.marginLeft;
        ball.style.display = "";
        l.style.top = "50px";
        m.style.top = "50px";
        r.style.top = "50px";
        document.getElementById("start").style.display = '';
        isShuffled = false;
    }
}


const numbers = ["top: 150px; margin-left: 10px; z-index: 2", "top: 150px; margin-left: 122px; z-index: 3", "top: 150px; margin-left: 235px; z-index: 4"];
var shuffle = function(array) {
    if (count == max - 10) {
        l.style.transitionDuration = 0.1;
        l.style.transitionDuration = 0.1;
        l.style.transitionDuration = 0.1;
        speed = 250;
    }
    if (count == max) {
        isShuffled = true;
        return;
    }
    for (let index = array.length - 1; index > 0; index--) {
        // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
        const randomPosition = Math.floor(Math.random() * (index + 1));
        // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
        const temporary = array[index];
        array[index] = array[randomPosition];
        array[randomPosition] = temporary;
    }
    l.style.cssText = array[0];
    m.style.cssText = array[1];
    r.style.cssText = array[2];
    count++;
    setTimeout(() => shuffle(numbers), speed);
}