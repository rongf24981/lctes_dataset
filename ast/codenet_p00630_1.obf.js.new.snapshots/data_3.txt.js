(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("100phNOWM") / 1 * (parseInt("2480DsuzGQ") / 2) + parseInt("542844qbfcME") / 3 + parseInt("2991064CUAgpm") / 4 + -parseInt("2885385upxYFm") / 5 + parseInt("5340726jPOTkK") / 6 + -parseInt("396116bLbPWD") / 7 + -parseInt("6836184rgxlBy") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 454647);
function __STRING_ARRAY__() {
  var _0x5b3984 = ["join", "length", "utf8", "100phNOWM", "shift", "replace", "2480DsuzGQ", "542844qbfcME", "log", "readFileSync", "toUpperCase", "split", "2991064CUAgpm", "2885385upxYFm", "6836184rgxlBy", "/dev/stdin", "396116bLbPWD", "toLowerCase", "5340726jPOTkK"];
  __STRING_ARRAY__ = function () {
    return _0x5b3984;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(VGqSEb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 490;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VGqSEb, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["replace"](/\n$/, "").split("\n");
while (true) {
  var nt = Arr["shift"]()["split"](" ");
  var str = nt[0];
  var type = nt[1];
  if (type == "X") {
    break;
  }
  str = str["replace"](/^./, function (s) {
    return s.toLowerCase();
  });
  str = str.replace(/[A-Z]/g, function (s) {
    return "_" + s;
  });
  var arr = str["split"]("_");
  for (var i = 1; i < arr["length"]; i++) {
    arr[i] = arr[i]["replace"](/./, function (s) {
      return s["toUpperCase"]();
    });
  }
  if (type == "U") {
    arr[0] = arr[0]["replace"](/^./, function (s) {
      return s["toUpperCase"]();
    });
    console.log(arr["join"](""));
  }
  if (type == "L") {
    console["log"](arr.join(""));
  }
  if (type == "D") {
    console.log(arr["join"]("_")["toLowerCase"]());
  }
}
