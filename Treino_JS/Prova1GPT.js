// Tema	Questões	Quantidade
// 1. Arrays: filter, map, reduce, objetos e includes	1–2	2
// 2. Rest parameters + reduce	3–4	2
// 3. Operador ternário	5–6	2
// 4. spread + cópias de arrays e objetos	7–8	2
// 5. forEach	9–10	2
// 6. Arrow functions	11–12	2
// 7. Promise: resolve e reject	13–14	2
// 8. then, catch e finally	15–16	2
// 9. Conceito e funcionamento de Promise	17–18	2
// 10. async/await	19–20	2
// 11. Arrays: slice e join	21–22	2
// 12. Regex + test()	23–24	2
// Extra: imutabilidade + spread, filter, map e some()	25–27	3
// Total		27

// Questão 1 — reduce() + criação de objeto
// Considere o array:
const vendas = [
  { vendedor: 'Jean', categoria: 'Eletrônicos', valor: 500 },
  { vendedor: 'Igor', categoria: 'Móveis', valor: 300 },
  { vendedor: 'Jean', categoria: 'Eletrônicos', valor: 200 },
  { vendedor: 'Jade', categoria: 'Móveis', valor: 400 },
  { vendedor: 'Igor', categoria: 'Eletrônicos', valor: 100 },
];
// Queremos obter um objeto com o faturamento total de cada vendedor:
// {
//   Jean: 700,
//   Igor: 400,
//   Jade: 400
// }
console.log('EX1PT1 A)FUNÇÃO + FOR P/ CRIAR ARRAY COM SOMA E ACUMULAR VALOR-------------------------------');
// console.log('EX1 A)FUNÇÃO + FOR P/ CRIAR ARRAY COM SOMA E ACUMULAR VALOR-------------------------------')

function VendasPorVendedor(lista) {
  let novaLista = [];
  let vendedoresProcessados = [];
  //   let nome;
  //   let total = 0;

  //1º LOOP
  for (let i = 0; i < lista.length; i++) {
    let nome = lista[i].vendedor;
    let total = 0;

    //Verifica se vendedor já foi processado
    if (vendedoresProcessados.includes(nome)) {
    } else {
      //2º LOOP
      for (let j = 0; j < lista.length; j++) {
        if (lista[j].vendedor === nome) {
          total += lista[j].valor;
        }
      }
      //   novaLista.push(nome + ': ' + total);   // add STRING ao ARRAY
      novaLista.push({ vendedor: lista[i].vendedor, faturamento: total });
      vendedoresProcessados.push(nome);
    }
  }
  //   return vendedoresProcessados;
  return novaLista;
}
console.log(VendasPorVendedor(vendas));

console.log('EX1PT1 B)REDUCE P/ SOMAR E CRIAR NOVO OBJETO, SOMAR E ACUMULAR VALOR-------------------------------');
const vendasPorVendedorB = vendas.reduce((acc, item) => ({ ...acc, [item.vendedor]: (acc[item.vendedor] ?? 0) + item.valor }), {}); //...acc ==>copia as propriedades existentes para um novo objeto.
console.log(vendasPorVendedorB); //                                                            ({}) ==>cria novo objeto com ARROW FUNCTION
//                                                                                                      [item.nome] → utiliza o nome do vendedor como nome da propriedade.
//                                                                                                      acc[item.nome] ?? 0) + item.total → calcula o novo valor dessa propriedade.
//                                                                                                      ?? Se o valor à esquerda for null ou undefined, utilize o valor à direita.
//                                                                                                      Se o vendedor já existir, pega o valor que ele possui.
//                                                                                                      Se ainda não existir, utiliza zero como valor inicial.
console.log('FIM EX1PT1--------------------------------------------------------------------------------');

// Tema 1 — Questão 2: includes()
// Considere nosso array:
const produtos = [
  { nome: 'Monitor', preco: 900 },
  { nome: 'Mouse', preco: 100 },
  { nome: 'Teclado', preco: 250 },
];
// Queremos verificar se existe um produto chamado 'Mouse'.

// const testIncludes = produtos.includes('Mouse');   //  procura o valor 'Mouse' como elemento direto do array.
//                                                        Ele não entra nos objetos para procurar suas propriedades.
console.log('EX2PT1 Map + includes para procurar valor no array');
// console.log('EX2 Map + includes para procurar valor no array');
const testMap = produtos.map((p) => p.nome).includes('Mouse');
console.log(testMap);

// const testFilter = produtos.filter((p) => p.nome).includes('Mouse');
// console.log(testFilter);

const testSome = produtos.some((p) => p.nome === 'Mouse');
console.log(testSome);

console.log('FIM EX2PT1--------------------------------------------------------------------------------');

