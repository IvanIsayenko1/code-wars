/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
export var nodesBetweenCriticalPoints = function (head) {
  head = arrayToLinkedList(head); // remove this

  let current = head;
  const criticalPoints = [];
  const checked = [undefined, undefined, current.val];
  let index = 0;

  while (current !== null) {
    current = current.next;
    index++;

    if (!current) break;

    checked.push(current.val);
    checked.shift();

    if (checked[0] > checked[1] && checked[1] < checked[2]) {
      criticalPoints.push(index - 1);
    }

    if (checked[0] < checked[1] && checked[1] > checked[2]) {
      criticalPoints.push(index - 1);
    }
  }

  if (criticalPoints.length < 2) return [-1, -1];

  criticalPoints.sort((a, b) => a - b);

  return [
    Math.min(
      ...criticalPoints
        .map((value, index) => Math.abs(value - criticalPoints[index + 1]))
        .filter((n) => n),
    ),
    criticalPoints[criticalPoints.length - 1] - criticalPoints[0],
  ];
};

function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head; // Returns the head node of the new list
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; // Stores the data/value of the node
    this.next = next; // Pointer/reference to the next ListNode (or null)
  }
}
