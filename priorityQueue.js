const { createQueue } = require('./index');

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();
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
