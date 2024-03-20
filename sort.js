const testArray1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const testArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testArray3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let tracker = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      tracker++;
      const a = arr[i];
      const b = arr[j];
      console.log("a", a);
      console.log("b", b);
      if (a > b) {
        arr[j] = a;
        arr[i] = b;
      }
    }
  }

  return arr;
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      merged.push(right[rightIndex]);
      rightIndex++;
    } else {
      merged.push(left[leftIndex]);
      leftIndex++;
    }
  }
  const result = merged
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
  // console.log("result", result);
  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}
