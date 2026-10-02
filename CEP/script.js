async function buscarCEP() {
    const mensagem = document.querySelector("#mensagem")
    const resultado = document.querySelector("#resultado")
    const cep = document.querySelector("#cep").value

    mensagem.textContent = "Iniciando busca..."

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    const endereco = await resposta.json()

    resultado.textContent = ""

    if (endereco.erro) {
        mensagem.textContent = "CEP inválido!"
        return      
    }

    const titulo = document.createElement("h2")
    titulo.textContent = "Endereço encontrado!"

    const rua = document.createElement("p")
    rua.textContent = `Rua: ${endereco.logradouro}`
   
    const bairro = document.createElement("h2")
    bairro.textContent = `Bairro: ${endereco.bairro}`

    const cidade = document.createElement("p")
    cidade.textContent = `Cidade: ${endereco.localidade}`
   
    const estado = document.createElement("h2")
    estado.textContent = `Estado: ${endereco.uf}`

    const complemento = document.createElement("p")
    complemento.textContent = `Complemento: ${endereco.complemento}`

    resultado.appendChild(titulo)
    resultado.appendChild(rua)
    resultado.appendChild(bairro)
    resultado.appendChild(cidade)
    resultado.appendChild(estado)
    resultado.appendChild(complemento)

    mensagem.textContent = "CEP buscado com sucesso!"
    
}