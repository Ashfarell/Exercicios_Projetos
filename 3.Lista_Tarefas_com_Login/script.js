let emailUser = document.getElementById('emailUser');
let senha = document.querySelector('#senha');
// const botaoEnviarlogin = document.getElementById('botaoEnviarlogin');
const botaoEnviarlogin = document.querySelector('#botaoEnviarlogin');
let adicionarAtividade = document.getElementById('adicionarAtividade');
let digiteAtividade = document.querySelector('#digiteAtividade');
let resumoAtividades = document.querySelector('.resumoAtividades');
let atividade = document.querySelector('.atividade');
let msgErro = document.getElementById('msgErro');
let camposLogin = document.querySelector('.camposLogin');
let login = document.querySelector('.login');
let loginConteudo = document.querySelector('.loginConteudo');
let contador = 0;

// 1)Criar espaço entre os botões criados (concluir e exluir)
// 2)se concluir atividade ==>deixar texto tachado
// 3)Se excluir atividade ==>remover o campo
// 4)Cruzar login com DB

// BLOCO P/ VERIFICAR CAMPOS PREENCHIDOS LOGIN
botaoEnviarlogin.addEventListener('click', function () {
  let emailLimpo = emailUser.value.trim();
  let senhaLimpa = senha.value.trim();
  if (emailLimpo === '' || senhaLimpa === '') {
    camposLogin.classList.add('loginInvalido');
    alert('Preencher os campos de login');
  }
});

// BLOCO CRIAR ATV ADICIONADAS
adicionarAtividade.addEventListener('click', function () {
  // BLOCO P/ VERIFICAR CAMPO ATIVIDADE
  if (digiteAtividade.value.trim() === '') {
    digiteAtividade.classList.add('campoInvalido');
    msgErro.hidden = false;
  } else {
    resumoAtividades.style.display = 'block';
    contador++;
    // CRIA CAMPO DA ATV ADD
    if (msgErro) {
      msgErro.hidden = true;
    }
    //          CRIAR CAMPO RESUMO
    let atv1 = document.createElement('p');
    atv1.textContent = `Atividade ${contador}: ${digiteAtividade.value}`;
    resumoAtividades.appendChild(atv1);
    digiteAtividade.value = '';

    //        CRIA BOTÃO CONCLUIR + EXCLUIR
    let concluir = document.createElement('button');
    concluir.textContent = 'Concluir atividade';
    resumoAtividades.appendChild(concluir);
    // CRIA BOTÃO EXCLUIR
    let excluir = document.createElement('button');
    excluir.textContent = 'Excluir atividade';
    resumoAtividades.append(excluir); //             PQ USEI APPEND()?????

    //              CONCLUIR (TAXAR) ==>DESFAZER ATIVIDADE (DESTAXAR)
    concluir.addEventListener('click', function () {
      if (concluir.textContent === 'Concluir atividade') {
        concluir.textContent = 'Desfazer';
        // atv1.style = 'text-decoration: line-through';    //usando CSS p/ verificar
        atv1.classList.add('atv1'); //       usando class p/ verificar
      } else {
        concluir.textContent = 'Concluir atividade';
        // atv1.style = 'text-decoration:none';
        atv1.classList.remove('atv1');
      }
    });
    // BLOCO PARA EXCLUIR ATIVIDADE
    // atv1.remove();
    // concluir.remove();
    // excluir.remove();
  }
});

//        BLOCO P/ VERIFICAR SE USER EXISTE  B) SOLUÇÃO COM FIND() -
botaoEnviarlogin.addEventListener('click', function () {
  let emailLimpo = emailUser.value.trim();
  let senhaLimpa = senha.value.trim();
  const usuarioEncontrado = db.find((usuario) => {
    return usuario.email === emailLimpo && usuario.senha === Number(senhaLimpa);
  });
  if (usuarioEncontrado) {
    alert(`Login realizado com sucesso, bem-vindo ${usuarioEncontrado.nome}`);
    // CRIAR CAMPOS LOGIN REALIZADO
    let msgLoginRealizado = document.createElement('p');
    let campoLoginRealizado = document.createElement('div');
    campoLoginRealizado.classList.add('campoLoginRealizado');
    let dadosLoginRealizado = document.createElement('p');
    dadosLoginRealizado.classList.add('dadosLoginRealizado');
    msgLoginRealizado.textContent = `Bem vindo(a) ${usuarioEncontrado.nome}, conta ${usuarioEncontrado.conta}`;
    dadosLoginRealizado.textContent = `Seus dados:\n Nome${usuarioEncontrado.nome}\n Conta: ${usuarioEncontrado.conta}`;
    loginConteudo.appendChild(campoLoginRealizado);
    campoLoginRealizado.appendChild(msgLoginRealizado);
    campoLoginRealizado.appendChild(dadosLoginRealizado);
    campoLoginRealizado.classList.add('campoLoginRealizado');
  }
});

//        BLOCO P/ VERIFICAR SE USER EXISTE  A) SOLUÇÃO COM FOR+ ÍNDICE
// botaoEnviarlogin.addEventListener('click', function () {
//   let emailLimpo = emailUser.value.trim();
//   let senhaLimpa = senha.value.trim();
//   if (emailLimpo === '' || senhaLimpa === '') {
//     console.log('');
//   } else {
//     for (let i = 0; i < db.length; i++) {
//       if (emailLimpo === db[i].email && Number(senhaLimpa) === db[i].senha) {
//         alert(`Login realizado com sucesso! Bem vindo(a) ${db[i].nome}!`);
//         // CRIANDO CAMPOS P/ MSG DE BOAS-VINDAS (login correto)
//         let loginRealizado = document.createElement('div');
//         let msgLoginSucesso = document.createElement('p');
//         msgLoginSucesso.textContent = `Bem-vindo ${db[i].nome}, conta ${db[i].conta} `;
//         camposLogin.appendChild(loginRealizado);
//         loginRealizado.appendChild(msgLoginSucesso);
//         loginRealizado.classList.add('mensagemBoasVindas');
//         return;
//       }
//     }
//     alert('Usuário inválido');
//   }
// });

const db = [
  {
    nome: 'Jean',
    email: 'jean@gmail.com',
    senha: 123456,
    conta: 1074,
  },
  {
    nome: 'igor',
    email: 'igor.com',
    senha: 123456678,
    conta: 2083,
  },
  {
    nome: 'Vera',
    email: 'vera@gmail.com',
    senha: 4523232,
    conta: 9072,
  },
  {
    nome: 'Alice',
    email: 'alice@gmail.com',
    senha: 12332232,
    conta: 8593,
  },
];
