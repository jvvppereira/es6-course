//REST 5.1
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...nums) => {
  return nums.reduce((total, num) => total + num);
};

// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//SPREAD 5.2
const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

console.log(usuario);

const usuario2 = { ...usuario, nome: "Gabriel" };

console.log(usuario2);

const usuario3 = {
  ...usuario,
  endereco: { ...usuario.endereco, cidade: "Lontras" }
};

console.log(usuario3);
