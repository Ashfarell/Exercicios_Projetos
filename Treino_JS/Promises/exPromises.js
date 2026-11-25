//                      EXEMPLO 1 - PROMISE + THEN() + CATCH(0)
let nomeFilme = '';

function buscarFilmes(filme) {
  return new Promise((resolve, reject) => {
    // Simulando o tempo de resposta de uma API
    setTimeout(() => {
      if (filme === 'desconhecido') {
        reject('Erro: filme não encontrado');
      } else if (filme === 'servidor') {
        reject('Erro: servidor indisponível');
      } else if (filme.length >= 3) {
        resolve('Filme encontrado');
      } else if (filme.length < 3) {
        reject('Nome inválido');
      }
    }, 2000);
  });
}

buscarFilmes(nomeFilme)
  .then((resultado) => {
    console.log(resultado + ' Deu certo - Com then()');
  })
  .catch((erro) => {
    console.log(erro + ' Deu errado - Com catch()');
  });

//                      EXEMPLO 2 - PROMISE + ASYNC/ AWAIT + TRY + CATCH
async function consultarFilme() {
  try {
    const resultadoFilme = await buscarFilmes(nomeFilme);
    console.log(resultadoFilme + ' ' + ' Texto: com Async/Await');
  } catch (erro) {
    console.log(erro + ' Texto: com Async/Await');
  }
}
consultarFilme();
