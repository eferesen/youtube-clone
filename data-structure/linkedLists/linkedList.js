class Node { 
  // Node has 2 props
  // data and next
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList { 
  // LL has 2 props
  // head and size
  // head is initially set to null and size to 0
  constructor() {
    this.head = null
    this.size = 0
  }

  append(data) { 
    // Start by creating a new Node
    const newNode = new Node(data)
    // What does the LL structure look like
    // If there is no head that means we start there
    if (!this.head) {
      this.head = newNode
      this.size++
    } else {
      const current = this.head
      // traverse the array
      while (current.next) {
        current = current.next
      }
      // Once you are out the traverse 
      // set the next to the new Node value
      this.current.next = newNode()
      this.size++
    }
  }

  prepend(data) {
    // start with creating the new node
    const newNode = newNode(data)
    // Set an old head reference 
    const oldHead = this.head
    // replace the head with the newnode
    this.head = newNode
    // point the newNode next reference to old head
    newNode.next = oldHead
    // Increment the size
    this.size++

  }

  print() {
    // Traverse over the array
    const current = this.head
    while (current) {
      console.log(current.data)
      // increment current
      current = current.next
    }
  }

  removeData(data) {
    // What if LL is empty
    if (!this.head) return
    // What if the data is in the head

    if (this.head.data === data) {
      // Un-link the data
      this.head === this.head.next
      // reduce the size
      this.size--
      return
    }

    // Traverse the structure
    // We have already accounted for the head
    const current = this.head
    while (current.next) {
      // Look for the data
      if (current.next.data === data) {
        current.next = current.next.next
        this.size--
        return
      } 

      current = current.next
    }


  }

  getSize() {
    return this.size
  }
}