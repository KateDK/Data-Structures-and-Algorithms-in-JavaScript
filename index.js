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
  };
}
