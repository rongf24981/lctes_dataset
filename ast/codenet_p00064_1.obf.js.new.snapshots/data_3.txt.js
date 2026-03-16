(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("143lkDeuS") / 1 * (-parseInt("2050vkjfUb") / 2) + -parseInt("1446JcMbTh") / 3 * (parseInt("3424ylsovv") / 4) + -parseInt("5xbMQmc") / 5 * (parseInt("490302KAmZoG") / 6) + -parseInt("3416602PZCPrg") / 7 + parseInt("464152fSJtmp") / 8 + -parseInt("9wcbdhR") / 9 * (parseInt("3283330poljrj") / 10) + parseInt("15620506mNAXpa") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 313912);
var ans = 0;
require("fs")["readFileSync"]("/dev/stdin", "utf8")["match"](/\d+/g)["forEach"](function (elem) {
  ans += parseInt(elem, 10);
});
function __STRING_ARRAY__() {
  var _0x951911 = ["15620506mNAXpa", "log", "readFileSync", "match", "3283330poljrj", "9wcbdhR", "utf8", "3416602PZCPrg", "5xbMQmc", "forEach", "1446JcMbTh", "143lkDeuS", "3424ylsovv", "2050vkjfUb", "490302KAmZoG", "464152fSJtmp"];
  __STRING_ARRAY__ = function () {
    return _0x951911;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(KpBpfY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 222;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KpBpfY, key);
}
console["log"](ans);
