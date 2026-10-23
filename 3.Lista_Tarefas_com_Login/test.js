const db = [
  {
    nome: 'Jeanddd',
    email: 'jean@gmail.com',
    senha: 123456,
  },
  {
    nome: 'igor',
    email: 'igor@gmail.com',
    senha: 123456678,
  },
  {
    nome: 'Vera',
    email: 'vera@gmail.com',
    senha: 4523232,
  },
  {
    nome: 'Alice',
    email: 'alice@gmail.com',
    senha: 12332232,
  },
];

// console.log(db[1].nome);

let nomeLogin = 'Alice';
let senha = 12332232;

// A) COM ÍNDICE
// function comparar(lista) {
//   for (let i = 0; i < lista.length; i++) {
//     if (nomeLogin === lista[i].nome && senha === lista[i].senha) {
//       console.log(`Login validado com o usuario ${lista[i].nome}`);
//       return;
//     }
//   }
//   console.log('Usuário inválido');
// }
// comparar(db);

// B) COM FIND()
const usuarioEncontrado = db.find((usuario) => {
  return usuario.nome === nomeLogin && usuario.senha === senha;
});

console.log(usuarioEncontrado);
