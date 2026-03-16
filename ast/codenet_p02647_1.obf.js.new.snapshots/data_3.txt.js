function __STRING_ARRAY__() {
  var _0x4f624e = ["5PHKTGJ", "1383466smpCVE", "422030nsUfHv", "133398immALJ", "23238JqcnhE", "length", "log", "utf8", "/dev/stdin", "8eyisin", "fill", "237645aAhxHk", "trim", "map", "1027518KBAjfZ", "297872iYAxhW", "split", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x4f624e;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(quuLiP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 321;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(quuLiP, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("133398immALJ") / 1 + parseInt("422030nsUfHv") / 2 + parseInt("23238JqcnhE") / 3 + parseInt("297872iYAxhW") / 4 + -parseInt("5PHKTGJ") / 5 * (-parseInt("1027518KBAjfZ") / 6) + -parseInt("1383466smpCVE") / 7 + parseInt("8eyisin") / 8 * (-parseInt("237645aAhxHk") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 107041);
function Main(input) {
  input = input.split("\n");
  var mem = input[0]["split"](" ");
  var arr = input[1]["split"](" ")["map"](Number);
  for (var p = 0; p < mem[1]; p++) {
    var tmp = new Array(arr.length)["fill"](0);
    for (var i = 0; i < arr["length"]; i++) {
      var n = arr[i];
      var min = i - n;
      var max = i + n;
      if (min < 0) {
        min = 0;
      }
      if (max > arr.length - 1) {
        max = arr["length"] - 1;
      }
      for (var j = min; j <= max; j++) {
        tmp[j]++;
      }
    }
    var flag = true;
    for (var i = 0; i < arr["length"]; i++) {
      if (arr[i] != tmp[i]) {
        flag = false;
      }
      arr[i] = tmp[i];
    }
    if (flag) {
      break;
    }
  }
  console["log"](arr.join(" "));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
