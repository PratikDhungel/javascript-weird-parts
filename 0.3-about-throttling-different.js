const $BTN = document.getElementById('btn');

let number = 0;

const throttle = (fn, delay) => {
  let timer;
  return (...args) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      timer = null;
      fn(...args);
    }, delay);
  };
};

const actualFunction = (increment) => {
  console.log((number += increment));
};

const throttledFunction = throttle(actualFunction, 1000);

$BTN.addEventListener('click', () => throttledFunction(5));
