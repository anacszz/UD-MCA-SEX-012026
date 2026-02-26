// PARTE 3 - ARRAY DE OBJETOS

let loja = [
  { nome: 'Camiseta', preco: 50, estoque: 20 },
  { nome: 'Calça', preco: 120, estoque: 15 },
  { nome: 'Tênis', preco: 300, estoque: 10 },
  { nome: 'Boné', preco: 40, estoque: 25 },
  { nome: 'Jaqueta', preco: 200, estoque: 8 },
  { nome: 'Vestido', preco: 180, estoque: 12 },
  { nome: 'Meia', preco: 15, estoque: 50 },
  { nome: 'Blusa', preco: 70, estoque: 18 },
  { nome: 'Short', preco: 60, estoque: 22 },
  { nome: 'Mochila', preco: 150, estoque: 9 }
];

// A) Preço do segundo objeto
console.log(loja[1].preco);

// B) Nome do terceiro objeto
console.log(loja[2].nome);

// C) Quantidade de itens
console.log(loja.length);

// D) Nome de todos
for (let item of loja) {
  console.log(item.nome);
}

// E) Soma total estoque
let totalEstoque = 0;
for (let item of loja) {
  totalEstoque += item.estoque;
}
console.log("Total estoque:", totalEstoque);

// F) Maior estoque
let maior = loja[0];

for (let item of loja) {
  if (item.estoque > maior.estoque) {
    maior = item;
  }
}

console.log("Maior estoque:", maior.nome);