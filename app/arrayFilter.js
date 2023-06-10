const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosFront.addEventListener('click', filtarLivrosDeFront())

const btnFiltrarLivrosBack = document.getElementById('btnFiltrarLivrosBack');
const btnFiltrarLivrosDados = document.getElementById('btnFiltrarLivrosDados');
const btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis');
const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');


function filtarLivrosDeFront(){
    let livrosFiltrados = livros.filter(livro => livro.categorias == 'front-end' )
}