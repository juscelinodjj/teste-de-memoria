'use strict';

app.main = (function main() {

  let matchesInCurrentTest = 1;

  function start() {
    app.cell.init(controller);
    app.time.setStart();
  }

  function reset() {
    matchesInCurrentTest = 1;
    app.time.reset();
    app.panel.lock(false);
    app.cell.resetAll();
    app.btnStart.toggleVisibility();
  }

  function stop(win) {
    if (!win) {
      setTimeout(() => reset(), 1500);
      return;
    }
    app.time.setEnd();
    app.alert.show(app.time.get());
    setTimeout(() => reset(), 2200);
  }

  function onFail(cellId) {
    app.positions.decrement();
    app.cell.status(cellId, false);
    const rightCellId = app.cell.findRight(matchesInCurrentTest);
    if (rightCellId) {
      app.cell.status(rightCellId, true);
    }
    stop(false);
  }

  function onMatch(cellId) {
    app.cell.reset(cellId);
    matchesInCurrentTest++;
    if (matchesInCurrentTest === 2) app.cell.coverAll();
    app.panel.lock(false);
    const finish = matchesInCurrentTest === app.positions.current() + 1;
    if (finish) {
      app.positions.increment()
      stop(true);
    }
  }

  function controller(cellId, cellNumber) {
    app.panel.lock(true);
    const match = cellNumber === matchesInCurrentTest;
    !match ? onFail(cellId) : onMatch(cellId);
  }

  app.btnStart.setOnClick(start);

  return null;

})();