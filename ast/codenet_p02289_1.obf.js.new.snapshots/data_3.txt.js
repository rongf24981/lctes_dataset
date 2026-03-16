(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1JZOnkW") / 1 * (-parseInt("287834kaBMmP") / 2) + parseInt("613161xMITSz") / 3 + parseInt("530828OzaAzD") / 4 * (-parseInt("5pdTOEk") / 5) + parseInt("3179460JPJAFA") / 6 + -parseInt("1114715DrtsME") / 7 + -parseInt("458504fdUNLG") / 8 + -parseInt("1945161JNulJt") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 312820);
config = {
  input: "/dev/stdin",
  newline: "\n"
};
function __DECODE_0__(OSigpG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 258;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OSigpG, key);
}
line = require("fs")["readFileSync"](config["input"], "ascii")["split"](config["newline"]);
function __STRING_ARRAY__() {
  var _0x528805 = ["5pdTOEk", "split", "input", "1114715DrtsME", "newline", "1945161JNulJt", "push", "613161xMITSz", "3179460JPJAFA", "1JZOnkW", "readFileSync", "287834kaBMmP", "ascii", "extract", "458504fdUNLG", "log", "530828OzaAzD", "pop", "sort"];
  __STRING_ARRAY__ = function () {
    return _0x528805;
  };
  return __STRING_ARRAY__();
}
S = [];
for (i in line) {
  ary = line[i].split(" ");
  if (ary[0] === "insert") {
    S["push"](parseInt(ary[1], 10));
  } else if (ary[0] === "extract") {
    S["sort"](function (a, b) {
      return a - b;
    });
    console["log"](S["pop"]());
  }
}
