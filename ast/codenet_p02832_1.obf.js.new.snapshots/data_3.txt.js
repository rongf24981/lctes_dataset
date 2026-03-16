(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("22885DBmugE") / 1 + parseInt("283708pOqAXc") / 2 + parseInt("579489mhaDUd") / 3 + parseInt("108ifkvyN") / 4 * (-parseInt("34820sxkMDx") / 5) + -parseInt("1530534mrIPnQ") / 6 + -parseInt("28euVPQS") / 7 * (parseInt("271760KDpyva") / 8) + parseInt("3935637SfMnMP") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 216198);
process.stdin["resume"]();
process["stdin"]["setEncoding"]("utf8");
var lines = [];
var reader = require("readline")["createInterface"]({
  input: process["stdin"],
  output: process["stdout"]
});
function __STRING_ARRAY__() {
  var _0x90e2ab = ["log", "utf8", "stdin", "line", "28euVPQS", "length", "splice", "22885DBmugE", "1530534mrIPnQ", "579489mhaDUd", "108ifkvyN", "271760KDpyva", "resume", "map", "3935637SfMnMP", "stdout", "283708pOqAXc", "34820sxkMDx", "createInterface", "close", "readline", "setEncoding", "push"];
  __STRING_ARRAY__ = function () {
    return _0x90e2ab;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ZkafML, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 243;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZkafML, key);
}
reader.on("line", line => {
  lines["push"](line);
});
reader.on("close", () => {
  var count = lines[0];
  var ary = lines[1].split(" ")["map"](x => Number(x));
  var break_count = 0;
  var tmp_count = 1;
  var c = 0;
  for (var i = 0; i < count; i++) {
    if (ary[tmp_count - 1] == tmp_count) {
      c += tmp_count;
      tmp_count++;
    } else {
      break_count++;
      ary["splice"](tmp_count - 1, 1);
    }
  }
  var judge = false;
  if (ary.length == 0) {
    judge = true;
  }
  if (sum(ary["length"]) != c) {
    judge = true;
  }
  if (break_count == 0 && judge) {
    console["log"](0);
  } else if (judge) {
    console["log"](-1);
  } else {
    console["log"](break_count);
  }
  function sum(n) {
    return n * (n + 1) * 0.5;
  }
});
