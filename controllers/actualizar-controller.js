import { clientServices } from "../service/client-service.js";

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if(id===null){
        window.location.href = '../screens/error.html'
    }

    const name = document.querySelector('[data-nombre]');
    const correo = document.querySelector('[data-email]');
    try{
        const perfil = await clientServices.detalleCliente(id);
        if(perfil.nombre && perfil.email){
            name.value = perfil.nombre;
            correo.value = perfil.email;
        }
        else{
            throw new Error();
        }
        
    }catch(error){
        window.location.href = '../screens/error.html';
    }
    

}

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const name = document.querySelector('[data-nombre]').value;
    const correo = document.querySelector('[data-email]').value;

    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    clientServices.actualizarCliente(name,correo,id).then(()=> window.location.href = '../screens/edicion_concluida.html');

})


obtenerInformacion();