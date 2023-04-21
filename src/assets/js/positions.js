'use strict';

const maxPositionsInCurrentTest = {
  _defaultValue: 2,
  _value: 2,
  getValue() {
    return this._value;
  },
  increment() {
    if (this._value === getMaxCellsInCurrentScreen()) return;
    this._value++;
  },
  decrement() {
    if (this._value === this._defaultValue) return;
    this._value--;
  }
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getPositions() {
  const positions = [];
  while(positions.length < maxPositionsInCurrentTest.getValue()) {
    const min = 1;
    const max = getMaxCellsInCurrentScreen();
    const position = randomNumber(min, max);
    const isRepeated = positions.includes(position);
    if (isRepeated) continue;
    positions.push(position);
  }
  console.log( [...positions].sort((a, b) => a - b) ); // TEMP
  return positions;
}