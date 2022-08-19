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

 function levelOrder(root: TreeNode | null): number[][] {
  if(!root) return [];

  let res = [];
  let q = [root];

  while(q.length){
    const levelLength = q.length;
    const temp = [];
    for(let i = 0; i < levelLength; i++){
      const sr = q.shift();
      temp.push(sr.val);
      
      if(sr.left)
        q.push(sr.left);
      if(sr.right)
        q.push(sr.right);
    }
    res.push(temp);
  }

return res;
};