Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        let minIdx = i
        for (let j = i; j < this.length; j++) {
            if (this[j] < this[minIdx]) {
                minIdx = j
            }
        }
        if (i !== minIdx) {
            const temp = this[i]
            this[i] = this[minIdx]
            this[minIdx] = temp
        }
    }
    return this
}
console.log([3, 4, 1, 5, 1].selectionSort())