let headerCONT = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="/"
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
  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label id="luna-icon" class="form-check-label" for="flexSwitchCheckDefault">🌙</label>
</div>
</div>
</nav>
<h1 id="title-h1" class="card-title">JS Collection</h1>
`;

document.querySelector(".main-header").innerHTML = headerCONT;

let footerCONT = `
<div id="footer">
    <p>©EDLedesma - Thanks for reading - <a href="https://www.github.com/EDLedesma"><img src="img/github.svg" width="20px" alt=""/>GitHub</a> <a href="https://www.LinkedIn.com/in/edledesma"><img src="img/linkeding.svg" width="20px"/>LinkedIn</a>
</p>
</div>
`;

document.querySelector(".main-footer").innerHTML = footerCONT;

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
          link.addEventListener('click', function(e) {
            e.preventDefault();
      });
      } else {
          link.classList.remove('active');
      }
  });
});

// BOOTSTRAP DARK MODE TOGGLE - Code from https://getbootstrap.com/docs/5.3/customize/color-modes/#javascript
    (() => {
      'use strict'

      const getStoredTheme = () => localStorage.getItem('theme')
      const setStoredTheme = theme => localStorage.setItem('theme', theme)

      const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
          return storedTheme
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }

      const setTheme = theme => {
        if (theme === 'auto') {
          document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
        } else {
          document.documentElement.setAttribute('data-bs-theme', theme)
        }
      }

      setTheme(getPreferredTheme())

      const showActiveTheme = (theme) => {
        const checkbox = document.querySelector('#flexSwitchCheckDefault')
        const lunaIcon = document.querySelector('#luna-icon')

        if (!checkbox || !lunaIcon) {
          return
        }

        checkbox.checked = theme === 'dark'
        lunaIcon.textContent = theme === 'dark' ? '🌙' : '☀️'
      }

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
          setTheme(getPreferredTheme())
        }
      })

      window.addEventListener('DOMContentLoaded', () => {
        const preferredTheme = getPreferredTheme()
        showActiveTheme(preferredTheme)

        const checkbox = document.querySelector('#flexSwitchCheckDefault')
        checkbox.addEventListener('change', () => {
          const theme = checkbox.checked ? 'dark' : 'light'
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme)
        })
      })
    })()
