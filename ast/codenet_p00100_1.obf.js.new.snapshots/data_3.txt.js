(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("475301WbcBIU") / 1 + -parseInt("926080NdISzB") / 2 + -parseInt("18EaAYQL") / 3 * (-parseInt("50836TtkVCi") / 4) + -parseInt("1612190kiSWGe") / 5 + parseInt("144738uCKzhC") / 6 * (parseInt("133pxLitm") / 7) + parseInt("8WFhSzi") / 8 * (-parseInt("403416inLRiO") / 9) + parseInt("10129390pzPxhV") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 241927);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(oFZzqN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 153;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oFZzqN, key);
}
var Arr = input["trim"]()["split"]("\n");
var obj = {};
function __STRING_ARRAY__() {
  var _0x4d0cd6 = ["map", "10129390pzPxhV", "trim", "18EaAYQL", "1612190kiSWGe", "50836TtkVCi", "push", "926080NdISzB", "length", "403416inLRiO", "log", "144738uCKzhC", "readFileSync", "475301WbcBIU", "8WFhSzi", "split", "133pxLitm"];
  __STRING_ARRAY__ = function () {
    return _0x4d0cd6;
  };
  return __STRING_ARRAY__();
}
for (var i = 0; i < Arr["length"]; i++) {
  var arr = Arr[i].split(" ")["map"](Number);
  if (i != 0 && arr["length"] == 1) {
    var keys = [];
    for (var k in obj) {
      keys["push"](k - 0);
    }
    var cnt = 0;
    for (var j = 0; j < keys.length; j++) {
      if (obj[keys[j + ""]] >= 1000000) {
        console["log"](keys[j + ""]);
        cnt++;
      }
    }
    if (cnt == 0) {
      console["log"]("NA");
    }
    if (arr[0] == 0) {
      break;
    }
    obj = {};
  } else if (arr["length"] == 3) {
    if (!obj.hasOwnProperty(arr[0])) {
      obj[arr[0]] = arr[1] * arr[2];
    } else {
      obj[arr[0]] += arr[1] * arr[2];
    }
  }
}
