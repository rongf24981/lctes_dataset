function __STRING_ARRAY__() {
  var _0xdfd1c2 = ["301DjAsFJ", "readFileSync", "1123205RGbFly", "19895427kpiCCX", "3dXwGvc", "975434mzXxiv", "split", "2242040AzAbhg", "push", "10IYdJyj", "124356KupZlL", "817930vFCHPB", "filter", "/dev/stdin", "shift", "Buzz", "log", "574888SQhNAy", "length", "trim", "map"];
  __STRING_ARRAY__ = function () {
    return _0xdfd1c2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(IdHsTm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 324;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IdHsTm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("975434mzXxiv") / 1 + parseInt("817930vFCHPB") / 2 * (parseInt("3dXwGvc") / 3) + -parseInt("2242040AzAbhg") / 4 + parseInt("1123205RGbFly") / 5 + -parseInt("124356KupZlL") / 6 * (parseInt("301DjAsFJ") / 7) + parseInt("574888SQhNAy") / 8 + -parseInt("19895427kpiCCX") / 9 * (-parseInt("10IYdJyj") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 488908);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var mn = Arr["shift"]()["split"](" ")["map"](Number);
  if (mn[0] == 0 && mn[1] == 0) {
    break;
  }
  var player = [];
  for (var i = 0; i < mn[0]; i++) {
    player[i] = i + 1;
  }
  var arr = [];
  for (var i = 0; i < mn[1]; i++) {
    var v = Arr["shift"]();
    arr["push"](v);
  }
  var i = 1;
  var k = 0;
  var len = mn[0];
  for (var I = 0; I < arr["length"]; I++) {
    var v = arr[I];
    var str = "";
    if (i % 3 == 0) {
      str += "Fizz";
    }
    if (i % 5 == 0) {
      str += "Buzz";
    }
    if (str == "") {
      str = i;
    }
    if (v != str) {
      player[k] = false;
      len++;
      if (len == 1) {
        break;
      }
    }
    i++;
    var H = 0;
    do {
      H++;
      if (H > 1000) {
        break;
      }
      k++;
      if (k >= player["length"]) {
        player = player["filter"](function (v) {
          return v != false;
        });
        k = 0;
      }
    } while (player[k] == false);
  }
  player = player["filter"](function (v) {
    return v != false;
  });
  console["log"](player.join(" "));
}
