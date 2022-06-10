const { a, o } = require('./a')

// module.exports = {
//     fb: function () {
//         console.log(444, a, o)
//     }
// }

module.exports = function () {
    console.log(444, a, JSON.stringify(o))
}