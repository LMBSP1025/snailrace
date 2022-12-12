const snails = document.getElementsByClassName("snail");
const names = document.getElementsByClassName("name");
let aPos, bPos, cPos, dPos, ePos = 0;
let game;
let as, bs, cs, ds, es;
let run = () => {
    aPos += as + Math.random();
    bPos += bs + Math.random();
    cPos += cs + Math.random();
    dPos += ds + Math.random();
    ePos += es + Math.random();
    snails.a.style.transform = `translateX(${aPos}px)`;
    snails.b.style.transform = `translateX(${bPos}px)`;
    snails.c.style.transform = `translateX(${cPos}px)`;
    snails.d.style.transform = `translateX(${dPos}px)`;
    snails.e.style.transform = `translateX(${ePos}px)`;
    if (aPos >= window.innerWidth * 90 / 100 - 25) {
        stop(0);
    } else if (bPos >= window.innerWidth * 90 / 100 - 25) {
        stop(1);
    } else if (cPos >= window.innerWidth * 90 / 100 - 25) {
        stop(2);
    } else if (dPos >= window.innerWidth * 90 / 100 - 25) {
        stop(3);
    } else if (ePos >= window.innerWidth * 90 / 100 - 25) {
        stop(4);
    }
}
document.getElementById("start").onclick = function() {
    for (i = 0; i < 5; i++) {
        names[i].style.color = "black";
        names[i].style.fontWeight = "normal";
        names[i].style.backgroundColor = "white";
    }
    game = setInterval(run, 0.1);
    aPos = bPos = cPos = dPos = ePos = 0;
    document.getElementById("start").style.display = 'none';
};
var setSpeed = () => {
    let a = Math.random();
    let b = Math.random();
    let c = Math.random();
    let d = Math.random();
    let e = Math.random();
    let tot = a + b + c + d + e;
    as = document.getElementById("aw").innerHTML = Math.round(a / tot * 100);
    bs = document.getElementById("bw").innerHTML = Math.round(b / tot * 100);
    cs = document.getElementById("cw").innerHTML = Math.round(c / tot * 100);
    ds = document.getElementById("dw").innerHTML = Math.round(d / tot * 100);
    es = document.getElementById("ew").innerHTML = Math.round(e / tot * 100);
    as = as / 2500;
    bs = bs / 2500;
    cs = cs / 2500;
    ds = ds / 2500;
    es = es / 2500;
};

window.onload = setSpeed;
document.getElementById("set").onclick = setSpeed;

function stop(winner) {
    names[winner].style.color = "white";
    names[winner].style.fontWeight = "bolder";
    names[winner].style.backgroundColor = "brown";
    console.log("stop");
    clearInterval(game);
    document.getElementById("start").style.display = 'block';
}