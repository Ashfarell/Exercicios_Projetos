const clientes = {
  nome: 'Jean',
  idade: 38,
  var: 10,
  cidade: 'SP',
  mostrarDados() {
    resultado = this.idade + this.var;
    return `O nome do cliente é ${this.nome} e sua idade é ${this.idade} e a soma é ${this.idade + this.var} .....${resultado}`;
  },
  mostrarOutros() {
    return `A soma é ${resultado}`;
  },
};

console.log(clientes);
console.log(clientes.mostrarDados());
console.log(clientes.mostrarOutros());

const baseClientes = {
  A: {
    nome: 'Jean',
    idade: 38,
  },
  B: {
    nome: 'Julio',
    idade: 45,
  },
  C: {
    nome: 'Alex',
    idade: 45,
  },
  mostrarNome() {
    return `Os clientes são: ${this.A.nome}, ${this.B.nome}, ${this.C.nome}`;
  },
};

console.log(baseClientes.B.nome);
console.log(baseClientes.mostrarNome());

console.log(Object.values(baseClientes)[2]); //ACESSAR ARRAY COM ÍNDICE (object.values)
