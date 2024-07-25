import gmail from "./Modulo_Correo.js";
import { EsNumero } from "./Modulo_Numeros.js";
import { letras } from "./Modulo_Letras.js";
import { remover } from "./Modulo_Remover.js";
import {cantidad} from "./Modulo_Cantidad.js"


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

const validar = (event) => {

    event.preventDefault();

    const requeridos = document.querySelectorAll("form input,select[required]")
    console.log(requeridos)


      //  if(nombre.value === "" || nombre.value.length < 3)   
      //   {
      //      nombre.classList.add("error")
      //      nombre.focus();
      //   }

      //   if(apellido.value === "")   
      //       {
      //          apellido.classList.add("error")
      //          apellido.focus();
      //       }

      //   if(telefono.value === "")   
      //       {
      //           telefono.classList.add("error")
      //           telefono.focus();
      //       }

      //   if(direccion.value === "")   
      //       {
      //           direccion.classList.add("error")
      //           direccion.focus();
      //       }

      //   if(tipo.value === "")   
      //       {
      //           tipo.classList.add("error")
      //           tipo.focus();
      //       }

      //   if(documento.value === "")   
      //       {
      //           documento.classList.add("error")
      //           documento.focus();
      //       }

      //   if(correo.value === "")   
      //       {
      //         correo.classList.add("error")
      //         correo.focus();
      //       }
}

// const remover = (e, input) => {
//     if(input.value != ""){
//         input.classList.remove("error")
//         input.classList.add("verify")
//     }
// }




addEventListener("DOMContentLoaded",(event)=>{
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


// function EsNumero(event) {
//     if (!(event.keyCode >= 48 && event.keyCode <= 57)){event.preventDefault();}
// }

// function letras(event, elemento) {
//     let letras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
//     if (letras.test(elemento.value))
//         {
//         console.log("correcto")
//         } else{
//         console.log("incorrecto")
//         }
// }

// function gmail (event, elemento) {
//   let ex_correo = /^[\w-._]+@[\w-._]+(\.[a-zA-Z]{2,4}){1,2}$/;
  
//   // /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

//   if(ex_correo.test(elemento.value)){
//     correo.classList.add('verify');
//     correo.classList.remove('error');
//   }else{
//     correo.classList.remove('verify');
//     correo.classList.add('error');
//   }

//   if(elemento.value === ""){
//     correo.classList.remove('verify');
//     correo.classList.add('error');
//   }

// }



  politicas.addEventListener("change", function(e){
    if(e.target.checked){
      boton.removeAttribute("disabled")
    }
  });



$formulario.addEventListener("submit",validar)
nombre.addEventListener("blur",(event) => {remover(event,nombre)});
apellido.addEventListener("blur",(event) => {remover(event,apellido)});
telefono.addEventListener("blur",(event) => {remover(event,telefono)});
direccion.addEventListener("blur",(event) => {remover(event,direccion)});
tipo.addEventListener("blur",(event) => {remover(event,tipo)});
documento.addEventListener("blur",(event) => {remover(event,documento)});
correo.addEventListener("blur",(event) => {remover(event,correo)});
correo.addEventListener("blur",(event) => {gmail(event,correo)});


  nombre.addEventListener('keypress',(event)=>{
    letras(event,nombre)
  })

  telefono.addEventListener("blur",()=>{
    cantidad(telefono)
  })

  apellido.addEventListener('keypress',(event)=>{
    letras(event,apellido)
  })

  // correo.addEventListener('keypress',(event) => {
  //   gmail(event,correo)
  // })

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
