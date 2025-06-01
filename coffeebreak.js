const startingMinute = 25;
let time = startingMinute * 60;

const countdownEl = document.getElementById('countdown');

const interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(interval);
        countdownEl.innerHTML = `<button id="BreakBtn">Back to work</button>`;
        document.getElementById('BreakBtn').onclick = function() {
            window.location.href = "timer.html";
        };
    }
}