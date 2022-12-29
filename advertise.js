const i = [7, 1, 2, 9];
const j = [10, 5, 11, 1];
const k = [3, 4, 8, 6];
var num = Math.floor(Math.random() * 2);
setInterval(function() {
    if (num > 3) {
        num = Math.floor(Math.random() * 2);
    }
    document.getElementById("image1").src = "불법광고들/" + i[num] + ".png"
    document.getElementById("image2").src = "불법광고들/" + j[num] + ".png"
    document.getElementById("image3").src = "불법광고들/" + k[num] + ".png"

    num++;
}, 8000);

document.getElementById("close").onclick = function() {
    document.getElementById("ad2").style.display = 'none';
};
document.getElementById("image1").onclick = function() {
    location.href = "lol.html";
}
document.getElementById("image2").onclick = function() {
    location.href = "lol.html";
}
document.getElementById("image3").onclick = function() {
    location.href = "lol.html";
}