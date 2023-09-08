// // 1.Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
// // hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
// // indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.


// var respuesta = prompt("¿Como esta el día de hoy?");

// console.log(`El dia de hoy está ${respuesta}`);


// // 2.Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// // de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// // para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// // area = PI * radio2
// // perimetro = 2 * PI * radio


// var radio = prompt("Ingresar el valor del radio");
// const PI = 3.14159


// console.log(`Area = ${PI*radio**2} , Perimetro = ${2 * PI * radio}`)


// // 3.Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
// // edad se debe mostrar un mensaje indicándolo.

// var edad = prompt("Ingresar edad");
// if (edad >= 18){
//     console.log("Es mayor de edad");
// }else{
//     console.log("No es mayor")
// }

// // 4.Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// // ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// // que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.


// var respuesta = prompt("Ingresar S o N");
// while ((respuesta.toUpperCase() !=="S") && (respuesta.toUpperCase() !=="N")) {
//     console.log("INCORRECTO");
//     var respuesta = prompt("Ingresar S o N");
// }
// console.log("CORRECTO")

// // 5.Construir un programa que simule un menú de opciones para realizar las cuatro
// // operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// // numéricos enteros. El usuario, además, debe especificar la operación con el primer
// // carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// // o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división


// var suma= (a, b) => a+b;
// var resta= (a, b) => a-b;
// var multiplicacion= (a, b) => a*b;
// function division(a, b) {
//     if (b !== 0) {
//         return a / b;
//     } else {
//         return "Error: No se puede dividir por cero.";
//     }
// }

// function main() {
//     var operacion = prompt("Seleccionar la operación (S)uma, (R)esta, (M)ultiplicacion o (D)ivision:").toUpperCase();
//     while (operacion != "S" && operacion != "R" && operacion != "M" && operacion != "D"){
//         console.log("Opcion no valida.")
//         var operacion = prompt("Opcion no valida. Seleccionar la operación (S)uma, (R)esta, (M)ultiplicacion o (D)ivision:").toUpperCase();
//     }
//     var num1 = parseInt(prompt("Ingresar el primer número:"));
//     var num2 = parseInt(prompt("Ingresar el segundo número:"));
//     var resultado;
//     switch (operacion) {
//         case "S":
//             resultado = suma(num1, num2);
//             break;
//         case "R":
//             resultado = resta(num1, num2);
//             break;
//         case "M":
//             resultado = multiplicacion(num1, num2);
//             break;
//         case "D":
//             resultado = division(num1, num2);
//             break;
//         default:
//             resultado = "Opcion no valida.";
//     }
//     console.log("El resultado es:", resultado);
// }

// main();

// // 6.Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// // En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”

// var numero = parseInt(prompt("Ingresar un número:"));

// if (numero % 2 === 0) {
//     console.log(`${numero} es par`);
// } else {
//     console.log(`${numero} es impar`);
// }

// // 7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// // solicite números al usuario hasta que la suma de los números introducidos supere el
// // límite inicial.


// const limite = parseInt(prompt("Ingrese el valor límite positivo:"));
// if (limite <= 0 || isNaN(limite)) {
//     console.log("El valor límite debe ser positivo.");
// } else {
//     let suma = 0;
//     let numero;
//     let contador = 0;


//     while (suma <= limite) {
//         numero = parseInt(prompt(`Ingrese el número #${contador + 1}:`));

//         if (isNaN(numero)) {
//             console.log("Por favor, ingrese un número válido.");
//             continue;
//         }

//         suma += numero;
//         contador++;
//     }

//     console.log(`Se introdujeron ${contador} números para superar el límite.`);
//     console.log(`La suma total es: ${suma}`);
// }

// // 8.Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// // programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// // todos ellos.

// let numeros = [];
// let numero;
// let maximo = Number.MIN_SAFE_INTEGER;
// let minimo = Number.MAX_SAFE_INTEGER;
// let suma = 0;

// do {
//     numero = parseInt(prompt("Ingrese un número entero (ingrese 0 para finalizar):"));

//     if (!isNaN(numero)) {
//         numeros.push(numero);
//         suma += numero;

//         if (numero > maximo) {
//             maximo = numero;
//         }

//         if (numero < minimo && numero !== 0) {
//             minimo = numero;
//         }
//     } else {
//         console.log("Por favor, ingrese un número válido.");
//     }
// } while (numero !== 0);

// const promedio = suma / numeros.length;

