//                                                                                    PARTE 1 FOR + FOREACH

// Exercício 1 — Nosso estoque de produtos
// Vamos começar com um array de objetos, bem parecido com situações reais de programação.
// 1. Os dados Copie este código para o VS Code:
const produtos1 = [
  { nome: 'Notebook', preco: 3500, quantidade: 4, categoria: 'Eletrônicos' },
  { nome: 'Mouse', preco: 80, quantidade: 15, categoria: 'Eletrônicos' },
  { nome: 'Cadeira', preco: 900, quantidade: 3, categoria: 'Móveis' },
  { nome: 'Mesa', preco: 1200, quantidade: 0, categoria: 'Móveis' },
  { nome: 'Cafeteira', preco: 250, quantidade: 8, categoria: 'Casa' },
];

// Desafio 1A — Percorrendo o array
// Fácil   // Escreva um código que percorra o array e exiba no console o nome de cada produto.

//                              SOLUÇÃO com FOR
function exibirA(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i].nome); //              Com for usamos ÍNDICE [I]
  }
}

exibirA(produtos1);

//                              SOLUÇÃO com ForEach
// Índice já começa no 0
function exibirB(lista) {
  lista.forEach((produto, i) => {
    // console.log('Índice:', i);
    console.log(produto.nome);
  });
}

exibirB(produtos1);

console.log('FIM EX1 ------------------------------------------------------------------FOR + forEach');

// Exercício 2 — Relatório de estoque
// Sua missão: crie uma função chamada relatorioEstoque(lista) que use forEach para exibir o seguinte para cada produto:
// Produto 0: Notebook | Estoque: 4
// Produto 1: Mouse | Estoque: 15
// Produto 2: Cadeira | Estoque: 3
// Produto 3: Mesa | Estoque: 0
// Produto 4: Cafeteira | Estoque: 8

function relatorioEstoqueA(lista) {
  lista.forEach((produto, i) => {
    console.log(`Produto ${i}: ${produto.nome} | ${produto.quantidade}`);
    // console.log('Produto' + ' ' + i + ': ' + produto.nome + ' | ' + produto.quantidade);
  });
}

relatorioEstoqueA(produtos1);

// ***********lista[i] → quero acessar o elemento de uma posição do array.
// ***********produto.nome → já tenho o objeto e quero acessar uma propriedade dele.

console.log('FIM EX2 ------------------------------------------------------------------forEach');

// Exercício 3 — Relatório de vendas
// Imagine que você trabalha em uma empresa e precisa gerar um relatório das vendas realizadas por cada vendedor.
// 1. Os dados
// 2. Sua missão    // Crie uma função chamada relatorioVendas(lista) usando forEach.
// Para cada venda, você deverá:
// 1. Exibir o índice da venda.
// 2. Exibir o nome do vendedor e o produto vendido.
// 3. Calcular o faturamento daquela venda: preco * quantidade.
// 4. Exibir o faturamento calculado.

const vendas = [
  { vendedor: 'Carlos', produto: 'Notebook', preco: 3500, quantidade: 2 },
  { vendedor: 'Ana', produto: 'Mouse', preco: 80, quantidade: 10 },
  { vendedor: 'Pedro', produto: 'Monitor', preco: 1200, quantidade: 3 },
  { vendedor: 'Mariana', produto: 'Teclado', preco: 150, quantidade: 5 },
];

function relatorioVendas(lista) {
  lista.forEach((venda, i) => {
    console.log(`Venda ${i} ${venda.vendedor} | ${venda.produto} | Faturamento: R$${venda.preco * venda.quantidade}`);
  });
}

relatorioVendas(vendas);
console.log('FIM EX3 ------------------------------------------------------------------forEach');

