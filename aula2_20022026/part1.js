// PARTE 1 - ARRAY SIMPLES

let filmes = [
  'Interestelar', 'Matrix', 'Titanic', 'Avatar', 'Frozen',
  'Vingadores', 'Up', 'Encanto', 'Barbie', 'Coraline',
  'Shrek', 'Divertidamente', 'Crepúsculo', 'Pantera Negra',
  'Coringa', 'Toy Story', 'Moana', 'Duna', 'Batman', 'Homem-Aranha'
];

// A) Elementos nas posições solicitadas
console.log("Posição 0:", filmes[0]);
console.log("Posição 7:", filmes[7]);
console.log("Posição 11:", filmes[11]);
console.log("Posição 15:", filmes[15]);
console.log("Posição 18:", filmes[18]);

// B) Penúltimo e último
console.log("Penúltimo:", filmes[filmes.length - 2]);
console.log("Último:", filmes[filmes.length - 1]);

// C) Quantidade de elementos
console.log("Total:", filmes.length);

// D) Adicionando novo elemento
filmes.push("O Rei Leão");

// E) Imprimindo todos
for (let i = 0; i < filmes.length; i++) {
  console.log(filmes[i]);
}