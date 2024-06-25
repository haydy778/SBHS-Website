// Define a custom HTML element called 'header-component'
class Header extends HTMLElement { // Have my header html in one place so if i need to change something it changes on all my pages
    constructor() {
        super();
    }

    // When the custom element is connected to the DOM, execute this function
    connectedCallback() {
        this.innerHTML = `
  <header class="header-1">
      <div class="navbar-container" id="navbarContainer">
      <div class="sbhs-logo-container">
      <img class="sbhs-logo" src="SBHS-Logo 3.png">
      </div>
        
          <ul class="navbar">
              <li class="navbar-item header1">
                  <a class="navbar-a-item" href="index.html">Home</a>
              </li>
              <li class="navbar-item header1">
              <a class="navbar-a-item" href="rugby.html">Rugby</a>
              </li>
              <li class="navbar-item header1">
                  <a class="navbar-a-item" href="debating.html">Debating</a>
              </li>
              <li class="navbar-item header1">
                  <a class="navbar-a-item" href="hockey.html">Hockey</a>
              </li>
              <li class="navbar-item header1 dropdown-menu-name ">
                  <a class="navbar-a-item dropdown-menu-name-a" href="choir.html">
                      Choir
                  </a>
                  <div class="dropdown-menu-header">
                      <ul class="header-menu__dropdown-nav">
                          <li>
                              <a class="dropdown-item" href="choir.html">
                                  Momentum
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item" href="choir.html">
                                  Dimensions
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item" href="choir.html">
                                  Unison
                              </a>
                          </li>
                      </ul>
                  </div>
              </li>

              <li class="navbar-item header1">
              <a class="navbar-a-item" href="chess.html">Chess</a>
              </li>

              <li class="navbar-item header1">
                  <a class="navbar-a-item" onclick="bottom()">Contact</a>
              </li>
              <li class="navbar-item header1 menu">
                  <a class="navbar-a-item" onclick="openNav()">Menu <i class="fa-solid fa-bars"></i></a>
              </li>
          </ul>
      </div>
  </header>
  <header class="header-2">
      <header class="collapsed-header" id="collapsedHeader">
      <div class="two">
        <ul class="navbar two" id="navbar">
        <li class="navbar-item">
        <a class="navbar-a-item" href="index.html">Home</a>
    </li>
    <li class="navbar-item">
    <a class="navbar-a-item" href="rugby.html">Rugby</a>
    </li>
    <li class="navbar-item">
        <a class="navbar-a-item" href="debating.html">Debating</a>
    </li>
    <li class="navbar-item">
        <a class="navbar-a-item" href="hockey.html">Hockey</a>
    </li>
    <li class="navbar-item">
        <a class="navbar-a-item" href="choir.html">Choir</a>
    </li>
    <li class="navbar-item">
        <a class="navbar-a-item" href="chess.html">Chess</a>
    </li>
        </ul>
      </div>
    </header>
  
  </header>
      `;
    }
}
customElements.define('header-component', Header); // when i put header-element tag in html it will act as the Header 

function bottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function openNav(){
    let collapsedHeader = document.getElementById("collapsedHeader");
    let navbarContainer = document.getElementById("navbarContainer");


    if(collapsedHeader.style.transform == 'translateX(0%)'){ // allow animation my using translateX function
        collapsedHeader.style.transform = 'translateX(200%)' // slide in menu
        navbarContainer.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
      }else{
        collapsedHeader.style.transform = 'translateX(0%)' // slide out menu
        navbarContainer.style.boxShadow = 'none'
      }
}