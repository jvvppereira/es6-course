// Exe01 - Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
  console.log(await delay());
  console.log(await delay());
  console.log(await delay());
}
umPorSegundo();

// Exe02
import axios from "axios";
async function getUserFromGithub(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
}
getUserFromGithub("diego3g");
getUserFromGithub("diego3g124123");

// Exe03
import axios from 'axios';

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch(err)  {
      console.log("Repositório não existe");
    }
  }
}
Github.getRepositories("rocketseat/bootcamps");
Github.getRepositories("rocketseat/dslkvmskv");

// Exe04
import axios from "axios";

const buscaUsuario = async user => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${user}`
    );
    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
};

buscaUsuario("jvvppereira");
