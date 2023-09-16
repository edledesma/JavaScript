document.addEventListener("DOMContentLoaded", function () {
  getPrices();
});

async function getPrices() {
  try {
    const responseO = await fetch("https://dolarapi.com/v1/dolares/oficial");
    const responseB = await fetch("https://dolarapi.com/v1/dolares/blue");

    const dataO = await responseO.json();
    const dataB = await responseB.json();

    if (!responseO.ok || !responseB.ok) {
      throw new Error("API not responding");
    }

    const lastUpdate = document.querySelector("#last-update");
    const updateTime = new Date(dataO.fechaActualizacion)
    lastUpdate.innerHTML = `Updated: ${updateTime.getDay()}/${updateTime.getMonth()+1}/${updateTime.getFullYear()} - ${updateTime.getHours()}:${updateTime.getMinutes()}:${updateTime.getSeconds()} (GMT-3)`;

    const officialDollar = document.querySelector("#officialDollar");
    officialDollar.innerHTML = `<p>Official Dollar: <br> Buy: $${dataO.compra} <br> Sell: $${dataO.venta} </p>`;

    const bluelDollar = document.querySelector("#blueDollar");
    bluelDollar.innerHTML = `<p>Blue Dollar: <br> Buy: $${dataB.compra} <br> Sell: $${dataB.venta} </p>`;

    const userInput = document.querySelector("#userInput");
    const inputButton = document.querySelector("#inputButton");
    inputButton.addEventListener("click", function () {
      calcDol();
    });

    const userInputPesos = document.querySelector("#userInputPesos");
    const inputButtonP = document.querySelector("#inputButtonP");
    inputButtonP.addEventListener("click", function () {
      calcPesos();
    });

    function calcDol() {
      const inputValue = parseFloat(
        document.querySelector("#dollarInput").value
      );

      if (isNaN(inputValue) || inputValue < 0) {
        userInput.innerHTML = `<p>Please input a valid number</p>`;
      } else {
        userInput.innerHTML = `<p><img src="./img/dollar.svg" width="32px"><br> Oficial Dollar Buy: ARS $${parseFloat(
          inputValue * dataO.compra
        ).toFixed(2)}<br> Oficial Dollar Sell: ARS $${parseFloat(
          inputValue * dataO.venta
        ).toFixed(
          2
        )}<br><img src="./img/dollarB.svg" width="32px"><br>Blue Dollar Buy: ARS $${parseFloat(
          inputValue * dataB.compra
        ).toFixed(2)}<br> Blue Dollar Sell: ARS $${parseFloat(
          inputValue * dataB.venta
        ).toFixed(2)} </p>`;
      }
    }

    function calcPesos() {
      const inputValuePesos = parseFloat(
        document.querySelector("#pesosInput").value
      );
      if (isNaN(inputValuePesos) || inputValuePesos < 0) {
        userInputPesos.innerHTML = `<p>Please input a valid number</p>`;
      } else {
        userInputPesos.innerHTML = `<p><img src="./img/dollar.svg" width="32px"><br> Oficial Dollar: USD $${parseFloat(
          inputValuePesos / dataO.venta
        ).toFixed(
          2
        )}<br><img src="./img/dollarB.svg" width="32px"><br> Blue Dollar: USD $${parseFloat(
          inputValuePesos / dataB.venta
        ).toFixed(2)} </p>`;
      }
    }
  } catch (error) {
    officialDollar.innerHTML = `<p>API is not reachable at this time.</p>`;
    blueDollar.innerHTML = `<p>API is not reachable at this time.</p>`;
    console.error("API is not reachable.", error);
  }
}
