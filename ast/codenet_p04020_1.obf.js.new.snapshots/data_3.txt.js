function __DECODE_0__(NBxMer, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 134;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NBxMer, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("528661EmrwzU") / 1 + -parseInt("1284300trMDhx") / 2 + parseInt("1083447iHNjwN") / 3 * (parseInt("8kyawhA") / 4) + -parseInt("303150oiDrDF") / 5 + parseInt("198DgUTgy") / 6 * (-parseInt("29463JRGbSZ") / 7) + parseInt("8rbTkAO") / 8 * (parseInt("2691594RhNnfl") / 9) + parseInt("8552930EzRrvR") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 506319);
function myout(text) {
  console["log"](text);
}
function Main(input) {
  input = input["trim"]()["split"]("\n")["map"](a => Number(a));
  var len = input[0];
  var output = 0;
  input.shift();
  for (var i = 0; i < len; i++) {
    if (i == len - 1) {
      output += Math["floor"](input[i] / 2);
    } else if (input[i] != 0) {
      if (input[i + 1] != 0) {
        var tmp = Math["min"](input[i], input[i + 1]);
        output += tmp;
        input[i] -= tmp;
        input[i + 1] -= tmp;
        if (input[i] >= 2) {
          output += Math.floor(input[i] / 2);
        }
      } else {
        output += Math["floor"](input[i] / 2);
      }
    }
  }
  myout(output);
}
function __STRING_ARRAY__() {
  var _0x1f282f = ["8552930EzRrvR", "8rbTkAO", "528661EmrwzU", "2691594RhNnfl", "303150oiDrDF", "utf8", "1083447iHNjwN", "29463JRGbSZ", "min", "8kyawhA", "trim", "198DgUTgy", "log", "map", "floor", "1284300trMDhx", "split"];
  __STRING_ARRAY__ = function () {
    return _0x1f282f;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
