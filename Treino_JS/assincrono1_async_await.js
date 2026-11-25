// 1. VERIFICAR SE O PAGAMENTO FOI APROVADO ----------------------------------------------------
function simularPagamento() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pagamentoAprovado = false; //Se gerar erro ==>CATCH
      if (pagamentoAprovado === true) {
        resolve('Pagamento aprovado');
      } else {
        reject('Pagamento recusado');
      }
    }, 2000);
  });
}

//COM THEN() E CATCH()
// simularPagamento()
//   .then((resultado) => console.log(resultado))
//   .catch((erro) => console.log(erro));

//Com ASYNC/AWAIT
async function finalizarCompra() {
  try {
    //1º função
    const checkPagamento = await simularPagamento(); //estoque só é consultado depois que o pagamento é aprovado. Muito bem!
    console.log(checkPagamento);
    //2º função
    const checkEstoque = await verificarEstoque();
    console.log(checkEstoque);
    console.log('Compra aprovada');
  } catch (erro) {
    console.log(erro); //               pega erro (compra ou estoque)
    console.log('Erro ao finalizar');
  }
}

finalizarCompra();

// 2. CONSULTAR O ESTOQUE DO PRODUTO----------------------------------------------------
function verificarEstoque() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const produtoDisponivel = true;
      if (produtoDisponivel === true) {
        resolve('Produto disponível');
      } else {
        reject('Produto indisponível');
      }
    }, 1500);
  });
}
