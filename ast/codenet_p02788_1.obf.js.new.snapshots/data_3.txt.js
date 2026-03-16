function __DECODE_0__(yNKTSG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 230;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yNKTSG, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("89HWkhxu") / 1 * (parseInt("13954YlzpfB") / 2) + -parseInt("7536cEqGKI") / 3 * (parseInt("768atNADt") / 4) + -parseInt("21900CpcbKb") / 5 * (-parseInt("126WJTzAb") / 6) + -parseInt("7JEZOHJ") / 7 * (parseInt("2667728rSLdzE") / 8) + parseInt("10327050fqEMxp") / 9 + -parseInt("4075660SKcOla") / 10 + parseInt("131967kNvpHs") / 11 * (parseInt("1248mDpXzt") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 642829);
function __STRING_ARRAY__() {
  var _0x2c755a = ["10327050fqEMxp", "7JEZOHJ", "1248mDpXzt", "push", "13954YlzpfB", "768atNADt", "4075660SKcOla", "21900CpcbKb", "131967kNvpHs", "sort", "readFileSync", "2667728rSLdzE", "89HWkhxu", "ceil", "split", "7536cEqGKI", "126WJTzAb", "utf8", "/dev/stdin", "log"];
  __STRING_ARRAY__ = function () {
    return _0x2c755a;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var N = input[0].split(" ")[0] - 0;
  var D = input[0]["split"](" ")[1] - 0;
  var A = input[0]["split"](" ")[2] - 0;
  var list = [];
  for (var i = 1; i <= N; i++) {
    list["push"](input[i]["split"](" ").map(v => v - 0));
  }
  list = list["sort"]((a, b) => a[0] - b[0]);
  var ans = 0;
  for (var i = 0; i < N; i++) {
    var x = list[i];
    if (x[1] > 0) {
      var time = Math["ceil"](x[1] / A);
      ans += time;
      for (var j = i; j < N; j++) {
        var y = list[j];
        if (y[0] <= x[0] + D * 2 + 1) {
          y[1] -= A * time;
        } else {
          break;
        }
      }
    }
  }
  console["log"](ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n"));
