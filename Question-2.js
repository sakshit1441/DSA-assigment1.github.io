// Q.2 Reverse a linked list in groups of given size

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
  
    reverseInGroups(k) {
      if (k <= 1 || !this.head) {
        return;
      }
  
      let current = this.head;
      let prev = null;
  
      while (current) {
        let groupStart = current;
        let groupEnd = current;
        let count = 1;
  
        while (groupEnd.next && count < k) {
          groupEnd = groupEnd.next;
          count++;
        }
  
        if (count < k) {
          break; // The remaining elements are fewer than k
        }
  
        let nextGroupStart = groupEnd.next;
  
        // Reverse the group of nodes
        let prevNode = null;
        let currentNode = groupStart;
        while (currentNode !== nextGroupStart) {
          let temp = currentNode.next;
          currentNode.next = prevNode;
          prevNode = currentNode;
          currentNode = temp;
        }
  
        if (prev) {
          prev.next = groupEnd;
        } else {
          this.head = groupEnd;
        }
  
        groupStart.next = nextGroupStart;
        prev = groupStart;
        current = nextGroupStart;
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
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);
  linkedList.append(6);
  linkedList.append(7);
  linkedList.append(8);
  
  console.log("Original List:");
  linkedList.printList();
  
  linkedList.reverseInGroups(3);
  
  console.log("Reversed List in Groups of 3:");
  linkedList.printList();




// Output :-

// Original List:
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
// Reversed List in Groups of 3:
// 3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 8 -> 7
  