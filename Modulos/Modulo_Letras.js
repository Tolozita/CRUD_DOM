const dom = document;

const is_letras = (event) => {
    let letras = /^[a-zA-ZÀ-ÿ\s]*$/;
    if(!letras.test(event.key)) event.preventDefault();
}

export default is_letras;