'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("109NkUnet") / 1 * (parseInt("13276PiHdlH") / 2) + parseInt("213QtzMre") / 3 * (-parseInt("47792Lfcrnd") / 4) + parseInt("65Zvzpbn") / 5 * (parseInt("65034FoQGUz") / 6) + -parseInt("81368GajKmb") / 7 * (parseInt("240TTEYVP") / 8) + -parseInt("433737WsQZMb") / 9 * (parseInt("140fDMSrE") / 10) + parseInt("1205809PSDaaP") / 11 * (-parseInt("72tDykbs") / 12) + parseInt("46123298QoSdym") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 435867);
function __STRING_ARRAY__() {
  var _0x43510e = ["print", "47792Lfcrnd", "reverse", "65Zvzpbn", "readFileSync", "1205809PSDaaP", "140fDMSrE", "46123298QoSdym", "split", "log", "utf8", "shift", "13276PiHdlH", "72tDykbs", "replace", "join", "240TTEYVP", "109NkUnet", "65034FoQGUz", "/dev/stdin", "433737WsQZMb", "213QtzMre", "slice", "81368GajKmb"];
  __STRING_ARRAY__ = function () {
    return _0x43510e;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8").replace(/\r?\n$/, "")["split"](/\r?\n/));
function __DECODE_0__(VdVANM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 316;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VdVANM, key);
}
function main(lines) {
  var str = lines["shift"]();
  lines["shift"]();
  var code;
  while (code = lines["shift"]()) {
    code = code.split(" ");
    var from = +code[1];
    var to = +code[2];
    switch (code[0]) {
      case "print":
        console["log"](str["slice"](from, to + 1));
        break;
      case "replace":
        str = str["slice"](0, from) + code[3] + str["slice"](to + 1);
        break;
      case "reverse":
        str = str["slice"](0, from) + str["slice"](from, to + 1).split("")["reverse"]()["join"]("") + str["slice"](to + 1);
        break;
    }
  }
}
