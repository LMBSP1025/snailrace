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