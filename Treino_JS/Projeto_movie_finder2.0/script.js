let pesquisarNome = document.getElementById('pesquisarNome');
let pesquisaGenero = document.getElementById('pesquisaGenero');
let botao = document.getElementById('botao');
let resultados = document.getElementById('resultados');
let main = document.getElementById('bloco-principal');
let formulario = document.getElementById('formulario');

//LISTA FICTÍCIA DE FILMES
const filmes = [
  { nome: 'Batman', ano: 2022, genero: 'Ação' },
  { nome: 'Superman', ano: 2025, genero: 'Ação' },
  { nome: 'Spider-Man', ano: 2021, genero: 'Aventura' },
  { nome: 'Interestelar', ano: 2014, genero: 'Ficção' },
  { nome: 'Gladiador', ano: 2000, genero: 'Ação' },
  { nome: 'O Poderoso Chefão', ano: 1972, genero: 'Drama' },
  { nome: 'Matrix', ano: 1999, genero: 'Ficção' },
];

function consultarFilmes(lista, filmeBuscado, tipoBuscado) {
  // Etapa 2 — Transformando a busca em uma Promise  ==> USADO COM ARRAY MANUAL (SEM API)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filtrado = lista.filter(
        (item) =>
          //AQUI VERIFICAMOS SE 1) O CAMPO ESTÁ PREENCHIDO E 2) ESTÁ INCLUSO NA LISTA
          (filmeBuscado !== '' && item.nome.toLowerCase().includes(filmeBuscado.toLowerCase())) ||
          (tipoBuscado !== '' && item.genero.toLowerCase().includes(tipoBuscado.toLowerCase()))
      );

      // .map((item) => ({ novoNome: item.nome + '/' + item.ano })); //includes =e diferente de ===
      //array vazio é verdadeiro ==>portanto se tivermos if (filtrado) ==>retornaria verdadeiro; por isso usamos length
      if (filtrado.length > 0) {
        resolve(filtrado);
      } else {
        reject(new Error('Não encontrado'));
      }
    }, 2000);
  });
}

//    Chamando a função com THEN() / CATCH()
// Etapa 2 — Transformando a busca em uma Promise  ==> USADO COM ARRAY MANUAL (SEM API)
consultarFilmes(filmes, 'Matrixdddd', 'Ação')
  .then((resultado) => {
    console.log(
      resultado.filter((item) => item.ano >= 2020).map((item) => ({ novaListaMap1: 'Map1', novoNome: item.nome + '/' + item.ano }))
    ); // MAP p/ criar OBJETO
  })
  .catch((erro) => {
    console.log(erro.message);
  });

//    Chamando a função com ASCYNC/AWAIT
// Etapa 2 — Transformando a busca em uma Promise  ==> USADO COM ARRAY MANUAL (SEM API)
async function executarBusca() {
  try {
    const resultado = await consultarFilmes(filmes, 'O Poderoso Chefão', 'Ação');
    console.log(resultado.filter((item) => item.ano >= 1970).map((item) => 'novaListaMap2 ' + item.nome + ' -' + item.genero)); //                MAP p/ modificar OBJETO
  } catch (error) {
    console.log(error.message);
  }
}
executarBusca();

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  let nomeFilme = pesquisarNome.value.trim();
  let tipoFilme = pesquisaGenero.value.trim();
  pesquisarNome.value = ''; //                limpa o campo de resultado
  pesquisaGenero.value = '';

  //Verifica se nome e tipo foram preenchidos
  //            OS 2 VAZIOS
  if ((nomeFilme === '') & (tipoFilme === '')) {
    alert('Prencha o campo');
    //          OS 2 PREENCHIDOS
  } else if (nomeFilme !== '' && tipoFilme !== '') {
    console.log('Filme: ' + nomeFilme);
    console.log('Gênero: ' + tipoFilme);
    consultarFilmes(filmes, nomeFilme, tipoFilme)
      .then((resultado) => {
        console.log(resultado, ' deu certo');
      })
      .catch((erro) => {
        console.log(erro + ' deu errado');
      });
  }
  //          SÓ NOME PREENCHIDO
  else if ((nomeFilme !== '') & (tipoFilme === '')) {
    console.log('Filme: ' + nomeFilme);
    consultarFilmes(filmes, nomeFilme, tipoFilme)
      .then((resultado) => {
        console.log(resultado, ' Deu certo');
      })
      .catch((erro) => {
        console.log(erro);
      });
    tipoFilme = '';
    //            SÓ TIPO PREENCHIDO
  } else if ((nomeFilme === '') & (tipoFilme !== '')) {
    console.log('Gênero: ' + tipoFilme);
    consultarFilmes(filmes, nomeFilme, tipoFilme)
      .then((resultado) => {
        console.log(resultado, ' deu certo');
      })
      .catch((erro) => {
        console.log(erro);
      });
    nomeFilme = '';
  }
});
