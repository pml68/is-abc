import { it, describe, expect } from 'vitest'
import { isabc } from './index'

describe("isabc", () => {
  it("should return true if passed \"ABC...\"", () => {
    expect(isabc("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(true)
  })

  it("should return true if passed \"abc...\"", () => {
    expect(isabc("abcdefghijklmnopqrstuvwxyz")).toBe(true)
  })

  it("should return false if the string cotains something else", () => {
    expect(isabc("hmph")).toBe(false)
  })
})
