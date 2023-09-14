async function getPrices() {
  const response = await fetch(
    `https://www.dolarsi.com/api/api.php?type=valoresprincipales`
  );
  var data = await response.json();

  const userInput = document.querySelector('#userInput');
  const userInputPesos = document.querySelector('#userInputPesos');

  const dolOfiB = data[0].casa.compra.replace(",",".");
  const dolOfiS = data[0].casa.venta.replace(",",".");
  const dolBlueB = data[1].casa.compra.replace(",",".");
  const dolBlueS = data[1].casa.venta.replace(",",".");

  const officialDollar = document.querySelector("#officialDollar");
  officialDollar.innerHTML = `<p>Official Dollar: <br> Buy: $${dolOfiB} <br> Sell: $${dolOfiS} </p>`;

  const bluelDollar = document.querySelector("#blueDollar");
  bluelDollar.innerHTML = `<p>Blue Dollar: <br> Buy: $${dolBlueB} <br> Sell: $${dolBlueS} </p>`;

  console.log(dolOfiB)

  const inputButton = document.querySelector('#inputButton');
  inputButton.addEventListener("click", function () {
    calcDol(dolOfiB,dolOfiS,dolBlueB,dolBlueS);
  })

  const inputButtonP = document.querySelector('#inputButtonP');
  inputButtonP.addEventListener("click", function () {
    calcPesos(dolOfiS,dolBlueS);
  })
}

function calcDol(dolOfiB,dolOfiS,dolBlueB,dolBlueS) {
  const inputValue = parseFloat((document.querySelector('#dollarInput').value));

  userInput.innerHTML = `<p><img src="./img/dollar.svg" width="32px"><br> Oficial Dollar Buy: ARS $${inputValue*dolOfiB}<br> Oficial Dollar Sell: ARS $${inputValue*dolOfiS}<br><img src="./img/dollarB.svg" width="32px"><br>Blue Dollar Buy: ARS $${inputValue*dolBlueB}<br> Blue Dollar Sell: ARS $${inputValue*dolBlueS} </p>`;
}

function calcPesos(dolOfiS,dolBlueS) {
  const inputValuePesos = parseFloat((document.querySelector('#pesosInput').value));
  const ofiPesos = parseFloat(inputValuePesos/dolOfiS).toFixed(2);
  const bluePesos = parseFloat(inputValuePesos/dolBlueS).toFixed(2);
  userInputPesos.innerHTML = `<p><img src="./img/dollar.svg" width="32px"><br> Oficial Dollar: USD $${ofiPesos}<br><img src="./img/dollarB.svg" width="32px"><br> Blue Dollar: USD $${bluePesos} </p>`;
}
