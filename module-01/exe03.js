// 3.1
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);
console.log(arr);
console.log(newArr);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diogo";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = () => new Promise(resolve => resolve());
console.log(promise);
