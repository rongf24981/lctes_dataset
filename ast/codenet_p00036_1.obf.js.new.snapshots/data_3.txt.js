function __DECODE_0__(fZUOLK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 490;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fZUOLK, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1481509HvkouA") / 1 + parseInt("82372zScinl") / 2 * (-parseInt("63LeatHm") / 3) + -parseInt("677892KZHZUT") / 4 + -parseInt("1751195HzpOfe") / 5 * (-parseInt("18XuoHKH") / 6) + -parseInt("6804qUwYGV") / 7 * (-parseInt("8384qQRJlQ") / 8) + parseInt("968886SosDnm") / 9 + -parseInt("17929110RDWXMF") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 831246);
function __STRING_ARRAY__() {
  var _0x46fb45 = ["split", "readFileSync", "10000001", "1481509HvkouA", "18XuoHKH", "968886SosDnm", "1101", "82372zScinl", "log", "1751195HzpOfe", "utf8", "101", "indexOf", "replace", "map", "1000001", "8384qQRJlQ", "63LeatHm", "6804qUwYGV", "17929110RDWXMF", "1111", "677892KZHZUT"];
  __STRING_ARRAY__ = function () {
    return _0x46fb45;
  };
  return __STRING_ARRAY__();
}
require("fs")["readFileSync"]("/dev/stdin", "utf8").trim()["split"]("\n\n")["map"](function (i) {
  c = i["replace"](/\s/g, "")["split"]("").join("");
  console["log"](c["indexOf"]("1111") != -1 ? "C" : c["indexOf"]("111") != -1 ? "F" : c["indexOf"]("1101") != -1 ? "D" : c["indexOf"]("101") != -1 ? "B" : c.indexOf("1000001") != -1 ? "G" : c["indexOf"]("10000001") != -1 ? "A" : "E");
});
