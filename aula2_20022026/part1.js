// PARTE 1 - ARRAY SIMPLES (ARIANE)

let comidas = [
  'Pizza', 'Hambúrguer', 'Lasanha', 'Sushi', 'Feijoada',
  'Strogonoff', 'Churrasco', 'Panqueca', 'Macarrão', 'Açaí',
  'Pastel', 'Coxinha', 'Salada', 'Risoto', 'Taco',
  'Yakissoba', 'Esfiha', 'Empadão', 'Torta', 'Pudim'
];

// A) Elementos nas posições solicitadas
console.log("Posição 0:", comidas[0]);
console.log("Posição 7:", comidas[7]);
console.log("Posição 11:", comidas[11]);
console.log("Posição 15:", comidas[15]);
console.log("Posição 18:", comidas[18]);

// B) Penúltimo e último
console.log("Penúltimo:", comidas[comidas.length - 2]);
console.log("Último:", comidas[comidas.length - 1]);

// C) Quantidade de elementos
console.log("Total de elementos:", comidas.length);

// D) Adicionando novo elemento
comidas.push("Brigadeiro");

// E) Imprimindo todos os elementos
for (let i = 0; i < comidas.length; i++) {
  console.log(comidas[i]);
}