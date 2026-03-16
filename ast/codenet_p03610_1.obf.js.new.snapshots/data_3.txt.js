(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("247375oRrUrM") / 1 + -parseInt("5710ODqNMQ") / 2 * (parseInt("225CodRVt") / 3) + parseInt("388852KdvwKJ") / 4 + parseInt("1184955rAooKZ") / 5 + -parseInt("18IMVNgN") / 6 * (-parseInt("577703uVHoLg") / 7) + parseInt("1801768BadfMa") / 8 + -parseInt("1689318bMJWqR") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 157810);
function __STRING_ARRAY__() {
  var _0x2b965a = ["5710ODqNMQ", "readFileSync", "utf8", "1801768BadfMa", "577703uVHoLg", "length", "247375oRrUrM", "388852KdvwKJ", "18IMVNgN", "1689318bMJWqR", "1184955rAooKZ", "log", "225CodRVt", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x2b965a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ESJKEo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 263;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ESJKEo, key);
}
function Main(input) {
  input = input.split("\n");
  input = input[0];
  var ans = "";
  for (var i = 1; i <= input["length"]; i = i + 2) {
    ans += input[i - 1];
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
