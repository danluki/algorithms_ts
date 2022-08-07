
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0, head);
  let left = dummy, right = head;

  while(n > 0 && right){
    right = right.next;
    n--;
  }

  while(right){
    left = left.next as ListNode;
    right = right.next;
  }

  left.next = (left.next as ListNode).next;

  return dummy.next;
}

console.log(
  removeNthFromEnd(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
    ),
    2
  )
);
