const assert = require("chai").assert
const optionalChaining = require("./index")

describe("optionalChaining()", () => {
  const mockObj = {
    profile: {
      name: "Fox Jones",
      socials: {
        youtube: "321B Productions"
      }
    }
  }

  it("should retrieve a deeply nested value", () => {
    const result = optionalChaining(mockObj, ["profile", "socials", "youtube"])
    assert.strictEqual(result, "321B Productions")
  })

  it("should return undefined when a middle key is missing", () => {
    const result = optionalChaining(mockObj, ["profile", "settings", "theme"])
    assert.strictEqual(result, undefined)
  })

  it("should handle null values in the chain without throwing", () => {
    const nullObj = { data: null }
    const result = optionalChaining(nullObj, ["data", "id"])
    assert.strictEqual(result, undefined)
  })

  it("should return the root object if path is empty", () => {
    const result = optionalChaining(mockObj, [])
    assert.deepEqual(result, mockObj)
  })
})