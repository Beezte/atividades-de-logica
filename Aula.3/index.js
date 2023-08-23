(async ()=>{
    const database = require('./db')
    const Produto = require('./produto')
    await database.sync();

    /*const novoProduto = await Produto.create({
        nome: 'Teclado USB',
        preco: 253,
        descricao: 'teclado da reizer made in brazil'
    })
    console.log(novoProduto);

    const produto = await Produto.findByPk(1);
    console.log(produto)
    await produto.destroy()*/

    await Produto.destroy({where: {
        preco: 253
        }})
})();