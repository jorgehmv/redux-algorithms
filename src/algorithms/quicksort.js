import { swap, compare } from './array-operations';

const partition = (array, lo, hi, actions) => {
  const pivot = hi;
  let i = lo;

  for (let j = lo; j <= hi - 1; j++) {
    if (compare(array, j, pivot, actions.compare) <= 0) {
      swap(array, i, j, actions.swap);
      i++;
    }
  }

  swap(array, i, hi, actions.swap);
  return i;
};

const quicksort = (array, lo, hi, actions) => {
  if (lo < hi) {
    const p = partition(array, lo, hi, actions);
    quicksort(array, lo, p - 1, actions);
    quicksort(array, p + 1, hi, actions);
  }
};

export default (array, actions) => {
  actions.beginSorting();
  quicksort(array, 0, array.length - 1, actions);
  actions.endSorting();
};

export const Info = {
  id: 'Quicksort',
  name: 'Quicksort',
  description: 'Quicksort is a divide and conquer algorithm. Quicksort first ' +
               'divides a large array into two smaller sub-arrays: the low ' +
               'elements and the high elements. Quicksort can then recursively ' +
               'sort the sub-arrays.',
  link: 'https://en.wikipedia.org/wiki/Quicksort',
  linkSource: 'Wikipedia',
  pseudocode: '' +
`function partition(array, lo, hi) {
  const pivot = array[hi];
  let i = lo;

  for (let j = lo; j <= hi - 1; j++) {
    if (array[j] <= pivot) {
      swap(array[i], array[j]);
      i++;
    }
  }

  swap(array[i], array[hi]);
  return i;
};

function quicksort(array, lo, hi) => {
  if (lo < hi) {
    const p = partition(array, lo, hi);
    quicksort(array, lo, p - 1);
    quicksort(array, p + 1, hi);
  }
};

// call to quicksort to sort the entire array
quicksort(array, 0, array.length - 1);`
};
