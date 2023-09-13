function ejercicio0() {
  console.log("HELLO FROM THE OTHER SIDE");
}

function ejercicio1() {
  const ej1result = document.querySelector("#ej1result");
  const ej1value = document.querySelector("#ej1input").value.toLowerCase();
  if (ej1value === "cloudy") {
    ej1result.innerHTML = `The weather is ${ej1value} ☁`;
  } else if (ej1value === "sunny") {
    ej1result.innerHTML = `The weather is ${ej1value} ☀`;
  } else if (ej1value === "rainy") {
    ej1result.innerHTML = `The weather is ${ej1value} 🌧`;
  } else {
    ej1result.innerHTML = `That's not a valid weather 🤔`;
  }
}

function ejercicio2() {
  const ej2result = document.querySelector("#ej2result");
  const ej2value = document.querySelector("#ej2input").value;
  ej2result.innerHTML = `The area equals to ${
    Math.PI * ej2value * ej2value
  } <br> The surface equals to ${2 * Math.PI * ej2value}`;
}

function ejercicio3() {
  const ej3result = document.querySelector("#ej3result");
  const ej3value = document.querySelector("#ej3input").value;
  if (ej3value < 0) {
    ej3result.innerHTML = `Age is not valid`;
  } else if (ej3value <= 17) {
    ej3result.innerHTML = `User is not of legal age`;
  } else {
    ej3result.innerHTML = `User is of legal age`;
  }
}

function ejercicio4() {
  const ej4result = document.querySelector("#ej4result");
  const ej4value = document.querySelector("#ej4input").value.toLowerCase();

  if (ej4value === "y" || ej4value === "n") {
    ej4result.innerHTML = `<p style="color:green;font-size:25px;font-weight:700">CORRECT`;
  } else {
    ej4result.innerHTML = `<p style="color:red;font-size:25px;font-weight:700">INCORRECT`;
  }
}

function ejercicio5() {
  const visor = document.querySelector("#visor");
  const visorLeft = document.querySelector("#visor-left");
  const btnC = document.querySelector("#calcBtnC");
  const btnE = document.querySelector("#calcBtnE");
  const btnA = document.querySelector("#calcBtnA");
  const btnS = document.querySelector("#calcBtnS");
  const btnM = document.querySelector("#calcBtnM");
  const btnD = document.querySelector("#calcBtnD");
  const calcN = document.querySelectorAll(".calcN");

  var inputNumber = 0;
  var inputAux = 0;
  var visorArray = [];
  var result = 0;
  var operation = "";
  var initialized = false;

  calcN.forEach((buttonN) => {
    buttonN.addEventListener("click", function () {
      initialized = true;
      updateVisor(buttonN.textContent);
    });
  });

  btnC.addEventListener("click", function () {
    clearVisor();
  });
  btnE.addEventListener("click", function () {
    showResults();
  });
  btnA.addEventListener("click", function () {
    operation = "a";
    handleNumbers();
  });
  btnS.addEventListener("click", function () {
    operation = "s";
    handleNumbers();
  });
  btnM.addEventListener("click", function () {
    operation = "m";
    handleNumbers();
  });
  btnD.addEventListener("click", function () {
    operation = "d";
    handleNumbers();
  });

  function handleNumbers() {
    if (initialized == false) {
      visorLeft.innerHTML = "";
      visor.innerHTML = `Input a number`;
    } else {
      inputNumber = parseInt(visorArray.join(""));
      inputAux = inputNumber;
      visorArray = [];
      inputNumber = 0;
      visorLeft.innerHTML = `${visor.innerHTML}`;
      visor.innerHTML = `${inputNumber}`;
      initialized = false;
    }
  }

  function updateVisor(text) {
    visorArray.push(text);
    inputNumber = parseInt(visorArray.join(""));
    visor.innerHTML = `${visorArray.join("")}`;
  }

  function showResults() {
    visorArray = [];

    if (initialized == false) {
      inputNumber = 0;
      inputAux = 0;
      result = 0;
    } else {
      switch (operation) {
        case "a":
          if (result == 0) {
            result = inputAux + inputNumber;
            visorLeft.innerHTML = `${inputAux} + ${inputNumber}`;
          } else {
            result += inputNumber;
            visorLeft.innerHTML = `${result - inputNumber} + ${inputNumber}`;
          }
          break;
        case "s":
          if (result == 0) {
            result = inputAux - inputNumber;
            visorLeft.innerHTML = `${inputAux} - ${inputNumber}`;
          } else {
            result -= inputNumber;
            visorLeft.innerHTML = `${result + inputNumber} - ${inputNumber}`;
          }
          visor.innerHTML = `${result}`;
          break;
        case "m":
          if (result == 0) {
            result = inputAux * inputNumber;
            visorLeft.innerHTML = `${inputAux} * ${inputNumber}`;
          } else {
            result *= inputNumber;
            visorLeft.innerHTML = `${result / inputNumber} * ${inputNumber}`;
          }
          visor.innerHTML = `${result}`;
          break;
        case "d":
          if (inputNumber === 0) {
            visorLeft.innerHTML = "Cannot divide by zero.";
            result = 0;
            inputNumber = 0;
            inputAux = 0;
            initialized = false;
          } else {
            if (result === 0) {
              result = inputAux / inputNumber;
              visorLeft.innerHTML = `${inputAux} / ${inputNumber}`;
            } else {
              result /= inputNumber;
              visorLeft.innerHTML = `${result} / ${inputNumber}`;
            }
          }
          break;
      }
      visor.innerHTML = `${result}`;
    }
  }

  function clearVisor() {
    visorArray = [];
    visor.innerHTML = ` `;
    visorLeft.innerHTML = ` `;
    inputNumber = 0;
    inputAux = 0;
    operation = "";
    initialized = false;
    result = 0;
  }
}
