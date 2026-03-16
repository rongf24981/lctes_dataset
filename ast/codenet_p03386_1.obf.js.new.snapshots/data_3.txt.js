function __STRING_ARRAY__() {
  var _0x3bc8d3 = ["toString", "7159308cWPDaC", "2942118FMqwhK", "3716bIbrfM", "6535liDYfC", "79117Oecdgl", "stdout", "close", "split", "733014JslQmo", "push", "line", "7fyqBGG", "110FvDyCj", "34lEysWh", "50192439MmnaEh", "12047944SHYecY", "stdin"];
  __STRING_ARRAY__ = function () {
    return _0x3bc8d3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("79117Oecdgl") / 1 * (-parseInt("34lEysWh") / 2) + parseInt("2942118FMqwhK") / 3 + -parseInt("3716bIbrfM") / 4 * (-parseInt("6535liDYfC") / 5) + parseInt("7159308cWPDaC") / 6 + -parseInt("7fyqBGG") / 7 * (-parseInt("12047944SHYecY") / 8) + parseInt("733014JslQmo") / 9 * (-parseInt("110FvDyCj") / 10) + -parseInt("50192439MmnaEh") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 780254);
var lines = [];
function __DECODE_0__(DLkrCj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 118;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DLkrCj, key);
}
var readline = require("readline");
var rl = readline.createInterface({
  input: process["stdin"],
  output: process["stdout"]
});
rl.on("line", function (x) {
  lines["push"](x);
});
rl.on("close", function () {
  var A = Number(lines[0].split(" ")[0]);
  var B = Number(lines[0].split(" ")[1]);
  var K = Number(lines[0]["split"](" ")[2]);
  var ans = "";
  for (var i = A; i <= B; i++) {
    if (i < A + K) {
      ans += i["toString"]();
    } else if (i > B - K) {
      ans += i["toString"]();
    }
  }
  for (var i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
});
