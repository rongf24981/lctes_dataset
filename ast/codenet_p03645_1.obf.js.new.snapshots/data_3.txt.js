(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("10202kIkXuo") / 1 * (-parseInt("146BLjOCO") / 2) + parseInt("3OIeodD") / 3 * (-parseInt("340028nwqnuS") / 4) + -parseInt("1535VkdqTS") / 5 * (parseInt("498geuAcr") / 6) + -parseInt("28qCktSN") / 7 * (parseInt("476104RjvMsP") / 8) + -parseInt("7056135TmXsiR") / 9 + parseInt("610nnprop") / 10 * (-parseInt("127831tboqcx") / 11) + parseInt("35863128knIsJj") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 402412);
function Main(input) {
  input = input["split"]("\n");
  var n = parseInt(input[0]["split"](" ")[0]);
  var m = parseInt(input[0]["split"](" ")[1]);
  x = new Array();
  var ans = "IMPOSSIBLE";
  for (i = 0; i < m; i++) {
    tmp = input[i + 1]["split"](" ");
    if (tmp[0] == 1) {
      if (x.indexOf(tmp[1]) != -1) {
        ans = "POSSIBLE";
        break;
      } else {
        x["push"](tmp[1]);
      }
    }
    if (tmp[1] == n) {
      if (x.indexOf(tmp[0]) != -1) {
        ans = "POSSIBLE";
        break;
      } else {
        x["push"](tmp[0]);
      }
    }
  }
  console.log("%s", ans);
}
function debug() {
  var input = document["getElementById"]("input")["value"];
  Main(input);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(Uvwrpd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 155;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Uvwrpd, key);
}
function __STRING_ARRAY__() {
  var _0xa9a53 = ["POSSIBLE", "/dev/stdin", "3OIeodD", "push", "split", "340028nwqnuS", "476104RjvMsP", "value", "IMPOSSIBLE", "readFileSync", "7056135TmXsiR", "1535VkdqTS", "127831tboqcx", "35863128knIsJj", "28qCktSN", "610nnprop", "498geuAcr", "getElementById", "146BLjOCO", "utf8", "10202kIkXuo"];
  __STRING_ARRAY__ = function () {
    return _0xa9a53;
  };
  return __STRING_ARRAY__();
}
