// Mini projeto: Sistema de compra online
// Imagine que um cliente realiza uma compra e nosso sistema precisa:
// 1. Verificar se o pagamento foi aprovado.
// 2. Consultar o estoque do produto.
// 3. Confirmar a compra.
// 4. Exibir uma mensagem de sucesso ou erro.

// 1. O que vamos aprender na prática
// Recurso	Onde será utilizado
// setTimeout()	Simular o tempo de processamento
// Promise	Representar cada operação
// resolve()	Informar que deu certo
// reject()	Informar que houve falha
// then()	Receber o resultado
// catch()	Tratar erros
// async/await	Organizar a sequência
// try/catch	Capturar erros na sequência

// 2. Nosso roteiro
// 1. Etapa 1 — Simular o pagamento

//    Criar uma função que retorna uma Promise e usa setTimeout().
// 2. Etapa 2 — Receber a resposta

//    Utilizar .then() e .catch().
// 3. Etapa 3 — Consultar o estoque

//    Criar outra Promise e aprender a encadear operações.
// 4. Etapa 4 — Usar async/await

//    Reescrever o fluxo usando async, await e try/catch.
// 5. Etapa 5 — Projeto completo

//    Juntar tudo e testar situações de sucesso e falha.

// 1. VERIFICAR SE O PAGAMENTO FOI APROVADO ----------------------------------------------------
function simularPagamento() {
  //                                      1. Primeira parte: criando a Promise
  return new Promise((resolve, reject) => {
    //                                  2. Segunda parte: simulando a espera
    setTimeout(() => {
      const pagamentoAprovado = true;
      //                                3. Terceira parte: decidindo o resultado
      if (pagamentoAprovado === true) {
        resolve('Pagamento aprovado');
      } else {
        reject('Pagamento recusado');
      }
    }, 2000);
  });
}

simularPagamento() //                  4. Quarta parte: recebendo o resultado
  .then((resultado) => {
    console.log(resultado);
    return verificarEstoque(); //         Aqui chamamos verificarEstoque
  })
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.log(erro));

// 2. CONSULTAR O ESTOQUE DO PRODUTO----------------------------------------------------
function verificarEstoque() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const produtoDisponivel = false;
      if (produtoDisponivel === true) {
        // resolve('Produto disponível');
        resolve('Compra finalizada com sucesso!');
      } else {
        reject('Produto indisponível');
      }
    }, 1500);
  });
}

// verificarEstoque()                               //Não precisamos mais porque encadeamos em SIMULARPAGAMENTO()
//   .then((resultado) => console.log(resultado))
//   .catch((erro) => console.log(erro));
