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

function doSwap(array, firstIndex, secondIndex, swap) {
    var temp = array[secondIndex];
    array[secondIndex] = array[firstIndex];
    array[firstIndex] = temp;
    
    swap(firstIndex, secondIndex);
}