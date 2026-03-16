function __DECODE_0__(lOcGGb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 307;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lOcGGb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("78297lFcszk") / 1 + -parseInt("2cWijzI") / 2 * (-parseInt("377127xtYaon") / 3) + parseInt("165164vxmUXg") / 4 + parseInt("74640zTmbth") / 5 * (parseInt("72wpouFg") / 6) + parseInt("1638YxSlOQ") / 7 * (parseInt("34152ZrpLuf") / 8) + parseInt("1466622UVBKCN") / 9 * (parseInt("10hrZJic") / 10) + -parseInt("379544Mvayps") / 11 * (parseInt("372SJQzzr") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 516713);
process["stdin"].resume();
function __STRING_ARRAY__() {
  var _0x3c359b = ["379544Mvayps", "log", "78297lFcszk", "map", "74640zTmbth", "data", "372SJQzzr", "setEncoding", "165164vxmUXg", "min", "1466622UVBKCN", "2cWijzI", "377127xtYaon", "fill", "end", "1638YxSlOQ", "split", "10hrZJic", "72wpouFg", "34152ZrpLuf", "stdin"];
  __STRING_ARRAY__ = function () {
    return _0x3c359b;
  };
  return __STRING_ARRAY__();
}
process.stdin["setEncoding"]("utf8");
var g_input = "";
process["stdin"].on("data", function (chunk) {
  g_input += chunk;
});
process["stdin"].on("end", function () {
  main(g_input["split"](/\r?\n/));
});
function main(inputs) {
  var N = parseInt(inputs[0]);
  var rs = inputs[1].split(" ")["map"](function (a) {
    return parseInt(a);
  });
  var a = new Array(7)["fill"](false);
  var a8 = 0;
  var count = 0;
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < 9; j++) {
      if (j != 8) {
        if (rs[i] < (j + 1) * 400) {
          if (!a[j]) {
            a[j] = true;
            count += 1;
          }
          break;
        }
      } else {
        a8 += 1;
      }
    }
  }
  var min = count;
  if (min == 0 && N > 0) {
    min = 1;
    if (a8 > 0) {
      a8 -= 1;
    }
  }
  var max = Math["min"](8, min + a8);
  console["log"]("" + min + " " + max);
}
