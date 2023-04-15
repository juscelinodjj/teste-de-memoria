'use strict';

function getBtnStart() {
  const btnStart = document.querySelector('.btn-start');
  return btnStart;
}

function toggleBtnStartVisibility() {
  const btnStart = getBtnStart();
  btnStart.classList.toggle('hide');
}

function setBtnStartClickEvent(fn) {
  const btnStart = getBtnStart();
  btnStart.addEventListener('click', fn);
}

setBtnStartClickEvent(toggleBtnStartVisibility);