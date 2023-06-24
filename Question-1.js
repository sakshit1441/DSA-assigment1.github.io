//Q.1 Delete the elements in an linked list whose sum is equal to zero

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  deleteZeroSum() {
    let current = this.head;
    let sumMap = new Map();
    let sum = 0;

    while (current) {
      sum += current.data;

      if (sum === 0) {
        this.head = current.next;
        current = this.head;
        sumMap.clear();
        sum = 0;
      } else if (sumMap.has(sum)) {
        let prevNode = sumMap.get(sum).next;
        let temp = sum;
        while (prevNode !== current) {
          temp += prevNode.data;
          sumMap.delete(temp);
          prevNode = prevNode.next;
        }
        sumMap.get(sum).next = current.next;
        current = current.next;
      } else {
        sumMap.set(sum, current);
        current = current.next;
      }
    }
  }

  printList() {
    let current = this.head;
    let elements = [];

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.join(" -> "));
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(6);
linkedList.append(-6);
linkedList.append(8);
linkedList.append(4);
linkedList.append(-12);
linkedList.append(9);
linkedList.append(8);
linkedList.append(-4);

console.log("Original List:");
linkedList.printList();

linkedList.deleteZeroSum();

console.log("Updated List:");
linkedList.printList();




// Output :-

// Original List:
// 6 -> -6 -> 8 -> 4 -> -12 -> 9 -> 8 -> -4
// Updated List:
// 9 -> 8 -> -4