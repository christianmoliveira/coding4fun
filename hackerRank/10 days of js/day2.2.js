/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let tam = s.length;
  let vowel = [],
    conso = [];
  for (let i = 0; i < tam; i++) {
    if (
      s[i] == 'A' ||
      s[i] == 'a' ||
      s[i] == 'E' ||
      s[i] == 'e' ||
      s[i] == 'I' ||
      s[i] == 'i' ||
      s[i] == 'O' ||
      s[i] == 'o' ||
      s[i] == 'U' ||
      s[i] == 'u'
    ) {
      vowel.push(s[i].toLowerCase());
    } else {
      conso.push(s[i].toLowerCase());
    }
  }
  let junto = vowel.concat(conso);
  for (let i = 0; i < tam; i++) {
    console.log(junto[i]);
  }
}
