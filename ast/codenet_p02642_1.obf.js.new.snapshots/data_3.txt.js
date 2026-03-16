(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("320299nxDynz") / 1 * (-parseInt("6lZQryP") / 2) + -parseInt("2129508UNKrxF") / 3 + -parseInt("4CBnvIh") / 4 * (-parseInt("430715UyJPHQ") / 5) + parseInt("3054heNzQh") / 6 * (-parseInt("14672BaHgfW") / 7) + parseInt("248OhUjyX") / 8 * (-parseInt("337437UNUdQS") / 9) + parseInt("6064610vhVUqG") / 10 + parseInt("20555194VIGvhp") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 583172);
function __STRING_ARRAY__() {
  var _0x2b4485 = ["split", "fill", "430715UyJPHQ", "log", "14672BaHgfW", "readFileSync", "utf8", "filter", "320299nxDynz", "20555194VIGvhp", "6lZQryP", "trim", "248OhUjyX", "length", "2129508UNKrxF", "6064610vhVUqG", "3054heNzQh", "4CBnvIh", "337437UNUdQS"];
  __STRING_ARRAY__ = function () {
    return _0x2b4485;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var a = input[1]["trim"]()["split"](" ").map(e => parseInt(e, 10));
  var a_max = 1000001;
  var dp = new Array(a_max + 1)["fill"](0);
  for (var i of a) {
    dp[i]++;
  }
  for (var i = 1; i <= a_max; i++) {
    if (dp[i] === 0) {
      continue;
    }
    for (var j = i + i; j <= a_max; j += i) {
      if (dp[j] !== 0) {
        dp[j] = 0;
      }
    }
  }
  console["log"](dp["filter"](function (x) {
    return x == 1;
  })["length"]);
}
function __DECODE_0__(JwSUyt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 138;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JwSUyt, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n"));
