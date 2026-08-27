const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  ".----.": "'",
  "-.-.--": "!",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  ".-..-.": '"',
  "...-..-": "$",
  ".--.-.": "@",
  "...---...": "SOS",
};

export var decodeBits = function (bits) {
  bits = bits.replace(/^0+/, "").replace(/0+$/, "");
  let result = "";

  let count = 0;
  let min = 0;
  let checked = bits.toString()[0];
  bits
    .toString()
    .split("")
    .forEach((bit) => {
      if (bit === checked) {
        count++;
      } else {
        checked = bit;
        if (!min || count < min) min = count;
        count = 1;
      }
    });

  if (!min) min = count;

  const separationChars = "000".repeat(min);
  const separationWords = "0000000".repeat(min);
  const dots = "1".repeat(min);
  const underscores = "111".repeat(min);
  const separationMorse = "0".repeat(min);

  bits.split(separationWords).forEach((word) => {
    word.split(separationChars).forEach((letter) => {
      result +=
        letter
          .replace(new RegExp(underscores, "g"), "-")
          .replace(new RegExp(dots, "g"), ".")
          .replace(new RegExp(separationMorse, "g"), "") + " ";
    });

    result += "   ";
  });

  return result.trim();
};

export var decodeMorse = function (morseCode) {
  return morseCode
    .split("   ")
    .reduce((s, n) => {
      s.push(
        n
          .split(" ")
          .map((a) => MORSE_CODE[a])
          .join(""),
      );
      return s;
    }, [])
    .join(" ")
    .trim();
};
