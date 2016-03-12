const BEGIN_SWAP = 'easysimplex/array/BEGIN_SWAP';
const DO_SWAP = 'easysimplex/array/DO_SWAP';
const END_SWAP = 'easysimplex/array/END_SWAP';
const BEGIN_SORTING = 'easysimplex/array/BEGIN_SORTING';
const QUEUE_SWAP = 'easysimplex/array/QUEUE_SWAP';

export default function reducer(state = {}, action) {
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
    case BEGIN_SORTING:
      return {
        ...state,
        commands: []
      };
    case QUEUE_SWAP:
      return {
        ...state,
        commands: [
          ...state.commands,
          {
            currentIndex: action.currentIndex,
            newIndex: action.newIndex
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
  return (dispatch, getState) => {
    const { array: { commands } } = getState();

    let promise = Promise.resolve();
    commands.forEach((command) => {
      promise = promise.then(() => dispatch({
        commandSteps: [BEGIN_SWAP, DO_SWAP, END_SWAP],
        ...command
      }));
    });

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
