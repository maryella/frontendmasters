const times10 = (n) => {
  n * 10;
};

const cache = {};

const memoTimes10 = (n) => {
  if (cache[n]) {
    return cache[n];
  } else {
    const result = times10(n);
    cache[n] = result;
    return result;
  }
};

const memoizedClosureTimes10 = () => {
  let cache = {};
  // n is the parameter accepter by the returned function
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      let result = n * 10;
      cache[n] = result;
      return result;
    }
  };
};

const memoClosureTimes10 = memoizedClosureTimes10();

memoClosureTimes10(9);

const memoize = (cb) => {
  let cache = {};
  return (n) => {
    if (cache[n]) {
      return cache[n];
    } else {
      const result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoizedTimes10 = memoize(times10);
