const i = [1, 2, 5];
const j = [2, 5, 1];
const k = [3, 4, 6];
var num = 0;
setInterval(function() {
    num++;
    if (num > 2) {
        num = 0;
    }
    document.getElementById("image1").src = "불법광고들/" + i[num] + ".png"
    document.getElementById("image2").src = "불법광고들/" + j[num] + ".png"
    document.getElementById("image3").src = "불법광고들/" + k[num] + ".png"
}, 10000);

document.getElementById("close").onclick = function() {
    document.getElementById("ad2").style.display = 'none';
};
document.getElementById("image1").onclick = function() {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
document.getElementById("image2").onclick = function() {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
document.getElementById("image3").onclick = function() {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}