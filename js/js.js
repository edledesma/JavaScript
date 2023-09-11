
function ejercicio0() {
    console.log("HELLO FROM THE OTHER SIDE")
}

function ejercicio1() {
    const ej1result = document.querySelector('#ej1result');
    const ej1value = document.querySelector('#ej1input').value.toLowerCase();
    if (ej1value === "cloudy") {
        ej1result.innerHTML = `The weather is ${ej1value} ☁`;
    } else if (ej1value === "sunny") {
        ej1result.innerHTML = `The weather is ${ej1value} ☀`;
    } else if (ej1value === "rainy") {
        ej1result.innerHTML = `The weather is ${ej1value} 🌧`;
    } else {
        ej1result.innerHTML = `That's not a valid weather 🤔`;
    };
};

function ejercicio2() {
    const ej2result = document.querySelector('#ej2result');
    const ej2value = document.querySelector('#ej2input').value;
    ej2result.innerHTML = `The area equals to ${Math.PI * ej2value * ej2value} <br> The surface equals to ${2 * Math.PI * ej2value}`;
};

function ejercicio3() {
    const ej3result = document.querySelector('#ej3result');
    const ej3value = document.querySelector('#ej3input').value;
    if (ej3value < 0) {
        ej3result.innerHTML = `Age is not valid`;
    } else if (ej3value <= 17) {
        ej3result.innerHTML = `User is not of legal age`;
    } else {
        ej3result.innerHTML = `User is of legal age`;
    }
};

function ejercicio4() {
    const ej4result = document.querySelector('#ej4result');
    const ej4value = document.querySelector('#ej4input').value.toLowerCase();

    if (ej4value === "y" || ej4value === "n") {
        ej4result.innerHTML = `<p style="color:green;font-size:25px;font-weight:700">CORRECT`;
    } else {
        ej4result.innerHTML = `<p style="color:red;font-size:25px;font-weight:700">INCORRECT`;
    }
}

function ejercicio5() {
    const visor = document.querySelector('#visor')
    const visorLeft = document.querySelector('#visor-left')
    const btnC = document.querySelector('#calcBtnC');
    const btnE = document.querySelector('#calcBtnE');
    const btnA = document.querySelector('#calcBtnA');
    const btnS = document.querySelector('#calcBtnS');
    const btnD = document.querySelector('#calcBtnD');
    const btnM = document.querySelector('#calcBtnM');
    const btn0 = document.querySelector('#calcBtn0');
    const btn1 = document.querySelector('#calcBtn1');
    const btn2 = document.querySelector('#calcBtn2');
    const btn3 = document.querySelector('#calcBtn3');
    const btn4 = document.querySelector('#calcBtn4');
    const btn5 = document.querySelector('#calcBtn5');
    const btn6 = document.querySelector('#calcBtn6');
    const btn7 = document.querySelector('#calcBtn7');
    const btn8 = document.querySelector('#calcBtn8');
    const btn9 = document.querySelector('#calcBtn9');

    const calcN = document.querySelectorAll('.calcN');

    var inputNumber = 0;
    var inputAux = 0;
    var visorArray = [];
    var result = 0;

    calcN.forEach(buttonN => {
        buttonN.addEventListener('click', function () {
            updateVisor(buttonN.textContent);
        });
    });

    btnC.addEventListener('click', function () {
        clearVisor();
    });
    btnE.addEventListener('click', function () {
        showResults();
    });
    btnA.addEventListener('click', function () {
        additionF();
    });

    function additionF() {
        console.log(visorArray);
        inputNumber = parseInt(visorArray.join(''));
        inputAux = parseInt(visorArray.join(''));
        result = inputNumber+inputAux;
        visorArray = [];
        inputNumber = 0;
        if (isNaN(inputAux)) {
            visorLeft.innerHTML = ``;
        } else {
            visorLeft.innerHTML = `${inputAux}+`;
        }
        visor.innerHTML = `${inputNumber}`;
    }

    function updateVisor(text) {
        visorArray.push(text);
        inputNumber = parseInt(visorArray.join(''));
        visor.innerHTML = `${visorArray.join('')}`;
    }

    function showResults() {
        visor.innerHTML = result;
        console.log(visorArray);
        console.log("IA " + inputAux + " " + (typeof inputAux));
        console.log("IN " + inputNumber + " " + (typeof inputAux));
        console.log("R " + result + " " + (typeof inputAux))
        console.log("_____________________________________");

    }

    function clearVisor() {
        visorArray = [];
        visor.innerHTML = ` `;
        visorLeft.innerHTML = ` `;
        inputNumber = 0;
        inputAux = 0;
    }
}

