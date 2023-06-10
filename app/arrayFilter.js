const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosFront.addEventListener('Click', filtarLivrosDeFront())

const btnFiltrarLivrosBack = document.getElementById('btnFiltrarLivrosBack');
const btnFiltrarLivrosDados = document.getElementById('btnFiltrarLivrosDados');
const btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis');
const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');


function filtarLivrosDeFront(){
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end' )
    console.table(livrosFiltrados)
}