// // Exercício 4 — Comissão dos vendedores
// 1. Sua missão   // Crie uma função chamada calcularComissao(lista) que utilize forEach para percorrer as vendas e calcular uma comissão de 5% sobre o faturamento de cada venda.
// Para cada vendedor, você deve exibir:
// - Nome do vendedor.
// - Produto vendido.
// - Valor da comissão.
// O faturamento é o preço multiplicado pela quantidade. A comissão é 5% desse faturamento.

function calcularComissao(lista) {
  lista.forEach((venda, i) => {
    console.log(
      `${venda.vendedor} | ${venda.produto} | Faturamento: R$${venda.preco * venda.quantidade} | Comissão (5%): R$${(venda.preco * venda.quantidade * 0.05).toFixed(2)}`
    );
  });
}

calcularComissao(vendas);

console.log('FIM EX4 ------------------------------------------------------------------forEach');

console.log('FIM PARTE 1--------------------------------------------------------------------------------------------------------');
//                                                                                        PARTE 2 FILTER
//Exercício 1
// Encontrando as vendas maiores
// Crie uma função chamada filtrarVendas(lista) que retorne somente as vendas cujo faturamento seja superior a R$ 3.000.

console.log('PARTE 2 EX 1 A)Criando VAR com filter---------------------------------------------------------------------------------');
function filtrarVendasA(lista) {
  const resultado = lista.filter((venda) => {
    let fat = venda.preco * venda.quantidade;
    return fat > 3000; //                       1º RETURN
  });

  return resultado; //                         2º RETURN
}

console.log(filtrarVendasA(vendas));

console.log('PARTE 2 EX 1 B)Sem criar VAR com filter---------------------------------------------------------------------------------');
function filtrarVendasB(lista) {
  const resultado = lista.filter((venda) => venda.preco * venda.quantidade > 3000);
  return resultado;
}

console.log(filtrarVendasB(vendas));

console.log('FIM EX1 ------------------------------------------------------------------FILTER');
// Exercício 2 — Filtrar por quantidade
// Objetivo: criar uma função chamada filtrarQuantidade que receba uma lista e retorne somente as vendas cuja quantidade seja maior ou igual a 5.
function filtrarQuantidade(lista) {
  const filtrarVendas = lista.filter((p) => p.quantidade >= 5);
  return filtrarVendas;
}
console.log(filtrarQuantidade(vendas));
console.log('FIM EX2 ------------------------------------------------------------------FILTER');

// Exercício 3 — Filtrar pelo faturamento
// Agora vamos voltar a calcular, como fizemos anteriormente.
// Usando o array vendas, crie uma função chamada filtrarFaturamento que retorne apenas as vendas cujo faturamento seja maior que R$ 2.000.
function filtrarFaturamento(lista) {
  const filtrar = lista.filter((p) => p.preco * p.quantidade > 2000);
  return filtrar;
}
console.log(filtrarFaturamento(vendas));

console.log('FIM EX3 ------------------------------------------------------------------FILTER');

// Exercício 4 — Filtrar por vendedor
// Usando nosso array vendas, crie uma função chamada buscarVendedor que retorne somente as vendas realizadas por Pedro.

function buscarVendedor(lista) {
  const filtrar = lista.filter((p) => p.vendedor === 'Pedro');
  return filtrar;
}
console.log(buscarVendedor(vendas));

console.log('FIM EX4 ------------------------------------------------------------------FILTER');

//                    Ich mache die vier Übungen und schicke sie dir danach.“
//                    Was kommt als Nächstes?“ = O que vem a seguir?

// Exercício 5 — Agora vamos combinar condições
// Quero que você crie uma função chamada filtrarVendasAltas que retorne somente as vendas que atendam a duas condições ao mesmo tempo:
// - O faturamento seja maior que R$ 2.000.
// - A quantidade vendida seja maior que 2.

function filtrarVendasAltas(lista) {
  const filtrar = lista.filter((p) => p.preco * p.quantidade > 2000 && p.quantidade > 2);
  return filtrar;
}

console.log(filtrarVendasAltas(vendas));
console.log('FIM EX5 ------------------------------------------------------------------FILTER');

