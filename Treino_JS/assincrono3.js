// 1. Exercícios separados (curtos)

// Vamos praticar:
// - Promise, resolve() e reject().
// - .then(), .catch() e .finally().
// - async/await.
// - try/catch.
// 2. Aplicação no Movie Finder

// Depois vamos implementar:
// - try/catch na função requisicao().
// - Mensagem de carregamento enquanto aguardamos a API.
// - finally para remover a mensagem de carregamento.
// - Tratamento de pesquisas sem resultados.
// - Tratamento de erros de conexão e respostas HTTP.
// 3. Comparação

// Vamos fazer a mesma requisição de duas maneiras:
// - Com .then() e .catch().
// - Com async/await e try/catch.

//EXEMPLO 1
async function buscarFilmes() {
  try {
    const resposta = await fetch(url);

    // 1. Verifique se a resposta NÃO foi OK.
    // 2. Se não foi OK, lance um erro com throw.
    if (!resposta.ok) {
      throw new Error('Erro http' + resposta.status);
    }

    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.log('Erro encontrado:', erro.message);
  }
}
//EXEMPLO 2
async function requisicao(filme) {
  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error('Erro HTTP: ' + resposta.status);
    }

    const dados = await resposta.json();

    // NOSSO EXERCÍCIO COMEÇA AQUI

    console.log(dados);
  } catch (erro) {
    console.log('Erro encontrado:', erro.message);
  }
}
