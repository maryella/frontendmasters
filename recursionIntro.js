let tracker = 0;

function callMe(arg) {
  tracker++;
  if (tracker === 3) {
    return `loops: ${arg}`;
  }

  return callMe("anytime");
}

function loopNTimes(n) {
  console.log("n", n);

  if (n < 1) {
    console.log("complete");
    return "complete";
  }

  return loopNTimes(n - 1);
}

function joinElementsRecursively(array, joinString) {
  function recurse(index, resultsoFar) {
    resultsoFar += array[index];
    console.log("i", index);
    console.log("result", resultsoFar);
    if (index === array.length - 1) {
      return resultsoFar;
    } else {
      return recurse(index + 1, resultsoFar + joinString);
    }
  }

  return recurse(0, "");
}

function joinElementsInteratively(array, joinString) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i < array.length - 1) {
      result += joinString;
    }
  }

  return result;
}

function getNFactorialIteratively(num) {
  let sum = 1;
  // n x n - 1
  for (let i = num; i > 1; i--) {
    sum = i * sum;
  }
  return sum;
}

function getFactorialRecursively(n) {
  let sum = 1;

  function recurse(n) {
    tracker++;
    if (n === 1) {
      return sum;
    } else {
      sum = n * sum;
      recurse(n - 1);
    }
  }

  recurse(n);

  return sum;
}

const yo = getFactorialRecursively(5);
console.log(yo);
console.log("tracker fter yo", tracker);

function memoize(fn) {
  let cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

const factorialMemoized = memoize((x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorialMemoized(x - 1);
  }
});

const ho = factorialMemoized(6);

console.log(ho);
console.log("tracker", tracker);
