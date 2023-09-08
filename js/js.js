function ejercicio0() {
    console.log("HELLO FROM THE OTHER SIDE")
}

function ejercicio1() {
    console.log("Starting up")
    const ej1button = document.querySelector('#ej1button');

    if (ej1button) {
        console.log("Button found:", ej1button);
        ej1button.addEventListener("click", function () {
            console.log("Button clicked");
            const inputej1Field = document.querySelector('#inputej1');
            const resulej1 = document.querySelector('#resultej1');
            const inputej1 = inputej1Field.value;
            resulej1.textContent = `The weather is ${inputej1}`;
        });
    } else {
        console.log("Button not found. Check your HTML and Vue.js component.");
    }
};
