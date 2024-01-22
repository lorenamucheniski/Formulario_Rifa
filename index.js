const fomulario = document.querySelector("form")
const botao = document.querySelector(".button")
const iname = document.querySelector("#nome")
const telefone = document.querySelector("#telefone")
const numero = document.querySelector("#numeros")
const valorPago = document.querySelector("#valor_pago")

function cadastrar() {
    fetch('http://localhost:8080/cliente',
    {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: iname.value,
            numeroDeRifas: numero.value,
            numeroDeTelefone: telefone.value,
            total: valorPago.value
        })
    })
    .then(
        function (res) {
            res.json() 
        })
    .then(data => console.log(data))
    .catch(function (res) {console.log(res) })


    
}

function rifa() {

    fetch('http://localhost:8080/rifa',
    {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            id: uris.getId,
            numeroDaRifa: numero.value
        })
    }).then(
        function(res) {
            res.json()
        }
    )
}

fomulario.addEventListener("submit", function(event){
    event.preventDefault();
    cadastrar();
    rifa()
})