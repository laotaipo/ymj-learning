Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i++) {
        const curV = this[i]
        let j = i - 1
        while (j >= 0) {
            if (this[j] > curV) {
                // j往后排
                this[j + 1] = this[j]
                if (j === 0) {
                    this[0] = curV
                }
                j--
            } else {
                this[j + 1] = curV
                break
            }
        }
    }
}

const arr = [2, 3, 1, 5, 6, 1, 8, 9]
arr.insertionSort()
console.log(arr)