window.customElements.define(
    "shadow-dom",
    class extends HTMLElement {
      constructor() {
        super();

        //obtener el contenido del template
        let content = document.querySelector("#shadowdom").content;

        //instaciar desde la palabra reservada this al elemento que se està generando
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(document.importNode(content, true));

      }
    }
  );