function __STRING_ARRAY__() {
  var _0xc4a4d5 = ["2nMfHRc", "827106qNLVQv", "/dev/stdin", "1187790VIruoT", "4LZNJQK", "90NOErFq", "250424qWiJKP", "245xbzZrX", "4831629AlQpAA", "115870QpRRvT", "2358ZGKfNP", "2807470lTUbft", "toFixed"];
  __STRING_ARRAY__ = function () {
    return _0xc4a4d5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("115870QpRRvT") / 1 * (-parseInt("2nMfHRc") / 2) + parseInt("827106qNLVQv") / 3 * (-parseInt("4LZNJQK") / 4) + parseInt("1187790VIruoT") / 5 + -parseInt("2358ZGKfNP") / 6 * (-parseInt("245xbzZrX") / 7) + parseInt("250424qWiJKP") / 8 * (parseInt("90NOErFq") / 9) + parseInt("2807470lTUbft") / 10 + -parseInt("4831629AlQpAA") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 246019);
function main(input) {
  var Gusu = 0;
  var Kisu = 0;
  var Out = 0;
  if (input > 0) {
    if (input % 2 == 0) {
      Gusu = input / 2;
      Kisu = Gusu;
      Out = Kisu / input;
    } else if (input % 2 == 1) {
      Gusu = parseInt(input / 2);
      Kisu = Gusu + 1;
      Out = Kisu / input;
    }
  }
  console.log(Out["toFixed"](10));
}
function __DECODE_0__(FNLrmo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 278;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FNLrmo, key);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