console.log('FIM TEMA 1------------------------------------------------------------------------------');

// Questão 3 teste — Rest + reduce
function calcularTotal(...valores) {
  return valores.reduce((acc, item) => acc + item, 0);
}
console.log(calcularTotal(10, 20, 30, 40));

// Exercício 3 — Rest parameters + reduce()
// Temos a seguinte tarefa:
// Crie uma função chamada calcularMedia() que:
// 1. Receba uma quantidade variável de notas usando Rest (...).
// 2. Utilize reduce() para somar todas as notas.
// 3. Retorne a média das notas recebidas.
// Teste esperado:
// console.log(calcularMedia(8, 7, 9, 6));   ==>// // Resultado: 7.5

console.log('EX3PT2 FUNCTION + REDUCE + ...REST-----------------------------------');
// console.log('EX3PT2 FUNCTION + REDUCE + ...REST-----------------------------------');
function calcularMedia(...notas) {
  return notas.reduce((acc, item) => acc + item) / notas.length;
}
console.log(calcularMedia(8, 7, 9, 6));

console.log('FIM EX3PT2------------------------------------------------------');
// Exercício 4 — Operador ternário
// Temos uma lista de produtos:
const produtosPT2 = [
  { nome: 'Monitor', preco: 900 },
  { nome: 'Mouse', preco: 100 },
  { nome: 'Teclado', preco: 250 },
  { nome: 'Notebook', preco: 3500 },
];
// Sua missão:
// 1. Utilize map() para criar um novo array.
// 2. Cada objeto deve manter o nome e o preco.
// 3. Acrescente uma propriedade chamada classificacao:
//    - Preço maior ou igual a 500: 'Caro'
//    - Preço menor que 500: 'Barato'
// 4. Utilize o operador ternário para definir essa classificação.

console.log('EX4PT2 A) MAP para criar objeto MANUALMENTE e OPERADOR TERNÁRIO para verificar condição');
// console.log('EX4PT2 A) MAP para criar objeto e OPERADOR TERNÁRIO para verificar condição');
const novaListaMap = produtosPT2.map((p) => ({ nome: p.nome, preco: p.preco, classificacao: p.preco >= 500 ? 'Caro' : 'Barato' }));
console.log(novaListaMap);

console.log('EX4PT2 B) MAP para criar objeto, ...SPREAD para copiar objeto e OPERADOR TERNÁRIO para verificar condição');
// console.log('EX3 B) MAP para criar objeto, ...SPREAD para copiar objeto e OPERADOR TERNÁRIO para verificar condição');
const novaListaMapSpread = produtosPT2.map((p) => ({ ...p, classificacao: p.preco >= 500 ? 'Caro' : 'Barato' }));
console.log(novaListaMapSpread);

console.log('FIM EX4PT2------------------------------------------------------');
// PT2 — EX5
// Tema: filter() + map() + ternário + spread
// Crie uma nova lista seguindo estas etapas:
// 1. Utilize filter() para selecionar produtos com preço acima de R$ 200.
// 2. Utilize map() para criar novos objetos.
// 3. Preserve todas as propriedades originais usando spread.
// 4. Acrescente uma propriedade chamada faixaPreco, utilizando operador ternário:
//    - Preço acima de R$ 1.000: 'Premium'
//    - Caso contrário: 'Econômico'

console.log('EX5PT2 A) FILTER + SPREAD p/ copiar objeto MAP p/ criar novos propriedades no objeto + OPERADOR TERNÁRIO');
// console.log('EX5PT2 A) FILTER + SPREAD p/ copiar objeto MAP p/ criar novos propriedades no objeto + OPERADOR TERNÁRIO');
const filtrarTransformar = produtosPT2
  .filter((p) => p.preco > 200)
  .map((item) => ({ ...item, faixapreco: item.preco > 1000 ? 'Premium' : 'Econômico' }));
console.log(filtrarTransformar);

console.log('EX5PT2 B) FILTER + SPREAD para criar objeto MANUALMENTE  MAP p/ criar novos propriedades no objeto + OPERADOR TERNÁRIO');
// console.log('EX5PT2 B) FILTER + SPREAD para criar objeto MANUALMENTE  MAP p/ criar novos propriedades no objeto + OPERADOR TERNÁRIO');

const filtrarTransformar2 = produtosPT2
  .filter((p) => p.preco > 200)
  .map((item) => ({ nome: item.nome, preco: item.preco, faixaPreco: item.preco > 1000 ? 'Premium' : 'Economico' }));

console.log(filtrarTransformar2);

console.log('FIM EX5PT2------------------------------------------------------');

