let hours = document.getElementById("hours");
let min = document.getElementById("min");
let count = document.getElementById("count");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timer;
let h = 0;
let m = 0;
let s = 0;

function startTimer() {
    s++;
    if (s == 60) {
        s = 0;
        m++;
        if (m == 60) {
            m = 0;
            h++;
        }
    }
    hours.innerText = h < 10 ? "0" + h : h;
    min.innerText = m < 10 ? "0" + m : m;
    count.innerText = s < 10 ? "0" + s : s;
}

start.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval(startTimer, 1000);
});

stop.addEventListener("click", function () {
    clearInterval(timer);
});

reset.addEventListener("click", function () {
    clearInterval(timer);
    h = 0;
    m = 0;
    s = 0;
    hours.innerText = "00";
    min.innerText = "00";
    count.innerText = "00";
});