//Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let outputArr = [];
  helperBranchSum(root, 0, outputArr);
  return outputArr;
}

function helperBranchSum(node, tempSum, outputArr) {
  //base case
  if (!node) return;
  const newTempSum = tempSum + node.value;
  if (!node.left && !node.right) {
    outputArr.push(newTempSum);
    return;
  }

  helperBranchSum(node.left, newTempSum, outputArr);
  helperBranchSum(node.right, newTempSum, outputArr);
}
