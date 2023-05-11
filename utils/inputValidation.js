import validateInput from "../utils/validateInput.js";
function inputValidation(...args){
    args.forEach(input =>{
        input.addEventListener("input", validateInput)
    })
}

export default inputValidation