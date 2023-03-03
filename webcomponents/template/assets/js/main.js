//busqueda por 'id' del template
const template = document.querySelector('#template');
//Clonar template
const templateClone = document.importNode(template.content, true);
//inyectar en el dom
document.body.appendChild(templateClone);