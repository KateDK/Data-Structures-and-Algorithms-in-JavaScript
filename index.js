//queues

function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    length() {
      return queue.length;
    },
    isEmpty() {
      return !queue.length;
    },
  };
}

module.exports = createQueue;

// const q = createQueue();
// console.log(q.isEmpty());
// q.enqueue('Kate');
// q.enqueue('Daniel');
// q.enqueue('Sheri');
// console.log('queue length is: ', q.length());
// console.log(q.peek()); //Kate
// q.dequeue();
// console.log('after dequeueu length is: ', q.length());
// console.log('peek is: ', q.peek()); //Daniel
// console.log(q.isEmpty());
