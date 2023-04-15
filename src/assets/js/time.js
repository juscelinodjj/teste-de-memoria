'use strict';

let timeStart = 0;
let timeEnd = 0;

function setTimeStart() {
  timeStart = performance.now();
}

function setTimeEnd() {
  timeEnd = performance.now();
}

function resetTime() {
  timeStart = 0;
  timeEnd = 0;
}

function getTime() {
  const timeDiff = timeEnd - timeStart;
  const timeDiffInSeconds = (timeDiff / 1000).toFixed(1);
  resetTime();
  const [secondsWithoutDecimal, decimal] = timeDiffInSeconds.split('.');
  return Number(decimal) === 0 ? secondsWithoutDecimal : timeDiffInSeconds;
}