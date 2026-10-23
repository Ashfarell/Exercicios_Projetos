let campo1 = document.getElementById('campo1');
let campo2 = document.getElementById('campo2');
let operacao = document.getElementById('operacao');
let botaoCalcular = document.getElementById('botaoCalcular');
let valorResultado = document.getElementById('valorResultado');
let resultado = document.querySelector('.resultado');
let apagarResultado = document.getElementById('apagarResultado');
let listaResultados = document.getElementById('listaResultados');
let copiarResultado = document.getElementById('copiarResultado');
// let resultadoAtual = document.getElementById('resultadoAtual');
let hora = document.getElementById('hora');
let campoTeste = document.getElementById('campoTeste');

let textoResultado; //DECLARADA FORA P/ SER USADA TAMBÉM NA FUNÇÃO apagarResultado()
let contador = 0; //Para o HISTÓRICO DE RESULTADO

let soma;
let subtracao;
let multiplicacao;
let divisao;
let ultimoResultado; //VAR para armazenar resultado

// LÓGICA CALCULADORA
botaoCalcular.addEventListener('click', function () {
  //   VERIFICA CAMPOS VAZIOS
  if (campo1.value === '' || campo2.value === '' || operacao.value === '') {
    alert('Preencha todos os campos');
  } else {
    if (operacao.value === '+') {
      // SOMA
      soma = Number(campo1.value) + Number(campo2.value);
      //   valorResultado.textContent = soma; //                            ALTERA ELEMENTO EXISTENTE
      // FAZ ELEMENTO APARECER NA PÁGINA
      resultado.style.display = 'block';

      // REMOVE ELEMENTO PREVIAMENTE CRIADO (p/ mostrar apenas o último)
      if (textoResultado) {
        textoResultado.remove();
      }
      // CRIA NOVO ELEMENTO NO INÍCIO
      textoResultado = document.createElement('p');
      textoResultado.textContent = `O resultado é: ${soma}`; //             ALTERA TEXTO ELEMENTO CRIADO
      listaResultados.prepend(textoResultado); //                    POSIÇÃO DO ELEMENTO CRIADO

      ultimoResultado = soma;
      resultadoAtual.textContent = `O resultado é: ${soma}`;
      // SUBTRAÇÃO
    } else if (operacao.value === '-') {
      subtracao = Number(campo1.value) - Number(campo2.value);
      resultado.style.display = 'block';

      // REMOVE ELEMENTO PREVIAMENTE CRIADO (p/ mostrar apenas o último)
      if (textoResultado) {
        textoResultado.remove();
      }

      // CRIA NOVO ELEMENTO NO INÍCIO
      textoResultado = document.createElement('p');
      textoResultado.textContent = `O resultado é: ${subtracao}`;
      listaResultados.prepend(textoResultado);
      ultimoResultado = subtracao;
      //    MULTIPLICAÇÃO
    } else if (operacao.value === 'x') {
      multiplicacao = Number(campo1.value) * Number(campo2.value);

      // REMOVE ELEMENTO PREVIAMENTE CRIADO (p/ mostrar apenas o último)
      if (textoResultado) {
        textoResultado.remove();
      }

      // CRIA NOVO ELEMENTO NO INÍCIO
      textoResultado = document.createElement('p');
      textoResultado.textContent = `O resultado é: ${multiplicacao}`;
      listaResultados.prepend(textoResultado);
      resultado.style.display = 'block';
      ultimoResultado = multiplicacao;
      //    CHECK DIVISÃO POR 0
    } else if (operacao.value === '/' && Number(campo2.value) === 0) {
      alert('Não é possível dividir um número por 0');
      //    DIVISÃO
    } else if (operacao.value === '/') {
      divisao = Number(campo1.value) / Number(campo2.value);

      // REMOVE ELEMENTO PREVIAMENTE CRIADO (p/ mostrar apenas o último)
      if (textoResultado) {
        textoResultado.remove();
      }

      // CRIA NOVO ELEMENTO NO INÍCIO
      textoResultado = document.createElement('p');
      textoResultado.textContent = `O resultado é: ${divisao}`;
      listaResultados.prepend(textoResultado);
      resultado.style.display = 'block';
      ultimoResultado = divisao;
    }
  }
});

// APAGAR CAMPOS - Criamos um div listaResultados" p/ poder apagar apenas os elementos criados
apagarResultado.addEventListener('click', function () {
  campo1.value = '';
  campo2.value = '';
  operacao.value = 'Selecione';
  listaResultados.innerHTML = '';
});

// HISTÓRICO DE RESULTADOS - CRIAR NOVOS ELEMENTOS NO HTML
copiarResultado.addEventListener('click', function () {
  contador++;

  hist = document.createElement('p');
  hist.textContent = `Resultado ${contador}: ${ultimoResultado} `;
  listaResultados.appendChild(hist);
});

// *Como criar uma lista ARRAY na página? ?????????????

// let lista = ['carro', 'moto', 'barco'];
// let ul = lista.createElement('ul');
// botaoCalcular.addEventListener('click', function () {
//   lista.forEach((item) => {
//     let li = document.createElement('li');
//     li.innerText = item.toUpperCase();
//     ul.appendChild(li);
//   });
// });

function mostrarHora() {
  let data = new Date();
  dia = document.createElement('p');
  dia.textContent = `Hoje é ${data}`;
  hora.appendChild(dia);
}

// TESTE -----------CAPTURAR ELEMENTOS DAS TECLAS
document.addEventListener('keydown', function (event) {
  console.log(`Pressionou: ${event.key}`);
});

campo1.addEventListener('keyup', function (event) {
  console.log(`Soltou ${event.key}`);
});

function sendMessage() {
  let textSanitized = text.trim();
  if (textSanitized.length > 0) console.log(textSanitized);
}

campoTeste.addEventListener('keyup', function (event) {
  if (event.key.toLocaleLowerCase() == 'enter') {
    sendMessage(this.campoTeste.value);
    input.value = '';
  }
});
