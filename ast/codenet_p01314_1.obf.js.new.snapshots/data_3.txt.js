(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1zpxcib") / 1 * (-parseInt("246866lnOPtg") / 2) + -parseInt("3WiTQkl") / 3 * (-parseInt("3242916QgXEeC") / 4) + -parseInt("5kLXKby") / 5 * (-parseInt("7181916HyelLq") / 6) + -parseInt("6024599mHNlKN") / 7 + parseInt("5013784idvQzP") / 8 + parseInt("4878468RoQjBV") / 9 + -parseInt("15923150JIGmML") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 600085);
function Main(input) {
  input = input["split"]("\n");
  for (var i = 0; 1; i++) {
    var n = parseInt(input[i], 10);
    var ans = 0;
    if (n == 0) {
      break;
    }
    for (var j = 2; j < n; j++) {
      if (n - j * (j - 1) / 2 > 0 && (n - j * (j - 1) / 2) % j == 0) {
        ans++;
      }
    }
    console["log"](ans);
  }
}
function __DECODE_0__(NMHszg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 154;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NMHszg, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x52687c = ["6024599mHNlKN", "15923150JIGmML", "246866lnOPtg", "3242916QgXEeC", "7181916HyelLq", "log", "4878468RoQjBV", "5kLXKby", "3WiTQkl", "readFileSync", "1zpxcib", "utf8", "5013784idvQzP", "/dev/stdin", "split"];
  __STRING_ARRAY__ = function () {
    return _0x52687c;
  };
  return __STRING_ARRAY__();
}
