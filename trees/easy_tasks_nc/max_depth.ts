//three solutions for max depth of binary tree

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

function maxDepth(root: TreeNode | null): number {
  if(!root) return 0;
  
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)); 
};

function maxDepth(root: TreeNode | null): number {
  if(!root) return 0;
  
  let queue = [];
  queue.push(root);
  let level = 1;
  while(queue){
    for(let i = 0; i < queue.length; i++){
      queue.shift();
      if(root.left){
        queue.push(root.left);
      }
      if(root.right){
        queue.push(root.right);
      }
    }
    level += 1;
  }
  
  return level;
};