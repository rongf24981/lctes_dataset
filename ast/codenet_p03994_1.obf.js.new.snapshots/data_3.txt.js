function __DECODE_0__(xGgshj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 102;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xGgshj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("5282TJcrxA") / 1 * (parseInt("250EFUQKg") / 2) + -parseInt("45soVvlE") / 3 * (-parseInt("60920YHkctJ") / 4) + parseInt("18100LtcWhn") / 5 * (parseInt("150dudhsB") / 6) + -parseInt("7WGxBin") / 7 * (-parseInt("4341440BcRweQ") / 8) + -parseInt("726858aCaMTe") / 9 * (parseInt("90BdycGX") / 10) + -parseInt("134299QeHIwQ") / 11 * (parseInt("276fxflNT") / 12) + parseInt("24973UYHfMU") / 13 * (parseInt("9226cqnRbP") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 459654);
function __STRING_ARRAY__() {
  var _0x20e664 = ["4341440BcRweQ", "276fxflNT", "150dudhsB", "250EFUQKg", "726858aCaMTe", "90BdycGX", "length", "60920YHkctJ", "45soVvlE", "map", "from", "134299QeHIwQ", "5282TJcrxA", "join", "utf8", "log", "24973UYHfMU", "readFileSync", "18100LtcWhn", "9226cqnRbP", "7WGxBin"];
  __STRING_ARRAY__ = function () {
    return _0x20e664;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var s;
  var K;
  var ref;
  ref = input.split("\n");
  s = ref[0];
  K = parseInt(ref[1]);
  console["log"](Array["from"](s)["map"]((v, i, arr) => {
    var code = v.charCodeAt();
    if (i === arr["length"] - 1) {
      code += K % 26;
      code -= code > 122 ? 26 : 0;
      return String.fromCharCode(code);
    } else {
      if (v === "a") {
        return v;
      }
      if (123 - code <= K) {
        K -= 123 - code;
        return "a";
      } else {
        return v;
      }
    }
  })["join"](""));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