// Übung 6 — Filtrar produtos
// Objetivo: crie uma função filtrarProdutos(lista) que retorne somente os produtos que atendam às duas condições:
// 1. A categoria seja 'Eletrônicos'.
// 2. O preço seja inferior a R$ 1.000.

function filtrarProdutos(lista) {
  const filtrar = lista.filter((p) => p.categoria === 'Eletrônicos' && p.preco < 1000);
  return filtrar;
}

console.log(filtrarProdutos(produtos1));
console.log('FIM EX6 ------------------------------------------------------------------FILTER');
console.log('FIM PARTE 1--------------------------------------------------------------------------------------------------------');
//                                                                                        PARTE 3 MAP

// Exercício 1 — Criar uma lista de nomes
// Usando nosso array produtos, crie uma função chamada listarNomes(lista) que retorne um array contendo somente os nomes dos produtos.

function filtrarNomes(lista) {
  const listar = lista.map((p) => p.nome);
  return listar;
}

console.log(filtrarNomes(produtos1));
console.log('FIM EX1 ------------------------------------------------------------------MAP');

// 2. Exercício 2 — Criar uma lista de preços
// Agora vamos subir um degrau, sem complicar demais.
// Usando o array produtos1, crie uma função chamada listarPrecos(lista) que retorne um array contendo somente os preços dos produtos.

function listaPreco(lista) {
  const listar = lista.map((p) => p.preco);
  return listar;
}
console.log(listaPreco(produtos1));

console.log('FIM EX2 ------------------------------------------------------------------MAP');
// Exercício 3 — Transformar os dados
// Agora vamos dar um passo a mais. 💪
// Usando produtos1, crie uma função chamada listarValoresEstoque(lista) que retorne um array com o valor total em estoque de cada produto.
function listarValoresEstoque(lista) {
  const transformar = lista.map((p) => p.preco * p.quantidade);
  return transformar;
}

console.log(listarValoresEstoque(produtos1));

console.log('FIM EX3 ------------------------------------------------------------------MAP');
// Exercício 4 — Criar uma lista de frases
// Vamos praticar um uso diferente do map(): transformar cada objeto em uma string.
// Usando produtos1, crie uma função listarProdutos(lista) que retorne frases neste formato:
// [
//   'Notebook custa R$ 3500',
function listaProdutos(lista) {
  const transformar = lista.map((p) => `${p.nome} custa R$${p.preco}`);
  return transformar;
}

console.log(listaProdutos(produtos1));
console.log('FIM EX4 ------------------------------------------------------------------MAP');

// Exercício 5 — Um desafio um pouco maior
// Agora vamos combinar o que você já sabe com uma pequena transformação matemática.
// Crie uma função chamada aplicarDesconto(lista) que use map() para retornar um novo array com o preço de cada produto após um desconto de 10%.
// Por exemplo:
// - Notebook: R$ 3.500 → R$ 3.150
// - Mouse: R$ 80 → R$ 72

function aplicarDesconto(lista) {
  const novoPreco = lista.map((p) => `${p.nome} R$${p.preco.toFixed(2)} → R$${(p.preco * 0.9).toFixed(2)}`);
  return novoPreco;
}

console.log(aplicarDesconto(produtos1));
console.log('FIM EX5 ------------------------------------------------------------------MAP');

// Exercício 6 — Último de map() antes de irmos para reduce!
// Agora quero que você faça uma pequena combinação de transformações.
// Crie uma função listarEstoqueBaixo(lista) que retorne frases no formato:
// Mouse — Estoque: 15 unidades
// Mas atenção: a função deve incluir apenas produtos com quantidade menor que 5.

console.log('------------------------------------------------------------------------------------EX6 A) filter + MAP separados');
function listarEstoqueBaixoA(lista) {
  const filtrar = lista.filter((p) => p.quantidade < 5);
  const estoque = filtrar.map((p) => `${p.nome} — Estoque: ${p.quantidade} unidades`);
  return estoque;
}

