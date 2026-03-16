(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("112991knQZkN") / 1 + parseInt("14124emjAAd") / 2 + parseInt("3710763MLZXBD") / 3 + parseInt("6020716lzcHsZ") / 4 + -parseInt("70525MgWvoT") / 5 * (parseInt("618bXTDWc") / 6) + -parseInt("550459cHBNRe") / 7 + parseInt("504376Xnnwtd") / 8 * (-parseInt("45BijXxU") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 789484);
function isPrime(num) {
  if (num == 2 || num == 3) {
    return true;
  }
  if (num < 2 || num % 2 == 0 || num % 3 == 0) {
    return false;
  }
  var limit = Math["round"](Math["sqrt"](num));
  var i = 1;
  while (i * 6 - 1 <= limit) {
    if (num % (i * 6 - 1) == 0 || num % (i * 6 + 1) == 0) {
      return false;
    }
    i++;
  }
  return true;
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(kdNUpF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 187;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kdNUpF, key);
}
var lines = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x491d3e = ["45BijXxU", "112991knQZkN", "550459cHBNRe", "618bXTDWc", "round", "sqrt", "504376Xnnwtd", "/dev/stdin", "log", "split", "trim", "6020716lzcHsZ", "14124emjAAd", "70525MgWvoT", "3710763MLZXBD", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x491d3e;
  };
  return __STRING_ARRAY__();
}
var line;
while (line = lines.shift()) {
  var num = +line;
  var mp;
  var lp;
  if (num == 3) {
    mp = 2;
  }
  var i = 3;
  while (true) {
    if (isPrime(i) && i < num) {
      mp = i;
    }
    if (isPrime(i) && i > num) {
      lp = i;
      break;
    }
    i += 2;
  }
  console["log"](mp, lp);
}
