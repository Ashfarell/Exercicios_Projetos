//tentativa 1 com ascyn/await
async function calcularDobro(numero) {
  if (typeof numero === 'number') {
    console.log('Calculando:');
    return numero * 2;
  } else {
    throw new Error('Número inválido');
  }
}

async function executarCalc() {
  try {
    const result = await calcularDobro('10');
    console.log(result + '- operação realizada');
  } catch (erro) {
    console.log(erro + ' - operação não realizada');
  }
}
executarCalc();

//tentativa 2 com Promise manual-----------------------------------------------------------------------

function calcular(numero) {
  return new Promise((resolve, reject) => {
    if (typeof numero === 'number') {
      resolve(numero * 2);
    } else {
      reject('Digite um número válido');
    }
  });
}

calcular(10)
  .then((resultado) => {
    console.log('O resultado é: ' + resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });
