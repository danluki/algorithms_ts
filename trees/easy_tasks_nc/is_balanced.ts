/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

//n^2
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  let res = true;
  function dfs(root: TreeNode | null) {
    if (!root) return false;

    let left = dfs(root.left);
    let right = dfs(root.right);
    if (Math.abs(left - right) > 1) res = false;

    return Math.max(left, right) + 1;
  }

  dfs(root);

  return res;
}

function isBalanced(root: TreeNode | null): boolean {
  
  function dfs(root: TreeNode | null) {
    if(!root) return [true, 0];
    
    let left = dfs(root.left);
    let right = dfs(root.right);
    
    let balanced = left[0]  && right[0] && Math.abs(left[1] - right[1]) < 2;
    
    return [balanced, 1 + Math.max(left[1] + right[1])]
  }
  
  return dfs(root)[0];
};