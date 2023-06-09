type Filter = {
 <T>(array: T[], predicate: (item: T) => boolean): T[]
}

const filter:Filter = (array, predicate) => {
  let arr = [];
  for (let i of array) {
    if (predicate(i)) {
      arr.push(i);
    }
  }
  return arr;
};

const numPredicate = (item: number): boolean => {
  return item < 7;
};

const filterCats = (item: string): boolean => {
  return item === "cat";
};

const numArray = [1, 2, 6, 7, 8, 12];
const strArr = ["cat", "dog", "lion"];

console.log(filter(numArray, numPredicate));
console.log(filter(strArr, filterCats));
