function hasCycle(head: ListNode | null): boolean {
  let cur = head;
  let set = new Set();
  while(cur){
      if(!set.has(cur)){
          set.add(cur)
      }
      else{
          return true;
      }
      cur = cur.next;
  }
  return false;
};