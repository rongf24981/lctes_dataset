(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("260986HZSjzx") / 1 + -parseInt("622074FhHzUo") / 2 + -parseInt("931674OwkBRs") / 3 + parseInt("260GIEIhP") / 4 * (-parseInt("45565uWYNSB") / 5) + -parseInt("12oqcUGO") / 6 * (parseInt("400127AVzrrK") / 7) + parseInt("408ocfEQw") / 8 * (-parseInt("8559hioRAh") / 9) + parseInt("14672820APBOHW") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 351505);
function BFS() {
  var bfs = [[s0, 0]];
  while (true) {
    if (bfs["length"] == 0) {
      break;
    }
    var [leaf, cnt] = bfs["shift"]();
    if (leaf == s1) {
      flag = true;
      console.log(cnt);
      break;
    }
    ab["forEach"](v => {
      if (leaf.includes(v[0])) {
        var re = new RegExp(v[0], "g");
        var str = leaf["replace"](re, v[1]);
        if (str["length"] <= 10) {
          bfs["push"]([str, cnt + 1]);
        }
      }
    });
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var ab = arr["slice"](0, n)["map"](v => v.split(" "));
  ;
  arr = arr["slice"](n);
  var s0 = arr["shift"]();
  var s1 = arr["shift"]();
  var flag = false;
  BFS();
  if (!flag) {
    console.log(-1);
  }
}
function __DECODE_0__(YeyMMU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 105;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YeyMMU, key);
}
function __STRING_ARRAY__() {
  var _0x3903e1 = ["260986HZSjzx", "/dev/stdin", "map", "622074FhHzUo", "readFileSync", "replace", "260GIEIhP", "400127AVzrrK", "trim", "shift", "12oqcUGO", "8559hioRAh", "45565uWYNSB", "931674OwkBRs", "408ocfEQw", "slice", "split", "push", "length", "forEach", "14672820APBOHW"];
  __STRING_ARRAY__ = function () {
    return _0x3903e1;
  };
  return __STRING_ARRAY__();
}
