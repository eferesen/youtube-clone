class Stack {

  constructor() {
    this.size = 0
    this.stack = []
  }

  /**
   * Add an element to the top of the stack
    * @param {*} element - The element to push onto the stack
    * @returns {number} The new size of the stack
  */

  push(n) {
    this.stack[this.size] = n
    this.size++
    return this.size
  }

  /**
    * Remove and return the top element from the stack
    * @returns {*} The element removed from the top of the stack
    * @throws {Error} If the stack is empty
  */
  pop() {
    if (this.isEmpty()) {
      throw new Error('Whoops there is nothing to pop')
    }
    const popped = this.stack[this.size - 1]
    this.size--
    this.stack.length = this.size
    return popped
  }

  /**
    * Look at the top element of the stack without removing it
    * @returns {*} The element at the top of the stack
    * @throws {Error} If the stack is empty
    */
  peek() {
    if (this.isEmpty()) {
      throw new Error('There is nothing to peek')
    }
    return this.stack[this.size - 1]
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  clear() {
    this.stack = []
    this.size = 0
  }
}