function __DECODE_0__(MhsssP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 113;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MhsssP, key);
}
function __STRING_ARRAY__() {
  var _0x3c8b5a = ["3096331tIOUma", "/dev/stdin", "44xkaccw", "9CAGeuj", "bust", "split", "84gQnBVT", "log", "12ibqGKX", "133510NuYwaf", "2DcYpjs", "4351870cSkwsy", "2220031aQzdLV", "704638gFvemC", "utf8", "1213743KntPvX", "readFileSync", "7548688fhfDWq"];
  __STRING_ARRAY__ = function () {
    return _0x3c8b5a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("704638gFvemC") / 1 * (parseInt("2DcYpjs") / 2) + parseInt("1213743KntPvX") / 3 + -parseInt("44xkaccw") / 4 * (-parseInt("133510NuYwaf") / 5) + -parseInt("12ibqGKX") / 6 * (parseInt("3096331tIOUma") / 7) + parseInt("7548688fhfDWq") / 8 + parseInt("9CAGeuj") / 9 * (parseInt("4351870cSkwsy") / 10) + -parseInt("2220031aQzdLV") / 11 * (parseInt("84gQnBVT") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 484301);
function Main(input) {
  input = input["split"](" ");
  tmp = parseInt(input[0]) + parseInt(input[1]) + parseInt(input[2]);
  if (tmp > 21) {
    console["log"]("bust");
  } else {
    console["log"]("win");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
