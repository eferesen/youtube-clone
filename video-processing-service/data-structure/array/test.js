class DynamicArray {


  constructor(capacity) {
    this.capacity = capacity
    this.length = 0

    this.myArr = Array(this.capacity).fill(0)
  }

  get(i) {
    return this.myArr[i]
  }

  set(i, n) {
    this.myArr[i] = n
  }

  pushback(n) {
    if (this.capacity === this.length) {
      this.resize()
    }
    this.myArr[this.length] = n
    this.length++
  }

  popback() {
    if (this.length > 0) {
      this.length--
    }
    return this.myArr[this.length]
  }

  resize() {
    this.capacity = this.capacity *= 2
    const newArr = Array(this.capacity).fill(0)
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.myArr[i]
    }
    this.myArr = newArr
  }

  getSize() {
    return this.length
  }

  getCapacity() {
    return this.capacity
  }
}