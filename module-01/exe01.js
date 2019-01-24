class User {
  constructor(mail, password, admin = false) {
    this.mail = mail;
    this.password = password;
    this.admin = admin;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends User {
  constructor(mail, password) {
    super(mail, password, true);
  }
}

const User1 = new User("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true
