function __DECODE_0__(UxWbVm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 263;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UxWbVm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1421704czmXHo") / 1 + -parseInt("451226ZDgvGz") / 2 * (-parseInt("9uQzMnq") / 3) + -parseInt("1835044iaAVMJ") / 4 + parseInt("956575AyKrrU") / 5 + parseInt("9431184DKKKMj") / 6 + parseInt("3773469fINGBr") / 7 + -parseInt("23720392lqUWyE") / 8 * (parseInt("9OXjBAG") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 976979);
function Main(s) {
  k = +s;
  var ans = [];
  var x = 1;
  var y = "";
  for (var i = 0; i < k; i++) {
    ans[i] = x + y;
    if (x === 9) {
      x = 1;
      y += "9";
    } else {
      x++;
    }
  }
  console["log"](ans["join"]("\n"));
}
function __STRING_ARRAY__() {
  var _0x4456a7 = ["3773469fINGBr", "log", "9OXjBAG", "956575AyKrrU", "9uQzMnq", "23720392lqUWyE", "1421704czmXHo", "9431184DKKKMj", "1835044iaAVMJ", "join", "451226ZDgvGz", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x4456a7;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
