export function letras(event, elemento) {
    let letras = /^[a-zA-ZÀ-ÿ/s]*$/;
    if (letras.test(event.key))
        {
        console.log("correcto")
        } else{
            event.preventDefault()
        }
}