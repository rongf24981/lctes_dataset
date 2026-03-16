function __STRING_ARRAY__() {
  var _0x16b31f = ["214jaaYTJ", "1291199xwHWzq", "477536mJycEY", "274990VDFsmF", "190MXcNSq", "80739TpXgIM", "readFileSync", "2922ToNaVP", "24ZijujQ", "8ySBAYJ", "3281894pnDuop", "90947YobVge", "pow"];
  __STRING_ARRAY__ = function () {
    return _0x16b31f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("90947YobVge") / 1 + -parseInt("214jaaYTJ") / 2 * (-parseInt("2922ToNaVP") / 3) + parseInt("477536mJycEY") / 4 + parseInt("274990VDFsmF") / 5 * (-parseInt("24ZijujQ") / 6) + parseInt("1291199xwHWzq") / 7 * (parseInt("8ySBAYJ") / 8) + -parseInt("80739TpXgIM") / 9 * (-parseInt("190MXcNSq") / 10) + -parseInt("3281894pnDuop") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 151109);
var fs = require("fs");
var inn = parseInt(fs["readFileSync"](0).toString());
function isPrime(n) {
  if (n <= 3) {
    return n > 1;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  var i = 5;
  while (Math["pow"](i, 2) <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}
function __DECODE_0__(mUFZKR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 239;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mUFZKR, key);
}
while (!isPrime(inn)) {
  inn++;
}
console.log(inn);
