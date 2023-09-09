
function ejercicio0() {
    console.log("HELLO FROM THE OTHER SIDE")
}

function ejercicio1() {
    const ej1result = document.querySelector('#ej1result');
    const ej1value = document.querySelector('#ej1input').value.toLowerCase();
    if (ej1value === "cloudy") {
        ej1result.innerHTML = `The weather is ${ej1value} ☁`;
    }else if (ej1value === "sunny") {
        ej1result.innerHTML = `The weather is ${ej1value} ☀`;
    }else if (ej1value === "rainy") {
        ej1result.innerHTML = `The weather is ${ej1value} 🌧`;
    }else{
        ej1result.innerHTML= `That's not a valid weather 🤔`;
    };
};

function ejercicio2(){
    const ej2result = document.querySelector('#ej2result');
    const ej2value = document.querySelector('#ej2input').value;
    ej2result.innerHTML = `The area equals to ${Math.PI*ej2value*ej2value} <br> The surface equals to ${2*Math.PI*ej2value}`;
};

function ejercicio3(){
    const ej3result = document.querySelector('#ej3result');
    const ej3value = document.querySelector('#ej3input').value;
    if (ej3value < 0) {
        ej3result.innerHTML = `Age is not valid`;
    }else if (ej3value <17){
        ej3result.innerHTML = `User is not of legal age`;
    }else{
        ej3result.innerHTML = `User is of legal age`;
    }
};