'use strict';

const maxPositions = 9;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getMaxCells() {
  const cells = document.querySelectorAll('.cell');
  let maxCells = 0;
  for (const cell of cells) {
    if (isInViewport(cell)) maxCells++;
  }
  return maxCells;
}

function getPositions() {
  const positions = [];
  while(positions.length < maxPositions) {
    const min = 1;
    const max = getMaxCells();
    const position = randomNumber(min, max);
    const isRepeated = positions.includes(position);
    if (isRepeated) continue;
    positions.push(position);
  }
  console.log( [...positions].sort((a, b) => a - b) ); // TEMP
  return positions;
}