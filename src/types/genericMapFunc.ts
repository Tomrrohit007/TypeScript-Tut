type MapType = {
  <T>(array: T[], predicate: (item: T) => T): T[];
};

const mapFunc: MapType = (array, predicate) => {
  let result = [];

  for (let i of array) {
    const predicateResult = predicate(i);
    result.push(predicateResult);
  }

  return result;
};

const nummArray = [1, 3, 5, 7, 19, 10, 23];
const nummPredicate = (item: number): number => {
  return item * 10;
};

console.log(mapFunc(nummArray, nummPredicate));

const animalArray = ["cat", "dog", "lion"];
const animalPredicate = (item: string): string => {
  return item + "123";
};

console.log(mapFunc(animalArray, animalPredicate));