// PT2 — EX6
// **Tema: some() + map() + imutabilidade
// Considere esta lista:
const produtos6PT2 = [
  { nome: 'Monitor', preco: 900, estoque: 5 },
  { nome: 'Mouse', preco: 100, estoque: 0 },
  { nome: 'Teclado', preco: 250, estoque: 3 },
  { nome: 'Webcam', preco: 200, estoque: 0 },
];
// Crie uma função chamada verificarEstoque() que:
// 1. Utilize some() para verificar se existe pelo menos um produto sem estoque.
// 2. Guarde o resultado em uma variável chamada existeSemEstoque.
// 3. Utilize map() para criar um novo array de objetos.
// 4. Preserve as propriedades originais com spread.
// 5. Acrescente a propriedade disponivel, com:
//    - true se o estoque for maior que zero.
//    - false caso contrário.

console.log('EX6PT2 A) Apenas map para transformar e COPIAR OBJETO c/ SPREAD + CRIAR PROPRIEDADE ');
// console.log('EX6PT2 A) Apenas map para transformar e COPIAR OBJETO c/ SPREAD + CRIAR PROPRIEDADE ');
function verificarEstoque(lista) {
  return lista.map((item) => ({ ...item, disponivel: item.estoque <= 0 ? false : true }));
  // return existeSemEstoque;
}
console.log(verificarEstoque(produtos6PT2));

console.log('EX6PT2 B) SOME +  MAP para transformar e COPIAR OBJETO c/ SPREAD + CRIAR PROPRIEDADE ');
function verificarEstoque2(lista) {
  //     some() retorna apenas um booleano (true ou false), independentemente de quantos produtos existam.
  const existeSemEstoque = lista.some((item) => item.estoque <= 0);
  //map() percorre item a item
  const produtosAtualizados = lista.map((item) => ({ ...item, disponivel: item.estoque <= 0 ? false : true }));

  //RETURN devolve um OBJETO
  return { existeSemEstoque: existeSemEstoque, produtosAtualizados: produtosAtualizados };
}
console.log(verificarEstoque2(produtos6PT2));

console.log('FIM EX6PT2------------------------------------------------------');

// PT2 — EX7
// Tema: filter() + some() + reduce() + imutabilidade
// Agora vamos combinar alguns conceitos que já estudamos.
// Considere esta lista:
const vendasPT2 = [
  { vendedor: 'Jean', produto: 'Monitor', valor: 900, quantidade: 2 },
  { vendedor: 'Igor', produto: 'Mouse', valor: 100, quantidade: 0 },
  { vendedor: 'Jade', produto: 'Teclado', valor: 250, quantidade: 4 },
  { vendedor: 'Jean', produto: 'Webcam', valor: 200, quantidade: 0 },
  { vendedor: 'Igor', produto: 'Notebook', valor: 3500, quantidade: 1 },
];
// Sua missão
// Crie uma função chamada analisarVendas() que:
// 1. Utilize some() para verificar se existe alguma venda com quantidade igual a zero.
// 2. Utilize filter() para selecionar apenas vendas com quantidade maior que zero.
// 3. Utilize reduce() para calcular o faturamento total das vendas válidas (valor * quantidade).
// 4. Retorne um objeto contendo:
//    - existeVendaSemEstoque
//    - vendasValidas
//    - faturamentoTotal

// Resultado esperado:
// - existeVendaSemEstoque: true
// - vendasValidas: 3 vendas
// - faturamentoTotal: 3300
console.log('EX7PT2 A) FILTER + SOME + REDUCE - devolvendo objeto');
// console.log('EX7PT2 A) FILTER + SOME + REDUCE - devolvendo objeto')
function analisarVendas(lista) {
  //some() retorna BOOLEANO
  const existeVendaSemEstoque = lista.some((item) => item.quantidade <= 0);
  //Filter
  const vendasValidas = lista.filter((p) => p.quantidade > 0);
  //Reduce para fazer cálculo
  const quantidadeVendasValidas = vendasValidas.length;
  const faturamentoTotal = vendasValidas.reduce((acc, item) => acc + item.quantidade * item.valor, 0);
  //RETURN devolve um OBJETO
  return { existeVendaSemEstoque, quantidadeVendasValidas, vendasValidas, faturamentoTotal };
}
console.log(analisarVendas(vendasPT2));

console.log('EX7PT2 B) FILTER + SOME + REDUCE - devolvendo CONTAGEM');
// console.log('EX7PT2 B) FILTER + SOME + REDUCE - devolvendo CONTAGEM');
function analisarVendas2(lista) {
  const existeVendasSemEstoque = lista.some((item) => item.quantidade <= 0);
  const vendasValidas = lista.filter((item) => item.quantidade > 0);
  //VAR p/ pegar apenas CONTAGEM
  const contar = vendasValidas.length;
  const faturamentoTotal = vendasValidas.reduce((acc, item) => acc + item.valor * item.quantidade, 0);
  return { existeVendaSemEstoque: existeVendasSemEstoque, vendasValidas: contar, faturamentoTotal: faturamentoTotal };
}
console.log(analisarVendas2(vendasPT2));

