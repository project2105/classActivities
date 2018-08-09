var unsorted = [2, 3, 4, 6, 9, 12, 15, 18];

var sorted = false;

function bubbleSort(arr) {
    while (!sorted) {
        sorted = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }

        }
    }

}
console.log(bubbleSort(unsorted));