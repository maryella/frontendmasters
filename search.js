// linear search: linear time complexity, O(n)
function linearSearch(list, value) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === value) {
      return i;
    }
    return -1;
  }
  //   let valueIndex = -1;
  //   list.forEach((item, index) => {
  //     if (item === value) {
  //       valueIndex = index;
  //     }
  //   });
  //  return valueIndex;
}

// binary search: sorted array ONLY, O(log(n))
function binarySearch(list, value) {
  var min = 0;
  var max = list.length - 1;
  var indexToCheck;
  while (min <= max) {
    console.log("min", min);
    console.log("max", max);
    indexToCheck = Math.floor((min + max) / 2);
    console.log("index to ch", indexToCheck);
    if (list[indexToCheck] === value) {
      return indexToCheck;
    } else {
      if (list[indexToCheck] < value) {
        min = indexToCheck + 1;
      } else {
        max = indexToCheck - 1;
      }
    }
  }
  return -1;
}
var res = binarySearch([2, 6, 7, 90, 102], 9);
console.log(res);
