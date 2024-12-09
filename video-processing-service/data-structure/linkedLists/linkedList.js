class Node { 
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList { 

  constructor() {
    this.head = null
    this.size = 0
  }

  append(data) {
    // start by creating a new node
    // Check to see if there exist a node
    // Append to end of node
    // Increase size

    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  prepend(data) {
    // start by creating a new node
    const newNode = new Node(data)
    // get the current head
    let current = this.head
    current.next = current
    // set the newNode's next to current head
    this.head = newNode
    // increment the size
    this.size++
  }

  print() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}