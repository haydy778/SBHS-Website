// Define a custom HTML element called 'header-component'
class Header extends HTMLElement { // Have my header html in one place so if i need to change something it changes on all my pages
    constructor() {
      super();
    }
  
    // When the custom element is connected to the DOM, execute this function
    connectedCallback() {
      this.innerHTML = `
      <header>
  </header>
  <header class="header-1">
      <div class="navbar-container">
      <div class="sbhs-logo-container">
      <img class="sbhs-logo" src="SBHS-Logo 3.png">
      </div>
        
          <ul class="navbar">
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
              <li class="navbar-item dropdown-menu-name ">
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

              <li class="navbar-item">
              <a class="navbar-a-item" href="chess.html">Chess</a>
              </li>

              <li class="navbar-item">
                  <a class="navbar-a-item" onclick="bottom()" href="#">Contact</a>
              </li>
          </ul>
      </div>
  </header>
  <header class="header-2">
      <div class="navbar-container">
  
          <ul class="navbar">
              <div class="logo">
                  <img class="logo-img" src="">
              </div>
              <div id="menu-bar">
  
                  <li class="navbar-item" id="menu-bar">
                      <a style="cursor: pointer; color: white;" onclick="openNav()" class="navbar-a-item">Menu <i class="fas fa-bars"></i></a>
                  </li>
  
                  <div class="menu-icon" onclick="this.classList.toggle('hover');Drop(0)">
                      <div class="menu-bar menu-bar1"></div>
                      <div class="menu-bar menu-bar2"></div>
                      <div class="menu-bar menu-bar3"></div>
                    </div>
              </div>
  
          </ul>
      </div>
      <div id="myNav" class="overlay">
  
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  
          <div class="overlay-content">
              <li class="navbar-item">
                  <a class="navbar-small-a-item" href="index.html">Home</a>
              </li>
              <li class="navbar-item">
                  <a class="navbar-small-a-item" href="debating.html">Debating</a>
              </li>
              <li class="navbar-item">
                  <a onclick="collapse()" style="cursor: pointer;" class="navbar-small-a-item explore">
                      Choir <i id="dropdown-arrow" style="align-self: center;" class="fas fa-chevron-right dropDown"></i>
                  </a>
              </li>
              <div id="navbar-collapse" class="navbar-collapse">
                  <li class="navbar-item">
                      <a class="navbar-small-a-item" href="choir.html">Momentum</a>
                  </li>
  
                  <li class="navbar-item">
                      <a class="navbar-small-a-item" href="dimensions.html">Dimensions</a>
                  </li>
              </div>
  
              <li class="navbar-item">
                  <a class="navbar-small-a-item" href="#">Unfinished</a>
              </li>
          </div>
  
      </div>
  
  </header>
      `;
    }
  }
  customElements.define('header-component', Header); // when i put header-element tag in html it will act as the Header 