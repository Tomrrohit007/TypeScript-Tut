class PersonClass {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  greet() {
    return `Good Morning ${this.name}`;
  }
}

const person1 = new PersonClass("Paras", "paras@gmail.com");

console.log(person1.greet());
console.log(person1);
