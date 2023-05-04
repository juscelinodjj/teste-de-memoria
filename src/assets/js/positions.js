'use strict';

app.positions = (function positions() {

  const defaultValue = 2;
  const keyLocalStorage = 'progress';

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function current() {
    const currentValue = localStorage.getItem(keyLocalStorage);
    return currentValue ? Number(currentValue) : defaultValue;
  }

  function increment() {
    const currentValue = current();
    if (currentValue === app.cell.getMaxCellsInCurrentScreen()) return;
    const newValue = Number(currentValue) + 1;
    localStorage.setItem(keyLocalStorage, newValue);
  }

  function decrement() {
    const currentValue = current();
    if (currentValue === defaultValue) return;
    const newValue = Number(currentValue) - 1;
    localStorage.setItem(keyLocalStorage, newValue);
  }

  function gen() {
    const positions = [];
    while(positions.length < current()) {
      const min = 1;
      const max = app.cell.getMaxCellsInCurrentScreen();
      const position = randomNumber(min, max);
      const isRepeated = positions.includes(position);
      if (isRepeated) continue;
      positions.push(position);
    }
    return positions;
  }

  return {
    gen,
    current,
    increment,
    decrement
  };

})();