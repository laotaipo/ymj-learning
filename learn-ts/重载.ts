// 有点难以想到用途

function double(val: number): number
function double(val: string): string
function double(val: any): any {
	if (typeof val == 'number') {
		return val * 2
	}
	return val + val
}

const r = double(1)
console.log(r)
