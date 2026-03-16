function __STRING_ARRAY__() {
  const _0x3465f9 = ["9ttzZvq", "/dev/stdin", "split", "log", "slice", "1420590eIsIpz", "106947znuqXg", "readFileSync", "710IRxsKX", "3ZwJonp", "utf8", "175880blKCbl", "map", "275312XORFyt", "sort", "5322xBcZtj", "7931IUKCTb", "447016TsYMGB"];
  __STRING_ARRAY__ = function () {
    return _0x3465f9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(bBcvhO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 161;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bBcvhO, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("106947znuqXg") / 1 + -parseInt("447016TsYMGB") / 2 + parseInt("3ZwJonp") / 3 * (parseInt("175880blKCbl") / 4) + parseInt("710IRxsKX") / 5 * (parseInt("5322xBcZtj") / 6) + -parseInt("7931IUKCTb") / 7 + -parseInt("275312XORFyt") / 8 * (parseInt("9ttzZvq") / 9) + parseInt("1420590eIsIpz") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 159875);
function Main(input) {
  const lines = input.split("\n");
  let N = parseInt(lines[0]);
  let a = lines[1]["split"](" ")["map"](function (i) {
    return parseInt(i);
  });
  let sortedA = a["slice"]()["sort"](function (a, b) {
    return a - b;
  });
  const med1 = sortedA[N / 2 - 1];
  const med2 = sortedA[N / 2];
  a.forEach(function (i) {
    console["log"](i <= med1 ? med2 : med1);
  });
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
