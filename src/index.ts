/**
  * Compares a string to the ABC in both upper and lower case, and returns true if either is matched
  *
  * @param str - String to be compared
  */
export default function is_abc(str: string) {
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str === abc || str === abc.toLowerCase()
}
