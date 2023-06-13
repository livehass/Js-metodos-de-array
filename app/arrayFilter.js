const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtarLivros))
 
// console.table(botoes);
function filtarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);

    console.table(livrosFiltrados)
    exibirOsLivrosNaTela(livrosFiltrados)
  
}

