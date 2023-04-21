'use strict';

const maxPositions = 9;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getPositions() {
  const positions = [];
  while(positions.length < maxPositions) {
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