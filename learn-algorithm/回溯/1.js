var combinationSum = function (candidates, target) {
	const res = []
	backtracking(candidates, [], 0, target, 0)
	function backtracking(candidates, path, pathSum, target, startIndex) {
		if (pathSum === target) {
			res.push([...path])
			return
		}
		for (let i = startIndex; i < candidates.length; i++) {
			if (pathSum + candidates[i] <= target) {
				console.log('此时进入递归的是' + candidates[i] + ' i = ' + i)
				path.push(candidates[i])
				backtracking(candidates, path, pathSum + candidates[i], target, i)
				console.log('****', path)
				path.pop()
			}
			console.log(
				'pathSum = ' +
					pathSum +
					' candidates[i] = ' +
					candidates[i] +
					' pathSum + candidates[i] = ' +
					(pathSum + candidates[i])
			)
		}
	}
	return res
}
combinationSum([2, 3, 6, 7], 7)
