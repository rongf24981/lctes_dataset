function __STRING_ARRAY__() {
  var _0x2f6254 = ["1043apovEZ", "1067lkeQgz", "467538KVopdA", "log", "1114742bisVgc", "push", "forEach", "readFileSync", "47776tSZYkE", "20570nxbScN", "sort", "map", "38660HxflcY", "1420648ijrzJH", "split", "1yrQXIA", "12090663MPvrOT", "length", "1554aPAiet", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x2f6254;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1yrQXIA") / 1 * (parseInt("1114742bisVgc") / 2) + parseInt("467538KVopdA") / 3 + parseInt("1420648ijrzJH") / 4 + -parseInt("20570nxbScN") / 5 * (parseInt("1554aPAiet") / 6) + -parseInt("1043apovEZ") / 7 * (-parseInt("47776tSZYkE") / 8) + parseInt("12090663MPvrOT") / 9 + parseInt("38660HxflcY") / 10 * (-parseInt("1067lkeQgz") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 746344);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(gusQme, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 362;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gusQme, key);
}
var arr = input.trim()["split"]("\n");
while (true) {
  var N = arr["shift"]() - 0;
  if (N == 0) {
    break;
  }
  var obj = {};
  var ary = [];
  for (var i = 0; i < N; i++) {
    var nws = arr["shift"]().split(" ");
    var name = nws[0];
    var w = nws[1] - 0;
    var s = nws[2]["split"]("")["map"](Number);
    s = s["length"] == 3 ? s[0] * 60 + s[1] * 10 + s[2] : s[0] * 600 + s[1] * 60 + s[2] * 10 + s[3];
    obj[name] = w * 1440 + s;
    ary["push"](w * 1440 + s);
  }
  var P = arr["shift"]() - 0;
  for (var i = 0; i < P; i++) {
    var f = arr["shift"]();
    ary["push"](obj[f] - 29.5);
  }
  ary["sort"](function (a, b) {
    return a - b;
  });
  var cnt = 0;
  var i = 0;
  var p = 0;
  ary["forEach"](function (v) {
    if (v % 1 == 0.5) {
      cnt++;
      p++;
      i = v + 29.5 + 30;
    } else if (i <= v) {
      cnt++;
      i = v + 30;
    }
  });
  if (p != P) {
    cnt = -1;
  }
  console["log"](cnt);
}
