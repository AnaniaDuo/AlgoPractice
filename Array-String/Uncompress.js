const uncompress = (s) => {
  const numbers = "0123456789";
  let start = 0,
    end = 0,
    tempNum = 0;
  let outputStr = "";
  for (let i = 0; i < s.length; i++) {
    if (numbers.includes(s[i])) {
      end++;
      continue;
    }
    if (start === end - 1) {
      tempNum = parseInt(s[start]);
    } else {
      tempNum = parseInt(s.slice(start, end));
    }
    for (let i = 0; i < tempNum; i++) {
      outputStr += s[end];
    }
    end++;
    start = end;
  }
  return outputStr;
};
