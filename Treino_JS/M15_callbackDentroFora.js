// // // Versão passando todas as callbacks para a 1º função
function programa(callback1, callback2, callback3, callback4, callback5) {
  console.log('Iniciando');
  setTimeout(() => {
    callback1();
    setTimeout(() => {
      callback2();
      setTimeout(() => {
        callback3();
        setTimeout(() => {
          callback4();
          setTimeout(() => {
            callback5();
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function setp1() {
  console.log('Preencher login');
}

function setp2() {
  console.log('Preencher senha');
}

function setp3() {
  console.log('Confirmar senha');
}

function setp4() {
  console.log('Confirmar dados');
}

function setp5() {
  console.log('Bem-vindo!');
}

programa(setp1, setp2, setp3, setp4, setp5);

// Versão passando as callbacks dentro de cada CALLBACK

function programa2(callback) {
  console.log('Iniciando'); //(stepA) é o ARGUMENTO da função PROGRAMA
  setTimeout(() => {
    callback(stepB); //Passando argumento stepB para CALLBACK (stepA)
  }, 1000);
}

function stepA(callback) {
  console.log('Preencher login'); //A ==>B
  setTimeout(() => {
    callback(stepC); //ARGUMENTO (stepB) foi passado na função programa
  }, 1000);
}

function stepB(callback) {
  console.log('Preencher senha'); //B ==>C
  setTimeout(() => {
    callback(stepD);
  }, 1000);
}

function stepC(callback) {
  console.log('Confirmar senha');
  setTimeout(() => {
    callback(stepE);
  }, 1000);
}

function stepD(callback) {
  console.log('Confirmar dados');
  setTimeout(() => {
    callback();
  }, 1000);
}

function stepE() {
  console.log('Bem-vindo!');
}

programa2(stepA);
