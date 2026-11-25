const formulario = document.getElementById('formulario');
const nomeFilme = document.getElementById('nomeFilme');
const mensagem = document.getElementById('mensagem');
const resultados = document.getElementById('resultados');
const listaFilmes = document.getElementById('lista-filmes'); //Serve p/ limpar apenas os valores retornados pela API

// 2. Evento do formulário
formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  listaFilmes.innerHTML = ''; // LIMPA O CAMPO de RESULTADOS

  let nameMovie = nomeFilme.value.trim(); // Remove espaços no início/final

  if (nameMovie === '') {
    alert('Por favor digite um nome válido');
    console.log('Encerrado sem execução correta');
    return;
  } else {
    console.log('nome filme ok');
  }
  // 3. *** Passamos o valor (nameMovie) para a função requisição !!!!!!!!!!!
  requisicao(nameMovie);
  //
  console.log('Formulário enviado');
  console.log(nameMovie);
  nomeFilme.value = ''; //Limpa campo de resultados
});

// ***fetch() é uma função nativa do JavaScript usada para fazer requisições HTTP.
// fetch() retorna uma Promise! ==>Portanto, poderemos utilizar tanto .then() e .catch() quanto async/await e try/catch.
// fetch(...): envia uma requisição para a API.
// Here is your key: 9f9c0997   //OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=9f9c0997
// A estrutura de uma URL de pesquisa será assim:
// https://www.omdbapi.com/?apikey=SUA_CHAVE&s=Batman

// Observe os parâmetros:
// - apikey: nossa chave de acesso.
// - s: o termo que queremos pesquisar.
// - Batman: o nome pesquisado.
// O parâmetro s retorna uma lista de resultados, enquanto t busca um título específico.
// The Open Movie Database

// ***Até agora, nossas Promises eram criadas manualmente com new Promise().
// Com fetch(), não precisamos criar a Promise. A própria função já retorna uma!

//*** Essa função é executada dentro do evento submit do formulario
async function requisicao(filme) {
  console.log('Entrou na função requisicao');
  //        req:  Aqui ficará nosso fetch ==>armazena o objeto Response (HTTP), que contém informações como:
  const req = await fetch(`https://www.omdbapi.com/?apikey=9f9c0997&s=${filme}`);
  console.log(req);
  //        dados: recebe o conteúdo convertido em JavaScript (OBJETO JS)
  const dados = await req.json();
  //        req.json() lê o conteúdo da resposta e converte o JSON em um objeto JavaScript.
  console.log(dados);
  console.log(dados.Search[8]); //Pega um item do array

  //      forEach() resultado esperado é ver os títulos dos filmes retornados pela API.
  dados.Search.forEach((filme, i) => {
    console.log(filme.Title);

    //Criando campos dinâmicos
    let card = document.createElement('div');
    listaFilmes.appendChild(card);

    card.classList.add('card-filme'); //CLASSE p/ CSS

    let titulo = document.createElement('h3');
    titulo.textContent = filme.Title;
    card.appendChild(titulo);

    let ano = document.createElement('p');
    ano.textContent = filme.Year;
    card.appendChild(ano);

    //Pegando imagem
    let poster = document.createElement('img');
    poster.src = filme.Poster;
    card.appendChild(poster);
    poster.classList.add('poster');
  });
}

// Conceito	Para que serve
// Promise	      Representa uma operação que ainda não terminou.
// resolve()	    Indica que a operação foi concluída com sucesso.
// reject()	      Indica que a operação falhou.
// .then()	      Trata o resultado de sucesso de uma Promise.
// .catch()	      Trata uma rejeição ou erro em uma Promise.
// async	        Declara uma função que retorna uma Promise.
// await	        Aguarda uma Promise dentro de uma função async.
// try/catch	    Permite tratar erros usando blocos de código.
