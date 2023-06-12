const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtarLivros))
 
console.table(botoes);
 


function filtarLivros(){
    const elementoBtn = document.getElementById(this.id)
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end');
    console.table(livrosFiltrados)
    
}

