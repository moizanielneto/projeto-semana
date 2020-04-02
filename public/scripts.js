function checkfields(event){

    const valuechecar = [
        "image",
        "title",
        "category",
        "description",
        "link"
    ]
    const isEmpty = valuechecar.find(function(value){
        const checarif = typeof event.target[value].value === "string"
        const checaris = !event.target[value].value.trim()

        if(checarif && checaris ){
            return true
        }
    })
    
    if (isEmpty){
        event.preventDefault()
        alert("Por Favor, preencha todos os campos")
    }

    
}