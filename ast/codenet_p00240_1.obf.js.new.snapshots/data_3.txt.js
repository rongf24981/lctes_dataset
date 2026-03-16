(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1775CjddHp") / 1 * (parseInt("1600OXQQfl") / 2) + -parseInt("4068864zpnbDB") / 3 + parseInt("4LEMPEC") / 4 * (-parseInt("4413275yjLtWk") / 5) + -parseInt("8462130LVoYRh") / 6 + -parseInt("6749183JVOgWI") / 7 * (-parseInt("8czDipA") / 8) + parseInt("2086191TtNsvK") / 9 + -parseInt("530wrEyyR") / 10 * (-parseInt("962071TbmCld") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 762103);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x56b20a = ["map", "530wrEyyR", "8czDipA", "4068864zpnbDB", "1775CjddHp", "utf8", "8462130LVoYRh", "readFileSync", "2086191TtNsvK", "push", "4413275yjLtWk", "trim", "6749183JVOgWI", "split", "log", "pow", "1600OXQQfl", "apply", "4LEMPEC", "962071TbmCld"];
  __STRING_ARRAY__ = function () {
    return _0x56b20a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(CwfRmi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 430;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CwfRmi, key);
}
var Arr = input["trim"]().split("\n");
while (true) {
  var n = Arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var y = Arr.shift() - 0;
  var S = [];
  var s = [];
  for (var i = 0; i < n; i++) {
    var brt = Arr.shift()["split"](" ")["map"](Number);
    var r = brt[1];
    var t = brt[2];
    var result;
    if (t == 1) {
      result = (1 + y * (r / 100)) * 10000;
    }
    if (t == 2) {
      result = Math["pow"](1 + r / 100, y) * 10000;
    }
    S.push(brt[0]);
    s["push"](result);
  }
  var max = Math.max["apply"](null, s);
  console["log"](S[s.indexOf(max)]);
}
