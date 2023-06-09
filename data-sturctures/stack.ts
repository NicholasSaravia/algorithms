type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

export class Stack<T> {
  public length: number;
  private head?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }
  push(item: T) {
    this.length++;
    const node: SNode<T> = { value: item };

    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }
  pop() {
    if (!this.head) return;
    this.length--;

    const head = this.head;
    this.head = this.head.prev;

    return head.value;
  }
  peek() {
    return this.head?.value;
  }
}
