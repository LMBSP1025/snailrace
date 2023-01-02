var ls = 0;
var ms = 0;
var rs = 0;
let rafId,
    rafmId,
    rafrId,
    lsId,
    msId,
    rsId;
var lt = false;
var mt = false;
var rt = false;
var setCount = 0;
var newDiv, newText;
document.getElementById("start").style.display = "block";
var la, ma, ra;
document.getElementById("start").onclick = function() {
    if (!lt && !mt && !rt) {
        la = ma = ra = (Math.random() * (20)) + 80;
        var ly = document.getElementById("slotl").style.top;
        var my = document.getElementById("slotm").style.top;
        var ry = document.getElementById("slotr").style.top;
        ls = ly.slice(0, -2);
        ms = my.slice(0, -2);
        rs = ry.slice(0, -2);
        lt = true;
        mt = true;
        rt = true;
        rafId = requestAnimationFrame(loop);
        rafmId = requestAnimationFrame(moop);
        rafrId = requestAnimationFrame(roop);
        document.getElementById("start").innerText = 'STOP';
        if (newDiv != undefined) {
            newDiv.remove();
        }
    } else if (lt) {
        lsId = requestAnimationFrame(lslow);
        lt = false;
    } else if (mt) {
        msId = requestAnimationFrame(mslow);
        mt = false;
    } else if (rt) {
        rsId = requestAnimationFrame(rslow);
        rt = false;
        document.getElementById("start").style.display = "none";
    }
};

function loop() {
    ls = Number(ls) + la;
    if (ls >= -4) {
        ls = -445;
    }
    document.getElementById("slotl").style.top = ls + "px";
    rafId = requestAnimationFrame(loop);
}

function moop() {
    ms = Number(ms) + ma;
    if (ms >= -4) {
        ms = -445;
    }
    document.getElementById("slotm").style.top = ms + "px";
    rafmId = requestAnimationFrame(moop);
}

function roop() {
    rs = Number(rs) + ra;
    if (rs >= -4) {
        rs = -445;
    }
    document.getElementById("slotr").style.top = rs + "px";
    rafrId = requestAnimationFrame(roop);
}

function lslow() {
    la = la - 1;
    lsId = requestAnimationFrame(lslow);

    if (la <= 0) {
        cancelAnimationFrame(rafId);
        cancelAnimationFrame(lsId);
    }
}

function mslow() {
    ma = ma - 1;
    msId = requestAnimationFrame(mslow);

    if (ma <= 0) {
        cancelAnimationFrame(rafmId);
        cancelAnimationFrame(msId);
    }
}

function rslow() {
    ra = ra - 1;
    rsId = requestAnimationFrame(rslow);

    if (ra <= 0) {
        cancelAnimationFrame(rafrId);
        cancelAnimationFrame(rsId);
        if (Math.abs(document.getElementById("slotl").offsetTop - document.getElementById("slotm").offsetTop) < 30) {
            setCount++;
        }
        if (Math.abs(document.getElementById("slotr").offsetTop - document.getElementById("slotl").offsetTop) < 30) {
            setCount++;
        }
        if (Math.abs(document.getElementById("slotr").offsetTop - document.getElementById("slotm").offsetTop) < 30) {
            setCount++;
        }
        if (setCount == 0) newText = document.createTextNode('하낫또 안맞음.');
        if (setCount == 1) newText = document.createTextNode('두 개 맞음.');
        if (setCount == 3) newText = document.createTextNode('오 다 맞음');
        newDiv = document.createElement('div');
        newDiv.appendChild(newText);
        newDiv.id = "score";
        document.getElementById("board").appendChild(newDiv);
        setCount = 0;
        document.getElementById("start").style.display = "block";
        document.getElementById("start").innerText = 'START';
    }
}