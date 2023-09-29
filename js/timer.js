document.addEventListener("DOMContentLoaded", function () {
    timer();
});

function timer() {
    var active = false;
    var timerId;
    var currentTime;
    var minutesInput;
    const alarmAud = new Audio("./audio/alarm.mp3");
    const timerDisplay = document.querySelector("#timer-display");
    const startTimer = document.querySelector("#start-timer");
    const stopTimer = document.querySelector("#stop-timer");
    const inputMins = document.querySelector("#timer-minutes-input");

    startTimer.addEventListener("click", function () {
        console.log(inputMins);
        if (!active && validateInput()) {
            minutesInput = parseInt(inputMins.value);
            
                startCountDown();
            }
        
    });

    stopTimer.addEventListener("click", function () {
        clearInterval(timerId);
        timerDisplay.innerHTML = "Time";
        active = false;
    });

    function validateInput() {
        const inputValue = parseInt(inputMins.value);
        if (isNaN(inputValue) || inputValue < 0 || inputValue > 1440) {
            alert("Please enter a number between 0 and 1440");
            inputMins.value = "";
            return false;
        }
        return true;
    };

    function startCountDown() {
        currentTime = minutesInput * 60;
        active = true;
        timerId = setInterval(countDown, 1000);
    }

    function countDown() {
        currentTime--;
        console.log(currentTime);
        timerDisplay.innerHTML = secToMin(currentTime);
        document.title  = secToMin(currentTime);
        if (currentTime === -1) {
            alarmAud.play();
            clearInterval(timerId);
            timerDisplay.textContent = "Time's up";
            document.title  = "Timer";
            alert("Time's up");
            active = false;
        }
    }

    function secToMin(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(remainingSeconds).padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    }
}
