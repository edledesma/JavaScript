let footerCONT = `
<div id="footer" class="bg-white">
    <p>©EDLedesma - Thanks for reading - <a href="https://www.github.com/EDLedesma"><img src="img/github.svg" width="15px" alt=""/> GitHub</a> <a href="https://www.LinkedIn.com/in/edledesma"><img src="img/linkeding.svg" height="25px"/>LinkedIn</a>
</p>
</div>
`;

document.querySelector(".main-footer").innerHTML = footerCONT;

let headerCONT = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html"
    ><img height="50px" src="img/javascript.svg" alt="JavaScript Logo"
  /></a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="calculator.html">🧮 Calculator</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="currency.html">💵 Currency</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="timer.html">⏳ Timer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pomodoro.html">🍅 Pomodoro</a>
      </li>
      </ul>
  </div>
</div>
</nav>
<h1 class="card-title">JS Collection</h1>
`;

document.querySelector(".main-header").innerHTML = headerCONT;


