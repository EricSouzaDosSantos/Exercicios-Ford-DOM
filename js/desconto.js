const valorCompra = document.getElementById('valorTotal').value
    let pergunta = parseInt(prompt("Digite qual tipo de cliente você é: \n 1 - Cliente \n 2 - Funcionário \n 3 - Cliente VIP"))


    switch(pergunta){

        case 1:

        alert("Você é um cliente, infelizmente você não possui descontos")
        alert(`O valor total da sua compar é de ${valorCompra}`)

        break

        case 2:

        alert("Você é um Funcionario, parábens tem direito a 10% de desconto")
        var Desconto = (10 / 100) * valorCompra;
        var funcionario = valorCompra - Desconto;
        alert(`o valor total da sua compra é de R$:${funcionario} você terá R$:${Desconto}`)

        break

        case 3:
            
        alert("Você é um Cliente VIP, parábens tem direito a 5% de desconto")
        var Desconto = (5 / 100) * valorCompra;
        var funcionario = valorCompra - Desconto;
        alert(`o valor total da sua compra é de R$:${funcionario} você terá R$:${Desconto}`)

        break

        default:

        alert("Erro ao executar o programa: tente novamente")

        break
    }