const filmes = [
  { nome: 'Batman', ano: 2022 },
  { nome: 'Superman', ano: 2025 },
  { nome: 'Spider-Man', ano: 2021 },
];

//Alternativa 1 com for/if
setTimeout(() => {
  console.log('Alternativa 1 com for/if--------------------------------------------------------------');
}, 2000);

function buscarFilme(lista, filme) {
  return new Promise((resolve, reject) => {
    let testar = '';
    let novaLista = [];
    setTimeout(() => {
      for (let i = 0; i < lista.length; i++) {
        if (lista[i].nome === filme) {
          testar = lista[i].nome;
          novaLista.push(lista[i]);
        }
      }
      if (testar === filme) {
        resolve(novaLista);
      } else {
        reject(new Error('Filme não encontrado'));
      }
    }, 2000);
  });
}

buscarFilme(filmes, 'Superman')
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro.message);
  });

//Alternativa 2 com find()
console.log('Alternativa 2 com find()--------------------------------------------------------------');
function buscarFilme2(lista, filme) {
  return new Promise((resolve, reject) => {
    const encontrar = lista.find((i) => i.nome === filme);
    if (encontrar) {
      resolve(encontrar);
    } else {
      reject(new Error('Não encontrado'));
    }
  });
}

buscarFilme2(filmes, 'Batmddadan')
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro.message);
  });
