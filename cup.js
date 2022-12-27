console.log(document.getElementsByClassName("cup")[0].style.top);
document.getElementById("start").onclick = function() {
    document.getElementById("start").style.display = 'none';
    document.getElementsByClassName("cup")[0].style.top = "200px"
    document.getElementsByClassName("cup")[1].style.top = "200px"
    document.getElementsByClassName("cup")[2].style.top = "200px"
};