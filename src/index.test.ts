import { it, describe, expect } from 'vitest'
import is_abc from './index'

describe("is_abc", () => {
  it("should return true if passed \"ABC...\"", () => {
    expect(is_abc("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(true)
  })

  it("should return true if passed \"abc...\"", () => {
    expect(is_abc("abcdefghijklmnopqrstuvwxyz")).toBe(true)
  })

  it("should return false if the string cotains something else", () => {
    expect(is_abc("hmph")).toBe(false)
  })
})
