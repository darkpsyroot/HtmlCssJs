window.customElements.define(
  "atributos-propiedades",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <h1>Inspecciona la consola</h1>
      `;
      this._nombre = "Francisco Alonso Reyes";
    }
    set saludo(saludo) {
      console.log("Estamos modificando el valor de _nombre");
      this._nombre = saludo;
    }
    get saludo() {
      return this._nombre;
    }
  }
);
