import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
document.querySelector('#header').innerHTML = `
<header>
  <div class="navbar">
    <div class="logo">
     <a><img src="" alt="NB"></a>
      <span>Neos Belleza</span>
    </div>

    <div class="nav-links">
        <a href="" class="sign-in">Ingresar</a>
        <a href="" class="sign-up">Registrarse</a>
    </div>
  </div>
</header>
`

document.querySelector('#slogan').innerHTML = `
    <div class="slogand">
 <img src="" alt=" class="slogan-img">
        <div class="slogan-text">
          <h2>SLOGANNN</h2>
          <p>SLOGANNN</p>
  </div>
`

document.querySelector('#footer').innerHTML = `
  <div class="redessociales">
  <p>Neos Belleza</p>
  <p>+ 57 311 3555709</p>
  <p>neosbellezacomercializadora@gmail.com</p>
  </div> 
`
