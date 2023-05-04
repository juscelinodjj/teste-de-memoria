'use strict';

app.btnStart = (function btnStart() {

  function getBtnStart() {
    const btnStart = document.querySelector('.btn-start');
    return btnStart;
  }

  function toggleVisibility() {
    getBtnStart().classList.toggle('hide');
  }

  function setOnClick(fn) {
    getBtnStart().addEventListener('click', fn);
  }

  setOnClick(toggleVisibility);

  return {
    toggleVisibility,
    setOnClick
  }

})();