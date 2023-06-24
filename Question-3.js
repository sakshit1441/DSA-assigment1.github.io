// Q.3 Merge a linked list into another linked list at alternate positions.

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
  
    mergeAlternate(list) {
      if (!this.head) {
        this.head = list.head;
        return;
      }
  
      let current1 = this.head;
      let current2 = list.head;
  
      while (current1 && current2) {
        let next1 = current1.next;
        let next2 = current2.next;
  
        current1.next = current2;
        current2.next = next1;
  
        current1 = next1;
        current2 = next2;
      }
  
      list.head = current2; 
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
  const list1 = new LinkedList();
  list1.append(1);
  list1.append(2);
  list1.append(3);
  
  const list2 = new LinkedList();
  list2.append("A");
  list2.append("B");
  list2.append("C");
  list2.append("D");
  
  console.log("List 1:");
  list1.printList();
  
  console.log("List 2:");
  list2.printList();
  
  list1.mergeAlternate(list2);
  
  console.log("Merged List:");
  list1.printList();
  



// Output :-

// List 1:
// 1 -> 2 -> 3
// List 2:
// A -> B -> C -> D
// Merged List:
// 1 -> A -> 2 -> B -> 3 -> C