const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let length = expr.length;
  let decodedStr = "";
  let n = length / 10;
  let startSubstring = 0;
  for (let i = 0; i < n; i++, startSubstring += 10) {
    let symbol = "";
    let codedStr = expr.substr(startSubstring, 10);
    if (codedStr[0] == "*") {
      decodedStr += " ";
      continue;
    }
    let j = 0;
    while (codedStr[j] == "0") j++;
    j++;
    for (j; j < 10; j += 2) {
      if (codedStr[j] == 0) {
        symbol += ".";
      } else {
        symbol += "-";
      }
    }
    decodedStr += MORSE_TABLE[symbol];
  }
  return decodedStr;
}

module.exports = {
    decode
}
