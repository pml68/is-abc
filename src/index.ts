/**
  * Compares a string to the ABC in both upper and lower case, and returns true if matches one
  *
  * @param str - String to be compared
  */
export const isabc = (str: string) => {
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str === abc || str === abc.toLowerCase()
}