console.log('FIM EX7PT2------------------------------------------------------');

// PT2 — EX8
// Tema: find() + some() + operador ternário + optional chaining
const clientesPT2 = [
  { nome: 'Jean', idade: 38, ativo: true },
  { nome: 'Igor', idade: 31, ativo: true },
  { nome: 'Jade', idade: 53, ativo: false },
  { nome: 'Vanessa', idade: 29, ativo: true },
];
// Sua missão
// Crie uma função chamada analisarClientes(lista) que:
// 1. Utilize find() para localizar o cliente chamado 'Igor'.
// 2. Utilize some() para verificar se existe pelo menos um cliente inativo.
// 3. Utilize o operador ternário para criar uma variável statusIgor:
//    - Se Igor existir e estiver ativo: 'Ativo'.
//    - Caso contrário: 'Inativo ou não encontrado'.
// 4. Retorne um objeto contendo:
//    - clienteEncontrado
//    - existeClienteInativo
//    - statusIgor
console.log('EX8PT2 A) MAP + SOME + FIND');

function analisarClientes(lista) {
  const clienteEncontrado = lista.find((item) => item.nome === 'Igor'); //Retorna OBJETO Quando encontra o 1º elemento que atende à condição
  // find() procura um elemento; filter() seleciona todos os elementos que atendem à condição.
  const existeClienteInativo = lista.some((item) => item.ativo === false); // some() retorna BOOLEANO
  let statusIgor = '';
  //                Verificar STATUS Igor
  if (clienteEncontrado && clienteEncontrado.nome === 'Igor' && clienteEncontrado.ativo === false) {
    statusIgor = 'Inativo ou não encontrado';
  } else if (clienteEncontrado && clienteEncontrado.nome === 'Igor' && clienteEncontrado.ativo === true) {
    statusIgor = 'Ativo';
  } else if (!clienteEncontrado) {
    statusIgor = 'Inativo ou não encontrado';
  }
  //            Criando OBJETO no RETURN + usando TERNÁRIO
  return {
    clienteEncontrado: clienteEncontrado ? clienteEncontrado : 'Não',
    existeClienteInativo: existeClienteInativo,
    statusIgor,
  };
}
console.log(analisarClientes(clientesPT2));

console.log('EX8PT2 B) FUNÇÃO COM LOOP');
function analisarClientes2(lista) {
  let nome = 'Não encontrado';
  let existeClienteInativo = false;
  let statusIgor = 'Inativo ou não encontrado';

  for (let i = 0; i < lista.length; i++) {
    //      Existe cliente INATIVO??
    if (lista[i].ativo === false) {
      existeClienteInativo = true;
    }
    //        Exite Igor + INATIVO
    if (lista[i].nome === 'Igor' && lista[i].ativo === false) {
      nome = lista[i].nome;
      statusIgor = 'Inativo ou não encontrado';
      //       Exite Igor + ATIVO
    } else if (lista[i].nome === 'Igor' && lista[i].ativo === true) {
      nome = lista[i].nome;
      statusIgor = 'Ativo';
      //       Igor NÃO EXISTE
      // } else if (lista[i].nome !== 'Igor') {
      //   statusIgor = 'Inativo ou não encontrado';
      //   // nome = 'Não encontrado';
    }
  }
  return { nome, existeClienteInativo, statusIgor }; // retorna OBJETO
}
console.log(analisarClientes2(clientesPT2));

console.log('FIM EX8PT2------------------------------------------------------');

