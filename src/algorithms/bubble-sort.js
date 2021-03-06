import { swap, compare } from './array-operations';

export default (array, actions) => {
  actions.beginSorting();

  let swapped = false;
  do {
    swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (compare(array, i - 1, i, actions.compare) > 0) {
        swap(array, i - 1, i, actions.swap);
        swapped = true;
      }
    }
  } while (swapped);

  actions.endSorting();
};

export const Info = {
  id: 'BubbleSort',
  name: 'Bubble Sort',
  description: 'Bubble sort, sometimes referred to as sinking sort, ' +
               'is a simple sorting algorithm that repeatedly steps through ' +
               'the list to be sorted, compares each pair of adjacent items ' +
               'and swaps them if they are in the wrong order. The pass through ' +
               'the list is repeated until no swaps are needed, which indicates ' +
               'that the list is sorted.',
  link: 'https://en.wikipedia.org/wiki/Bubble_sort',
  linkSource: 'Wikipedia',
  pseudocode: '' +
`function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        swap(array[i - 1], array[i]);
        swapped = true;
      }
    }
  } while (swapped);
}`
};
