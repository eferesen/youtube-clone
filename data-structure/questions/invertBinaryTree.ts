

const invertBinaryTree = (root) => {

  // Base condition
  if (!root) return null

  // swap the children
  const tmp = root.left
  root.left = root.right
  root.right = tmp

  invertBinaryTree(root.left)
  invertBinaryTree(root.right)

  return root

}

const tree1 = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null }
  },
  right: {
    val: 7,
    left: { val: 6, left: null, right: null },
    right: { val: 9, left: null, right: null }
  }
};

console.log('Original Tree:', tree1);
console.log('Inverted Tree:', invertBinaryTree(tree1));

// Example 2: Empty tree
console.log('Empty Tree:', invertBinaryTree(null));

// Example 3: Single node tree
const tree3 = { val: 1, left: null, right: null };
console.log('Single Node Tree:', invertBinaryTree(tree3));