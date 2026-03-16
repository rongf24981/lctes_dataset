(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("129QZjVef") / 1 * (-parseInt("16662SgVbNg") / 2) + -parseInt("5576280YplNZi") / 3 + -parseInt("8QepSUw") / 4 * (-parseInt("1743145xcfdxC") / 5) + parseInt("11874szYTWp") / 6 * (parseInt("3052PJmcLX") / 7) + parseInt("13333200OWUWPQ") / 8 + -parseInt("45JOUbfE") / 9 * (parseInt("2833080QAiKfA") / 10) + -parseInt("22OsiefO") / 11 * (parseInt("544596msqVDi") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 935385);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x12ba15 = ["map", "0 0", "3052PJmcLX", "split", "sqrt", "5576280YplNZi", "shift", "8QepSUw", "544596msqVDi", "11874szYTWp", "129QZjVef", "2833080QAiKfA", "16662SgVbNg", "1743145xcfdxC", "22OsiefO", "45JOUbfE", "join", "/dev/stdin", "13333200OWUWPQ"];
  __STRING_ARRAY__ = function () {
    return _0x12ba15;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(eIfjeO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 148;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eIfjeO, key);
}
var arr = input.trim()["split"]("\n");
while (true) {
  var pn = arr["shift"]().split(" ")["map"](Number);
  if (pn["join"](" ") == "0 0") {
    break;
  }
  var p = Math["sqrt"](pn[0]);
  var n = pn[1];
  var max = 0;
  var min = Infinity;
  var ans = [];
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      var v = i / j;
      if (p > v && max < v) {
        max = v;
        ans[1] = i + "/" + j;
      } else if (p < v && min > v) {
        min = v;
        ans[0] = i + "/" + j;
      }
    }
  }
  console.log(ans["join"](" "));
}
