function doSwap(array, firstIndex, secondIndex, swap) {
  const temp = array[secondIndex];
  array[secondIndex] = array[firstIndex]; // eslint-disable-line no-param-reassign
  array[firstIndex] = temp; // eslint-disable-line no-param-reassign

  swap(firstIndex, secondIndex);
}

export default (array, actions) => {
  actions.beginSorting();

  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        doSwap(array, i - 1, i, actions.swap);
        swapped = true;
      }
    }
  } while (swapped);

  actions.endSorting();
};
