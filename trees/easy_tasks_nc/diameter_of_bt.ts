function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return -1;
  var res = null;

  function dfs(root: TreeNode | null) {
    if (!root) {
      return -1;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);

    res = Math.max(res, 2 + left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return res;
}
