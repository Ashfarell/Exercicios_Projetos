// Exercício 1 — Classe, constructor, new e método
class Cachorro {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Agora, observe estas duas linhas:
const cachorro1 = new Cachorro('Rex', 3);
// cachorro1.apresentar();

// Exercício 2 — Criando uma classe Produto
// Queremos criar objetos que representem produtos de uma loja.
// Cada produto deve ter:
// - nome
// - preco
// E um método chamado apresentar() que mostre no console:
// Produto: Notebook | Preço: R$ 3500
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  apresentarA() {
    console.log(`Produto: ${this.nome} | Preço: R$${this.preco}`);
  }
  Reclamar() {
    console.log(`O produto ${this.nome} vendido por R${this.preco} veio com defeito`);
  }
}

const produto1 = new Produto('Notebook', 3500);
// produto1.apresentarA();
// produto1.Reclamar();

// Exercicio cronometro manual
class Cronometro {
  inicial = 0;

  avancar() {
    this.inicial++;
    console.log(this.inicial);
  }
}

const crono1 = new Cronometro();
const crono2 = new Cronometro();
// crono1.avancar();
// crono1.avancar();

// crono2.avancar();

// Exercicio cronometro automático -Fazendo algo acontecer automaticamente com setInterval
function testCrono() {
  let crono = 0;
  setInterval(() => {
    crono++;
    console.log(crono);
  }, 1000);
}

// testCrono(0);

// Etapa 6 — Colocando o setInterval() dentro de um método
class CronometroB {
  crono = 0; //                crono guarda a contagem de segundos.
  intervalId = null; //        intervalId guardará o identificador do intervalo.

  comecar() {
    this.intervalId = setInterval(() => {
      this.crono++;
      console.log(this.crono);
    }, 1000);
  }

  parar() {
    clearInterval(this.intervalId); //cancela a repetição do setInterval():
  } //                            A contagem permanece no valor em que parou. EX:se chegou a 4, continuará em 4.
}

const testeCrono = new CronometroB(); //  criamos uma instância da classe:

// testeCrono.comecar(); //          Executamos essa instância com o método comecar().

setTimeout(() => {
  testeCrono.parar(); //Usamos setTimeout() para executar parar() após 5 segundos.
}, 5000);

// FIM ETAPA 6---------------------------------------------------------------------------------------------------------
setTimeout(() => {
  console.log('FIM ETAPA 6-------------------------------------------------------------------------------------------');
}, 5000);
// Exercício 1 — Contador automático
class Contador {
  contador = 0;
  intervalId = null;

  iniciar() {
    this.intervalId = setInterval(() => {
      this.contador++;
      console.log(this.contador);
    }, 1000);
  }
  parar() {
    clearInterval(this.intervalId);
  }
}

const cronoEx1 = new Contador();
cronoEx1.iniciar();

setTimeout(() => {
  cronoEx1.parar(0);
}, 6000);

setTimeout(() => {
  console.log('FIM EX1------------------------------------------------------------------------------------------');
}, 7000);

// Exercício 2 — Criando uma luminária 💡
class Luminaria {
  ligada = false;

  ligar() {
    this.ligada = true;
  }

  desligar() {
    this.ligada = false;
  }
  mostrarEstado() {
    if (this.ligada) {
      console.log('A luminária está ligada');
    } else {
      console.log('A luminária está desligada');
    }
  }
}

const luminaria1 = new Luminaria();
const luminaria2 = new Luminaria();
// console.log(luminaria1.ligada);

luminaria1.ligar();

// console.log(luminaria1.ligada);
// console.log(luminaria2.ligada);

luminaria1.desligar();
// console.log(luminaria1.ligada);

luminaria1.mostrarEstado();

console.log('FIM EX2------------------------------------------------------------------------------------------');
// Exercício 3 — O desafio agora é entender as instâncias

// Exercício 7 — Agora entra o constructor!
class Produto7 {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  apresentar() {
    console.log(`Produto: ${this.nome} | Preço: R$${this.preco}`);
  }
}

const produto7 = new Produto7('Notebook', 120);
const produto8 = new Produto7('Mouse', 80);
// console.log(produto7);
produto7.apresentar();
produto8.apresentar();

console.log('FIM EX7------------------------------------------------------------------------------------------');
// Exercício 11 — Primeiro contato com static
// Ao usar static, você define um método que pertence à classe, e não às instâncias criadas a partir dela.
class Loja {
  static mostrarMensagem() {
    console.log('Bem-vindo à nossa loja!');
  }
}
Loja.mostrarMensagem();

console.log('FIM EX11------------------------------------------------------------------------------------------');
// Exercício 12 — Vamos testar de novo
// Considere:
class Calculadora {
  somar(a, b) {
    return a + b;
  }

  static multiplicar(a, b) {
    return a * b;
  }
}

console.log(Calculadora.multiplicar(5, 10));

console.log('FIM EX12------------------------------------------------------------------------------------------');
// Exercício 13 — Agora é sua vez de escrever

class Conversor {
  constructor(a) {
    // this.a = a;
  }

  static celsiusParaFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  static mostrarAjuda() {
    console.log(`Use celsiusParaFahrenheit(temperatura) para converter`);
  }
}

console.log(Conversor.celsiusParaFahrenheit(10));
Conversor.mostrarAjuda();
console.log('FIM EX13------------------------------------------------------------------------------------------');

// Exercício 14 — Criando uma classe Matematica

class MatematicaA {
  static dobro(a) {
    a = a * 2;
    return a;
  }

  static ehPar(a) {
    if (a % 2 === 0) {
      return true; //               BASEADO EM A
    } else {
      return false;
    }
  }
}

console.log(MatematicaA.dobro(73));
console.log(MatematicaA.ehPar(73));

class MatematicaB {
  static dobro(a) {
    a = a * 2;
    return a;
  }

  static ehPar(valor) {
    if (this.dobro(valor) % 2 === 0) {
      return true; //                BASEADO NO RETORNO DA FUNÇÃO dobro(0)
    } else {
      return false;
    }
  }
}

console.log(MatematicaB.dobro(250));
console.log(MatematicaB.ehPar(MatematicaB.dobro(500)));
