const uniqSort = function (arr) {
  const breadcrumbs = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (!breadcrumbs[value]) {
      result.push(value);
      breadcrumbs[value] = true;
    }
  }

  return result.sort((a, b) => a - b);
};

const result = uniqSort([4, 2, 2, 3, 2, 2, 2]); // => [2,3,4]

console.log("result", result);
