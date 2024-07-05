const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

/**
  * Compares a string to the ABC in both upper and lower case, and returns true if either is matched
  *
  * @param str - String to be compared
  */
export function is_abc(str: string) {
  return str === abc || str === abc.toLowerCase()
}

/**
  * Checks if the string contains the ABC in either upper or lower case
  *
  * @param str - String to be checked
  */
export function contains_abc(str: string) {
  return str.includes(abc) || str.includes(abc.toLowerCase())
}
