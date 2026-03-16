function __DECODE_0__(QatzcM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 192;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QatzcM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("74677xTiFUA") / 1 * (-parseInt("22ZFrpGZ") / 2) + parseInt("1560780KMRmOF") / 3 + -parseInt("328448IGXLOl") / 4 + parseInt("5jnzNAa") / 5 * (parseInt("4459734jkRLun") / 6) + -parseInt("3721459ueJcfY") / 7 + -parseInt("8976cRdYUw") / 8 * (parseInt("4869MxGUHt") / 9) + parseInt("12345380yjeGEh") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 455889);
function __STRING_ARRAY__() {
  var _0x250e27 = ["utf8", "replace", "4459734jkRLun", "log", "22ZFrpGZ", "readFileSync", "4869MxGUHt", "1560780KMRmOF", "shift", "12345380yjeGEh", "split", "74677xTiFUA", "toFixed", "8976cRdYUw", "YES", "3721459ueJcfY", "5jnzNAa", "328448IGXLOl", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x250e27;
  };
  return __STRING_ARRAY__();
}
(function (input) {
  var p = input["replace"](/\n$/, "")["split"]("\n");
  var n = Number(p.shift());
  var i = 0;
  while (i++ < n) {
    var args = p["shift"]()["split"](" ").map(Number);
    var x1 = args.shift();
    var y1 = args["shift"]();
    var x2 = args["shift"]();
    var y2 = args.shift();
    var x3 = args.shift();
    var y3 = args["shift"]();
    var x4 = args["shift"]();
    var y4 = args["shift"]();
    console["log"](((y2 - y1) / (x2 - x1))["toFixed"](5) === ((y4 - y3) / (x4 - x3))["toFixed"](5) ? "YES" : "NO");
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