console.log(listarEstoqueBaixoA(produtos1));

console.log('------------------------------------------------------------------------------------EX6 B) filter + MAP juntos');
function listarEstoqueBaixoB(lista) {
  const filtrarTransformar = lista.filter((p) => p.quantidade < 5).map((p) => `${p.nome}  —  Estoque: ${p.quantidade} unidades`);
  return filtrarTransformar;
}

console.log(listarEstoqueBaixoB(produtos1));

console.log('FIM EX6 ------------------------------------------------------------------FILTER + MAP');

console.log('FIM PARTE 3--------------------------------------------------------------------------------------------------------');
//                                                                                        PARTE 4 REDUCE
// Reduce — Exercício 1: somar os preços
// Objetivo: criar uma função somarPrecos(lista) que retorne a soma dos preços de todos os produtos.
function somarPrecos(lista) {
  const somar = lista.reduce((acc, item) => acc + item.preco, 0);
  return somar;
}

console.log(somarPrecos(produtos1));
console.log('FIM EX1 ------------------------------------------------------------------REDUCE');

// Exercício 2 — Somar o valor total do estoque
// Agora vamos subir um degrau.
// Em vez de somar apenas os preços, queremos somar o valor de todos os produtos disponíveis no estoque.
// A fórmula para cada produto é:

console.log('------------------------------------------------------------------------------------EX1 A) MAP + REDUCE');
function somarValorEstoqueA(lista) {
  const total = lista.map((p) => p.preco * p.quantidade);
  const somar = total.reduce((acc, item) => acc + item, 0);
  return somar;
}
console.log(somarValorEstoqueA(produtos1));

console.log('------------------------------------------------------------------------------------EX1 B)REDUCE');
function somarValorEstoqueB(lista) {
  const total = lista.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  return total;
}
console.log(somarValorEstoqueB(produtos1));

console.log('FIM EX2 ------------------------------------------------------------------REDUCE + MAP');

//                                            Ich muss bald gehen, aber ich komme später wieder.“

// Übung 3 — Somar as unidades em estoque
// Nosso array continua sendo produtos1. Queremos somar a quantidade de unidades de todos os produtos.
// Sua missão é criar uma função que retorne 30, usando apenas reduce().
function somarUnidadesEstoque(lista) {
  const somar = lista.reduce((acc, item) => acc + item.quantidade, 0);
  return somar;
}

console.log(somarUnidadesEstoque(produtos1));

console.log('FIM EX3 ------------------------------------------------------------------REDUCE');

// Übung 4 — Encontrar o produto mais caro
// Usando produtos1, crie uma função chamada encontrarProdutoMaisCaro(lista) que retorne o objeto completo do produto mais caro, e não apenas seu preço.
// O resultado deve ser o objeto do Notebook, com preço de 3500.

console.log('PARTE 3 EX 4 A)REDUCE + if---------------------------------------------------------------------------------');
function encontrarProdutoMaisCaroA(lista) {
  const maisCaro = lista.reduce((acc, item) => {
    if (item.preco > acc.preco) {
      // O que você deve retornar aqui?
      return item;
    }
    return acc;

    // E o que deve retornar se o acumulador continuar sendo o mais caro?
  }, lista[0]); //                       Começa no 1º item da lista

  return maisCaro;
}

console.log(encontrarProdutoMaisCaroA(produtos1));

console.log('PARTE 3 EX 4 B)REDUCE + OPERADOR TERNÁRIO---------------------------------------------------------------------------------');
function encontrarProdutoMaisCaroB(lista) {
  const maisCaro = lista.reduce((acc, item) => {
    return acc.preco > item.preco ? acc : item;
  }, lista[0]);
  return maisCaro;
}

console.log(encontrarProdutoMaisCaroB(produtos1));

console.log('FIM EX4 ------------------------------------------------------------------REDUCE');
