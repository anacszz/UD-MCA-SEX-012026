
// PARTE 2 - OBJETO

let produto = {
  nome: 'Notebook Gamer',
  cor: 'Preto',
  preco: 5500,
  estoque: 30
};

// A) Acessar nome
console.log(produto.nome);

// B) Acessar preço com colchetes
console.log(produto['preco']);

// C) Atualizar estoque
produto.estoque = 80;

// D) Imprimir todas propriedades
for (let chave in produto) {
  console.log(chave + ": " + produto[chave]);
}