// console.log(`El máximo número ingresado es: ${maximo}`);
// console.log(`El mínimo número ingresado es: ${minimo}`);
// console.log(`El promedio de los números ingresados es: ${promedio}`);


// // 9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
// // espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
// // funcionamiento de la función Substring().

// const frase = prompt("Ingrese una frase:");
// let fraseConEspacios = "";
// for (let i = 0; i < frase.length; i++) {
//     fraseConEspacios += frase[i] + " ";
// }
// console.log(fraseConEspacios);

// // 10. Escribir una función flecha que reciba una palabra y la devuelva al revés.

// const reverseWord = palabra => {return palabra.split('').reverse().join('');};

// const palabraOriginal = prompt("Ingrese una palabra:");
// const palabraInvertida = reverseWord(palabraOriginal);

// console.log(`La palabra invertida es: ${palabraInvertida}`);

// // 11. Escribir una función que reciba un String y devuelva la palabra más larga.
// // String Ejemplo: “Guia de JavaScript”
// // Resultado esperado : “JavaScript”

// const findLongestWord = str => {
//     const words = str.split(' ');
//     let longestWord = '';
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// };

// const inputString = prompt("Ingrese una frase:");
// const longestWord = findLongestWord(inputString);

// console.log(`La palabra más larga es: ${longestWord}`);


// // 12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
// // dato.

// const getDataType = arg => {
//     return typeof arg;
// };

// const inputValue = prompt("Ingrese un valor:");
// const dataType = getDataType(inputValue);

// console.log(`El tipo de dato ingresado es: ${dataType}`);

// // 13. Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
// // 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.

// var persona = {
//     nombre: "Juan",
//     edad: 30,
//     sexo: "H",
//     peso: 70,
//     altura: 175
// };

// console.log("Propiedades del objeto persona:");
// console.log(`Nombre: ${persona.nombre}`);
// console.log(`Edad: ${persona.edad}`);
// console.log(`Sexo: ${persona.sexo}`);
// console.log(`Peso: ${persona.peso}`);
// console.log(`Altura: ${persona.altura}`);


// // 14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,

// // Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// // y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// // numero de páginas.

// const libro = {
//     ISBN: "",
//     titulo: "",
//     autor: "",
//     numeroPaginas: 0,
//     cargarLibro: function() {
//         this.ISBN = prompt("Ingrese el ISBN del libro:");
//         this.titulo = prompt("Ingrese el título del libro:");
//         this.autor = prompt("Ingrese el autor del libro:");
//         this.numeroPaginas = parseInt(prompt("Ingrese el número de páginas del libro:"));
//     },
//     informarLibro: function() {
//         console.log("Información del libro:");
//         console.log(`ISBN: ${this.ISBN}`);
//         console.log(`Título: ${this.titulo}`);
//         console.log(`Autor: ${this.autor}`);
//         console.log(`Número de páginas: ${this.numeroPaginas}`);
//     }
// };

// // Cargar los datos del libro
// libro.cargarLibro();

// // Mostrar la información del libro
// libro.informarLibro();


// // 15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
// // con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
// // radio del círculo lo proporcionará el usuario.

// const circulo = {
//     radio: 0,
//     calcularArea: function() {
//         return Math.PI * this.radio * this.radio;
//     },
//     calcularPerimetro: function() {
//         return 2 * Math.PI * this.radio;
//     }
// };

// // Solicitar al usuario el radio del círculo
// circulo.radio = parseFloat(prompt("Ingrese el radio del círculo:"));

// // Calcular el área y el perímetro del círculo
// const area = circulo.calcularArea();
// const perimetro = circulo.calcularPerimetro();

// // Mostrar resultados
// console.log(`El área del círculo es: ${area.toFixed(2)}`);
// console.log(`El perímetro del círculo es: ${perimetro.toFixed(2)}`);


// // 16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// // y los muestre por pantalla.

// // Función para generar un valor aleatorio entre un rango dado
// const generarAleatorio = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const longitud = 5; // Longitud de los vectores
// const vector1 = [];
// const vector2 = [];

// // Rellenar los vectores con valores aleatorios
// for (let i = 0; i < longitud; i++) {
//     vector1.push(generarAleatorio(1, 100)); // Genera valores entre 1 y 100
//     vector2.push(generarAleatorio(101, 200)); // Genera valores entre 101 y 200
// }

// // Mostrar los vectores por pantalla
// console.log("Vector 1:", vector1);
// console.log("Vector 2:", vector2);


