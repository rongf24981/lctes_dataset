function __STRING_ARRAY__() {
  var _0x1ffc65 = ["799605oNvUOr", "length", "333998pwvBsb", "trim", "1664300BsyImc", "utf8", "18cQoFXK", "/dev/stdin", "11007prSZCo", "976JBOJzu", "7178408lqXXeE", "7173fShJpn", "readFileSync", "1354520AghLRW", "map", "2070oIVGga", "split"];
  __STRING_ARRAY__ = function () {
    return _0x1ffc65;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("799605oNvUOr") / 1 + parseInt("976JBOJzu") / 2 * (-parseInt("7173fShJpn") / 3) + parseInt("1354520AghLRW") / 4 + -parseInt("1664300BsyImc") / 5 + parseInt("18cQoFXK") / 6 * (-parseInt("333998pwvBsb") / 7) + parseInt("7178408lqXXeE") / 8 + -parseInt("11007prSZCo") / 9 * (-parseInt("2070oIVGga") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 645887);
function __DECODE_0__(BuvSot, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 495;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BuvSot, key);
}
function Main(input) {
  var max = 0;
  var ans = 0;
  input = input.split("\n");
  for (var i = 1; i < input["length"]; i++) {
    var mem = input[i]["split"](" ")["map"](Number);
    if (max < mem[0]) {
      max = mem[0];
      ans = mem[0] + mem[1];
    }
  }
  console.log(ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
