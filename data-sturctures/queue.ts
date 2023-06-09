// fifo

type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

class Queue<T> {
  public length = 0;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.head = this.tail = undefined;
  }

  enqueue(item: T) {
    this.length++;
    const node: QNode<T> = { value: item };

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque() {
    if (!this.head) return;
    this.length--;

    const head = this.head;
    this.head = this.head.next;

    // remove tail if there was only one element
    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek() {
    return this.head?.value;
  }
}
