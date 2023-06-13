let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)



function ordenarLivrosPorPreco() {

 let livrosOrdenados = livros.sort((a, b) => {
    a.preco - b.preco
 })
   exibirOsLivrosNaTela(livrosOrdenados)
}

function verificaDisponibilidadeDoLivro(livro) {
    if(livro.quantidade == 0){
      return 'livros__imagens'
    }else {
      return 'livros__imagens indisponivel'
    }
}