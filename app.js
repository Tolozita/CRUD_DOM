import gmail from "./Modulos/Modulo_Correo.js";
import { EsNumero } from "./Modulos/Modulo_Numeros.js";
import is_letras from "./Modulos/Modulo_Letras.js";
import { remover } from "./Modulos/Modulo_Remover.js";
import {cantidad} from "./Modulos/Modulo_Cantidad.js"
import is_valid from "./Modulos/Modulo_is-valid.js";
import solicitud from "./Modulos/ajax.js";


const $formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const tipo = document.querySelector("#tipo");
const documento = document.querySelector("#documento");
const boton = document.querySelector("#botoncito")
const politicas = document.querySelector("#politicas")
const correo = document.querySelector("#email")
const fragmento = document.createDocumentFragment();
const tbUsers = document.querySelector("#tp_users").content;
const tbody = document.querySelector("tbody")



const listar = async () => {
const data = await solicitud("users")
console.log(data)
data.forEach(element => {
  console.log(tbUsers.querySelector(".nombre").textContent = element.first_name)
  console.log(tbUsers.querySelector(".apellido").textContent = element.last_name)
  console.log(tbUsers.querySelector(".correo").textContent = element.email)
  console.log(tbUsers.querySelector(".telefono").textContent = element.phone)
  console.log(tbUsers.querySelector(".direccion").textContent = element.adress)
  console.log(tbUsers.querySelector(".tipo").textContent = element.T_ID)
  console.log(tbUsers.querySelector(".documento").textContent = element.id)
  console.log("------------------------------------------------")


  const clone = document.importNode(tbUsers, true)
  fragmento.appendChild(clone)
})
tbody.appendChild(fragmento)
}

const createRow = (data) =>{

 const tr = tbody.insertRow(-1)
 
 const tdNombre = tr.insertCell(0)
 const tdApellido = tr.insertCell(1)
 const tdCorreo = tr.insertCell(2)
 const tdTelefono = tr.insertCell(3)
 const tdDireccion = tr.insertCell(4)
 const tdTipo_Doc = tr.insertCell(5)
 const tdDocumento = tr.insertCell(6)

 tdNombre.textContent = data.first_name;
 tdApellido.textContent = data.last_name;
 tdCorreo.textContent = data.email;
 tdTelefono.textContent = data.phone;
 tdDireccion.textContent = data.adress;
 tdTipo_Doc.textContent = data.T_ID;
 tdDocumento.textContent = data.id;




}

const t_documentos = () => {
  solicitud("documentos")
  .then((data) => {
    let option = document.createElement("option")
    option.textContent = "Seleccione....";
    option.value = "0"
    fragmento.appendChild(option);
    data.forEach(element =>{
    let option = document.createElement("option")
    option.value = element.first_name;
    option.textContent = element.first_name;
    fragmento.appendChild(option);
  });
  tipo.appendChild(fragmento);
  });
}

addEventListener("DOMContentLoaded",(event)=>{
  t_documentos();
  listar();
if (!politicas.checked) {
      boton.setAttribute("disabled","");
      console.log(boton)
    }
  });


politicas.addEventListener("change", function(e){
  if(e.target.checked){
    boton.removeAttribute("disabled")
  }else boton.setAttribute("disabled","")
});


  $formulario.addEventListener("submit",(event) => {
    let response = is_valid(event, "form [required]")
    //Capturar todos los atributos
    const data = {
      first_name: nombre.value,
      last_name: apellido.value,
      phone: telefono.value,
      adress: direccion.value,
      T_ID: tipo.value,
      id: documento.value,
      email: correo.value
    }

    if(response){
      alert("Datos Guardados")
      fetch(`http://localhost:3000/users`,{
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      nombre.value = "";
      apellido.value = "";
      correo.value = "";
      telefono.value = "";
      direccion.value = "";
      tipo.selectedIndex = "0";
      politicas.checked = false;
      documento.value = "";
      boton.setAttribute("disabled","")

      createRow(json)
    })
    }
   })


nombre.addEventListener("blur",(event) => {remover(event,nombre)});
apellido.addEventListener("blur",(event) => {remover(event,apellido)});
telefono.addEventListener("blur",(event) => {remover(event,telefono)});
direccion.addEventListener("blur",(event) => {remover(event,direccion)});
tipo.addEventListener("blur",(event) => {remover(event,tipo)});
documento.addEventListener("blur",(event) => {remover(event,documento)});
correo.addEventListener("blur",(event) => {remover(event,correo)});
correo.addEventListener("blur",(event) => {gmail(event,correo)});


  nombre.addEventListener('keypress',(event)=>{
    is_letras(event,nombre)
  })

  telefono.addEventListener("blur",()=>{
    cantidad(telefono)
  })

  apellido.addEventListener('keypress',(event)=>{
    is_letras(event,apellido)
  })

  telefono.addEventListener('keypress',EsNumero)
  documento.addEventListener('keypress',EsNumero)



nombre.addEventListener('keyup', function() {
    if (nombre.value === "") {
      nombre.classList.remove('verify');
      nombre.classList.add('error');
    } else {
      nombre.classList.remove('error');
      nombre.classList.add('verify');
    }
  });


  apellido.addEventListener('keyup', function() {
    if (apellido.value === "") {
        apellido.classList.remove('verify');
        apellido.classList.add('error');
    } else {
        apellido.classList.remove('error');
        apellido.classList.add('verify');
    }
  });


  telefono.addEventListener('keyup', function() {
    if (telefono.value === "") {
        telefono.classList.remove('verify');
        telefono.classList.add('error');
    } else {
        telefono.classList.remove('error');
        telefono.classList.add('verify');
    }
  });



  direccion.addEventListener('keyup', function() {
    if (direccion.value === "") {
        direccion.classList.remove('verify');
        direccion.classList.add('error');
    } else {
        direccion.classList.remove('error');
        direccion.classList.add('verify');
    }
  });


  tipo.addEventListener('change', function() {
    if (tipo.value === "") {
        tipo.classList.remove('verify');
        tipo.classList.add('error');
    } else {
        tipo.classList.remove('error');
        tipo.classList.add('verify');
    }
  });


  documento.addEventListener('keyup', function() {
    if (documento.value === "") {
        documento.classList.remove('verify');
        documento.classList.add('error');
    } else {
        documento.classList.remove('error');
        documento.classList.add('verify');
    }
  });



  correo.addEventListener('keyup', function() {
    if (correo.value === "" ) {
      correo.classList.remove('verify');
      correo.classList.add('error');
    }
  });
