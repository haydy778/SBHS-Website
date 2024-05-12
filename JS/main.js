// Define a custom HTML element called 'header-component'
class Header extends HTMLElement { // Have my header html in one place so if i need to change something it changes on all my pages
    constructor() {
      super();
    }
  
    // When the custom element is connected to the DOM, execute this function
    connectedCallback() {
      this.innerHTML = `
      <header></header>
      `;
    }
  }
  
  customElements.define('header-component', Header); // when i put header-element tag in html it will act as the Header 