(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("7288YslDwJ") / 1 * (-parseInt("218UyieLu") / 2) + parseInt("1554639SKrbZF") / 3 + parseInt("4zYLDuh") / 4 * (-parseInt("5875565vlPFhs") / 5) + -parseInt("5659194sasElh") / 6 + parseInt("80612IeiSFP") / 7 * (-parseInt("904NNqPFM") / 8) + parseInt("9077130lcmFmU") / 9 + parseInt("17670580YbYaDX") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 668613);
function __STRING_ARRAY__() {
  var _0x403cfa = ["shift", "4zYLDuh", "readFileSync", "904NNqPFM", "7288YslDwJ", "17670580YbYaDX", "1554639SKrbZF", "map", "218UyieLu", "join", "/dev/stdin", "5875565vlPFhs", "9077130lcmFmU", "80612IeiSFP", "5659194sasElh"];
  __STRING_ARRAY__ = function () {
    return _0x403cfa;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(GGpEoa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 451;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GGpEoa, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim().split("\n");
while (true) {
  var n = Arr["shift"]();
  if (n == "0") {
    break;
  }
  var arr = Arr["shift"]().split(" ")["map"](Number);
  var k = 0;
  var S = [];
  while (true) {
    for (var i = 0; i < arr.length; i++) {
      var cnt = 0;
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          cnt++;
        }
      }
      S.push(cnt);
    }
    if (S["join"](" ") == arr["join"](" ")) {
      break;
    }
    arr = S.slice();
    S = [];
    k++;
  }
  console.log(k);
  console.log(S["join"](" "));
}
