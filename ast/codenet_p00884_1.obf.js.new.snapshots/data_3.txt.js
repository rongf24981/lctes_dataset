(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("3136biImvs") / 1 * (-parseInt("108tyWDiP") / 2) + -parseInt("33gZukXu") / 3 * (-parseInt("50340nPaqPi") / 4) + -parseInt("730775VWSEvC") / 5 + parseInt("77304eaZZQG") / 6 * (parseInt("126ZlpcHS") / 7) + parseInt("24hhvAUI") / 8 * (parseInt("749583wLDLOh") / 9) + parseInt("10AhbWfc") / 10 * (-parseInt("3333253reRjpm") / 11) + -parseInt("24sdxWrM") / 12 * (-parseInt("977327dXSSTY") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 152044);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x50ff0b = ["50340nPaqPi", "3136biImvs", "126ZlpcHS", "keys", "77304eaZZQG", "slice", "10AhbWfc", "33gZukXu", "length", "forEach", "hasOwnProperty", "24sdxWrM", "trim", "3333253reRjpm", "977327dXSSTY", "24hhvAUI", "readFileSync", "split", "108tyWDiP", "749583wLDLOh", "730775VWSEvC", "shift", "log"];
  __STRING_ARRAY__ = function () {
    return _0x50ff0b;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]()["split"]("\n");
function __DECODE_0__(vnILyA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 213;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vnILyA, key);
}
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var first = Arr.shift().split(":");
  first = first[1]["slice"](0, -1)["split"](",");
  var F = {};
  first["forEach"](function (v) {
    F[v] = true;
  });
  var obj = {};
  for (var i = 0; i < n - 1; i++) {
    var arr = Arr.shift().split(":");
    obj[arr[0]] = arr[1]["slice"](0, -1)["split"](",");
  }
  var L = 0;
  while (true) {
    if (L == Object["keys"](F)["length"]) {
      break;
    }
    L = Object["keys"](F)["length"];
    for (var k in F) {
      if (obj.hasOwnProperty(k) && F[k]) {
        obj[k]["forEach"](function (v) {
          F[v] = true;
        });
        F[k] = false;
      }
    }
  }
  var cnt = 0;
  for (var k in F) {
    if (obj["hasOwnProperty"](k) == false) {
      cnt++;
    }
  }
  console["log"](cnt);
}