// // 17. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
// // resultado

// const array = [10, 20, 30, 40, 50, 60]; // Ejemplo de un array

// // Eliminar los dos últimos elementos del array
// array.splice(-2);

// // Mostrar el array resultante
// console.log("Array después de eliminar los dos últimos elementos:", array);


// // 18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// // a) Determinar cual de los dos elementos de texto es mayor
// var valores = [true, 5, false, "hola", "adios", 2];

// // Determinar cuál de los dos elementos de texto es mayor
// if (valores[3].length > valores[4].length) {
//     console.log("El elemento 'hola' es mayor que 'adios'.");
// } else if (valores[3].length < valores[4].length) {
//     console.log("El elemento 'adios' es mayor que 'hola'.");
// } else {
//     console.log("Ambos elementos tienen la misma longitud.");
// }

// // b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// // operadores necesarios para obtener un resultado true y otro resultado false

// const resultadoTrue = valores[0] || valores[2]; // true || false = true
// const resultadoFalse = valores[0] && valores[2]; // true && false = false

// console.log("Resultado true:", resultadoTrue);
// console.log("Resultado false:", resultadoFalse);

// // c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// // dos elementos numéricos
// const num1 = valores[1];
// const num2 = valores[5];

// const suma = num1 + num2;
// const resta = num1 - num2;
// const multiplicacion = num1 * num2;
// const division = num1 / num2;
// const modulo = num1 % num2;

// console.log("Suma:", suma);
// console.log("Resta:", resta);
// console.log("Multiplicación:", multiplicacion);
// console.log("División:", division);
// console.log("Módulo:", modulo);

// // 19. Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
// // de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
// // programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
// // Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
// // ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
// // 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
// // de 20.

// // Crear arreglo A de 50 números reales con valores aleatorios entre 0 y 100
// const arregloA = [];
// for (let i = 0; i < 50; i++) {
//     arregloA.push(Math.random() * 100);
// }

// console.log("Arreglo A original:");
// console.log(arregloA);

// // Ordenar arreglo A de menor a mayor
// arregloA.sort((a, b) => a - b);

// // Crear arreglo B de 20 elementos combinando los primeros 10 de A y 10 elementos 0.5
// const arregloB = arregloA.slice(0, 10).concat(new Array(10).fill(0.5));

// console.log("Arreglo A ordenado de menor a mayor:");
// console.log(arregloA);

// console.log("Arreglo B combinado:");
// console.log(arregloB);


// // 20. Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// // muestre el siguiente array [6, 9, 12, 15, 18].

// // Matriz original
// const matriz = [[3], [6], [9], [12], [15]];

// // Obtener el array resultante y mostrarlo
// const arrayResultado = matriz.map(subArray => subArray[0] + 3);

// console.log(arrayResultado);


// // 21. Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// // Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.

// const persona = {
//     nombre: "Juan",
//     edad: 30,
//     sexo: "H",
//     peso: 70,
//     altura: 175
// };

// // Obtener un array de las propiedades del objeto persona
// const propiedades = Object.keys(persona);

// console.log("Array de propiedades:", propiedades);


// // 22. Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
// // elección.

// const boton = document.getElementById("myButt");

// // Agregar un evento de clic al botón
// boton.addEventListener("click", function() {
//     alert("You just clicked on my button");
// });

// // 23. Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
// // amarillo, por ejemplo)

document.addEventListener("DOMContentLoaded", function() {
    const parrafo = document.getElementById("highlightTxt");
    const boton2 = document.getElementById("highlightBtn");
    boton2.addEventListener("click", function() {
        const palabras = parrafo.innerText.split(" ");
        const palabrasResaltadas = palabras.map(palabra => palabra.length > 8 ? `<span class="resaltado">${palabra}</span>` : palabra);
        parrafo.innerHTML = palabrasResaltadas.join(" ");
    });
});

// 24. Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
// circulo y lo muestre en el HTML.

const form = document.getElementById("radioForm");
const resultadoSpan = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    const diametro = parseFloat(document.getElementById("diametro").value);
    const radio = diametro / 2;

    resultadoSpan.textContent = radio.toFixed(2); // Mostrar el radio con dos decimales
});

// 25. Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
// siguiente formulario.

function getFormValues() {
    const nombre = document.getElementById("form1").name.value;
    const apellido = document.getElementById("form1").surname.value;

    alert("Name " + nombre + "\nSurname: " + apellido);
}