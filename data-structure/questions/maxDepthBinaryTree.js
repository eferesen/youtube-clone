

const maxDepthBinaryTree = (root) => {
  // base case
  if (!root) return null
  // const count =

  const leftDepth = maxDepthBinaryTree(root.left)
  const rightDepth = maxDepthBinaryTree(root.right)

  return Math.max(leftDepth + rightDepth) + 1
}