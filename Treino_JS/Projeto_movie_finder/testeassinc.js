const minhaPromise = new Promise((resolve, reject) => {
  let sucesso = true;

  if (sucesso) {
    resolve('Operação concluída!');
  } else {
    reject('A operação falhou!');
  }
});

minhaPromise
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => {
    console.log('Processo encerrado');
  });

let nomeInexistente = 'dadad';

try {
  let resultado = nomeInexistente;
  console.log(resultado);
} catch (erro) {
  console.log('Ocorreu um erro:', erro.message);
}
