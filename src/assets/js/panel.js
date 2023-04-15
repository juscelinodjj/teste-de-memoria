'use strict';

const maxCells = 70;

function getCellMarkup(id) {
  return `<div id="cell-${id}" class="cell" data-value></div>`;
}

function getCellsMarkup(quantity, rawCellsMarkup = []) {
  const repeat = rawCellsMarkup.length < quantity;
  if (!repeat) {
    const cellsMarkup = rawCellsMarkup.join('');
    return cellsMarkup;
  }
  const id = rawCellsMarkup.length + 1;
  const cellMarkup = getCellMarkup(id);
  rawCellsMarkup.push(cellMarkup);
  return getCellsMarkup(quantity, rawCellsMarkup);
}

function addCellsToPanel() {
  const quantity = maxCells;
  const markup = getCellsMarkup(quantity);
  const panelContainer = document.querySelector('.panel-container');
  panelContainer.innerHTML = markup;
}

addCellsToPanel();