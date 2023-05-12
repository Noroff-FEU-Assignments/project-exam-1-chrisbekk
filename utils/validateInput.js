function validateInput(event){
    const minreq = event.target.dataset.minreq
    const maxreq = event.target.dataset.maxreq
    if(event.target.value.length < minreq || event.target.value.length > maxreq){
        event.target.setAttribute("data-valid", "false")
    } 
    else{
        event.target.setAttribute("data-valid", "true")
    }
}

export default validateInput