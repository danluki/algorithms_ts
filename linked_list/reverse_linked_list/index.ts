class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//iterative solution
// function reverseList(head: ListNode | null): ListNode | null {
//   let prev: ListNode | null = null,
//     curr = head;

//   while (curr) {
//     let tempNext = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = tempNext;
//   }
//   return prev;
// }

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let newHead: ListNode | null = head;
  if(head.next){
    newHead = reverseList(head.next);
    head.next.next = head;
  }
  head.next = null

  return newHead;
}

console.log(
  reverseList(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
    )
  )
);