// PT2 — EX9: Análise de produtos
const produtosEX9 = [
  { nome: 'Monitor', preco: 900, estoque: 5, categoria: 'Eletrônicos' },
  { nome: 'Mouse', preco: 100, estoque: 0, categoria: 'Acessórios' },
  { nome: 'Teclado', preco: 250, estoque: 3, categoria: 'Acessórios' },
  { nome: 'Notebook', preco: 3500, estoque: 5, categoria: 'Eletrônicos' },
  { nome: 'Webcam', preco: 200, estoque: 0, categoria: 'Acessórios' },
];
// Crie uma função chamada analisarProdutos(lista) que:
// 1. Use filter() para selecionar somente produtos disponíveis (estoque > 0).
// 2. Use map() para criar novos objetos, mantendo as propriedades originais com spread e acrescentando uma propriedade classificacao:
//    - Preço maior ou igual a 500 → 'Premium'.
//    - Preço menor que 500 → 'Econômico'.
// 3. Use some() para verificar se existe algum produto sem estoque.
// 4. Use find() para localizar o produto chamado 'Notebook'.
// 5. Use ternário para criar statusNotebook:
//    - Se Notebook existir e tiver estoque → 'Disponível'.
//    - Caso contrário → 'Indisponível ou não encontrado'.
// 6. Retorne um objeto com todas essas informações.
function analisarProdutos(lista) {
  const filtrar = lista.filter((item) => item.estoque > 0);
  const transformar = filtrar.map((item) => ({ ...item, classificacao: item.preco >= 500 ? 'Premium' : 'Econômico' }));
  existeProdutoSemEstoque = lista.some((item) => item.estoque <= 0);
  localizarProduto = lista.find((item) => item.nome === 'Notebook');
  let statusNotebook = 'Indisponível ou não encontrado';
  if (localizarProduto) {
    localizarProduto.estoque > 0 ? (statusNotebook = 'Disponível') : (statusNotebook = 'Indisponível ou não encontrado');
  }
  return {
    listaTransformada: transformar,
    existeProdutoSemEstoque,
    localizarProduto,
    statusNotebook,
  };
}

console.log(analisarProdutos(produtosEX9));

console.log('FIM EX9PT2------------------------------------------------------');
// PT2 — EX10: Análise de vendas por vendedor
const vendasEX10 = [
  { vendedor: 'Jean', produto: 'Monitor', valor: 900, quantidade: 2 },
  { vendedor: 'Igor', produto: 'Mouse', valor: 100, quantidade: 0 },
  { vendedor: 'Jade', produto: 'Teclado', valor: 250, quantidade: 4 },
  { vendedor: 'Jean', produto: 'Webcam', valor: 200, quantidade: 0 },
  { vendedor: 'Igor', produto: 'Notebook', valor: 3500, quantidade: 1 },
  { vendedor: 'Jade', produto: 'Headset', valor: 300, quantidade: 3 },
];
// Crie uma função chamada analisarVendas(lista) que:
// 1. Utilize filter() para selecionar somente as vendas com quantidade maior que zero.
// 2. Utilize map() e spread para criar novos objetos, acrescentando a propriedade faturamento, calculada por valor * quantidade.
// 3. Utilize some() para verificar se existe alguma venda sem estoque (quantidade === 0).
// 4. Utilize find() para localizar a primeira venda realizada pelo vendedor Igor.
// 5. Utilize reduce() para calcular o faturamento total das vendas válidas.
// 6. Utilize um operador ternário para criar statusIgor:
//    - Se Igor foi encontrado e sua venda tem quantidade maior que zero → 'Venda válida'.
//    - Caso contrário → 'Sem venda válida ou não encontrado'.
// 7. Retorne um objeto contendo todas essas informações.

console.log('EX10 A) Função + FILTER, SOME (encontra pelo menos 1), FIMD (encontra valor) + MAP + REDUCE + FOR/IF');
// console.log('EX10 A) Função + FILTER, SOME (encontra pelo menos 1), FIMD (encontra valor) + MAP + REDUCE + FOR/IF');
function analisarVendas10(lista) {
  const filtrar = lista.filter((item) => item.quantidade > 0);
  const transformar = filtrar.map((p) => ({ ...p, faturamento: p.valor * p.quantidade }));
  const vendaSemEstoque = lista.some((p) => p.quantidade <= 0);
  const primeiraVendaIgor = lista.find((item) => item.vendedor === 'Igor');
  const faturamentoTotal = transformar.reduce((acc, item) => acc + item.faturamento, 0);
  //status Igor com FOR/IF
  let statusIgor = 'Sem venda válida ou não encontrado';
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].vendedor === 'Igor' && lista[i].quantidade > 0) {
      statusIgor = 'Venda válida';
    }
  }
  return { transformar, vendaSemEstoque, statusIgor };
}
console.log(analisarVendas10(vendasEX10));

console.log('EX10 A) Função + FILTER, SOME (encontra pelo menos 1), FIMD (encontra valor) + MAP + REDUCE + TERNÁRIO');
// console.log('EX10 A) Função + FILTER, SOME (encontra pelo menos 1), FIMD (encontra valor) + MAP + REDUCE + TERNÁRIO');
function analisarVendas2(lista) {
  const filtrar = lista.filter((item) => item.quantidade > 0);
  const transformar = filtrar.map((p) => ({ ...p, faturamento: p.valor * p.quantidade }));
  const vendaSemEstoque = lista.some((p) => p.quantidade <= 0);
  const vendaIgor = lista.find((item) => item.vendedor === 'Igor' && item.quantidade > 0); //agora pga 1º venda REAL do Igor
  const faturamentoTotal = transformar.reduce((acc, item) => acc + item.faturamento, 0);
  //status Igor com Ternário
  let statusIgor = '';
  vendaIgor ? (statusIgor = 'Venda válida') : (statusIgor = 'Sem venda válida ou não encontrado');
  return { transformar, vendaSemEstoque, statusIgor };
}
console.log(analisarVendas2(vendasEX10));

