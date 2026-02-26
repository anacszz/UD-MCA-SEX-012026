// PARTE 3 - ARRAY DE OBJETOS (ARIANE)

let eletronicos = [
  { nome: 'Celular', preco: 2500, estoque: 30 },
  { nome: 'Notebook', preco: 4500, estoque: 15 },
  { nome: 'Tablet', preco: 1800, estoque: 20 },
  { nome: 'Smart TV', preco: 3200, estoque: 10 },
  { nome: 'Fone Bluetooth', preco: 300, estoque: 50 },
  { nome: 'Mouse Gamer', preco: 150, estoque: 40 },
  { nome: 'Teclado Mecânico', preco: 400, estoque: 25 },
  { nome: 'Monitor', preco: 1200, estoque: 18 },
  { nome: 'Caixa de Som', preco: 600, estoque: 22 },
  { nome: 'Smartwatch', preco: 900, estoque: 28 }
];

// A) Preço do segundo objeto
console.log(eletronicos[1].preco);

// B) Nome do terceiro objeto
console.log(eletronicos[2].nome);

// C) Quantidade de itens no array
console.log("Total de itens:", eletronicos.length);

// D) Imprimir o nome de todos os objetos
for (let item of eletronicos) {
  console.log(item.nome);
}

// E) Somar total de estoque
let totalEstoque = 0;

for (let item of eletronicos) {
  totalEstoque += item.estoque;
}

console.log("Estoque total:", totalEstoque);

// F) Objeto com maior estoque
let maior = eletronicos[0];

for (let item of eletronicos) {
  if (item.estoque > maior.estoque) {
    maior = item;
  }
}

console.log("Produto com maior estoque:", maior.nome);