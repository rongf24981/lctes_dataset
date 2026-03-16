function __DECODE_0__(jKBohM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 450;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jKBohM, key);
}
function __STRING_ARRAY__() {
  var _0x30af8a = ["utf8", "10LqEzos", "map", "length", "push", "54320sZqMGZ", "log", "shift", "220991pBnfcr", "readFileSync", "44dLAYxt", "48vurXGp", "6TooLLj", "/dev/stdin", "38937YZLydF", "794968pdBzBH", "trim", "334745DOREmw", "split", "3493827ADwhTo", "0 0", "398618jVUxXI", "sort"];
  __STRING_ARRAY__ = function () {
    return _0x30af8a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("220991pBnfcr") / 1 + parseInt("794968pdBzBH") / 2 + -parseInt("38937YZLydF") / 3 * (parseInt("44dLAYxt") / 4) + parseInt("334745DOREmw") / 5 * (-parseInt("6TooLLj") / 6) + parseInt("54320sZqMGZ") / 7 * (-parseInt("48vurXGp") / 8) + parseInt("3493827ADwhTo") / 9 * (parseInt("10LqEzos") / 10) + -parseInt("398618jVUxXI") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 272180);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var nm = Arr["shift"]();
  if (nm == "0 0") {
    break;
  }
  nm = nm["split"](" ")["map"](Number);
  var n = nm[0];
  var m = nm[1];
  var N = [];
  var M = [];
  for (var i = 0; i < n; i++) {
    N["push"](Arr["shift"]() - 0);
  }
  for (var i = 0; i < m; i++) {
    M["push"](Arr["shift"]() - 0);
  }
  var sumN = N.reduce(function (a, b) {
    return a + b;
  });
  var sumM = M.reduce(function (a, b) {
    return a + b;
  });
  var arr = [];
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      var a = sumN - N[i] + M[j];
      var b = sumM + N[i] - M[j];
      if (a == b) {
        arr["push"]([N[i] + M[j], N[i], M[j]]);
      }
    }
  }
  if (arr["length"] == 0) {
    console["log"](-1);
    continue;
  }
  arr["sort"](function (a, b) {
    return a[0] - b[0];
  });
  console.log(arr[0][1] + " " + arr[0][2]);
}
