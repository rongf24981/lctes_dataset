(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("939986PvqbAw") / 1 + -parseInt("70uhYtoA") / 2 * (parseInt("24582yETGWw") / 3) + -parseInt("2825612xYsDyB") / 4 * (parseInt("5yXMpMs") / 5) + -parseInt("6rFhqvs") / 6 * (parseInt("566573BAVHhm") / 7) + parseInt("4729040TGNwAT") / 8 * (parseInt("9oGsskm") / 9) + -parseInt("8891140pILFgy") / 10 + -parseInt("10649144CRnKUj") / 11 * (-parseInt("12yAUaPv") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 535974);
function __STRING_ARRAY__() {
  var _0x119e41 = ["24582yETGWw", "map", "9oGsskm", "splice", "566573BAVHhm", "4729040TGNwAT", "utf8", "10649144CRnKUj", "shift", "12yAUaPv", "70uhYtoA", "2825612xYsDyB", "readFileSync", "8891140pILFgy", "log", "trim", "939986PvqbAw", "concat", "push", "floor", "/dev/stdin", "6rFhqvs", "length", "5yXMpMs", "split"];
  __STRING_ARRAY__ = function () {
    return _0x119e41;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(mjtUOV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 358;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mjtUOV, key);
}
var Arr = input["trim"]().split("\n");
while (true) {
  if (Arr["length"] == 0) {
    break;
  }
  var nr = Arr["shift"]()["split"](" ")["map"](Number);
  var n = nr[0];
  var r = nr[1];
  var card = [];
  for (var i = 0; i < n; i++) {
    card[i] = i;
  }
  var arr = Arr["shift"]()["split"](" ").map(Number);
  for (var i = 0; i < r; i++) {
    var v = arr[i];
    var a = [];
    var b = [];
    for (var j = 0; j < n; j++) {
      if (Math["floor"](n / 2) > j) {
        b["push"](card[j]);
      } else {
        a["push"](card[j]);
      }
    }
    card = [];
    while (true) {
      if (a["length"] == 0 && b["length"] == 0) {
        break;
      }
      card = card.concat(a.splice(0, v));
      card = card["concat"](b["splice"](0, v));
    }
  }
  console["log"](card[card["length"] - 1]);
}
