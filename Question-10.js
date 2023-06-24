// Q.10 Implement a queue using the stack data structure.

class Queue {
    constructor() {
      this.items = {};
      this.frontindex = 0;
      this.backindex = 0;
    }
  
    enqueue(item) {
      this.items[this.backindex] = item;
      this.backindex++;
      return (item = 'inserted');
    }
  
    dequeue() {
      const item = this.items[this.frontindex];
      delete this.items[this.frontindex];
      this.frontindex++;
      return item;
    }
  
    peek() {
      return this.items[this.frontindex];
    }
  
    get printqueue() {
      return this.items;
    }
  }
  
  var queue = new Queue();
  
  queue.enqueue(21);
  queue.enqueue(54);
  queue.enqueue(32);
  queue.enqueue(10);
  queue.enqueue(24);
  console.log(queue.printqueue);
  console.log('Peek Value :- '+queue.peek())
  queue.dequeue()
  queue.dequeue()
  console.log(queue.printqueue);
  console.log('Peek Value :- '+queue.peek());
  queue.enqueue(58);
  queue.enqueue(92);
  console.log(queue.printqueue);


  

//   Output :- 

// { '0': 21, '1': 54, '2': 32, '3': 10, '4': 24 }
// Peek Value :- 21
// { '2': 32, '3': 10, '4': 24 }
// Peek Value :- 32
// { '2': 32, '3': 10, '4': 24, '5': 58, '6': 92 }