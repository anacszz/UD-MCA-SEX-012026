// PARTE 2 - OBJETO (ARIANE)

let carro = {
  nome: 'Civic',
  cor: 'Prata',
  preco: 95000,
  estoque: 12
};

// A) Acessar o nome do objeto
console.log(carro.nome);

// B) Acessar o preço usando colchetes
console.log(carro['preco']);

// C) Atualizar estoque para 80
carro.estoque = 80;

// D) Imprimir todas as propriedades
for (let chave in carro) {
  console.log(chave + ": " + carro[chave])
}