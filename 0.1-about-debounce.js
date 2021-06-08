const $BTN = document.getElementById('btn');

let number = 0;

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const actualFunction = (increment, random) => {
  console.log((number += increment));
};

const debouncedFunction = debounce(actualFunction, 1000);

$BTN.addEventListener('click', () => debouncedFunction(5, 10));
