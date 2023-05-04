'use strict';

app.positions = (function positions() {

  const defaultValue = 2;
  let value = 2;

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function current() {
    return value;
  }

  function increment() {
    if (value === app.cell.getMaxCellsInCurrentScreen()) return;
    value++;
  }

  function decrement() {
    if (value === defaultValue) return;
    value--;
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