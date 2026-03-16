function __STRING_ARRAY__() {
  var _0x5178c5 = ["323428uOtCZQ", "4076250FIsVWi", "301677vsPfGr", "log", "2137045LuQNQA", "4wrPtPk", "utf8", "6DkqAGO", "sort", "32123wLzFVI", "12jmOOJG", "split", "9uYBSVO", "readFileSync", "length", "indexOf", "170258yAuGpt", "348DiixnI", "3449440lSMutV"];
  __STRING_ARRAY__ = function () {
    return _0x5178c5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("32123wLzFVI") / 1 * (-parseInt("12jmOOJG") / 2) + -parseInt("301677vsPfGr") / 3 * (-parseInt("4wrPtPk") / 4) + -parseInt("2137045LuQNQA") / 5 * (parseInt("6DkqAGO") / 6) + -parseInt("323428uOtCZQ") / 7 + parseInt("3449440lSMutV") / 8 + parseInt("9uYBSVO") / 9 * (-parseInt("4076250FIsVWi") / 10) + parseInt("170258yAuGpt") / 11 * (parseInt("348DiixnI") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 292101);
function __DECODE_0__(iCftsB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 190;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iCftsB, key);
}
function Main(input) {
  var len = input["split"]("\n")[0];
  var list = input["split"]("\n")[1]["split"](" ");
  list["sort"](function (a, b) {
    return parseInt(a) - parseInt(b);
  });
  var b = list.filter(function (x, i, self) {
    return self["indexOf"](x) === i;
  });
  if (b["length"] % 2 == 1) {
    console["log"](b.length);
  } else {
    console.log(b["length"] - 1);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
