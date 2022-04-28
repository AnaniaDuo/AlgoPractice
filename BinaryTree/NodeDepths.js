function nodeDepths(root, sum = 0) {
  // Write your code here.
  if (!root) return 0;

  return sum + nodeDepths(root.left, sum + 1) + nodeDepths(root.right, sum + 1);
}

//--------------------------------------------

//iterative solution
// function nodeDepths(root) {
//   // Write your code here.
// 	let totalDepth = 0;
// 	const stack = [{node: root, depth: 0 }];

// 	while (stack.length > 0){

// 		const	{node, depth} = stack.pop();
// 			if (node === null) continue;
// 		totalDepth += depth;
// 		stack.push({node: node.left, depth : depth + 1})
// 		stack.push({node: node.right, depth : depth + 1})
// 	}
// 	return totalDepth
// }

// // This is the class of the input binary tree.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // Do not edit the line below.
// exports.nodeDepths = nodeDepths;
