function __STRING_ARRAY__() {
  var _0x59de05 = ["18fLWyvq", "56JjNmIp", "51438HnElRN", "4938350yIYKtm", "2yjwSGD", "121194mLXzCS", "860520bVHeow", "/dev/stdin", "4090555hOrtBy", "trim", "235BXxuAL", "9448857ilDkTk", "49113aeOjGV", "log"];
  __STRING_ARRAY__ = function () {
    return _0x59de05;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2yjwSGD") / 1 * (parseInt("51438HnElRN") / 2) + -parseInt("49113aeOjGV") / 3 * (-parseInt("56JjNmIp") / 4) + -parseInt("235BXxuAL") / 5 * (parseInt("121194mLXzCS") / 6) + parseInt("4090555hOrtBy") / 7 + parseInt("860520bVHeow") / 8 * (parseInt("18fLWyvq") / 9) + -parseInt("4938350yIYKtm") / 10 + parseInt("9448857ilDkTk") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 495926);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var n = input["trim"]() - 0;
var ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var i = 0;
function __DECODE_0__(xHLwxV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 389;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xHLwxV, key);
}
while (true) {
  i++;
  var cnt = 0;
  for (var j = i; j >= 1; j--) {
    if (i % j == 0) {
      cnt++;
    }
  }
  if (ans[cnt - 1] == 0) {
    ans[cnt - 1] = i;
    if (!ans.includes(0)) {
      break;
    }
  }
}
console["log"](ans[n - 1]);
