function __STRING_ARRAY__() {
  var _0x4b9166 = ["20643CniPlD", "99670xPsDgY", "1577862qhBhBM", "setEncoding", "stdin", "36386UIeNhO", "6827712fCmWZH", "738168FYijxp", "/dev/stdin", "utf8", "split", "15LiwCzD", "681064CJFSoG"];
  __STRING_ARRAY__ = function () {
    return _0x4b9166;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("681064CJFSoG") / 1 + parseInt("99670xPsDgY") / 2 + -parseInt("20643CniPlD") / 3 + -parseInt("738168FYijxp") / 4 + -parseInt("15LiwCzD") / 5 * (-parseInt("1577862qhBhBM") / 6) + parseInt("36386UIeNhO") / 7 + -parseInt("6827712fCmWZH") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 480141);
function __DECODE_0__(Qalmje, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 146;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Qalmje, key);
}
process.stdin.resume();
process["stdin"]["setEncoding"]("utf8");
function Main(input) {
  var tmp = input["split"]("\n");
  var line0 = tmp[0].split(" ");
  var line1 = tmp[1]["split"](" ");
  var n = Number(line0[0]);
  var k = Number(line1[0]);
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    if (ans < k) {
      ans *= 2;
    } else {
      ans += k;
    }
  }
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
