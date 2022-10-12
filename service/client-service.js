/* abrir http (metodo,url) 
CRUD   - Metodos http
CREATE - POST
READ   - GET 
UPDATE - PUT/PATCH
DELETE - DELETE

elimine en lista cliente 
<tr>
            <td class="td" data-td>Gabriela</td>
            <td>gabriela@alura.com</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          </tr>
*/


    // const promise = new Promise((resolve,reject) => {
    //     const http = new XMLHttpRequest();

    //     http.open('GET','http://localhost:3000/perfil');

    //     http.send();

    //     http.onload = () => {
    //         const response = JSON.parse(http.response);
    //         if(http.status >= 400){
    //             reject(response);
    //         }else{
    //             resolve(response);
    //         }
    //     }
    // });
    // return promise;

//fetch API
const listaClientes = () => fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json());

const crearClientes = (nombre, email) => {
    return fetch('http://localhost:3000/perfil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre,email,id: uuid.v4()})
    });
};

const eliminarCliente = (id) =>{
    console.log(id);
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'DELETE'
    });
};

const detalleCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
};

const actualizarCliente = (nombre,email,id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre,email,id})
    })
    .then(respuesta => respuesta)
    .catch(error => consola.log(error));
};

export const clientServices = {
    listaClientes,
    crearClientes,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};







