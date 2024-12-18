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

  prepend(data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {

      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.size++
  }

  delete(data) {
    // start with the first element which is head
    // iterate over the array using while
    // compare the data of current to the data passed in
    // If equal
    // We have 3 scenarios
    // Delete data at the head
    // Delete data at the end
    // Delete data in between

    let current = this.head

    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next
          if (this.head) {
            this.head.prev = null
          } else {
            this.tail = null
          }
        } else if (current === this.tail) {
          // Delete the tail
          this.tail = current.prev
          this.tail.next = null
        } else {
          current.prev.next = current.next
          current.next.prev = current.prev
        }
        this.size--
        return true
      }
      current = current.next
    }



  } 

}