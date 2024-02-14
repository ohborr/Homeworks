let arr = [1, 2, 3, 4, 5];

// concat
const concatArray = arr.concat([6, 7, 8]);
console.log(concatArray);

// copyWithin
const copiedArray = arr.slice().copyWithin(0, 3);
console.log(copiedArray);

// entries
const iterator = arr.entries();
for (let entrada of iterator) {
  console.log(entrada);
}

// every
const pares = arr.every(num => num % 2 === 0);
console.log(pares);

// fill
const fillArr = arr.fill(0, 1, 3);
console.log(filledArr);

// filter
const filteredArray = arr.filter(num => num > 2);
console.log(filteredArray);

// find
const foundValue = arr.find(num => num > 2);
console.log(foundValue);

// findIndex
const foundIndex = arr.findIndex(num => num > 2);
console.log(foundIndex);

// findLast
const findLastValue = arr.reverse().find(num => num > 2);
console.log(findLastValue);

// findLastIndex
const findLastIndex = arr.reverse().findIndex(num => num > 2);
console.log(findLastIndex);

// flat
const flatArray = [1, 2, [3, 4, [5, 6]]];
console.log(flatArray.flat());

// flatMap
const flatMappedArray = arr.flatMap(num => [num, num * 2]);
console.log(flatMappedArray);

// forEach
arr.forEach(num => 
    console.log(num));

// includes
const includesValue = arr.includes(3);
console.log(includesValue);

// indexOf
const index = arr.indexOf(3);
console.log(index);

// join
const joinArr = arr.join("-");
console.log(joinedArr);

// keys
const keys = arr.keys();
for (let key of keys) {
  console.log(key);
}

// lastIndexOf
const lastIndex = arr.lastIndexOf(3);
console.log(lastIndex);

// map
const mapArr = arr.map(num => num * 2);
console.log(mapArr);

// pop
const popArr = arr.pop();
console.log(popArr);

// push
const newLength = arr.push(6);
console.log(newLength);

// reduce
const reducedValue = arr.reduce((acc, curr) => acc + curr, 0);
console.log(reducedValue);

// reduceRight
const reducedRightValue = arr.reduceRight((acc, curr) => acc + curr, 0);
console.log(reducedRightValue);

// reverse
arr.reverse();
console.log(arr);

// shift
const shiftedValue = arr.shift();
console.log(shiftedValue);

// slice
const sliceArr = arr.slice(1, 3);
console.log(sliceArr);

// some
const Some = arr.some(num => num % 2 !== 0);
console.log(Some);

// sort
arr.sort((a, b) => a - b);
console.log(arr);

// splice
const spliceArr = arr.splice(2, 1, 10);
console.log(splicedArray);
console.log("Después de splice:", arr);

// unshift
const newLengthAfterUnshift = arr.unshift(0);
console.log(newLengthAfterUnshift);

// values
const values = arr.values();
for (let value of values) {
  console.log(value);
}
