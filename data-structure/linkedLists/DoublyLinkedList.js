class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null // This is the end of the list
    this.size = 0
  }

  append(data) {
    const newNode = new Node(data)

    // Let's check and see if there is no head
    // Set the head and tail to new node
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // Now the new Node's prev is the tail
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

    this.size++

  }

}