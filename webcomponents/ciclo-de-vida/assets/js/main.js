//Ciclo de vida de los web components
//1. creación
//1.1 definir constructor
window.customElements.define(
  "ciclo-vida",
  class extends HTMLElement {
    //El constructor crea el objeto
    constructor() {
      //1.1
      super();
      this.attachShadow({ mode: "open" });
    }
    //ConnectedCallback puede interactuar con atributos
    //1.2 connectedCallback
    connectedCallback() {
      console.log(document.body.querySelector("ciclo-vida"));
      console.log("estamos en connectedCallback");
      //ojo con estas comillas ``
      this.shadowRoot.innerHTML = `<h1>${this.getAttribute("titulo")}</h1>`;
    }
    //2. métodos de actualización
    static get observedAttributes() {
      return ["titulo"];
    }
    //definir lo que queremos hacer cuando los atributos cambien
    attributeChangedCallback(name, old, now) {
      console.log(
        "el nombre del atributo es " +
          name +
          "Valor anterior: " +
          old +
          "valor nuevo: " +
          now
      );
      console.log(document.body.querySelector("ciclo-vida"));
    }
    disconnectedCallback() {
      console.log("me voy a desconectar", this);
    }
  }
);

setTimeout(() => {
  let miComp = document.body.querySelector("ciclo-vida");
  document.body.removeChild(miComp);
}, 5000);
