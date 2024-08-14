import is_letras from "./Modulos/Modulo_Letras.js";
import is_valid from "./Modulos/Modulo_is-valid.js";


const $formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const boton = document.querySelector("button");

nombre.addEventListener("keypress", is_letras)

$formulario.addEventListener("submit",(event) => {
    let response = is_valid(event, "form [required]")
    const data = {
        type_id: nombre.value
    }
    if (response){
      fetch(`http://localhost:3000/documentos`,{
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        },
    })
    .then((response)=> response.json())
    .then((json) => {
      nombre.value = "";
      boton.removeAtributte("disabled");
    });

    }
  });