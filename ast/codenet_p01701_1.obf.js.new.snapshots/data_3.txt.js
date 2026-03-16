function __DECODE_0__(xrfNsx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 193;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xrfNsx, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("614140aICzPt") / 1 + -parseInt("833040lqBsqF") / 2 + parseInt("1507365nCuHlB") / 3 + -parseInt("371252GhoGoE") / 4 * (-parseInt("55iBimzE") / 5) + -parseInt("4837722HUJBJx") / 6 + parseInt("7049245WiMxYL") / 7 + parseInt("8qrZUii") / 8 * (-parseInt("12330189yELmyD") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 551745);
function __STRING_ARRAY__() {
  var _0x36c3af = ["614140aICzPt", "55iBimzE", "1507365nCuHlB", "resume", "split", "pow", "length", "7049245WiMxYL", "log", "8qrZUii", "833040lqBsqF", "replace", "4837722HUJBJx", "stdin", "12330189yELmyD", "371252GhoGoE", "utf8", "data"];
  __STRING_ARRAY__ = function () {
    return _0x36c3af;
  };
  return __STRING_ARRAY__();
}
process["stdin"]["resume"]();
process["stdin"].setEncoding("utf8");
process["stdin"].on("data", function (chunk) {
  var line;
  var lines = chunk["split"]("\n");
  var i;
  var len = lines.length;
  var j;
  var jLen;
  var deg;
  var pow;
  var max;
  for (i = 0; i < len; i++) {
    line = lines[i];
    if (line == "#") {
      break;
    }
    line = line["replace"](/north/g, 0);
    line = line["replace"](/west/g, 1);
    deg = 0;
    jLen = line.length;
    pow = line["length"] - 1;
    max = Math["pow"](2, pow) * 90;
    for (j = jLen; j >= 0; j--) {
      if (line[j] * 1) {
        if (deg < max) {
          deg += Math.pow(2, j) * 90;
        }
      } else if (deg > 0) {
        deg -= Math["pow"](2, j) * 90;
      }
    }
    while (pow > 0 && deg % 2 === 0) {
      deg = deg / 2;
      pow--;
    }
    if (pow > 0) {
      console["log"](deg + "/" + Math.pow(2, pow));
    } else {
      console["log"](deg);
    }
  }
});
