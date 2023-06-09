enum AgeUnit {
  years = "years",
  months = "months",
}

type GreetingFunc = (greeting: string) => string;

type Person = {
  name: string;
  age: number;
  country: string;
  ageUnit: AgeUnit;
  greet: GreetingFunc;
};

const person = {
  name: "Paras",
  age: 20,
  country: "India",
  ageUnit: AgeUnit.years,
  greet: (gree: string) => `${gree} ${person.name}`,
};

const convertAgeToMonths = (person: Person): Person => {
  person.age = 12 * person.age;
  person.ageUnit = AgeUnit.months;
  return person;
};

console.log(person.greet("Good Morning"));
console.log(convertAgeToMonths(person));

