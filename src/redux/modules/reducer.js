import { combineReducers } from 'redux';
import multireducer from 'multireducer';

import array from './array';

const rootReducer = combineReducers({
  array: multireducer({
    bubbleSortArray: array,
    insertionSortArray: array,
    quicksortArray: array
  })
});

export default rootReducer;
