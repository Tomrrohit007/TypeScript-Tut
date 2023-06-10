class User {
  private testUserAge(age: number) {
    if (age > 200 || age <= 0) throw new Error("Age must be between 0-200");
    // return age;
  }
  constructor(private _name: string, private _age: number) {
    this.testUserAge(_age);
    this._age = _age;
  }

  public set age(age: number) {
    // this.testUserAge(age);
    this._age = age;
  }
  public get age() {
    return this._age;
  }

  public set name(name: string) {
    this._name = name;
  }
  public get name() {
    return this._name;
  }
}

const user = new User("rohit", 400);
console.log(user.name);
console.log(user.age);
