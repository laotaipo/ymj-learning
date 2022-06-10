type RangeType = [number, number]

interface IRangeList {
    add(range: RangeType): void
    remove(range: RangeType): void
    print(): void
}

class RangeList implements IRangeList {
    private rangeList: RangeType[] = []

    private merge(): RangeType[] {
        return this.rangeList.reduce((prev: RangeType[], cur: RangeType) => {
            if (prev.length === 0) {
                prev.push(cur)
                return prev
            } 
            const lastRange = prev[prev.length - 1]
            if (cur[0] > lastRange[1]) {
                prev.push(cur)
                return prev
            }
            prev[prev.length - 1] = [lastRange[0], Math.max(lastRange[1], cur[1])]
            return prev
        }, [])
    }

    add(range: RangeType): void {
        if (this.rangeList.length === 0) {
            this.rangeList.push(range)
            return
        }
        const rangeListLen = this.rangeList.length 
        let i = 0
        while (i < rangeListLen) {
            if (!this.rangeList[i + 1]) {
                this.rangeList[i][0] > range[0] ? this.rangeList.splice(i, 0, range) : this.rangeList.push(range)
                break
            }
            if (range[0] < this.rangeList[i][0]) {
                this.rangeList.unshift(range)
                break
            }
            if (range[0] >= this.rangeList[i][0] && range[0] <= this.rangeList[i + 1][0]) {
                this.rangeList.splice(i + 1, 0, range)
                break
            }
            i ++
        }
        this.rangeList = this.merge()
    }

    remove(range: RangeType): void {
        if (this.rangeList.length === 0 || range[1] < this.rangeList[0][0] || range[0] > this.rangeList[this.rangeList.length - 1][1]) return
        this.rangeList = this.rangeList.reduce((prev: RangeType[], cur: RangeType) => {
            if (range[0] <= cur[0] && range[1] >= cur[1]) {
                return prev
            } else if (range[0] >= cur[1] || range[1] <= cur[0]) {
                prev.push(cur)
                return prev
            } else if (range[0] <= cur[0] && range[1] <= cur[1]) {
                prev.push([range[1], cur[1]])
                return prev
            } else if (range[0] <= cur[1] && range[1] >= cur[1]) {
                prev.push([cur[0], range[0]])
                return prev
            } else {
                prev.push([cur[0], range[0]], [range[1], cur[1]])
                return prev
            }
        }, [])
        this.rangeList = this.merge()
    }

    print() {
        const strRange = this.rangeList.reduce((prev, cur) => {
            return prev + '[' + cur.toString() + ')'
        }, '')
        console.log(strRange)
    }
}

const rl = new RangeList()

rl.add([1, 5]); rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// // Should display: [1, 3) [19, 21)