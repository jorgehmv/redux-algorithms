const BEGIN_SWAP = 'easysimplex/array/BEGIN_SWAP';
const DO_SWAP = 'easysimplex/array/DO_SWAP';
const END_SWAP = 'easysimplex/array/END_SWAP';
const BEGIN_COMPARE = 'easysimplex/array/BEGIN_COMPARE';
const DO_COMPARE = 'easysimplex/array/DO_COMPARE';
const END_COMPARE = 'easysimplex/array/END_COMPARE';
const BEGIN_SORTING = 'easysimplex/array/BEGIN_SORTING';
const END_SORTING = 'easysimplex/array/END_SORTING';
const QUEUE_SWAP = 'easysimplex/array/QUEUE_SWAP';
const QUEUE_COMPARE = 'easysimplex/array/QUEUE_COMPARE';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case BEGIN_SWAP:
      return {
        ...state,
        swapping: [action.currentIndex, action.newIndex]
      };
    case DO_SWAP: {
      const minIndex = Math.min(action.currentIndex, action.newIndex);
      const maxIndex = Math.max(action.currentIndex, action.newIndex);

      return {
        ...state,
        swapping: [],
        swapped: [action.currentIndex, action.newIndex],
        items: [
          ...state.items.slice(0, minIndex),
          state.items[maxIndex],
          ...state.items.slice(minIndex + 1, maxIndex),
          state.items[minIndex],
          ...state.items.slice(maxIndex + 1)
        ]
      };
    }
    case END_SWAP:
      return {
        ...state,
        swapped: []
      };
    case BEGIN_COMPARE:
      return {
        ...state,
        comparing: [action.currentIndex, action.newIndex]
      };
    case DO_COMPARE:
      return {
        ...state
      };
    case END_COMPARE:
      return {
        ...state,
        comparing: []
      };
    case BEGIN_SORTING:
      return {
        ...state,
        commands: [],
        sorting: true
      };
    case END_SORTING:
      return {
        ...state,
        sorting: false
      };
    case QUEUE_SWAP:
      return {
        ...state,
        commands: [
          ...state.commands,
          {
            currentIndex: action.currentIndex,
            newIndex: action.newIndex,
            types: [BEGIN_SWAP, DO_SWAP, END_SWAP]
          }
        ]
      };
    case QUEUE_COMPARE:
      return {
        ...state,
        commands: [
          ...state.commands,
          {
            currentIndex: action.currentIndex,
            newIndex: action.newIndex,
            types: [BEGIN_COMPARE, DO_COMPARE, END_COMPARE]
          }
        ]
      };
    default:
      return state;
  }
}

export function beginSorting() {
  return {
    type: BEGIN_SORTING
  };
}

export function endSorting() {
  return (dispatch, getState, globalDispatch, multireducerKey) => {
    const { array } = getState();

    let promise = Promise.resolve();
    array[multireducerKey].commands.forEach((command) => {
      promise = promise.then(() => dispatch(command));
    });

    promise = promise.then(() => dispatch({ type: END_SORTING }));
    return promise;
  };
}

export function swap(currentIndex, newIndex) {
  return {
    type: QUEUE_SWAP,
    currentIndex: parseInt(currentIndex, 10),
    newIndex: parseInt(newIndex, 10)
  };
}

export function compare(currentIndex, newIndex) {
  return {
    type: QUEUE_COMPARE,
    currentIndex,
    newIndex
  };
}
