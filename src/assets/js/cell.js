'use strict';

app.cell = (function cell() {

  function isInViewport(element) {
    const { top, left, bottom, right } = element.getBoundingClientRect();
    const inTop = top >= 0;
    const inLeft = left >= 0;
    const inBottom = bottom <= window.innerHeight;
    const inRight = right <= window.innerWidth;
    const inViewport = inTop && inLeft && inBottom && inRight;
    return inViewport;
  }

  function getAll() {
    const allCell = document.querySelectorAll('.cell');
    return allCell;
  }

  function getMaxCellsInCurrentScreen() {
    const cells = getAll();
    let count = 0;
    for (const cell of cells) {
      if (isInViewport(cell)) count++;
    }
    return count;
  }

  function getCellsForCurrentTest() {
    const positions = app.positions.gen();
    const allCell = positions.map(position => {
      const id = `#cell-${position}`;
      const cell = document.querySelector(id);
      return cell;
    });
    return allCell;
  }

  function handleOnClick(fn, event) {
    const cell = event.target;
    const id = cell.id;
    const dataValue = cell.getAttribute('data-value');
    const content = !dataValue.length ? false : Number(dataValue);
    if (!content) return;
    fn(id, content);
  }

  function config(cell, content, fn) {
    cell.setAttribute('data-value', content);
    cell.classList.add('enabled');
    const addEvent = !cell.hasAttribute('data-has-event');
    if (!addEvent) return;
    cell.addEventListener('click', handleOnClick.bind(null, fn));
    cell.setAttribute('data-has-event', true);
  }

  function coverAll() {
    const cells = getAll();
    for (const cell of cells) {
      const isTarget = cell.classList.contains('enabled');
      if (!isTarget) continue;
      cell.classList.add('cover');
    }
  }

  function reset(id) {
    const cell = document.querySelector(`#${id}`);
    cell.setAttribute('data-value', '');
    cell.classList.remove('enabled');
    cell.classList.remove('cover');
    cell.classList.remove('fail');
    cell.classList.remove('pass');
  }

  function resetAll() {
    const cells = getAll();
    for (const cell of cells) {
      const { id } = cell;
      reset(id);
    }
  }

  function findRight(value) {
    const cells = getAll();
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

  function status(id, pass) {
    const cell = document.querySelector(`#${id}`);
    pass ? cell.classList.add('pass') : cell.classList.add('fail');
  }

  function init(fn) {
    const cellsForCurrentTest = getCellsForCurrentTest();
    for (const cell of cellsForCurrentTest) {
      const content = cellsForCurrentTest.indexOf(cell) + 1;
      config(cell, content, fn);
    }
  }

  return {
    getMaxCellsInCurrentScreen,
    init,
    coverAll,
    reset,
    resetAll,
    findRight,
    status
  };

})();