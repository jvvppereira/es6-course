import api from "./api";

class App {
  constructor() {
    this.repositories = [];
    this.formElement = document.getElementById("repo-form");
    this.listElement = document.getElementById("repo-list");
    this.inputElement = document.querySelector("input[name=repository]");
    this.registerHandlers();
  }

  registerHandlers() {
    this.formElement.onsubmit = event => this.addRepository(event);
  }

  setLoading(isLoading = true) {
    if (isLoading) {
      const loadingElement = document.createElement("span");
      loadingElement.appendChild(document.createTextNode("Carregando..."));
      loadingElement.setAttribute("id", "loading");

      this.formElement.appendChild(loadingElement); 
    } else {
      document.getElementById("loading").remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const repoName = this.inputElement.value;

    if (repoName.lenght === 0) return;

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoName}`);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      this.inputElement.value = "";

      this.render();
    } catch (err) {
      alert("O repositório informado não existe");
    }

    this.setLoading(false);
  }

  render() {
    this.listElement.innerHTML = "";

    this.repositories.forEach(repo => {
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", repo.avatar_url);

      const titleElement = document.createElement("strong");
      titleElement.appendChild(document.createTextNode(repo.name));

      const descriptionElement = document.createElement("p");
      descriptionElement.appendChild(document.createTextNode(repo.description));

      const linkElement = document.createElement("a");
      linkElement.setAttribute("target", "_blank");
      linkElement.setAttribute("href", repo.html_url);
      linkElement.appendChild(document.createTextNode("Acessar"));

      const itemElement = document.createElement("li");
      itemElement.appendChild(imgElement);
      itemElement.appendChild(titleElement);
      itemElement.appendChild(descriptionElement);
      itemElement.appendChild(linkElement);

      this.listElement.appendChild(itemElement);
    });
  }
}

new App();
