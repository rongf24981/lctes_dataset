function __DECODE_0__(cSQAJa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 417;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cSQAJa, key);
}
function __STRING_ARRAY__() {
  var _0x4ca56e = ["reduce", "utf8", "28264148KCRaeb", "shift", "1ydNgwM", "103998khjnOz", "/dev/stdin", "152GecYvd", "511qfZUky", "4EbQOwG", "1095045XbpAbK", "3509770hsbdEl", "1018046vcMhLk", "trim", "log", "2656767UhRwUY", "split", "447651xYiQrj", "push"];
  __STRING_ARRAY__ = function () {
    return _0x4ca56e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1ydNgwM") / 1 * (parseInt("1018046vcMhLk") / 2) + -parseInt("2656767UhRwUY") / 3 * (parseInt("4EbQOwG") / 4) + parseInt("1095045XbpAbK") / 5 + parseInt("103998khjnOz") / 6 * (-parseInt("511qfZUky") / 7) + -parseInt("152GecYvd") / 8 * (-parseInt("447651xYiQrj") / 9) + -parseInt("3509770hsbdEl") / 10 + parseInt("28264148KCRaeb") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 722620);
function comb(r) {
  var c = [];
  c[0] = -1;
  var k = 1;
  c[1] = 0;
  var ret = [];
  while (k != 0) {
    for (var i = k + 1; i <= r; i++) {
      c[i] = c[i - 1] + 1;
    }
    var arr = [];
    for (var i = 1; i <= r; i++) {
      arr["push"](c[i]);
    }
    ret["push"](arr);
    k = r;
    while (c[k] == 9 - r + k) {
      k = k - 1;
    }
    c[k] = c[k] + 1;
  }
  return ret;
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input["trim"]()["split"]("\n");
var line;
while (line = lines["shift"]()) {
  var nums = line.split(" ");
  var n = +nums[0];
  var s = +nums[1];
  if (n + s == 0) {
    break;
  }
  var c = comb(n);
  var cnt = 0;
  for (var i = 0; i < c.length; i++) {
    var arr = c[i];
    if (s == arr["reduce"](function (prev, now) {
      return prev + now;
    })) {
      cnt++;
    }
  }
  console["log"](cnt);
}
