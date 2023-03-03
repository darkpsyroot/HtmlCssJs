window.customElements.define(
  "componente-import",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const template = `
        <h1>Hola Mundo</h1>
        <style>
            h1{
                color: blue;
            }
        </style>
        `;
      this.shadowRoot.innerHTML = template;
    }
  }
);
