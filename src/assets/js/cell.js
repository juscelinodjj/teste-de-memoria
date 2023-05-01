'use strict';

function getMaxCellsInCurrentScreen() {
  const cells = document.querySelectorAll('.cell');
  let count = 0;
  for (const cell of cells) {
    if (isInViewport(cell)) count++;
  }
  return count;
}

function getAllCell() {
  const positions = getPositions();
  const allCell = positions.map(position => {
    const id = `#cell-${position}`;
    const cell = document.querySelector(id);
    return cell;
  });
  return allCell;
}

function handleCellClick(fn, event) {
  const cell = event.target;
  const cellId = cell.id;
  const dataValue = cell.getAttribute('data-value');
  const cellContent = !dataValue.length ? false : Number(dataValue);
  if (!cellContent) return;
  fn(cellId, cellContent);
}

function setAllCell(allCell, fn) {
  for (const cell of allCell) {
    const content = allCell.indexOf(cell) + 1;
    cell.setAttribute('data-value', content);
    cell.classList.add('enabled');
    const addEvent = !cell.hasAttribute('data-has-event');
    if (!addEvent) continue;
    cell.addEventListener('click', handleCellClick.bind(null, fn));
    cell.setAttribute('data-has-event', true);
  }
}

function initCell(fn) {
  const allCell = getAllCell();
  setAllCell(allCell, fn);
}

function resetCell(id) {
  const cell = document.querySelector(`#${id}`);
  cell.setAttribute('data-value', '');
  cell.classList.remove('enabled');
  cell.classList.remove('cover');
  cell.classList.remove('fail');
  cell.classList.remove('pass');
}

function resetAllCell() {
  const cells = document.querySelectorAll('.cell');
  for (const cell of cells) {
    const { id } = cell;
    resetCell(id);
  }
}

function coverAllCell() {
  const allCell = document.querySelectorAll('.cell');
  for (const cell of allCell) {
    const isTarget = cell.classList.contains('enabled');
    if (!isTarget) continue;
    cell.classList.add('cover');
  }
}

function addClassToCell(id, _class) {
  const cell = document.querySelector(`#${id}`);
  cell.classList.add(_class);
}

function findCellPass(value) {
  const cells = document.querySelectorAll('.cell');
  for (const cell of cells) {
    const currentValue = cell.getAttribute('data-value');
    const match = Number(currentValue) === value;
    if (match) {
      const { id } = cell;
      return id;
    }
  }
  return false;
}