(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("121312KNLJWv") / 1 + -parseInt("2614424qzGwLA") / 2 + parseInt("4462530JfURpm") / 3 + parseInt("4FPRIQS") / 4 * (-parseInt("8174165OzShUE") / 5) + parseInt("66hoNONG") / 6 * (parseInt("812707zaoejl") / 7) + parseInt("3355560SvesyK") / 8 + parseInt("56169qRdnUi") / 9 * (parseInt("1180YvsPeD") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 857147);
function __STRING_ARRAY__() {
  var _0xabb431 = ["4462530JfURpm", "8174165OzShUE", "split", "2614424qzGwLA", "4FPRIQS", "/dev/stdin", "66hoNONG", "812707zaoejl", "utf8", "max", "3355560SvesyK", "121312KNLJWv", "56169qRdnUi", "log", "1180YvsPeD", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0xabb431;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(FVhTxZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 207;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FVhTxZ, key);
}
main = function (input) {
  var data = input["split"](" ");
  var n = parseInt(data[0]);
  var a = parseInt(data[1]);
  var b = parseInt(data[2]);
  var ans = (n - 2) * (b - a) + 1;
  console["log"](Math["max"](ans, 0));
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
