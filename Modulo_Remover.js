export const remover = (e, input) => {
    if(input.value != ""){
        input.classList.remove("error")
        input.classList.add("verify")
    }
}
