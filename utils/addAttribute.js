export default function addAHighlight(element){
    const parentElement = document.querySelector(`.${element}`)
    const node = parentElement.childNodes
    console.log(node)
    for(let i = 0; i < node.length; i++){
        node[i].dataset.highlight = true
    }
}

