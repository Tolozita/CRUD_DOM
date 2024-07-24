const gmail = (evento,elemento) => {
    let ex_correo = /^[\w-._]+@[\w-._]+(\.[a-zA-Z]{2,4}){1,2}$/;
    
    if(ex_correo.test(elemento.value)){
      elemento.classList.add('verify');
      elemento.classList.remove('error');
    }else{
      elemento.classList.remove('verify');
      elemento.classList.add('error');
    }
  
    if(elemento.value === ""){
        elemento.classList.remove('verify');
        elemento.classList.add('error');
    }
  }

  export default gmail;