(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1219991kcdUEK") / 1 + parseInt("1930898JNjxDu") / 2 + parseInt("776226bLdMIP") / 3 + -parseInt("2132HPJCcR") / 4 * (-parseInt("85ZqplrU") / 5) + -parseInt("750JXTcTD") / 6 * (parseInt("15316oapezB") / 7) + -parseInt("23536zlQyQC") / 8 * (-parseInt("4149JcYXkm") / 9) + parseInt("21410dsfQZl") / 10 * (-parseInt("2035DbUsnc") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 699938);
function __STRING_ARRAY__() {
  var _0x31596d = ["utf8", "forEach", "2132HPJCcR", "4149JcYXkm", "21410dsfQZl", "toFixed", "23536zlQyQC", "776226bLdMIP", "85ZqplrU", "1930898JNjxDu", "readFileSync", "/dev/stdin", "map", "750JXTcTD", "2035DbUsnc", "15316oapezB", "1219991kcdUEK"];
  __STRING_ARRAY__ = function () {
    return _0x31596d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QNfVwg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 467;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QNfVwg, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim().split("\n")["map"](Number);
Arr["forEach"](function (v) {
  var arr = [0, v];
  for (var i = 2; i <= 10; i++) {
    arr[i] = i % 2 == 0 ? arr[i - 1] * 2 : arr[i - 1] / 3;
  }
  var sum = arr.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum["toFixed"](8));
});