console.log('FIM EX10PT2------------------------------------------------------');

// EX11 — Análise de vendas e desempenho
const vendasEX11 = [
  { vendedor: 'Jean', produto: 'Monitor', valor: 900, quantidade: 2 },
  { vendedor: 'Igor', produto: 'Mouse', valor: 100, quantidade: 0 },
  { vendedor: 'Jade', produto: 'Teclado', valor: 250, quantidade: 4 },
  { vendedor: 'Jean', produto: 'Webcam', valor: 200, quantidade: 3 },
  { vendedor: 'Igor', produto: 'Notebook', valor: 3500, quantidade: 1 },
  { vendedor: 'Jade', produto: 'Headset', valor: 300, quantidade: 0 },
  { vendedor: 'Jean', produto: 'Impressora', valor: 600, quantidade: 2 },
];

// Crie uma função chamada analisarVendasEX11(lista) que faça o seguinte:
// 1. filter(): selecione somente as vendas com quantidade maior que zero.
// 2. map() + spread: crie novos objetos acrescentando:
//    - faturamento: valor × quantidade.
//    - categoria: 'Alta' se o faturamento for maior ou igual a 1.000; caso contrário, 'Baixa'.
// 3. some(): verifique se existe alguma venda sem estoque (quantidade igual a zero).
// 4. find(): encontre a primeira venda válida do vendedor Jean (quantidade maior que zero).
// 5. reduce(): calcule o faturamento total de todas as vendas válidas.
// 6. forEach(): percorra a lista transformada e conte quantas vendas foram classificadas como 'Alta'.
// 7. Ternário: crie statusJean:
//    - Se Jean foi encontrado e seu faturamento for maior ou igual a 1.000 → 'Meta atingida'.
//    - Caso contrário → 'Meta não atingida ou não encontrado'.
// 8. Retorne um objeto com todos os resultados.
console.log('EX11 A) Função + FILTER, SOME (encontra pelo menos 1), FIMD (encontra valor) + MAP + REDUCE + TERNÁRIO + FOREACH()');
// console.log('EX11 A) Função + FILTER, SOME (encontra pelo menos 1), FIMD (encontra valor) + MAP + REDUCE + TERNÁRIO + FOREACH()');
function analisarVendasEX11(lista) {
  const filtrar = lista.filter((item) => item.quantidade > 0);
  //Aqui usamos 2 map para resolver o exercício ==>pq faturamento ainda não existe
  const transformar1 = filtrar.map((p) => ({ ...p, faturamento: p.quantidade * p.valor })); // Devolve totdos os itens que atendem á condição
  const transformar2 = transformar1.map((p) => ({ ...p, categoria: p.faturamento >= 1000 ? 'Alta' : 'Baixa' }));
  const vendaSemEstoque = lista.some((p) => p.quantidade <= 0); // devolve BOOLEANO
  //1º venda Jean com estoque >0
  const vendaJean = transformar2.find((p) => p.vendedor === 'Jean' && p.quantidade > 0); //find devolve o 1º item que atende à condição
  const faturamentoTotal = transformar2.reduce((acc, item) => acc + item.faturamento, 0);
  //forEach()
  let qtdItensCatAlta = 0;
  transformar2.forEach((item) => {
    if (item.categoria === 'Alta') {
      qtdItensCatAlta++;
    }
  });
  //Status Jean
  let statusJean = 'Meta não atingida ou não encontrado';
  vendaJean && vendaJean.faturamento ? (statusJean = 'Meta atingida') : (statusJean = 'Meta não atingida ou não encontrado');

  return { vendaSemEstoque, qtdItensCatAlta, vendaJean, statusJean, statusJean };
}
console.log(analisarVendasEX11(vendasEX11));

console.log('FIM EX11PT2------------------------------------------------------');

// PT2 — EX12: slice() e join().
//                                                                                        1. Conhecendo o slice()
// O slice() permite copiar uma parte de um array sem modificar o original.
// Exemplo:
const produtosTeste = ['Monitor', 'Mouse', 'Teclado', 'Webcam', 'Notebook'];
// const selecionados = produtos.slice(1, 4);
// console.log(selecionados);                                                               //// Resultado:  // ['Mouse', 'Teclado', 'Webcam']

