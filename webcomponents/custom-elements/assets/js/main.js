class Boton extends HTMLButtonElement{
    constructor(){  
        super();
        this.addEventListener('click', function(){
            alert('El componente boton extiende de la interfaz HTMLButtonElement')
        });
    }
}
window.customElements.define('componente-boton', Boton,{extends: 'button'});