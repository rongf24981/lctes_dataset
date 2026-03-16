(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("416000fhxsqy") / 1 + parseInt("2tamurc") / 2 * (parseInt("318rrlzrk") / 3) + -parseInt("764cEwLlL") / 4 * (-parseInt("13235oLVVXu") / 5) + -parseInt("78AoEUIh") / 6 * (parseInt("420707KhrNkK") / 7) + -parseInt("1432120BYvryH") / 8 + -parseInt("2760939xaPfPj") / 9 + parseInt("16090580emdRuq") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 431642);
var count = 0;
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  count++;
  return true;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var p = input["split"]("\n");
function __DECODE_0__(MukZIo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 133;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MukZIo, key);
}
function __STRING_ARRAY__() {
  var _0x1dfccb = ["318rrlzrk", "2760939xaPfPj", "1432120BYvryH", "16090580emdRuq", "420707KhrNkK", "764cEwLlL", "log", "2tamurc", "416000fhxsqy", "readFileSync", "13235oLVVXu", "split", "78AoEUIh"];
  __STRING_ARRAY__ = function () {
    return _0x1dfccb;
  };
  return __STRING_ARRAY__();
}
for (var i = 0; i < p.length; i++) {
  count = 0;
  for (var j = 2; j <= p[i]; j++) {
    isPrime(j);
  }
  console["log"](count);
}
