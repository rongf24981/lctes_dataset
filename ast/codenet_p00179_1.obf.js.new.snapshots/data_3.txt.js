function __DECODE_0__(ocweeI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 469;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ocweeI, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("986184XiriSV") / 1 * (-parseInt("2TPKZyc") / 2) + -parseInt("186QpouzY") / 3 * (-parseInt("62324iuKQzS") / 4) + parseInt("4948815CsLxpQ") / 5 + -parseInt("4195920WNgVNN") / 6 + -parseInt("11715662VbMMOq") / 7 + parseInt("360VduaOJ") / 8 * (parseInt("327411ZNaISc") / 9) + parseInt("6631200QPCVGA") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 896790);
function BFS(x) {
  var obj = {};
  var bfs = [[x, 0]];
  obj[x] = true;
  while (true) {
    if (bfs["length"] == 0) {
      ans = "NA";
      break;
    }
    var leaf = bfs.shift();
    var str = leaf[0];
    var cnt = leaf[1];
    if (/^0+$|^1+$|^2+$/["test"](str)) {
      ans = cnt;
      break;
    }
    for (var i = 0; i < str["length"] - 1; i++) {
      if (str[i] == str[i + 1]) {
        continue;
      }
      var arr = str["split"]("");
      var color = 3 - +arr[i] - +arr[i + 1];
      arr[i] = color;
      arr[i + 1] = color;
      var Str = arr["join"]("");
      if (obj.hasOwnProperty(Str) == false) {
        bfs["push"]([Str, cnt + 1]);
        obj[Str] = true;
      }
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var rgb = Arr["shift"]();
  if (rgb == "0") {
    break;
  }
  rgb = rgb["replace"](/r/g, "0")["replace"](/g/g, "1")["replace"](/b/g, "2");
  var ans;
  BFS(rgb);
  console["log"](ans);
}
function __STRING_ARRAY__() {
  var _0x37756a = ["trim", "986184XiriSV", "shift", "length", "/dev/stdin", "6631200QPCVGA", "186QpouzY", "utf8", "readFileSync", "327411ZNaISc", "replace", "4195920WNgVNN", "11715662VbMMOq", "split", "log", "360VduaOJ", "2TPKZyc", "62324iuKQzS", "test", "join", "push", "4948815CsLxpQ"];
  __STRING_ARRAY__ = function () {
    return _0x37756a;
  };
  return __STRING_ARRAY__();
}
