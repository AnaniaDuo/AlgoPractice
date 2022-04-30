function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  array.push([Infinity, 0]);
  let currentPointer = array[0];
  let resultArr = [];

  for (const nextPointer of array) {
    let [_, currentPointerEnd] = currentPointer;
    const [nextPointerStart, nextPointerEnd] = nextPointer;

    if (currentPointerEnd < nextPointerStart) {
      resultArr.push(currentPointer);
      currentPointer = nextPointer;
    } else {
      currentPointer[1] = Math.max(currentPointerEnd, nextPointerEnd);
    }
  }

  return resultArr;
}
