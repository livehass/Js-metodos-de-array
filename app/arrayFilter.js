 const btnFiltrarLivrosFront = document.getElementById("btnFiltrarLivrosFront");
 
 btnFiltrarLivrosFront.addEventListener("click", filtarLivrosDeFront);


function filtarLivrosDeFront(){
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'frond-end' );
    console.table(livrosFiltrados)
    
}

