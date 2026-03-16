function __DECODE_0__(dSfqUJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 399;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dSfqUJ, key);
}
function __STRING_ARRAY__() {
  var _0x24186a = ["1304309wNAUcq", "log", "31857AhtIDe", "182iLPOWp", "3965643wKpuDs", "split", "utf8", "15825qIoORB", "122lgOCgd", "449720xekaOl", "102lzLBCt", "22776840iDzDRp", "readFileSync", "6643920MNRTCD"];
  __STRING_ARRAY__ = function () {
    return _0x24186a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1304309wNAUcq") / 1 + parseInt("122lgOCgd") / 2 * (-parseInt("31857AhtIDe") / 3) + parseInt("6643920MNRTCD") / 4 + parseInt("15825qIoORB") / 5 * (-parseInt("102lzLBCt") / 6) + -parseInt("182iLPOWp") / 7 * (parseInt("449720xekaOl") / 8) + parseInt("3965643wKpuDs") / 9 + parseInt("22776840iDzDRp") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 911828);
function main(input) {
  const args = input["split"](" ");
  const R = parseInt(args[0], 10);
  const G = parseInt(args[1], 10);
  const B = parseInt(args[2], 10);
  const N = parseInt(args[3], 10);
  var s = 0;
  var k = 0;
  for (var i = 0; i <= (N / R | 0); ++i) {
    for (var j = 0; j <= (N / G | 0); ++j) {
      k = (N - i * R - j * G) / B | 0;
      if (k >= 0 && i * R + j * G + k * B == N) {
        ++s;
      }
    }
  }
  console["log"](s);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
