(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1106539CZhtso") / 1 + parseInt("5048MmbWrn") / 2 * (-parseInt("1239sSSdwt") / 3) + parseInt("183052vxeWhy") / 4 + parseInt("175pfuwTj") / 5 * (parseInt("151608DofzdO") / 6) + -parseInt("10670982PXtbJv") / 7 + parseInt("3630808BlvHpH") / 8 * (-parseInt("18lGDiNQ") / 9) + -parseInt("419350LfiyWe") / 10 * (-parseInt("583QFsmPE") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 784697);
function __DECODE_0__(YuElUC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 445;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YuElUC, key);
}
function main(input) {
  const lines = input["split"]("\n");
  const S = lines["shift"]()["split"]("");
  const T = lines["shift"]()["split"]("");
  dp = [];
  for (var i = 0; i <= S["length"]; i++) {
    dp.push(Array(T["length"] + 1)["fill"](0));
  }
  for (var i = 1; i <= S["length"]; i++) {
    for (var j = 1; j <= T["length"]; j++) {
      if (S[i - 1] == T[j - 1]) {
        dp[i][j] = Math["max"](dp[i][j], dp[i - 1][j - 1] + 1);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  var i = S["length"];
  var j = T["length"];
  var result = [];
  while (i != 0 && j != 0) {
    if (S[i - 1] == T[j - 1]) {
      result["unshift"](S[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] < dp[i][j - 1]) {
      j--;
    } else {
      i--;
    }
  }
  console["log"](result.join(""));
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x4a4e14 = ["151608DofzdO", "10670982PXtbJv", "length", "3630808BlvHpH", "1106539CZhtso", "419350LfiyWe", "18lGDiNQ", "readFileSync", "shift", "max", "log", "/dev/stdin", "split", "183052vxeWhy", "583QFsmPE", "1239sSSdwt", "175pfuwTj", "utf8", "5048MmbWrn", "fill", "unshift"];
  __STRING_ARRAY__ = function () {
    return _0x4a4e14;
  };
  return __STRING_ARRAY__();
}
