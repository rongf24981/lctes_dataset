(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("164201MHxTHl") / 1 * (-parseInt("2MSQpyG") / 2) + -parseInt("535008AnkmIL") / 3 + parseInt("699092rJHWWl") / 4 + -parseInt("1412265XbevQx") / 5 + parseInt("444vHoMFp") / 6 * (parseInt("21588hpAjqC") / 7) + -parseInt("794008hfbmlr") / 8 * (-parseInt("9UnIRuN") / 9) + parseInt("2892890MexmQT") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 166539);
(function (input) {
  var p = input["replace"](/\n$/, "").split("\n");
  var n = Number(p["shift"]());
  for (var i = 0; i < n; i++) {
    var args = p.shift().split(" ")["map"](Number);
    var xa = args["shift"]();
    var ya = args["shift"]();
    var ra = args["shift"]();
    var xb = args["shift"]();
    var yb = args["shift"]();
    var rb = args.shift();
    var d = Math["sqrt"](Math["pow"](xb - xa, 2) + Math["pow"](yb - ya, 2));
    if (ra > d + rb) {
      console.log(2);
    } else if (rb > d + ra) {
      console.log(-2);
    } else if (d < ra + rb) {
      console["log"](1);
    } else {
      console["log"](0);
    }
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(dzmYsm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 296;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dzmYsm, key);
}
function __STRING_ARRAY__() {
  var _0x17fe66 = ["sqrt", "444vHoMFp", "replace", "readFileSync", "699092rJHWWl", "535008AnkmIL", "21588hpAjqC", "164201MHxTHl", "/dev/stdin", "map", "utf8", "pow", "log", "9UnIRuN", "2892890MexmQT", "1412265XbevQx", "shift", "794008hfbmlr", "2MSQpyG"];
  __STRING_ARRAY__ = function () {
    return _0x17fe66;
  };
  return __STRING_ARRAY__();
}
