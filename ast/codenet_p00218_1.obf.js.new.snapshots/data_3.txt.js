(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1340804uCZFQs") / 1 + -parseInt("14506gJSzZw") / 2 * (-parseInt("114mFSPxS") / 3) + -parseInt("43748kyqEyn") / 4 * (parseInt("30YRqkwm") / 5) + parseInt("6552402fbcDcb") / 6 * (-parseInt("7amPozP") / 7) + parseInt("7157744VmWxdP") / 8 + -parseInt("327213bnlWgM") / 9 * (parseInt("140MGiCSR") / 10) + -parseInt("1263020UeMRtA") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 729629);
function __DECODE_0__(FaqKyf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 351;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FaqKyf, key);
}
process.stdin.resume();
process.stdin["setEncoding"]("utf8");
function __STRING_ARRAY__() {
  var _0x55439c = ["utf8", "7amPozP", "43748kyqEyn", "327213bnlWgM", "stdin", "data", "setEncoding", "30YRqkwm", "log", "split", "14506gJSzZw", "6552402fbcDcb", "end", "map", "114mFSPxS", "7157744VmWxdP", "140MGiCSR", "1340804uCZFQs", "1263020UeMRtA"];
  __STRING_ARRAY__ = function () {
    return _0x55439c;
  };
  return __STRING_ARRAY__();
}
var input = "";
process["stdin"].on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  var lines = input["split"]("\n");
  var l = 0;
  while (true) {
    var n = Number(lines[l++]);
    if (n === 0) {
      break;
    }
    for (var i = 0; i < n; i++) {
      var values = lines[l++]["split"](" ")["map"](Number);
      var pm = values[0];
      var pe = values[1];
      var pj = values[2];
      var ans = "C";
      if (pm === 100 || pe === 100 || pj === 100) {
        ans = "A";
      } else if ((pm + pe) / 2 >= 90) {
        ans = "A";
      } else {
        var average = (pm + pe + pj) / 3;
        if (average >= 80) {
          ans = "A";
        } else if (average >= 70) {
          ans = "B";
        } else if (average >= 50 && (pm >= 80 || pe >= 80)) {
          ans = "B";
        }
      }
      console["log"](ans);
    }
  }
});
