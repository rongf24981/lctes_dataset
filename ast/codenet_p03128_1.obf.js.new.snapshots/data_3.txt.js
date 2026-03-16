(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("240153sMAlSk") / 1 + -parseInt("2awgTcw") / 2 * (-parseInt("914019YoEOZl") / 3) + parseInt("5008zcrqRK") / 4 * (-parseInt("365BNULBY") / 5) + parseInt("1490106GtqVDY") / 6 * (parseInt("7BUQlRH") / 7) + parseInt("728304DVMnuI") / 8 + -parseInt("5355WxtFXx") / 9 * (-parseInt("3160wbnjQY") / 10) + -parseInt("8747079lcfHXO") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 185650);
function main(input) {
  var n = input[0]["split"](" ")[0] - 0;
  var m = input[0]["split"](" ")[1] - 0;
  var nummap = [0, 2, 5, 5, 4, 5, 6, 3, 7, 6];
  var mattis = input[1]["split"](" ").map(v => {
    return {
      val: v,
      num: nummap[v - 0]
    };
  });
  var ans = "";
  var dp = [];
  dp[0] = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 0; j < m; j++) {
      var matti = mattis[j];
      if (dp[i - matti.num] !== undefined) {
        var tv = (dp[i - matti["num"]] ? dp[i - matti["num"]] : "") + matti["val"];
        if (dp[i] === undefined || diff(tv, dp[i]) > 0) {
          dp[i] = tv;
        }
      }
    }
  }
  console["log"](dp[n]);
}
function __STRING_ARRAY__() {
  var _0x5bd979 = ["readFileSync", "trim", "240153sMAlSk", "8747079lcfHXO", "365BNULBY", "utf8", "length", "2awgTcw", "split", "914019YoEOZl", "5008zcrqRK", "3160wbnjQY", "1490106GtqVDY", "val", "num", "7BUQlRH", "5355WxtFXx", "728304DVMnuI", "log"];
  __STRING_ARRAY__ = function () {
    return _0x5bd979;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(wOZJIx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 203;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wOZJIx, key);
}
function diff(a, b) {
  if (a.length != b["length"]) {
    return a["length"] - b["length"];
  }
  for (var i = 0; i < a["length"]; i++) {
    if (a[i] != b[i]) {
      return a[i] - b[i];
    }
  }
  return 0;
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n"));
