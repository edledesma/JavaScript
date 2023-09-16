document.addEventListener("DOMContentLoaded", function () {
  getPrices();
});

async function getPrices() {
  try{
  const responseO = await fetch("https://dolarapi.com/v1/dolares/oficial");
  const responseB = await fetch("https://dolarapi.com/v1/dolares/blue");

  const dataO = await responseO.json();
  const dataB = await responseB.json();

  console.log(dataO)

  const userInput = document.querySelector("#userInput");
  const userInputPesos = document.querySelector("#userInputPesos");
  const officialDollar = document.querySelector("#officialDollar");
  const lastUpdate= document.querySelector("#last-update");

  timeUpdate = `Updated: `+(dataO.fechaActualizacion.replace('T',' / ').slice(0, -5));
  lastUpdate.innerHTML = timeUpdate;

  officialDollar.innerHTML = `<p>Official Dollar: <br> Buy: $${dataO.compra} <br> Sell: $${dataO.venta} </p>`;
  const bluelDollar = document.querySelector("#blueDollar");
  bluelDollar.innerHTML = `<p>Blue Dollar: <br> Buy: $${dataB.compra} <br> Sell: $${dataB.venta} </p>`;

  const inputButton = document.querySelector("#inputButton");
  inputButton.addEventListener("click", function () {
    calcDol();
  });
  const inputButtonP = document.querySelector("#inputButtonP");
  inputButtonP.addEventListener("click", function () {
    calcPesos();
  });

  function calcDol() {
    const inputValue = parseFloat(document.querySelector("#dollarInput").value);
    userInput.innerHTML = `<p><img src="./img/dollar.svg" width="32px"><br> Oficial Dollar Buy: ARS $${
      inputValue * dataO.compra
    }<br> Oficial Dollar Sell: ARS $${
      inputValue * dataO.venta
    }<br><img src="./img/dollarB.svg" width="32px"><br>Blue Dollar Buy: ARS $${
      inputValue * dataB.compra
    }<br> Blue Dollar Sell: ARS $${inputValue * dataB.venta} </p>`;
  }

  function calcPesos() {
    const inputValuePesos = parseFloat(
      document.querySelector("#pesosInput").value
    );
    const ofiPesos = parseFloat(inputValuePesos / dataO.venta).toFixed(2);
    const bluePesos = parseFloat(inputValuePesos / dataB.venta).toFixed(2);
    userInputPesos.innerHTML = `<p><img src="./img/dollar.svg" width="32px"><br> Oficial Dollar: USD $${ofiPesos}<br><img src="./img/dollarB.svg" width="32px"><br> Blue Dollar: USD $${bluePesos} </p>`;
  }
}catch (error) {
  officialDollar.innerHTML = `<p>API is not reachable at this time.</p>`;
  blueDollar.innerHTML = `<p>API is not reachable at this time.</p>`;
  console.error("API is not reachable.", error);
}
}
