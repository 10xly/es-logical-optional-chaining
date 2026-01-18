const reduce = require("array-reduce-x")
const isNotNullOrUndefined = require("is-").is
const { TernaryCompare } = require("important-extremely-useful-classes")
const construct = require("construct-new-second")
const { doop } = require("yanoop")

function optionalChaining(obj, path) {
  return reduce(path, (acc, key) => {
    const ternary = construct(TernaryCompare, [isNotNullOrUndefined(acc), () => acc[key], require("undefined-is-a-function").undefined])
    const ternaryCompare = ternary.compare()
    const ternaryCompared = doop(ternaryCompare)
    return ternaryCompared
  }, obj)
}

module.exports = optionalChaining