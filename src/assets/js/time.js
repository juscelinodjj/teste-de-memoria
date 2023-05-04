'use strict';

app.time = (function time() {

  let start = 0;
  let end = 0;

  function setStart() {
    start = performance.now();
  }

  function setEnd() {
    end = performance.now();
  }

  function reset() {
    start = 0;
    end = 0;
  }

  function get() {
    const diff = end - start;
    const diffInSeconds = (diff / 1000).toFixed(1);
    const [secondsWithoutDecimal, decimal] = diffInSeconds.split('.');
    return Number(decimal) === 0 ? secondsWithoutDecimal : diffInSeconds;
  }

  return {
    setStart,
    setEnd,
    reset,
    get
  }

})();