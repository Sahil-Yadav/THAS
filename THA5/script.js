// Q.1

function arrayCheck(input) {
  if (toString.call(input) == `[object Array]`) {
    return true;
  } else {
    return false;
  }
}
console.log(arrayCheck("w3resource"));
console.log(arrayCheck([1, 2, 4, 0]));

// Q.2

function cloneArray(input) {
  if (toString.call(input) == `[object Array]`) {
    return input.slice(0);
  } else {
    return false;
  }
}

console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));

// Q.3

function firstValue(gArray, n) {
  if (n == null) {
    return gArray[0];
  }
  if (n < 0) {
    return [];
  }
  return gArray.slice(0, n);
}

console.log(firstValue([7, 9, 0, -2]));
console.log(firstValue([], 3));
console.log(firstValue([7, 9, 0, -2], 3));
console.log(firstValue([7, 9, 0, -2], 6));
console.log(firstValue([7, 9, 0, -2], -3));

// Q.4

const myColor = ["Red", "Green", "White", "Black"];

function join(array) {
  return array.join(",");
}

console.log(join(myColor));

// Q.5

const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;

for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      m++;
    }

    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }

  m = 0;
}

console.log(`${item} ( ${mf} times )`);
