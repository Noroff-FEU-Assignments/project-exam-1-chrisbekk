function validateForm(...args){
    if(args.every(input => input.dataset.valid)){
        return true
    }
}

export default validateForm