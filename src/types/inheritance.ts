class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class AdminUser extends User {
  isAdmin = true;
}

const user = new User("rohit", "rohit@gmail.com", 20);
const adminUser = new AdminUser("paras", "paras@gmail.com", 21);

console.log(user);
console.log(adminUser);
