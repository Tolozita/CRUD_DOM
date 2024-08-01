const dom = document;
const is_valid = (event, element) => {
    event.preventDefault();
    const elementos = document.querySelectorAll(element)
    let bandera = true;
    elementos.forEach(element => {
        if (element.value === "") {
            element.classList.add('error');
            bandera = false
        }
    });
    return bandera;
}

export default is_valid;