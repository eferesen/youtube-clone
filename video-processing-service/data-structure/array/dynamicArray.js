class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity
    this.length = 0
    this.myArray = new Array(this.capacity).fill(0)
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.myArray[i]
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    this.myArray[i] = n
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.length === this.capacity) {
      this.resize()
    }
    this.myArray[this.length] = n
    this.length++
  }

  /**
   * @returns {number}
   */
  popback() {
    if (this.length > 0) {
      this.length--
    }
    return this.myArray[this.length]
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity *= 2
    const newArray = new Array(this.capacity).fill(0)
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.myArray[i]
    }
    this.myArray = newArray
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.length
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity
  }
}
