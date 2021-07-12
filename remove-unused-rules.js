var getRuleFinder = require('eslint-find-rules')

var ruleFinder = getRuleFinder('./config/.eslintrc.js')

const unusedRules = ruleFinder.getUnusedRules()

console.log(unusedRules);

//ruleFinder.getDeprecatedRules()
