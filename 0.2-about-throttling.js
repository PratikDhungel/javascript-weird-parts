const $BTN = document.getElementById('btn');

let number = 0;

const throttle = (fn, delay) => {
  let lastTimer = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastTimer < delay) {
      return;
    }
    lastTimer = now;
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const actualFunction = (increment) => {
  console.log((number += increment));
};

const throttledFunction = throttle(actualFunction, 1000);

$BTN.addEventListener('click', () => throttledFunction(5));
