const path = require('path')
const { getAST, getDependencies } = require('./parser')

const ast = getAST(path.join(__dirname, '../src/index.js'))
const dependencies = getDependencies(ast)
console.log(dependencies)
