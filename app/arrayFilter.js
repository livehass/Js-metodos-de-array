 const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
 
 btnFiltrarLivrosFront.addEventListener("click", filtarLivros);


function filtarLivros(){
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end');
    console.table(livrosFiltrados)
    
}

