import { it, describe, expect } from 'vitest'
import { is_abc, contains_abc } from './index'

describe("is_abc", () => {
  it("should return true if passed \"ABC...\"", () => {
    expect(is_abc("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(true)
  })

  it("should return true if passed \"abc...\"", () => {
    expect(is_abc("abcdefghijklmnopqrstuvwxyz")).toBe(true)
  })

  it("should return false if the string contains something else", () => {
    expect(is_abc("hmph")).toBe(false)
  })
})

describe("contains_abc", () => {
  it("should return true if the string contains \"ABC...\"", () => {
    expect(contains_abc("The ABC song goes ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(true)
  })

  it("should return true if the string contains \"abc...\"", () => {
    expect(contains_abc("hmm the abcdefghijklmnopqrstuvwxyz")).toBe(true)
  })

  it("should return false if the string doesn't contain either", () => {
    expect(contains_abc("no ABC here")).toBe(false)
  })
})
