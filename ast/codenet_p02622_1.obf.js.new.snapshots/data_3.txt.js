(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("5kqWwvd") / 1 * (-parseInt("415198wXWgrz") / 2) + -parseInt("270852MQYiih") / 3 * (parseInt("4hCXAGX") / 4) + -parseInt("4476660rTLYBG") / 5 + -parseInt("3099540impIfk") / 6 + parseInt("5393857zLuYeY") / 7 + parseInt("6704leyWgM") / 8 * (parseInt("9UkBhRZ") / 9) + parseInt("2261210xtiYGc") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 533299);
function __DECODE_0__(aXnbkn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 316;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aXnbkn, key);
}
function __STRING_ARRAY__() {
  var _0x245e39 = ["3099540impIfk", "6704leyWgM", "5393857zLuYeY", "415198wXWgrz", "split", "5kqWwvd", "4hCXAGX", "length", "readFileSync", "4476660rTLYBG", "2261210xtiYGc", "9UkBhRZ", "/dev/stdin", "log", "270852MQYiih"];
  __STRING_ARRAY__ = function () {
    return _0x245e39;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  t = input[0].split("");
  s = input[1]["split"]("");
  var result = 0;
  for (var i = 0; i < s["length"]; i++) {
    if (s[i] != t[i]) {
      result = result + 1;
    } else {}
  }
  console["log"](result);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
