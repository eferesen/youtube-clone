class Node {
  constructor() {
    this.data = null
    this.next = null
  }
}

class LinkedList {
  contructor() {
    this.head = null
    this.size = 0
  }

  append(data) {
    // create a new node
    const newNode = new Node(data)

    // Now determine where to add new node

    // Case one: There is no nodes added to the LL
    if (this.head) {
      this.head = newNode
    } else {
      // Let traverse the array
      // Go to the end of the array
      // append the new node
      let current = this.head
      while (current) {
        // keep iterating over the array
        current = current.next
      }
      // When current becomes
      // assign the value
      current.next = newNode
    }

    // In either case increase the length
    this.size++
  }

  prepend(data) {
    // create the new node 
    const newNode = new Node(data)
    // Define current head
    const currentHead = this.head
    // Add the current head to the new Node
    newNode.next = currentHead
    // Point the head to the new node
    this.head = newNode
  }
}