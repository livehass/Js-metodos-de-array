 const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
 
 


function filtarLivros(){
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end');
    console.table(livrosFiltrados)
    
}

