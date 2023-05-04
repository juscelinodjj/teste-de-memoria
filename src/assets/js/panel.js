'use strict';

app.panel = (function panel() {

  const maxCells = 70;

  function getDivMarkup(id) {
    return `<div id="cell-${id}" class="cell" data-value></div>`;
  }

  function getCellsMarkup(quantity) {
    let cellsMarkup = '';
    for (let index = 0; index < quantity; index++) {
      const id = index + 1;
      const divMarkup = getDivMarkup(id);
      cellsMarkup += divMarkup;
    }
    return cellsMarkup;
  }

  function addCellsToPanel() {
    const markup = getCellsMarkup(maxCells);
    const panelContainer = document.querySelector('.panel-container');
    panelContainer.innerHTML = markup;
  }

  function lock(condition) {
    const panel = document.querySelector('.panel');
    condition ? panel.classList.add('lock') : panel.classList.remove('lock');
  }

  addCellsToPanel();

  return {
    lock
  };

})();