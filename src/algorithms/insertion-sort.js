import { swap, compare } from './array-operations';

export default (array, actions) => {
  actions.beginSorting();

  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && compare(array, j - 1, j, actions.compare) > 0) {
      swap(array, j, j - 1, actions.swap);
      j = j - 1;
    }
  }

  actions.endSorting();
};

export const Info = {
  id: 'InsertionSort',
  name: 'Insertion Sort',
  description: 'Insertion sort iterates, consuming one input ' +
               'element each repetition, and growing a sorted output ' +
               'list. Each iteration, insertion sort removes one element ' +
               'from the input data, finds the location it belongs within ' +
               'the sorted list, and inserts it there. It repeats until no ' +
               'input elements remain.',
  link: 'https://en.wikipedia.org/wiki/Insertion_sort',
  linkSource: 'Wikipedia',
  pseudocode: '' +
`function insertionSort() {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array[j], array[j - 1]);
      j = j - 1;
    }
  }
}`
};
