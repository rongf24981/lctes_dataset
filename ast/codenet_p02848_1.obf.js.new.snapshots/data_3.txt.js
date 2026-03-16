(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1513xZbgJG") / 1 * (parseInt("1132ojpklt") / 2) + -parseInt("47478WNmWRQ") / 3 * (parseInt("36dDGgIg") / 4) + parseInt("838885VGiuQV") / 5 * (parseInt("30TcGsmb") / 6) + parseInt("35izSmij") / 7 * (-parseInt("190496XQwokN") / 8) + parseInt("2512971CzqkSw") / 9 + -parseInt("6051100GSXECA") / 10 + -parseInt("5894581FtDUNd") / 11 * (-parseInt("24Qlfmbj") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 466884);
function __DECODE_0__(TJFAsZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 428;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TJFAsZ, key);
}
function Main(input) {
  const inputs = input["split"]("\n")["filter"](v => v);
  const n = Number(inputs[0]);
  const strs = inputs[1]["split"]("");
  console["log"](strs["map"](function (s) {
    let c = s.charCodeAt() + n;
    if (c > 90) {
      c -= 26;
    }
    return String.fromCharCode(c);
  })["join"](""));
}
function __STRING_ARRAY__() {
  const _0x3adc43 = ["30TcGsmb", "5894581FtDUNd", "/dev/stdin", "190496XQwokN", "split", "6051100GSXECA", "36dDGgIg", "utf8", "2512971CzqkSw", "filter", "join", "24Qlfmbj", "1132ojpklt", "47478WNmWRQ", "log", "readFileSync", "35izSmij", "838885VGiuQV", "1513xZbgJG", "map"];
  __STRING_ARRAY__ = function () {
    return _0x3adc43;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
