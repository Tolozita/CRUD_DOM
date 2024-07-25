export const cantidad = (elemento) => {
    let valor = elemento.value.length === 10;
    if (valor){
        alert("correcto")
    }else{
        alert("Tu telefono debe tener menos de 10 numeros")
        elemento.classList.remove("verify")
        elemento.classList.add("error")
    }
}