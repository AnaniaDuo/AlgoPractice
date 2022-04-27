const arr1 = [1, 1, 2, 5, 3, 7, 22];

//20

const minimumChange = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);

  let temp = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] > temp + 1) return temp + 1;
    else {
      temp = temp + sortedArr[i];
    }
  }
  return sortedArr[sortedArr.length - 1] + 1;
};

console.log(minimumChange(arr1));
