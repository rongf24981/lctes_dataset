'use strict';

function __DECODE_0__(VqkHNO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 434;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VqkHNO, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("497217MOjPmP") / 1 + parseInt("342928sbFdRp") / 2 * (parseInt("6eqhmhx") / 3) + parseInt("424004KaDPob") / 4 + parseInt("1218485dIThUL") / 5 + parseInt("6HcQRlP") / 6 * (-parseInt("3438967oIJSYv") / 7) + parseInt("1330856OoHgOa") / 8 * (-parseInt("18NtEsMr") / 9) + parseInt("9007340avkgXA") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 272148);
function __STRING_ARRAY__() {
  var _0x271c1d = ["1218485dIThUL", "18NtEsMr", "497217MOjPmP", "readFileSync", "9007340avkgXA", "1330856OoHgOa", "3438967oIJSYv", "342928sbFdRp", "/dev/stdin", "6eqhmhx", "utf8", "6HcQRlP", "map", "length", "424004KaDPob", "split", "log", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x271c1d;
  };
  return __STRING_ARRAY__();
}
function myin() {
  return require("fs")["readFileSync"]("/dev/stdin", "utf8").trim();
}
function myout(t) {
  console["log"](t);
}
function myconv(i, no) {
  switch (no) {
    case 0:
      return i;
    case 1:
      return parseInt(i);
    case 2:
      return i.split(" ");
    case 3:
      return i["split"]("\n");
    case 4:
      return i["split"](" ")["map"](a => Number(a));
    case 5:
      return i["split"]("\n")["map"](a => Number(a));
    case 6:
      return i["split"]("");
    case 7:
      return i["split"]("")["map"](a => Number(a));
  }
}
function Main(input) {
  input = myconv(input, 3);
  input["shift"]();
  var output = 0;
  for (var i = 0; i < input["length"]; i++) {
    var A = parseInt(input[i]["split"](" ")[0]);
    var B = parseInt(input[i]["split"](" ")[1]);
    if (A < B) {
      output += B;
    }
  }
  myout(output);
}
Main(myin());
