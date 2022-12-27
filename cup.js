const max = Math.floor(Math.random() * 30 + 20);
var speed = 400;
var i = 0;
var l = document.getElementById("left")
var m = document.getElementById("mid")
var r = document.getElementById("right")
var ball = document.getElementById("ball")
var isShuffled = false;

document.getElementById("start").onclick = function() {
    document.getElementById("start").style.display = 'none';
    l.style.top = "200px";
    m.style.top = "200px";
    r.style.top = "200px";
    setTimeout(function() {
        ball.style.display = "none";
        setTimeout(() => shuffle(numbers), 500);
    }, 500);
};
window.onload = function() {

    l.onclick = open;
    m.onclick = open;
    r.onclick = open;
}
var open = function() {
    if (isShuffled) {
        l.style.top = "50px";
        m.style.top = "50px";
        r.style.top = "50px";
        document.getElementById("start").style.display = '';
    }
}


const numbers = ["top: 200px; margin-left: 30px;", "top: 200px; margin-left: 219px;", "top: 200px; margin-left: 410px;"];
var shuffle = function(array) {
    if (i == max - 10) {
        l.style.transitionDuration = 0.2;
        l.style.transitionDuration = 0.2;
        l.style.transitionDuration = 0.2;
        speed = 300;
    }
    if (i == max) {
        ball.style.display = "";
        ball.style.marginLeft = l.style.marginLeft;
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
    i++;
    setTimeout(() => shuffle(numbers), speed);
}