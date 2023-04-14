function merge_sort(arr) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left_half = arr.slice(0, mid);
    const right_half = arr.slice(mid);

    merge_sort(left_half);
    merge_sort(right_half);

    let i = j = k = 0;

    while (i < left_half.length && j < right_half.length) {
      if (left_half[i] < right_half[j]) {
        arr[k] = left_half[i];
        i++;
      } else {
        arr[k] = right_half[j];
        j++;
      }
      k++;
    }

    while (i < left_half.length) {
      arr[k] = left_half[i];
      i++;
      k++;
    }

    while (j < right_half.length) {
      arr[k] = right_half[j];
      j++;
      k++;
    }
  }

  return arr;
}

const myArray = [9, 5, 7, 3, 1, 8, 6, 2, 4];
const sortedArray = merge_sort(myArray);
console.log(sortedArray);
