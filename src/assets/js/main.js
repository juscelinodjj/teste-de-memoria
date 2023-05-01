'use strict';

let matchesInCurrentTest = 1;

function start() {
  initCell(controller);
  setTimeStart();
}

function reset() {
  matchesInCurrentTest = 1;
  resetTime();
  resetAllCell();
  toggleBtnStartVisibility();
}

function stop(win) {
  if (!win) {
    return setTimeout(() => reset(), 1500);
  }
  setTimeEnd();
  const time = getTime();
  showAlert(time);
  setTimeout(() => reset(), 2200);
}

function controller(cellId, cellNumber) {
  const match = cellNumber === matchesInCurrentTest;
  if (!match) {
    maxPositionsInCurrentTest.decrement();
    addClassToCell(cellId, 'fail');
    const passId = findCellPass(matchesInCurrentTest);
    if (passId) {
      addClassToCell(passId, 'pass');
    }
    return stop(false);
  }
  resetCell(cellId);
  matchesInCurrentTest++;
  if (matchesInCurrentTest === 2) {
    coverAllCell();
  }
  if (matchesInCurrentTest === maxPositionsInCurrentTest.getValue() + 1) {
    setTimeout(() => {
      maxPositionsInCurrentTest.increment()
      stop(true);
    }, 100);
  }
}

function init() {
  setBtnStartClickEvent(start);
}

init();