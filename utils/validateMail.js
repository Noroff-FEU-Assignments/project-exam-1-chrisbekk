function validateMail(input){
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(input.value)
    if(input.value.match(validRegex)){
        input.parentElement.querySelector("i").style.color = "#89DFCA"
        input.addEventListener("focusout", (e)=>{e.target.parentElement.querySelector("i").style.color = "#89DFCA"})
        input.dataset.valid = true
    }

    
    else{
        input.parentElement.querySelector("i").style.color = "#D8737F"
        input.addEventListener("focusout", (e)=> e.target.parentElement.querySelector("i").style.color = "#D8737F")
        input.dataset.valid = false

    }
}

export default validateMail