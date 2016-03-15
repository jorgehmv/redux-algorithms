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

const startQuicksort = (array, actions) => {
  actions.beginSorting();
  quicksort(array, 0, array.length - 1, actions);
  actions.endSorting();
};

export default startQuicksort;

export const Info = {
  id: 'Quicksort',
  name: 'Quicksort',
  description: 'Quicksort is a divide and conquer algorithm. Quicksort first ' +
               'divides a large array into two smaller sub-arrays: the low ' +
               'elements and the high elements. Quicksort can then recursively ' +
               'sort the sub-arrays.',
  link: 'https://en.wikipedia.org/wiki/Quicksort',
  linkSource: 'Wikipedia',
  source: `${startQuicksort.toString().replace(/\t/g, '')}\n\n` +
          `${quicksort.toString().replace(/\t/g, '')}\n\n` +
          `${partition.toString().replace(/\t/g, '')}\n\n`
};
