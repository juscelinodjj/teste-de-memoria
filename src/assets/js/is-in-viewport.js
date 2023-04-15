'use strict';

function isInViewport(element) {
  const { top, left, bottom, right } = element.getBoundingClientRect();
  const inTop = top >= 0;
  const inLeft = left >= 0;
  const inBottom = bottom <= window.innerHeight;
  const inRight = right <= window.innerWidth;
  const inViewport = inTop && inLeft && inBottom && inRight;
  return inViewport;
}