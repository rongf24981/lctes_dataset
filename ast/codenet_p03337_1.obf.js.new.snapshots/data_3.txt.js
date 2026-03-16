function __DECODE_0__(zQiXVu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 429;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zQiXVu, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("363819wciRUz") / 1 + -parseInt("2650052RawddR") / 2 + parseInt("54wRRCJn") / 3 * (parseInt("190864QNNfgm") / 4) + parseInt("3934535yifGJX") / 5 + parseInt("74454QkCAHK") / 6 * (-parseInt("742LoZRFp") / 7) + -parseInt("424uRzWZq") / 8 * (-parseInt("52767rZusQY") / 9) + parseInt("11276730WCXJUA") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 807646);
function main(input) {
  const a = parseInt(input["split"](" ")[0], 10);
  const b = parseInt(input.split(" ")[1], 10);
  ptnAdd = a + b;
  ptnSub = a - b;
  ptnMul = a * b;
  ans = Math["max"]["apply"](null, [ptnAdd, ptnSub, ptnMul]);
  console["log"](ans);
}
function __STRING_ARRAY__() {
  const _0x17fcab = ["3934535yifGJX", "424uRzWZq", "742LoZRFp", "/dev/stdin", "apply", "74454QkCAHK", "363819wciRUz", "split", "190864QNNfgm", "log", "11276730WCXJUA", "52767rZusQY", "54wRRCJn", "readFileSync", "utf8", "2650052RawddR", "max"];
  __STRING_ARRAY__ = function () {
    return _0x17fcab;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
