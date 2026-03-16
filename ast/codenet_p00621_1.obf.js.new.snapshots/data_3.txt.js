function __DECODE_0__(cJDLsC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 244;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cJDLsC, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("38882KTBdHF") / 1 * (-parseInt("6ImtAar") / 2) + -parseInt("985368SJykha") / 3 + parseInt("811876azliNk") / 4 + -parseInt("33670EMkTmq") / 5 * (parseInt("132GMqEZg") / 6) + -parseInt("7nwdyuF") / 7 * (parseInt("1500856NGuACh") / 8) + -parseInt("36PxJLaU") / 9 * (parseInt("799380thBXnK") / 10) + parseInt("88AUzxfO") / 11 * (parseInt("1691268wHuoYC") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 229872);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x3c641c = ["132GMqEZg", "0 0", "7nwdyuF", "END", "readFileSync", "33670EMkTmq", "38882KTBdHF", "/dev/stdin", "1500856NGuACh", "799380thBXnK", "split", "1691268wHuoYC", "6ImtAar", "811876azliNk", "36PxJLaU", "trim", "log", "985368SJykha", "88AUzxfO", "map", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x3c641c;
  };
  return __STRING_ARRAY__();
}
var arr = input["trim"]()["split"]("\n");
while (true) {
  var wq = arr["shift"]();
  if (wq == "0 0") {
    break;
  }
  wq = wq.split(" ")["map"](Number);
  var w = wq[0];
  var W = [];
  for (var i = 0; i < w; i++) {
    W[i] = true;
  }
  var cat = {};
  while (wq[1]--) {
    var sw = arr["shift"]()["split"](" ");
    if (sw[0] == "s") {
      var id = sw[1];
      var width = sw[2] - 0;
      var cnt = 0;
      var ans = "impossible";
      for (var i = 0; i < w; i++) {
        cnt = W[i] ? cnt + 1 : 0;
        if (cnt == width) {
          while (cnt--) {
            W[i] = false;
            i--;
          }
          i++;
          cat[id] = [i, width];
          ans = i;
          break;
        }
      }
      console["log"](ans);
    }
    if (sw[0] == "w") {
      var id = sw[1];
      var width = cat[id][1];
      var i = cat[id][0];
      while (width--) {
        W[i] = true;
        i++;
      }
    }
  }
  console["log"]("END");
}
