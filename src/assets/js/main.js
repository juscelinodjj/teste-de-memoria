'use strict';

let currentNumber = 1;

function start() {
  initCell(controller);
  setTimeStart();
}

function reset() {
  currentNumber = 1;
  resetTime();
  resetAllCell();
  toggleBtnStartVisibility();
}

function stop(win) {
  if (!win) return reset();
  setTimeEnd();
  const time = getTime();
  showAlert(time);
  setTimeout(() => reset(), 2200);
}

function controller(cellId, cellNumber) {
  const match = cellNumber === currentNumber;
  if (!match) {
    return stop(false);
  }
  resetCell(cellId);
  currentNumber++;
  if (currentNumber === 2) {
    coverAllCell();
  }
  if (currentNumber === 10) {
    setTimeout(() => stop(true), 100);
  }
}

function init() {
  setBtnStartClickEvent(start);
}

init();