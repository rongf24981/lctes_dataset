function __DECODE_0__(VzKwiD, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 466;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VzKwiD, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("977088bjXhUP") / 1 + parseInt("40UHOcqw") / 2 * (parseInt("192297dIOLcz") / 3) + -parseInt("4451392DnuEev") / 4 + parseInt("61955ghuOXb") / 5 * (-parseInt("366iXGWJN") / 6) + -parseInt("10200428rKCxBH") / 7 + -parseInt("12388520WEsfCW") / 8 + -parseInt("477dJPKut") / 9 * (-parseInt("1028260Pvqxnz") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 880202);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var x = input["trim"]() - 0;
var time = x * 2;
var h = (time - time % 60) / 60;
var m = time % 60;
function __STRING_ARRAY__() {
  var _0x2ff988 = ["977088bjXhUP", "40UHOcqw", "/dev/stdin", "12388520WEsfCW", "log", "192297dIOLcz", "477dJPKut", "1028260Pvqxnz", "10200428rKCxBH", "trim", "readFileSync", "366iXGWJN", "4451392DnuEev", "61955ghuOXb", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x2ff988;
  };
  return __STRING_ARRAY__();
}
console["log"](h + " " + m);
