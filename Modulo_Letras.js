export function letras(event, elemento) {
    let letras = /^[a-zA-ZÀ-y/s]*$/;
    if (letras.test(elemento.value))
        {
        console.log("correcto")
        } else{
            // event.preventDefault()
        }
}