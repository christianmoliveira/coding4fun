/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    let reversedString = s.split('').reverse().join('');

    console.log(reversedString);
  } catch (e) {
    console.log(e.message);
    console.log(Number(s));
  }
}
