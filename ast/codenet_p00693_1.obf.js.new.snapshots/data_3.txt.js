function __STRING_ARRAY__() {
  var _0x4be329 = ["forEach", "379944lyXdvZ", "test", "readFileSync", "872916MfwGju", "join", "1552whTPbP", "403794vbKjTp", "permit", "push", "shift", "522150RZYDNu", "length", "21yiqbiP", "/dev/stdin", "50921VMAiul", "split", "11385vWeRZJ", "log", "map", "322475kBjVIY"];
  __STRING_ARRAY__ = function () {
    return _0x4be329;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("50921VMAiul") / 1 + -parseInt("522150RZYDNu") / 2 + parseInt("403794vbKjTp") / 3 + parseInt("872916MfwGju") / 4 + -parseInt("322475kBjVIY") / 5 + -parseInt("379944lyXdvZ") / 6 * (parseInt("21yiqbiP") / 7) + parseInt("1552whTPbP") / 8 * (parseInt("11385vWeRZJ") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 133616);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(wuFlHb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 144;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wuFlHb, key);
}
input = input.replace(/\?/g, ".");
var arr = input.trim()["split"]("\n");
while (true) {
  var nm = arr.shift().split(" ")["map"](Number);
  var n = nm[0];
  var m = nm[1];
  if (n == 0 && m == 0) {
    break;
  }
  var rule = [];
  while (n--) {
    var ary = arr["shift"]().split(" ");
    var flag = ary[0] == "permit" ? true : false;
    rule["push"]([flag, new RegExp(ary[1] + ary[2])]);
  }
  var ans = [];
  while (m--) {
    var packet = arr.shift().split(" ");
    var str = packet[0] + packet[1];
    var flag = false;
    rule["forEach"](function (v) {
      if (v[0] == true && v[1]["test"](str)) {
        flag = true;
      } else if (v[0] == false && v[1]["test"](str)) {
        flag = false;
      }
    });
    if (flag) {
      ans.push(packet["join"](" "));
    }
  }
  console["log"](ans["length"]);
  ans["forEach"](function (v) {
    console.log(v);
  });
}
