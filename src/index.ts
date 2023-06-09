// In classess can use short hand for as inhertance by give the what kind of property it will be / public / protected / privately
class User {
  private _age: number | undefined;
  constructor(public name: string, public email: string) {}

  public set age(age: number) {
    if (age > 200 || age <= 0) throw new Error("Age must be between 0-200");
    this._age = age;
  }
  public get age() {
    console.log(this._age);
    if (this._age !== undefined) {
      return this._age;
    }
    throw new Error("The age property no defined yet");
  }
}

const user = new User("rohit", "rohit@gmail.com");
// user.age = 20;

console.log(user);
