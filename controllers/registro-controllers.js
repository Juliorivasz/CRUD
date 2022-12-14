import { clientServices } from "../service/client-service.js";
const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email').value;
    clientServices
    .crearClientes(nombre,email)
    .then(() => {window.location.href = '/CRUD/screens/registro_completado.html'})
    .catch((error)=>{ console.log(error)});
});