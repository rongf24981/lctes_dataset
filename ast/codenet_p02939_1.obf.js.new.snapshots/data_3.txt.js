(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("24277AbJTcf") / 1 + parseInt("77122GYtKSh") / 2 * (parseInt("27UpSahK") / 3) + parseInt("119260EwuviS") / 4 * (parseInt("15kNYzzB") / 5) + -parseInt("2083212WLtabb") / 6 + parseInt("2492707DTURED") / 7 + parseInt("3416016sLjJmI") / 8 + -parseInt("5645313leTEqV") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 269415);
function __DECODE_0__(mswSZu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 103;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mswSZu, key);
}
function __STRING_ARRAY__() {
  var _0x1363fb = ["/dev/stdin", "5645313leTEqV", "3416016sLjJmI", "15kNYzzB", "readFileSync", "24277AbJTcf", "utf8", "77122GYtKSh", "119260EwuviS", "slice", "push", "log", "2083212WLtabb", "2492707DTURED", "27UpSahK", "length"];
  __STRING_ARRAY__ = function () {
    return _0x1363fb;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var output = 0;
  var list = [];
  var output = input["length"];
  var tmp = "";
  for (var i = input["length"] - 1; i >= 0; i--) {
    var tmp2 = input.slice(i, i + 1);
    if (list.length == 0) {
      list.push(tmp2);
      continue;
    } else {
      var tmp1 = list[list["length"] - 1];
      if (tmp1 == tmp2) {
        list["push"](input["slice"](i - 1, i) + tmp2);
        i--;
      } else {
        list["push"](tmp2);
      }
    }
  }
  output = list.length;
  var first = input.slice(0, 1);
  var second = input["slice"](1, 2);
  if (first == second) {
    output--;
  }
  console["log"](output.toString());
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
