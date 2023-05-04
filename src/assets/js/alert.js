'use strict';

app.alert = (function alert() {

  function show(time) {
    const alertContainer = document.querySelector('.alert-container');
    alertContainer.classList.toggle('hide');
    const seconds = document.querySelector('.alert-container .seconds');
    seconds.textContent = time;
    setTimeout(() => alertContainer.classList.toggle('hide'), 2000);
    setTimeout(() => seconds.textContent = '', 2500);
  }

  return {
    show
  }

})();