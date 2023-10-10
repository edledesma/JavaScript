document.addEventListener("DOMContentLoaded", function () {
    pomodoro();
});

function pomodoro() {
    let active = false;
    let timerId;
    let currentTime;
    let breakTime = false
    let cycle=1;
    let paused = false;
    const alertAud = new Audio("./audio/chimes.mp3");
    const timerDisplay = document.querySelector("#timer-display");
    const startTimer = document.querySelector("#start-timer");
    const stopTimer = document.querySelector("#stop-timer");
    const displayCycle = document.querySelector("#cycle");
    const pomContainer = document.querySelector("#pomodoro-container");
    const favicon = document.querySelector("#favicon"); 
    

    startTimer.addEventListener("click", function () {
        if (!active) {
            startTimer.classList.remove("btn-danger","btn-warning");
            startCountDown();
            favicon.setAttribute("href","/img/tomato.svg")
        }else if(active) {
            pauseCountDown();
        }
    });

    stopTimer.addEventListener("click", function () {
        clearInterval(timerId);
        timerDisplay.innerHTML = "Time";
        favicon.setAttribute("href","/img/javascript.ico")
        startTimer.classList.remove("btn-danger","btn-warning")
        startTimer.innerHTML = "START"
        document.title  = "Pomodoro";
        paused = false;
        active = false;
        breakTime = false
        cycle = 1
        displayCycle.innerHTML = ``
        pomContainer.style.backgroundColor = "#e94f4f"
    });

    function startCountDown() {
        
        startTimer.classList.add("btn-danger")
        startTimer.classList.remove("btn-warning")
        startTimer.innerHTML = "PAUSE"
        if (cycle != 8) {
            if (breakTime == false) {
                currentTime = 25*60;
                breakTime = true;
                displayCycle.innerHTML = `Work period ${Math.ceil(cycle/2) }`
                pomContainer.style.backgroundColor = "#e94f4f"
            }else{
                currentTime = 5*60;
                breakTime = false
                displayCycle.innerHTML = `Rest period: ${Math.ceil(cycle/2)}`
                pomContainer.style.backgroundColor = "#5379e2"
            }
        }else{
            currentTime = 25*60
            cycle = 1
            breakTime = false
            displayCycle.innerHTML = `Long Break`
            pomContainer.style.backgroundColor ="#199223"
        }
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
            timerDisplay.innerHTML = secToMin(currentTime);
            document.title  = secToMin(currentTime);
        if (currentTime === -1) {
            alertAud.play();
            clearInterval(timerId);
            document.title  = "Pomodoro";
            timerDisplay.innerHTML = "00:00";
            alert("Break Time!");
            cycle++;
            active = false;
            startTimer.classList.remove("btn-danger", "btn-warning");
            startTimer.innerHTML = "START"
            startCountDown()
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
