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
    //length
    //isEmpty
  };
}
