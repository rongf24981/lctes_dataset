(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("9wuPXVX") / 1 * (-parseInt("216054RmKCsi") / 2) + -parseInt("715269CBgtqD") / 3 * (parseInt("4kanyEe") / 4) + -parseInt("2005sLAKRz") / 5 * (-parseInt("2214xLJzVg") / 6) + parseInt("1352015baQqOK") / 7 + parseInt("1352eaUNHs") / 8 * (-parseInt("74691LCoBmj") / 9) + parseInt("4221010nAvEQQ") / 10 * (parseInt("11LBaTfz") / 11) + parseInt("30698460IVDoZj") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 708223);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
function __DECODE_0__(JmjJOz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 186;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JmjJOz, key);
}
for (var i = 0; i < Arr["length"]; i++) {
  var arr = Arr[i].split("");
  var a1 = arr[0];
  var a2 = arr[1];
  var a3 = arr[2];
  var a4 = arr[3];
  var a5 = arr[4];
  var a6 = arr[5];
  var a7 = arr[6];
  var a8 = arr[7];
  var a9 = arr[8];
  var d = 0;
  for (var j = 0; j < 2; j++) {
    var s = j == 0 ? "o" : "x";
    var S = s + s + s;
    if (a1 + a2 + a3 == S) {
      console["log"](s);
      break;
    }
    if (a4 + a5 + a6 == S) {
      console["log"](s);
      break;
    }
    if (a7 + a8 + a9 == S) {
      console["log"](s);
      break;
    }
    if (a1 + a4 + a7 == S) {
      console["log"](s);
      break;
    }
    if (a2 + a5 + a8 == S) {
      console["log"](s);
      break;
    }
    if (a3 + a6 + a9 == S) {
      console["log"](s);
      break;
    }
    if (a1 + a5 + a9 == S) {
      console["log"](s);
      break;
    }
    if (a3 + a5 + a7 == S) {
      console["log"](s);
      break;
    }
    d++;
  }
  if (d == 2) {
    console.log("d");
  }
}
function __STRING_ARRAY__() {
  var _0x5b6718 = ["74691LCoBmj", "9wuPXVX", "4kanyEe", "2005sLAKRz", "readFileSync", "4221010nAvEQQ", "2214xLJzVg", "utf8", "split", "216054RmKCsi", "30698460IVDoZj", "1352015baQqOK", "log", "/dev/stdin", "1352eaUNHs", "715269CBgtqD", "length", "11LBaTfz"];
  __STRING_ARRAY__ = function () {
    return _0x5b6718;
  };
  return __STRING_ARRAY__();
}
