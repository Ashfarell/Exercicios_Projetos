const filmes = [
  { nome: 'Batman', ano: 2022 },
  { nome: 'Superman', ano: 2025 },
  { nome: 'Spider-Man', ano: 2021 },
];

function buscarFilme(lista, filme) {
  return new Promise((resolve, reject) => {
    const copiar = lista.find((item) => item.nome === filme);
    if (copiar) {
      resolve(copiar);
    } else {
      reject(new Error('Filme não encontrado'));
    }
  });
}

buscarFilme(filmes, 'Batman')
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });

//PROMISE ALL ==>executa várias ao memso tempo
Promise.all([buscarFilme(filmes, 'Batman'), buscarFilme(filmes, 'Spider-Man'), buscarFilme(filmes, 'Titanic')])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro.message);
  });
