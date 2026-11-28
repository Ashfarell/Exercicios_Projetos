1. O que vamos construir?
Uma aplicação que simula uma consulta a uma API de filmes.

O usuário digita um nome ou parte do nome de um filme e o sistema:
1. Recebe o texto digitado.
2. Faz uma consulta simulando uma API.
3. Aguarda 2 segundos.
4. Procura os filmes no nosso banco de dados.
5. Retorna os resultados.
6. Exibe os filmes encontrados.
7. Trata possíveis erros.
2. O que vamos praticar?
Conceito	Aplicação no projeto
function	Organizar as operações
Promise	Simular uma requisição
resolve / reject	Retornar sucesso ou erro
setTimeout	Simular demora da API
.then / .catch	Consumir a Promise
async / await	Consumir a Promise de outra maneira
try / catch	Tratar erros
find()	Buscar um filme específico
filter()	Buscar vários filmes
map()	Transformar os resultados
forEach()	Exibir os filmes
fetch()	Posteriormente consultar a API real

Também vamos trabalhar com arrays de objetos e manipulação do DOM.

3. Nosso plano de desenvolvimento
1. Etapa 1 — Banco de dados
   
   Criar nosso array de filmes e entender sua estrutura.
2. Etapa 2 — API simulada
   
   Criar uma função com Promise, setTimeout, filter() e reject().
3. Etapa 3 — Consumo da API
   
   Primeiro com .then() e .catch(), depois com async/await e try/catch.
4. Etapa 4 — Resultados
   
   Exibir os filmes encontrados usando map() ou forEach().
5. Etapa 5 — HTML e DOM
   
   Criar uma interface para pesquisar e apresentar os filmes.
6. Etapa 6 — API real
   
   Substituir nossa simulação pelo fetch() e integrar com a OMDb.