function __STRING_ARRAY__() {
  var _0x4c46bb = ["167150PQQlWB", "readFileSync", "394139hLFLuX", "37428Apfpdu", "1288236dbgDKv", "/dev/stdin", "30vADAZk", "187vZkizc", "split", "152slMJdn", "utf8", "length", "1873887QqkZpi", "215Xonfnd", "log", "shift", "replace", "10171mJWXzS", "4nJELNL", "88551FdPIUl"];
  __STRING_ARRAY__ = function () {
    return _0x4c46bb;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("394139hLFLuX") / 1 * (parseInt("4nJELNL") / 2) + -parseInt("1873887QqkZpi") / 3 + -parseInt("37428Apfpdu") / 4 * (-parseInt("215Xonfnd") / 5) + parseInt("30vADAZk") / 6 * (-parseInt("10171mJWXzS") / 7) + parseInt("152slMJdn") / 8 * (-parseInt("88551FdPIUl") / 9) + -parseInt("167150PQQlWB") / 10 * (-parseInt("187vZkizc") / 11) + -parseInt("1288236dbgDKv") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 548596);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(tyECga, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 278;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tyECga, key);
}
var Arr = input["replace"](/\n$/, "")["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var arr = [];
  for (var i = 0; i < n; i++) {
    var x = Arr["shift"]() - 0;
    arr.push(x);
  }
  var L = 1;
  var cnt = 0;
  while (true) {
    if (arr["length"] == L) {
      break;
    }
    for (var i = 0; i < arr["length"] - L; i++) {
      var memo = arr[i];
      if (arr[i] > arr[i + 1]) {
        cnt++;
        arr[i] = arr[i + 1];
        arr[i + 1] = memo;
      }
    }
    L++;
  }
  console["log"](cnt);
}
