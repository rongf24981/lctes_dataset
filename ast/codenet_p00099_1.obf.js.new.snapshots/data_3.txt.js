(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("136272lvvusS") / 1 + parseInt("673424FzhTib") / 2 + -parseInt("3LqXlCo") / 3 * (-parseInt("74828lhXHtS") / 4) + parseInt("2789925JJdRqs") / 5 + -parseInt("3078ydBpao") / 6 * (parseInt("6195iewzNh") / 7) + -parseInt("3751016smqbBO") / 8 + parseInt("2306565WnFOWs") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 383079);
function __STRING_ARRAY__() {
  var _0x5d0792 = ["2789925JJdRqs", "673424FzhTib", "forEach", "3078ydBpao", "3751016smqbBO", "2306565WnFOWs", "3LqXlCo", "shift", "136272lvvusS", "74828lhXHtS", "map", "/dev/stdin", "readFileSync", "trim", "split", "6195iewzNh"];
  __STRING_ARRAY__ = function () {
    return _0x5d0792;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(sshQQZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 119;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sshQQZ, key);
}
var arr = input["trim"]()["split"]("\n");
var nq = arr["shift"]()["split"](" ")["map"](Number);
var player = [];
var maxValue = 0;
var maxId = 0;
for (var i = 0; i < nq[0]; i++) {
  player[i] = 0;
}
arr["forEach"](function (V) {
  var av = V["split"](" ")["map"](Number);
  var a = av[0] - 1;
  var v = av[1];
  player[a] += v;
  if (a == maxId && v >= 0) {
    maxValue += v;
  } else if (maxValue == player[a] && maxId > a) {
    maxId = a;
  } else if (maxValue < player[a]) {
    maxValue = player[a];
    maxId = a;
  } else if (a == maxId && v < 0) {
    var max = -1 * Infinity;
    player["forEach"](function (value, index) {
      if (max < value) {
        max = value;
        maxValue = value;
        maxId = index;
      }
    });
  }
  console.log(maxId + 1 + " " + maxValue);
});
