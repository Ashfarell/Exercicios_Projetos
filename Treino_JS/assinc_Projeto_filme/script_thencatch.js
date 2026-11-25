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
  //                usando THEN e CATCH
  //  1.  requisicao(nameMovie) inicia o fetch()
  requisicao(nameMovie).then((resposta) => {
    //2. Primeiro .then() recebe resposta (objeto HTTP).
    return resposta
      .json()
      .then((dados) => {
        // 3. resposta.json() inicia a conversão do conteúdo.
        //4.  Segundo .then() recebe dados (objeto JavaScript).
        console.log(dados);
        if (dados.Response === 'True') {
          console.log(dados.Response + ' -  Deu certo');
          //   console.log(dados.Search[0].Title);
          //                Criando campos dinâmicos com forEach
          dados.Search.forEach((item) => {
            // console.log(item.Title + ' ' + item.Year);
            let card = document.createElement('div');
            listaFilmes.appendChild(card);
            card.classList.add('card-filme');
            let nameMovie = document.createElement('div');
            nameMovie.textContent = item.Title;
            card.appendChild(nameMovie);
            let yearMovie = document.createElement('p');
            yearMovie.textContent = item.Year;
            card.appendChild(yearMovie);

            let poster = document.createElement('img');
            card.appendChild(poster);
            //Tratando erro se imagem NÃO existir
            if (item.Poster !== 'N/A') {
              poster.src = item.Poster;
              poster.classList.add('poster');
            }
            // Aqui verificamos se o carregamento da imagem teve sucesso.
            poster.addEventListener('error', () => {
              console.log('Não foi possível carregar a imagem');
              let campoErro = document.createElement('p');
              campoErro.textContent = 'Não foi possível carregar a imagem';
              campoErro.id = 'campoErro';
              card.appendChild(campoErro);
              poster.remove();
            });
          });
        } else {
          console.log(dados.Error + ' - Deu errado');
        }
      })
      .catch((erro) => {
        //5. .catch() trata uma eventual rejeição da cadeia.
        // **** não precisamos converter para JSON porque o .catch() não recebe os dados da API. Ele recebe o motivo pelo qual uma Promise foi rejeitada.
        console.log(erro);
      });
  });
  //
  console.log('Formulário enviado');
  console.log(nameMovie);
  nomeFilme.value = ''; //Limpa campo de resultados
});

function requisicao(filme) {
  console.log('Entrou na função requisicao');
  return fetch(`https://www.omdbapi.com/?apikey=9f9c0997&s=${filme}`);
}
