Array.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i; j++) {
            if (this[j] > this[j + 1]) {
                const tmp = this[j]
                this[j] = this[j + 1]
                this[j + 1] = tmp
            }
        }
    }
    return this
}

console.log([8, 3,4,1,2,3,4].bubbleSort())