const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const usuariosMap = usuarios.map(u => u.idade);
console.log(usuariosMap);

const usuariosFilter = usuarios.filter(u => u.idade > 18 && u.empresa === 'Rocketseat');
console.log(usuariosFilter);

const usuariosFind = usuarios.find(u => u.empresa === 'Google');
console.log(usuariosFind);

const usuariosUnion = usuarios.map(u => {
  u.idade = u.idade*2;
  return u;
}).filter(u => u.idade < 51);
console.log(usuariosUnion);