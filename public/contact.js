import navBar from "../components/navBar.js"

const formElement = document.querySelector(".form")
const validElement = document.querySelector(".success-container")
function main(){
    navBar()
    inputHandler()

}

main()

function inputHandler(){
    const inputs = document.querySelectorAll("#name, #subject")
    const mail = document.querySelector("#email")
    console.log(mail)
    const textarea = document.querySelector("textarea")
    const button = document.querySelector("button")
    inputs.forEach(input =>{
        input.addEventListener("input", (e)=>{
            if(e.target.value.length < e.target.minLength){
                e.target.parentElement.querySelector("i").style.color = "#D8737F"
                e.target.addEventListener("focusout", (e)=> e.target.parentElement.querySelector("i").style.color = "#D8737F")
                e.target.dataset.valid = false
            }

            
            else{
                e.target.parentElement.querySelector("i").style.color = "#009883"
                e.target.addEventListener("focusout", (e)=>{e.target.parentElement.querySelector("i").style.color = "#009883"})
                e.target.dataset.valid = true
            }
        })
    })


    textarea.addEventListener("input", (e)=>{
        if(e.target.value.length < e.target.minLength){
            e.target.style.border = "1px solid #D8737F"
            e.target.addEventListener("focusout", (e)=> e.target.style.border = "1px solid #D8737F")
            e.target.dataset.valid = false
            
        }

        
        else{
            e.target.style.color = "1px solid #009883"
            e.target.addEventListener("focusout", (e)=>{e.target.style.border = "1px solid #009883"})
            e.target.dataset.valid = true
        }
    })

    mail.addEventListener("change", (e)=>{
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        console.log(e.target)
        if(e.target.value.match(validRegex)){
            e.target.parentElement.querySelector("i").style.color = "#009883"
            e.target.addEventListener("focusout", (e)=>{e.target.parentElement.querySelector("i").style.color = "#009883"})
            e.target.dataset.valid = true
        }
    
        
        else{
            e.target.parentElement.querySelector("i").style.color = "#D8737F"
            e.target.addEventListener("focusout", (e)=> e.target.parentElement.querySelector("i").style.color = "#D8737F")
            e.target.dataset.valid = false
    
        }
    })

    button.addEventListener("click", (e)=> {
        e.preventDefault()
        validateForm()
        
    })
}

function validateForm(){
    const form = document.querySelector("form")
    console.log(form.querySelectorAll("input, textarea"))
    const inputNode = form.querySelectorAll("input, textarea")
    const arr = []
    inputNode.forEach(input =>{
        arr.push(input.dataset.valid)
        console.log(input.dataset.valid)
        
        
    })
    if(arr.every(el => el == "true")){
        formElement.style.display = "none"
        validElement.style.display = "flex"
        
    }
    else{
        alert("Please Fill Out All Form Inputs")
       
    }
}

