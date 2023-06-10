const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosFront.addEventListener('click', filtarLivrosDeFront());

const btnFiltrarLivrosBack = document.getElementById('btnFiltrarLivrosBack');
const btnFiltrarLivrosDados = document.getElementById('btnFiltrarLivrosDados');




function filtarLivrosDeFront(){
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'dados' )
    console.log(livrosFiltrados)
}

