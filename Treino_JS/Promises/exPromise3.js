// Versão A — Promise manual  ==>resolve/reject + then/catch
function calc(number) {
  return new Promise((resolve, reject) => {
    if (typeof number === 'number') {
      resolve(number * 2);
    } else {
      reject('Entre um número válido');
    }
  });
}

calc('x')
  .then((resultado) => {
    console.log(`Resultado com Promise manual \n ${resultado}`);
  })
  .catch((erro) => {
    console.log(`${erro} Erro com Promise manual - \n operação não realizada`);
  });

// Versão B — Async/Await  ==>async + await + throw new Error + try/catch

async function calcAsync(number) {
  if (typeof number === 'number') {
    return number * 2;
  } else {
    throw new Error('Número inválido');
  }
}

async function execCalcAsync() {
  try {
    const result = calcAsync(10);
    console.log(`resultado com ascyn/await ${result}`);
  } catch (error) {
    console.log(`Erro com async/await: ${error}`);
  }
}
execCalcAsync();
