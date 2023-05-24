function errorMessage(){
    document.querySelector("main").remove()
    const body = document.querySelector("body")

    const messageContainer = document.createElement("div")
    messageContainer.classList.add("error-container")
    const icon = document.createElement("object")
    icon.type = "image/svg+xml"
    icon.data = "../public/assets/error.svg"
    const message = document.createElement("h1")
    message.classList.add("error-message")
    message.textContent = "Ooops! Wires were crossed. Try again later"
    const back = document.createElement("a")
    back.href = "index.html"
    back.classList.add("error-link")
    back.textContent = "Back to Basecamp"
    messageContainer.append(icon, message, back)
    body.append(messageContainer)

}


export default errorMessage