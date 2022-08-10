class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy: ListNode | null = new ListNode(0, null);
  let cur = dummy;

  let carry = 0;
  while(l1 || l2 || carry){
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;

    let val = v1 + v2 + carry;

    carry = Math.trunc(val / 10);
    val = val % 10;
    cur.next = new ListNode(val, null);

    cur = cur.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  
  return dummy.next;
}

console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3, null))), new ListNode(5, new ListNode(6, new ListNode(4, null)))));