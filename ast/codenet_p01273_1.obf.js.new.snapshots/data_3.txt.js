function __DECODE_0__(PhPBnd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 312;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PhPBnd, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2455qjHHEi") / 1 * (-parseInt("90sbjNcV") / 2) + -parseInt("34218PZYOVP") / 3 * (parseInt("356WAkUoF") / 4) + -parseInt("230CukKyz") / 5 * (parseInt("20862HRzHSc") / 6) + parseInt("5375818lrivtG") / 7 + parseInt("248DBjRbT") / 8 * (-parseInt("367542brWziY") / 9) + parseInt("14410670ZuuNtK") / 10 + parseInt("11927894twbuXM") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 741866);
var data = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var input = data["trim"]()["split"]("\n");
var line = 0;
function __STRING_ARRAY__() {
  var _0x55f2ef = ["14410670ZuuNtK", "5375818lrivtG", "11927894twbuXM", "230CukKyz", "trim", "push", "utf8", "2455qjHHEi", "readFileSync", "forEach", "34218PZYOVP", "sort", "split", "367542brWziY", "248DBjRbT", "356WAkUoF", "90sbjNcV", "/dev/stdin", "20862HRzHSc", "map"];
  __STRING_ARRAY__ = function () {
    return _0x55f2ef;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var nm = input[line]["split"](" ")["map"](Number);
  line++;
  var n = nm[0];
  var m = nm[1];
  if (n == 0 && m == 0) {
    break;
  }
  var infected = [];
  for (var i = 0; i < n; i++) {
    infected[i] = true;
  }
  infected[0] = false;
  var tsd = [];
  for (var i = 0; i < m; i++) {
    var packet = input[line]["split"](" ")["map"](Number);
    line++;
    tsd["push"]([packet[0], packet[1] - 1, packet[2] - 1]);
  }
  tsd["sort"](function (a, b) {
    return a[0] - b[0];
  });
  tsd["forEach"](function (packet) {
    var s = packet[1];
    var d = packet[2];
    if (!infected[s]) {
      infected[d] = false;
    }
  });
  var answer = 0;
  infected["forEach"](function (packet) {
    if (!packet) {
      answer++;
    }
  });
  console.log(answer);
}
