function __DECODE_0__(CfipNB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 175;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CfipNB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("281nSppwV") / 1 * (-parseInt("2908dJAWhK") / 2) + parseInt("2156811lfyviS") / 3 + parseInt("12AObyxQ") / 4 * (-parseInt("850965dPbLPA") / 5) + -parseInt("6HIpMgL") / 6 * (-parseInt("5467609zMhzSS") / 7) + -parseInt("4506432TqOktL") / 8 + -parseInt("8157960ykIbKq") / 9 + -parseInt("10uIbkKY") / 10 * (-parseInt("16833135lxDJKw") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 641412);
function Main(input) {
  var a = input[0]["split"](" ")["map"](v => v - 0);
  if (a[0] + a[1] == 0) {
    console["log"](0);
  } else {
    console["log"](~~(a[0] * (a[0] - 1) / 2 + a[1] * (a[1] - 1) / 2));
  }
}
function __STRING_ARRAY__() {
  var _0x427330 = ["4506432TqOktL", "/dev/stdin", "12AObyxQ", "log", "10uIbkKY", "6HIpMgL", "split", "map", "8157960ykIbKq", "16833135lxDJKw", "2156811lfyviS", "2908dJAWhK", "281nSppwV", "utf8", "850965dPbLPA", "trim", "5467609zMhzSS"];
  __STRING_ARRAY__ = function () {
    return _0x427330;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]()["split"]("\n"));
