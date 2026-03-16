(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("274702SbFoSe") / 1 + parseInt("156766PSPekL") / 2 + parseInt("135FjmYBj") / 3 * (-parseInt("14076kmMzbo") / 4) + parseInt("1388410KZkolh") / 5 + -parseInt("861786dNPWDg") / 6 + -parseInt("1345995IqeRqi") / 7 * (parseInt("8VKKEjO") / 8) + parseInt("5265351uBrXwN") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 172131);
function __STRING_ARRAY__() {
  var _0x48934a = ["135FjmYBj", "0 0 0", "1388410KZkolh", "trim", "readFileSync", "log", "14076kmMzbo", "split", "861786dNPWDg", "map", "274702SbFoSe", "5265351uBrXwN", "156766PSPekL", "utf8", "8VKKEjO", "forEach", "/dev/stdin", "1345995IqeRqi"];
  __STRING_ARRAY__ = function () {
    return _0x48934a;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
function __DECODE_0__(yliTxm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 481;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yliTxm, key);
}
while (true) {
  var nab = arr.shift();
  if (nab == "0 0 0") {
    break;
  }
  nab = nab["split"](" ")["map"](Number);
  var n = nab[0];
  var ab = [nab[1], nab[2]];
  var dp = [];
  for (var i = 0; i <= n; i++) {
    dp[i] = false;
  }
  dp[0] = true;
  for (var i = 0; i < ab.length; i++) {
    for (var j = 0; j <= n; j++) {
      if (dp[j]) {
        dp[j + ab[i]] = true;
      }
    }
  }
  var cnt = 0;
  dp["forEach"](function (v) {
    if (v == false) {
      cnt++;
    }
  });
  console["log"](cnt);
}
