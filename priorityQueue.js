const { createQueue } = require('./index');

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();
  return {
    enqueue(item, isHighPriority = false) {
      if (isHighPriority) {
        highPriorityQueue.enqueue(item);
      } else {
        lowPriorityQueue.enqueue(item);
      }
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
