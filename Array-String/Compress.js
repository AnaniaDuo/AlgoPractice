const compress = (s) => {
  // todo
  // outputStr = ''
  //loop through string
  //set start=end=0
  //if(s[start] === s[end]) end++
  // num = end - start
  //outputStr += num + s[start]
  // start = end
  // c c a a a t s s s
  let outputStr = "";
  let num = 0;
  let start = 0;
  let end = 0;
  while (end <= s.length) {
    if (s[start] === s[end]) {
      end++;
    } else {
      num = end - start;
      if (num === 1) {
        outputStr += s[start];
      } else {
        outputStr += num + s[start];
      }
      start = end;
    }
  }

  return outputStr;
};

console.log(compress("ccaaatsss"));

// if I would have solved this problem using for loop
// const compress = (s) => {

//   let outputStr = "";
//   let num = 0;
//   let start = 0;
//   let end = 0;
//   for (var i = 0; i <= s.length; i++) {
//     if (s[start] === s[end]) {
//       end++;
//       continue;
//     }
//     num = end - start;
//     if (num === 1) {
//       outputStr += s[start];
//     } else {outputStr += num + s[start];}
//     start = end;
//     i = start - 1;
//   }

//   return outputStr;
// };

// console.log(compress('ccaaattsss'))