//                                                                                         2. Conhecendo o join()
// O join() transforma os elementos de um array em uma única string.
const nomes = ['Jean', 'Igor', 'Jade'];
const resultado = nomes.join(' - '); // console.log(resultado); Resultado: Jean - Igor - Jade;

// 3. EX12 — Primeiro exercício
// Temos este array:
const produtosEX12 = ['Monitor', 'Mouse', 'Teclado', 'Webcam', 'Notebook', 'Impressora'];
// Sua missão:
// 1. Utilize slice() para selecionar os produtos dos índices 1 até 4 (sem incluir o índice 4).
// 2. Utilize join() para transformar os produtos selecionados em uma string, separados por -.
// 3. Exiba o resultado no console.
console.log('EX12PT2 - SLICE p/ cortar e JOIN p/ juntar------------------------------------------------------');
// console.log('EX12 - SLICE p/ cortar e JOIN p/ juntar------------------------------------------------------');
const novosProdutos12 = produtosEX12.slice(1, 4);
const novosProdutos12V2 = novosProdutos12.join(' - ');
console.log(novosProdutos12V2);

console.log(
  'FIM EX12PT2------------------------------------------------------------------------------------------------------------------'
);

// EX13 — Parte 2: um pequeno desafio
// Agora quero que você faça uma função chamada montarListaProdutos(lista, inicio, fim).
// Ela deverá:
// 1. Receber um array.
// 2. Receber os índices inicio e fim.
// 3. Utilizar slice() para selecionar os produtos.
// 4. Utilizar join() para retornar uma string separada por |.

console.log(
  'EX13PT2 - SLICE p/ cortar e JOIN p/ juntar------------------------------------------------------------------------------------------------------------------'
);
// console.log('EX12 - SLICE p/ cortar e JOIN p/ juntar------------------------------------------------------');
function montarListaProdutos(lista, inicio, fim) {
  const novaLista = lista.slice(inicio, fim).join(' - ');
  return novaLista;
}
console.log(montarListaProdutos(produtosEX12, 2, 5));

console.log(
  'FIM EX13PT2------------------------------------------------------------------------------------------------------------------'
);

// PT2 — EX14
// Combinação: slice() + map() + join()
// Use o array:
const vendasEX14 = [
  { produto: 'Monitor', valor: 900 },
  { produto: 'Mouse', valor: 100 },
  { produto: 'Teclado', valor: 250 },
  { produto: 'Webcam', valor: 200 },
  { produto: 'Notebook', valor: 3500 },
];
// Crie a função montarRelatorioVendas(lista, inicio, fim):
// 1. slice() para selecionar parte das vendas.
// 2. map() para extrair somente os nomes dos produtos.
// 3. join() para montar uma string separada por -.
// 4. Retorne a string.
function montarRelatorioVendas(lista, inicio, fim) {
  const report = lista.slice(inicio, fim).map((p) => p.produto);
  const juntar = report.join(' - ');

  return juntar;
}
console.log(montarRelatorioVendas(vendasEX14, 0, 4));

console.log(
  'FIM EX14PT2------------------------------------------------------------------------------------------------------------------'
);

// PT2 — EX15
// Combinação: slice() + filter() + map() + join()
// Agora vamos adicionar uma condição ao nosso relatório.
// 1. Array
const vendasEX15 = [
  { produto: 'Monitor', valor: 900 },
  { produto: 'Mouse', valor: 100 },
  { produto: 'Teclado', valor: 250 },
  { produto: 'Webcam', valor: 200 },
  { produto: 'Notebook', valor: 3500 },
  { produto: 'Impressora', valor: 600 },
  { produto: 'Headset', valor: 300 },
];
// 2. Desafio
// Crie uma função chamada montarRelatorioVendas(lista, inicio, fim).
// Ela deverá:
// 1. slice(): selecionar as vendas entre os índices recebidos.
// 2. filter(): manter somente as vendas com valor maior ou igual a 300.
// 3. map(): extrair somente o nome dos produtos.
// 4. join(): transformar os nomes em uma string separados por -.
// 5. Retornar o resultado.

function montarRelatorioVendas(lista, inicio, fim) {
  const cortar = lista.slice(inicio, fim);
  const filtrarETransformar = cortar
    .filter((p) => p.valor >= 300)
    .map((p) => p.produto)
    .join(' - ');
  return filtrarETransformar;
}
console.log(montarRelatorioVendas(vendasEX15, 1, 7));

console.log(
  'FIM EX15PT2------------------------------------------------------------------------------------------------------------------'
);

