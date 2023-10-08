document.addEventListener("DOMContentLoaded", function () {
    timer();
});

function timer() {
    let active = false;
    let timerId;
    let currentTime;
    let minutesInput;
    let paused = false;
    const alarmAud = new Audio("./audio/alarm.mp3");
    const timerDisplay = document.querySelector("#timer-display");
    const startTimer = document.querySelector("#start-timer");
    const stopTimer = document.querySelector("#stop-timer");
    const inputMins = document.querySelector("#timer-minutes-input");

    startTimer.addEventListener("click", function () {
        if (!active && validateInput()) {
            startTimer.classList.remove("btn-danger","btn-warning");
            minutesInput = parseInt(inputMins.value);
            startCountDown();
        }else if(active && validateInput()) {
            pauseCountDown();
        }
        
    });

    stopTimer.addEventListener("click", function () {
        clearInterval(timerId);
        timerDisplay.innerHTML = "Time";
        startTimer.classList.remove("btn-danger","btn-warning")
        startTimer.innerHTML = "START"
        document.title  = "Timer";
        paused = false;
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
        startTimer.classList.add("btn-danger")
        startTimer.classList.remove("btn-warning")
        startTimer.innerHTML = "PAUSE"
        currentTime = minutesInput * 60;
        active = true;
        timerId = setInterval(countDown, 1000);
    }

    function pauseCountDown() {
        console.log(`Time: ${currentTime} - Paused: ${paused}` );
        paused = !paused;
        if (paused) {
            startTimer.classList.add("btn-warning")
            startTimer.classList.remove("btn-danger")
            startTimer.innerHTML = "RESUME"
        }else{
            startTimer.classList.remove("btm-warnings")
            startTimer.classList.add("btn-danger")
            startTimer.innerHTML = "PAUSE"
        }
    }        

    function countDown() {
        if (!paused) {
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
            startTimer.classList.remove("btn-danger", "btn-warning");
            startTimer.innerHTML = "START"
        }
        }else{
            return
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
