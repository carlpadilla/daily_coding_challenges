function lovefunc(flower1, flower2) {
  // moment of truth
  if (flower1 % 2 == 0) {
    flower1 = 'even';
  } else {
    flower1 = 'odd';
  }

  if (flower2 % 2 == 0) {
    flower2 = 'even';
  } else {
    flower2 = 'odd';
  }

  // moment of truth
  if (
    (flower1 === 'even' && flower2 === 'odd') ||
    (flower2 === 'even' && flower1 === 'odd')
  ) {
    return true;
  } else {
    return false;
  }
}