// PT2 — EX16
// Tema: slice() com índices negativos + filter() + map() + join()
// Mas também podemos usar índices negativos!         ==> Isso é muito útil quando não sabemos exatamente o tamanho do array.
// - slice(-1) → último elemento.
// - slice(-2) → últimos dois elementos.
// - slice(-3) → últimos três elementos.
// 3. Seu desafio
// Crie uma função relatorioUltimasVendas(lista) que:
// 1. Utilize slice() para selecionar somente as últimas 4 vendas.
// 2. Utilize filter() para manter vendas com valor maior ou igual a 300.
// 3. Utilize map() para extrair os nomes dos produtos.
// 4. Utilize join() para juntar os nomes usando -.
// 5. Retorne o resultado.
// Resultado esperado:
// Notebook - Impressora - Headset
function relatorioUltimasVendas(lista) {
  const novaLista = lista
    .slice(-4)
    .filter((p) => p.valor >= 300)
    .map((p) => p.produto)
    .join(' - ');
  return novaLista;
}
console.log(relatorioUltimasVendas(vendasEX15));

console.log(
  'FIM EX16PT2------------------------------------------------------------------------------------------------------------------'
);

// PT2 — EX17
// Combinação: slice() + filter() + map() + reduce()
// 2. Seu desafio
// Crie uma função chamada calcularVendasRecentes(lista) que:
// 1. slice(): selecione somente as últimas 4 vendas.
// 2. filter(): mantenha somente vendas com valor maior ou igual a 300.
// 3. map(): extraia somente os valores das vendas.
// 4. reduce(): some todos os valores.
// 5. Retorne o faturamento total.
function calcularVendasRecentes(lista) {
  const cortar = lista
    .slice(0)
    .filter((p) => p.valor >= 300)
    .map((p) => p.valor)
    .reduce((acc, p) => acc + p, 0);
  return cortar;
}
console.log(calcularVendasRecentes(vendasEX15));

console.log(
  'FIM EX17PT2------------------------------------------------------------------------------------------------------------------'
);

// EX18 — Arrow Functions + forEach()
// Vamos praticar duas coisas:
// 1. Transformar uma função tradicional em arrow function.
// 2. Usar forEach() para percorrer os elementos e gerar um relatório.
const vendasEX18 = [
  { produto: 'Monitor', valor: 900 },
  { produto: 'Mouse', valor: 100 },
  { produto: 'Teclado', valor: 250 },
  { produto: 'Notebook', valor: 3500 },
];
// 1. Crie uma função tradicional chamada calcularTotal que receba a lista e retorne a soma dos valores usando reduce().
// 2. Depois, transforme essa função em uma arrow function chamada calcularTotalArrow.
// 3. Crie uma função exibirRelatorio que receba a lista e use forEach() para exibir no console o nome de cada produto e seu valor.
console.log(
  '                               EX18PT2 A)Função tradicional + reduce------------------------------------------------------------'
);
//                                EX18PT2 A)Função tradicional + reduce------------------------------------------------------------'
// console.log('EX18PT2 A)Função tradicional + reduce')
function calcularTotal18(lista) {
  const total = lista.reduce((acc, item) => acc + item.valor, 0);
  return total;
}
console.log('Total com função tradicional ' + calcularTotal18(vendasEX18));

console.log('                               EX18PT2 B)Arrow function + reduce------------------------------------------------------------');
//                                          EX18PT2 B)Arrow function + reduce------------------------------------------------------------
const calcularTotalArrow = (lista) => {
  return lista.reduce((acc, item) => acc + item.valor, 0);
};
console.log('Total com Arrow ' + calcularTotalArrow(vendasEX18));

console.log(
  '                               EX18PT2 C)Arrow function + ForEach------------------------------------------------------------'
);
// ------------------------------ EX18PT2 C)Arrow function + ForEach------------------------------------------------------------'
const calcularTotalArrowForEach = (lista) => {
  let total = 0;
  lista.forEach((item, i) => {
    console.log(item.produto, item.valor);
    total += item.valor;
  });
  return total;
};
console.log('Total com ARROW function + forEACH ' + calcularTotalArrowForEach(vendasEX18));

//Function + REST + REDUCE - soma sem definir quantidade de PARÂMETROS
// function somar(...parametros) {
//   return parametros.reduce((acc, item) => acc + item, 0);
// }
// console.log(somar(20, 10, 5, 1, 10, 20));
console.log(
  'FIM EX18PT2------------------------------------------------------------------------------------------------------------------'
);

// EX19 — Um pequeno desafio para fortalecer Arrow Functions
const calcularDobro = (numero) => numero * 2;
console.log(calcularDobro(10));

const calcularDobro2 = (numero) => {
  return numero * 2;
};
console.log(calcularDobro2(10));
