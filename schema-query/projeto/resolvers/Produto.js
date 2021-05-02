module.exports = {
    precoComDesconto(produto) {
        return produto.preco - (produto.preco * produto.desconto)
    }
}