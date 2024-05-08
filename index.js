function mostRepeated(arr) {
  if (arr.length === 0) {
    throw new Error("Array must not be empty");
  }

  let counts = {};
  let maxCount = 0;
  let mostRepeatedNum = null;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mostRepeatedNum = num;
    }
  }

  return `${mostRepeatedNum} is repeated ${maxCount} times`;
}

console.log(
  mostRepeated([4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5])
);
console.log(mostRepeated([10, 5, 4, 3, 3, 3, 3]));
