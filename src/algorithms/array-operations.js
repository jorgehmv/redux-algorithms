export function swap(array, firstIndex, secondIndex, swapAction) {
  if (firstIndex === secondIndex) {
    return;
  }

  const temp = array[secondIndex];
  array[secondIndex] = array[firstIndex]; // eslint-disable-line no-param-reassign
  array[firstIndex] = temp; // eslint-disable-line no-param-reassign

  swapAction(firstIndex, secondIndex);
}

export function compare(array, firstIndex, secondIndex, compareAction) {
  compareAction(firstIndex, secondIndex);

  if (array[firstIndex] < array[secondIndex]) {
    return -1;
  }

  if (array[firstIndex] === array[secondIndex]) {
    return 0;
  }

  return 1;
}
