//queues

function createQueue() {
  const queue = [];
  return {
    //add to queue
    enqueue(item) {
      queue.unshift(item);
    },
    //remove from queue
    dequeue() {
      queue.pop();
    },
    //peek
    peek() {
      return queue[queue.length - 1];
    },
    //length
    /*get length(){
      return queue.length;
    }*/
    length() {
      return queue.length;
    },
    //isEmpty
    isEmpty() {
      return !queue.length;
    },
  };
}

const q = createQueue();
console.log(q.isEmpty());
q.enqueue('Kate');
q.enqueue('Daniel');
q.enqueue('Sheri');
console.log('queue length is: ', q.length());
console.log(q.peek()); //Kate
q.dequeue();
console.log('after dequeueu length is: ', q.length());
console.log('peek is: ', q.peek()); //Daniel
console.log(q.isEmpty());
