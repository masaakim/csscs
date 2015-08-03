var postcss = require('postcss')

module.exports = function () {
  return function (root) {
    root.eachRule(function (rule) {
      var betweenCount = rule.between.length
      if (betweenCount === 0) {
        console.warn('need space between selector and {')
      }
    })
  }
}
