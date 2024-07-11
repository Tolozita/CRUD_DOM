const $formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const tipo = document.querySelector("#tipo");
const documento = document.querySelector("#documento");
const boton = document.querySelector("#botoncito")
const politicas = document.querySelector("#politicas")

const validar = (event) => {

    event.preventDefault();

       if(nombre.value === "")   
        {
        //    alert("El campo nombre es obligatorio"); 
           nombre.classList.add("error")
           nombre.focus();
        }

        if(apellido.value === "")   
            {
            //    alert("El campo apellido es obligatorio"); 
               apellido.classList.add("error")
               apellido.focus();
            }

        if(telefono.value === "")   
            {
                // alert("El campo telefono es obligatorio"); 
                telefono.classList.add("error")
                telefono.focus();
            }

        if(direccion.value === "")   
            {
                // alert("El campo direccion es obligatorio"); 
                direccion.classList.add("error")
                direccion.focus();
            }

        if(tipo.value === "")   
            {
                // alert("El campo Tipo de Documento es obligatorio"); 
                tipo.classList.add("error")
                tipo.focus();
            }

        if(documento.value === "")   
            {
                // alert("El campo Documento es obligatorio"); 
                documento.classList.add("error")
                documento.focus();
            }
}

const remover = (e, input) => {
    if(input.value != ""){
        input.classList.remove("error")
        input.classList.add("verify")
        console.log(nombre.value) 
    console.log(apellido.value) 
    console.log(telefono.value) 
    console.log(direccion.value) 
    console.log(tipo.value) 
    console.log(documento.value) 
    }
}



$formulario.addEventListener("submit",validar)
nombre.addEventListener("blur",(event) => {remover(event,nombre)});
apellido.addEventListener("blur",(event) => {remover(event,apellido)});
telefono.addEventListener("blur",(event) => {remover(event,telefono)});
direccion.addEventListener("blur",(event) => {remover(event,direccion)});
tipo.addEventListener("blur",(event) => {remover(event,tipo)});
documento.addEventListener("blur",(event) => {remover(event,documento)});

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

apellido.addEventListener()